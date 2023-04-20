//Given a word, return true if that word contains only unique characters. Return false otherwise.


// Write your code below

// const hasUniqueChars = str => {
//   for (let i = 0; i < str.length; i++) {
//     let character = str[i]
//     for (let j = 0; j < str.length; j++) {
//       let otherChar = str[j]
//       if (character === otherChar) {
//         console.log('I am not true')
//         return false
//       } else {
//         return true
//       }
//     }
//   }
// }
// console.log(hasUniqueChars('chris'))


//answer using Set
function hasUniqueChars(str) {
    const mySet = new Set (str)
    console.log(mySet)
    if(str.length === mySet.size) {
        return true
    }
    else {
        return false
    }
}
console.log(hasUniqueChars("chris"))