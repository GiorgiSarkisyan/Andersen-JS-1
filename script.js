const numInput = document.getElementById("numInput");
const numOutput = document.getElementById("numOutput");

numOutput.textContent = "Number to binary is";

const numberToBinary = (n) => {
  return Number(n).toString(2);
};

numInput.addEventListener("input", () => {
  numInput.value <= 0
    ? (numOutput.textContent = "Number to binary is")
    : (numOutput.innerHTML = numberToBinary(numInput.value));
});

// this is the most unique thing i could come up with Sorry :(
console.log(
  `I have your ${typeof (true + 1)} saved on my ba${String(
    2 / undefined
  ).toLowerCase()}a phone, I am saying the ${String(true).replace("e", "th")}`
);
