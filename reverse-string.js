function reverseString(word){
    if (word.length===0 || word.length===1){
        return word
    }
    return word[word.length-1]+reverseString(word.slice(1,word.length-1))+word[0]
}

console.log(reverseString('poodles'))