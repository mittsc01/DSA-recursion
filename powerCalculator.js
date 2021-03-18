function powerCalculator(base,exponent){
    if (exponent<0){
        return 'exponent should be nonnegative'
    }
    else if (base===0 || exponent===0){
        return 'undefined'
    }
    else if (base===1 || exponent===0){
        return 1
    }
    
    else if (exponent===1){
        return base
    }
    return base*powerCalculator(base,exponent-1)
    
}
console.log(powerCalculator(5,3))
console.log(powerCalculator(1,7))
console.log(powerCalculator(0,0))
console.log(powerCalculator(2,1))
