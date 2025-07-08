let passwordLength = 12;

const passwordField = document.getElementById("password");
const lengthDisplay = document.getElementById("length");
const strengthBar = document.getElementById("strength-bar");

function generatePassword() {
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  let characters = "";
  if (useUpper) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useLower) characters += "abcdefghijklmnopqrstuvwxyz";
  if (useNumbers) characters += "0123456789";
  if (useSymbols) characters += "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordField.value = password;
  updateStrengthBar();
}

function updateStrengthBar() {
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  let strength = 0;
  if (useUpper) strength++;
  if (useLower) strength++;
  if (useNumbers) strength++;
  if (useSymbols) strength++;

  if (strength === 1) {
    strengthBar.style.width = "33%";
    strengthBar.style.backgroundColor = "#d066ff"; // roxo suave
  } else if (strength === 2 || strength === 3) {
    strengthBar.style.width = "66%";
    strengthBar.style.backgroundColor = "#6e5bf7"; // azul roxo
  } else if (strength === 4) {
    strengthBar.style.width = "100%";
    strengthBar.style.backgroundColor = "#a97eff"; // azul neon
  } else {
    strengthBar.style.width = "0%";
    strengthBar.style.backgroundColor = "transparent";
  }
}

function changeLength(delta) {
  passwordLength = Math.max(4, passwordLength + delta);
  lengthDisplay.textContent = passwordLength;
  generatePassword();
}

document.addEventListener("DOMContentLoaded", () => {
  generatePassword();

  // Escuta as mudanças nas opções e atualiza a força
  ["uppercase", "lowercase", "numbers", "symbols"].forEach(id => {
    document.getElementById(id).addEventListener("change", () => {
      generatePassword(); // atualiza a senha também
    });
  });
});