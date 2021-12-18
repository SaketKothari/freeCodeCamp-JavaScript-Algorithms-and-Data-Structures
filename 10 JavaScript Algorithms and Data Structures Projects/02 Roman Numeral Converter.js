function convertToRoman(num) {
    let roman = "";
    let repeat;
    repeat = num / 1000;
    roman = addRoman(roman, repeat, "M");
    num = num % 1000;

    repeat = num/900;
    roman = addRoman(roman, repeat, "CM");
    num = num % 900;

    repeat = num/500;
    roman = addRoman(roman, repeat, "D");
    num = num % 500;

    repeat = num/400;
    roman = addRoman(roman, repeat, "CD");
    num = num % 400;

    repeat = num/100;
    roman = addRoman(roman, repeat, "C");
    num = num % 100;

    repeat = num/90;
    roman = addRoman(roman, repeat, "XC");
    num = num % 90;

    repeat = num/50;
    roman = addRoman(roman, repeat, "L");
    num = num % 50;

    repeat = num/40;
    roman = addRoman(roman, repeat, "XL");
    num = num % 40;

    repeat = num/10;
    roman = addRoman(roman, repeat, "X");
    num = num % 10;

    repeat = num/9;
    roman = addRoman(roman, repeat, "IX");
    num = num % 9;

    repeat = num/5;
    roman = addRoman(roman, repeat, "V");
    num = num % 5;

    repeat = num/4;
    roman = addRoman(roman, repeat, "IV");
    num = num % 4;

    repeat = num/1;
    roman = addRoman(roman, repeat, "I");

    return roman;
}

function addRoman(roman, repeat, toAdd) {
    for(let i = 1; i <= repeat; i++) {
        roman = roman + toAdd;
    }
    return roman;
}
convertToRoman(9);

