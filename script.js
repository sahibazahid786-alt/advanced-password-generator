// Select elements
const btnElement = document.querySelector(".btn");
const inputElement = document.getElementById("input");
const alertElement = document.querySelector(".alert-container");
const lengthElement = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const copyIcon = document.getElementById("copy-icon");
const themeBtn = document.getElementById("theme-toggle");
const strengthBar = document.getElementById("strength-bar");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");

// Character sets
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

// Show slider value
lengthValue.textContent = lengthElement.value;
lengthElement.addEventListener("input", () => {
  lengthValue.textContent = lengthElement.value;
});

// Generate password function
function generatePassword(length) {
  let allCharacters = lowercase + uppercase;
  if (includeNumbers.checked) allCharacters += numbers;
  if (includeSymbols.checked) allCharacters += symbols;
  if (allCharacters.length === 0) return "";

  let password = "";
  let selectedTypes = [];
  selectedTypes.push(lowercase[Math.floor(Math.random()*lowercase.length)]);
  selectedTypes.push(uppercase[Math.floor(Math.random()*uppercase.length)]);
  if (includeNumbers.checked) selectedTypes.push(numbers[Math.floor(Math.random()*numbers.length)]);
  if (includeSymbols.checked) selectedTypes.push(symbols[Math.floor(Math.random()*symbols.length)]);

  for (let i = selectedTypes.length; i < length; i++) {
    const randomArray = new Uint32Array(1);
    crypto.getRandomValues(randomArray);
    const index = randomArray[0] % allCharacters.length;
    password += allCharacters[index];
  }

  password += selectedTypes.join('');
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  return password;
}

// Show alert
function showAlert() {
  alertElement.classList.add("active");
  setTimeout(() => {
    alertElement.classList.remove("active");
  }, 1000);
}

// Update strength
function updateStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[\!\@\#\$\%\^\&\*\(\)_\+\[\]\{\}\|;:,.<>?]/.test(password)) strength++;

  strengthBar.style.width = (strength * 25) + "%";
  strengthBar.style.backgroundColor = strength <= 2 ? "red" : strength === 3 ? "orange" : "green";
}

// Generate button click
btnElement.addEventListener("click", () => {
  const length = parseInt(lengthElement.value);
  if (length < 8) {
    alert("Password length must be at least 8 characters.");
    return;
  }
  const password = generatePassword(length);
  inputElement.value = password;
  updateStrength(password);
});

// Copy icon click
copyIcon.addEventListener("click", () => {
  if (inputElement.value !== "") {
    navigator.clipboard.writeText(inputElement.value);
    showAlert();
  }
});

// Dark/Light mode toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});