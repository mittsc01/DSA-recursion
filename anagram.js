//import factorial from './factorial'

function anagrams(string){
    let perms = []
    for (let i=0;i<string.length;i++){
        let newString = string.slice(0,i)+string.slice(i+1)
        console.log(newString)
        let newPerms = anagrams(newString)
        
        newPerms.forEach(item => string[i]+item)
        newPerms.filter(item => perms.find(perm=>perm!==item))
        perms = [...perms,...newPerms]
    }
    return perms
}

console.log(anagrams('east'))
