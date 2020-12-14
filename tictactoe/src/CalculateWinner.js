function CalculateWinner(square){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    let WinValue = [];
    for (let i = 0; i<lines.length; i++){
        const [a,b,c] = lines[i];
        // 승부가 난 경우
        if(square[a] && square[a] === square[b] && square[b] === square[c]){
            // console.log(a,b,c);
            WinValue[0] = square[a];
            WinValue[1] = a;
            WinValue[2] = b;
            WinValue[3] = c;
            return WinValue;
        }
    }
    return null;
}

export default CalculateWinner;