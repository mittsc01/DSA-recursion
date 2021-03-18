function binary(n){
    if (n===1){
        return '1'
    }
    else if (n===0){
        return 0
    }
    else if (n%2===1){
        return binary((n-1)/2)+'1'
    }
    else return binary(n/2)+'0'
}

console.log(binary(3))
console.log(binary(5))
console.log(binary(11))
console.log(binary(12))
console.log(binary(32))

