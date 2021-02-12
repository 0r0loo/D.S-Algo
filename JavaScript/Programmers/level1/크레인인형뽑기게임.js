// 21년 2월 12일 금요일

// 내풀이
function solution(board, moves) {
    var answer = 0;

    let tong = [];
    
    for(let i = 0; i < moves.length; i++){
        let col = moves[i] - 1;

        for(let j = 0; j < board.length; j++){
            if (board[j][col] === 0) {

            } else {
                tong.push(board[j][col]);
                console.log(`j : ${j}, col : ${col} 배열의 값 :`,board[j][col])
                board[j][col] = 0;
                break;
            }

        }
    }
    for(let i = 0; i < tong.length; i++){
        if(tong[i] === tong[i + 1]){
            tong.splice(i, 2);
            i = -1;
            answer += 2;
        }
       
    }

    return answer;
}

const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4]

console.log(solution(board, moves))