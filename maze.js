function solveMaze(maze,row=0,column=0, path=''){
    if (row >=maze.length || row<0 || column < 0 || column >= maze[row].length){
        return 
    }
    if (maze[row][column]==='*'){
        return
    }
    if (maze[row][column]==='e'){
        console.log('found exit!',path)
        return
    }
    maze[row][column]='*'

    solveMaze(maze,row,column+1,path+'R')
    solveMaze(maze,row,column-1,path+'L')
    solveMaze(maze,row+1,column, path+'D')
    solveMaze(maze,row-1,column, path+'U')

    maze[row][column]=' '
}


function options(maze,position){
    const x = position%maze[0].length
    const y = Math.floor(position/maze[0].length)

    const max_X = maze[0].length-1
    const max_Y = maze.length-1

    let moves = []
    if (x>0){
        moves.push(position-1)
    }
    if (x<max_X){
        moves.push(position+1)
    }
    if (y>0){
        moves.push(position-maze[0].length)
    }
    if (y<max_Y){
        moves.push(position+maze[0].length)
    }
    //console.log(moves)

    return moves.filter(item=>{
        
        const x = item%maze[0].length
        const y = Math.floor(item/maze[0].length)
        
        return maze[y][x]!=='*'
    })
    
}
function findPath(maze,position,path){
    if (position===maze.length*maze[0].length-1){
        return path
    }
    const directions = options(maze,position)
    if (directions.length === 0){
        return 'NOT A PATH'
    }
    let newPath;
    let newMaze
    let newMove;
    
    for (let i=0;i<directions.length;i++){
        //console.log(directions[i]-position,maze[0].length)
        if (directions[i]-position === 1){
            newMove = 'R'
        }
        else if (directions[i]-position === -1){
            newMove = 'L'
        }
        
        else if (directions[i]-position === maze[0].length){
            newMove = "D"
        }
        else {
            newMove= "U"
        }
        newMaze = maze
        newMaze[Math.floor(position/maze[0].length)][position%maze[0].length]='*'
        //console.log(directions,newMaze)
        newPath = findPath(newMaze,directions[i],path+newMove)
        
        if (newPath !== 'NOT A PATH'){
            return newPath
        }
    }
}


let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
let tempMaze=mySmallMaze
//tempMaze[0][0] = '*'
//console.log(tempMaze)
//console.log(options(tempMaze,1))
console.log(solveMaze(mySmallMaze))
console.log(solveMaze(bigMaze))