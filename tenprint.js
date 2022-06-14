const canvasSize = {row:15,col:45};

const cases = ['😡','🙉'];

const drawOut = () =>{

    for (let i = 0;i<canvasSize.row;i++){
        let row =``;
        for(let j =0;j<canvasSize.col;j++){
            row += `${getPrint()}`
        }
        console.log(row)
    }
   

}

const getPrint = ()=>{
    const randNum =Math.random();
    // console.log(randNum)
    if(randNum <0.7){
        return cases[0];
    }else{
        return cases[1];
    }
}
drawOut();