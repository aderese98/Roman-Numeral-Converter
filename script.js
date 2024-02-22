const convertBtn = document.querySelector(".convert-btn");
const output = document.querySelector(".output");

convertBtn.addEventListener("click", () => {
    const numberInput = document.querySelector(".number");
    let number = Number(numberInput.value);

    if (numberInput.value != "" && number >= 1 && number <= 3999) {
        output.classList.remove("output-bad");
        output.classList.add("output-good");
        output.innerHTML = convertToRoman(number);

    }
    else {
        output.classList.remove("output-good");
        output.classList.add("output-bad");

        if (numberInput.value == "")
            output.innerHTML = `Please enter a valid number.`;

        else if (number != null && number < 1)
            output.innerHTML = `Please enter a number greater than or equal to 1.`;

        else if (number != null && number > 3999)
            output.innerHTML = `Please enter a number less than or equal to 3999.`;
    }
    number = null;
});

function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let roman = '';

    romanNumerals.forEach(({ value, symbol }) => {
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    });

    return roman;
}