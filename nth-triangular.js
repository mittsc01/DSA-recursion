function nthTriangular(n){
    if (n===1){
        return 1
    }
    return n+nthTriangular(n-1)
}
console.log(nthTriangular(8))
console.log(nthTriangular(1))