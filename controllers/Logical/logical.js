
function calculateVowelsAndConsonants(sampleString){
    let vowels = 0;
    let consonants = 0;
    
    [...sampleString].forEach(element => {
        if(element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u')
           vowels++;
        else
           consonants++;
    });
    return {vowels, consonants};
}
let sampleString = "abcdefghijklmnopqrstuvwxyz";
console.log(calculateVowelsAndConsonants(sampleString));

// function firstUniqChar(str) {
//     let myMap = new Map();
//     for(let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);
//         if(!myMap.has(char)) {
//             myMap.set(char, 0);
//         }
//         myMap.set(char, myMap.get(char) + 1 );
//     }
//     for(let [key, value] of myMap) {
//        if(value === 1) {
//            return key;
//        }
//     }
//     return null;
// }

// let result = firstUniqChar("geeksforgeeksabbc");
// console.log(result);

// function nonRepeatedCharacter(testString) {
//     [...testString].every(element => {
//         let charLength = [...testString].filter(x => x ==element).length;
//         if(charLength === 1){
//             return element;
//         }
//     });
//     return "AA";
// }

// console.log(nonRepeatedCharacter("geeksforgeeksabbc"));

function nonRepeated(str) {
    for(let i = 0; i < str.length; i++) {
       let j = str.charAt(i)
       if (str.indexOf(j) == str.lastIndexOf(j)) {
         return j;
       }
    }
    return null;
 }

 console.log(nonRepeated("geeksforgeeksabbc"));

 function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
 function secondLargest(array){
     let arrList = array.filter(onlyUnique).sort();
     return arrList[arrList.length - 2];
 }
 console.log(secondLargest([12, 35, 1, 10, 1, 34,35]));