function countingSheep(n){
    if (n===0){
        console.log('All the sheep over the fence.')
    }
    else {
        console.log(`${n}:Another sheep jumps over the fence`)
        countingSheep(n-1)
    }
}

countingSheep(5)