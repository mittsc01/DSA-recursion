const towerA = [4,3,2,1]
const towerB = []
const towerC = []


function Tower(from,temp,to,size){
    if (size === 0){
        console.log('stop')
        return 
    }
    console.log("starting tower",towerA,towerB,towerC,size)
    Tower(from,to,temp,size-1)
    const value = from.pop()
    
    to.push(value)
    console.log(towerA,towerB,towerC,size)
    Tower(temp,from,to,size-1)
}
Tower(towerA,towerB,towerC,towerA.length)
console.log(towerA,towerB,towerC)