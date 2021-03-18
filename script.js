function calculate_length(text) {
    let new_array = text.split(" ").map((word) => {
        return word + " " + word.length;
    });
    console.log(new_array);
}

calculate_length("Hello world");


function letters_to_numbers(word) {
    let array = [];
    word = word.toLowerCase();
    let letters = Array.from(new Set(word))
    for (let letter of word) {
        array.push(letters.indexOf(letter));
    }
    return array.join('.');
}

let result = letters_to_numbers("hello");
console.log(result);

function stringParse(string) {
    if (typeof(string) === 'string') {
        return string.replace(/((.)\2)(\2+)/g, '$1[$3]');
    } else {
        return "Please enter a valid string";
    }
}

let a = stringParse("hellllooooookat");
console.log(a);


// task4

/* 
"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2
*/

/* task5 */

/* 0 == null; // false
null == undefined // true
1 == {} // false
{} == 1 // false
({}) == 1 // false
({toString: () => '12'}) == 12 */ // true