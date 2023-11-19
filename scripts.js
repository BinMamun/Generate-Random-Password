const randomPassword = document.querySelector(".js-password");
const generateButton = document.querySelector(".js-generate-password-btn");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%&*/.";

const allChars = upperCase + lowerCase + numbers + symbols;


generateButton.addEventListener("click", () => {
  passordBox();
})

function passordBox() {
  let password = "";
  let length = 8;

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }

  randomPassword.value = password;
}

document.querySelector(".js-copy").addEventListener("click", () => {
  copyPassword();
})

let timeOutId;
function copyPassword() {

  randomPassword.select();
  navigator.clipboard.writeText(randomPassword.value);

  showCopiedText(); //displays copied text

  clearTimeout(timeOutId);
  timeOutId = setTimeout(removeCopiedText, 2000); //removes copied text after 2s
}

function showCopiedText() {
  const copiedText = document.querySelector(".js-copied-text");
  copiedText.style.display = "block";
}

function removeCopiedText() {
  const copiedText = document.querySelector(".js-copied-text");
  copiedText.style.display = "none";
}
