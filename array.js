
const M = require('./memory') 
const Memory = new M()

//import { memory } from 'console';
///
class Array {
    constructor(){
        this.length = 0;
        this._capacity = 0;
        this.ptr = Memory.allocate(this.length)
        
    }
    push(value) {
        if (this.length >= this._capacity){
            
            this._resize((this.length + 1)*Array.SIZE_RATIO)
            
        }
        Memory.set(this.ptr + this.length, value);
        this.length++
    }
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = Memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of Memory');
        }
        Memory.copy(this.ptr, oldPtr, this.length);
        Memory.free(oldPtr);
        this._capacity = size;
    }
    get(index) {
        if (index < 0 || index>=this.length){
            throw new Error('Index error')
        }
        return Memory.get(this.ptr+index)
    }
    set(index,value){
        if (index < 0 || index>=this.length){
            throw new Error('Index error')
        }
        Memory.set(this.ptr+index,value)
    }
    pop() {
        if (this.length === 0 ){
            throw new Error('Index error')
        }
        const value = this.get(this.ptr+this.length-1)
        this.length--;
        return value
        
    }
    //this method works in the case where you insert at the position this.length
    insert(index,value) {
        if (index < 0 || index>this.length){
            throw new Error('Index error')
        }
        if (this.length >= this._capacity){
            
            this._resize((this.length + 1)*Array.SIZE_RATIO)
            
        }
        Memory.copy(this.ptr+index+1,this.ptr+index,this.length-index)
        this.length ++
        this.set(index,value)
        
    }
    remove(index){
        if (index<0 || index>=this.length){
            throw new Error('Index error')
        }
        const value = this.get(index)
        Memory.copy(this.ptr+index,this.ptr+index+1,this.length-index-1)
        this.length--
        return value
    }
}
function URLify(str){
    let newStr=''
    for (let i=0;i<str.length;i++){
        if (str[i] !== " " ){
            newStr+=str[i]
        }
        else {
            newStr+="%20"
        }
    }
    return newStr
}
function removeLessThan5(arr){
    let newArr=[]
    for (let i=0;i<arr.length;i++){
        if (arr[i]>=5){
            newArr.push(arr[i])
        }
    }
    return newArr
}
function maxSum(arr){
    let temp = []
    let s = 0
    
    //let current
    for (let i=0;i<arr.length;i++){
        
        if (arr[i]>=0 && s>=0 || arr[i]<=0 && s<=0 ){
            s+=arr[i]
        }
        else {
            temp.push(s)
            s=arr[i]
        }
    }
    //take care of last sum
    temp.push(s)
    console.log(temp)

    //handle case where temp.length ==2 
    if (temp.length === 2){
        return temp[0]>=0?temp[0]:temp[1]
        
    }
    
    
    //now should have alternating +-+ or -+- array
    let final = []
    let startIndex = temp.find(x=>x<0) === 0 
        ? 2
        : 1 

        for (let i=startIndex;i<temp.length-1;i+=2){
            if (temp[i]<0 && temp[i]+temp[i-1] > 0 && temp[i]+temp[i+1] > 0){
                final.push(temp[i-1]+temp[i]+temp[i+1])
            }
            else {
                final.push(temp[i-1],temp[i],temp[i+1])
            }
        }


    
    console.log(final)
    //find max of list
    let max;
    for (let i=0;i<final.length;i++){
        if (!max || final[i]>max){
            max = final[i]
        }
    }
    return max


}
function merge(arr1,arr2){
    let i=0; 
    let j=0;
    let merge = [];

    while (i<arr1.length){
        while (arr2[j]<arr1[i]){
            merge.push(arr2[j])
            j+=1
        }
        merge.push(arr1[i])
        i+=1
    }
    return merge
}
//returns array where position i is the product of all array items at position !== i
function products(arr){
    let newArr = []
    let p ;
    for (let i=0;i<arr.length;i++){
            p=1
        for (let j=0;j<arr.length;j++){
            if (i !== j){
                p = p * arr[j]
            }
        }
        newArr.push(p)
    }
    return newArr
}

function removeCharacters(str,characters){
    let newStr = ''
    for (let i=0;i<str.length;i++){
        if (!characters.includes(str[i].toLowerCase())){
            newStr += str[i]
        }
    }
    return newStr
}

function setZero(Array2){

    //first record rows and columns with 0's
    let zeroRows = []
    let zeroColumns = []
    for (let i=0;i<Array2[0].length;i++){
        for (let j=0;j<Array2.length;j++){
            if (Array2[i][j] === 0){
                
                // add only if row/column not already included

                if (!zeroColumns.includes(j)){
                    zeroColumns.push(j)
                }
                if (!zeroRows.includes(i)){
                    zeroRows.push(i)
                }
                
            }
        }
    }
    //console.log(zeroRows)
    //change the recorded rows and columns to zeros
    for (let i=0;i<zeroRows.length;i++){
        for (let j=0;j<Array2[0].length;j++){
            Array2[zeroRows[i]][j] = 0
        }
    }
    for (let i=0;i<zeroColumns.length;i++){
        for (let j=0;j<Array2.length;j++){
            Array2[j][zeroColumns[i]] = 0
        }
    }
    return Array2
}

function stringRotation(str1,str2){
    const start = str1[0]
    let startList =[]
    for (let i=0;i<str2.length;i++){
        if (str2[i] === start){
            startList.push(i)
        }
    }
    for (let startPosition of startList){
        //console.log(startPosition,startList)
        for (let i=0;i<str1.length;i++){
            //console.log(i)
            if (str1[i] !== str2[(startPosition+i)%str2.length]){
                //console.log('hi')
                break
            }
            if (i === str1.length-1){
                return true
            }
        }
    }
    return false
}

function main(){
    

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    /* arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    //arr.pop()
    //arr.insert(3,13)
    //arr.insert(8,13)
    
    console.log(arr.get(4))
    console.log(arr.get(3))
    console.log(arr.remove(3))


    console.log(arr); */

    //5. URLify a string
    console.log(URLify('tauhida parveen'))
    console.log(URLify('www.thinkful.com /tauh ida parv een'))

    //6 Filter Array
    console.log(removeLessThan5([2,4,8,13,7,1,5]))

    //7 max sum
    console.log(maxSum([-4,3,1,-6,61,5,-3,6,4,-3,4]))

    //8 merge arrays
    console.log(merge([1, 3, 6, 8, 11],[2, 3, 5,8, 9, 10]))
    //9 delete vowels
    console.log(removeCharacters('BAttle of the Vowels: Hawaii vs. Grozny','aeiou'))

    //10 Products
    console.log(products([1, 3, 9, 4]))

    //11 2D Array
    console.log(setZero(
        [[1,0,1,1,0],
        [0,1,1,1,0],
        [1,1,1,1,1],
        [1,0,1,1,1],
        [1,1,1,1,1]]
        ))

    //12 String Rotation
    console.log(stringRotation('amazon', 'azonma'))
    console.log(stringRotation('amazon', 'amozan'))
    console.log(stringRotation('amazon', 'azonam'))


}
main()