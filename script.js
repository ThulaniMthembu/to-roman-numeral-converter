document.getElementById("convert-btn").addEventListener("click", convertToRoman);

function convertToRoman() {
    const numInput = document.getElementById("number").value;
    const output = document.getElementById("output");
    const num = parseInt(numInput);

    if (numInput === "") {
        output.textContent = "Please enter a valid number";
    } else if (isNaN(num) || num <= 0) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (num >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        const romanNumeral = intToRoman(num);
        output.textContent = romanNumeral;
    }
}

function intToRoman(num) {
    const roman = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let result = "";

    for (const [letter, value] of roman) {
        while (num >= value) {
            result += letter;
            num -= value;
        }
    }

    return result;
}
