function stringSplitter(string,delimiter){
    const index = string.indexOf(delimiter)
    if (index===-1){
        return [string]
    }
    return [string.slice(0,index),...stringSplitter(string.slice(index+1),delimiter)]
}
console.log(stringSplitter('24/8/1301/dave','/'))