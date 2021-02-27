// 21년 2월 15일 월요일

const check1 = (answers) => {
 
    let cnt = 0;
    for (let i = 0; i < answers.length; i++) {
       if ((i + 1) % 5 ) {
            if((i + 1) === answers[i]) {
                cnt++
            }
        } else  {
            if (answers[i] === 5) {
                cnt++
            }
        }
    }
    return cnt;
};

const check2 = (answers) => {
    let cnt = 0;
    for (let i = 0; i < answers.length; i++) {
        if ((i + 1) % 2 === 1) {
            if (answers[i] === 2) {
                cnt++;
            }
        } else if (i % 8 === 1){
            if (answers[i] === 1){
                cnt ++;
            }
        } else if (i % 8 === 3){
            if (answers[i] === 3){
                cnt ++;
            }
        } else if (i % 8 === 5){
            if (answers[i] === 4){
                cnt ++;
            }
        } else if (i % 8 === 7){
            if (answers[i] === 5){
                cnt ++;
            }
        } 
    }
    return cnt;
};

// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
const check3 = (answers) => {
    let cnt = 0;
    for (let i = 0; i < answers.length; i++) {
        if (i % 10 >= 8) {
            if (answers[i] === 5) {
                cnt++;
            }
        } else if (i % 10 >= 6) {
            if (answers[i] === 4) {
                cnt++;
            }
        } else if (i % 10 >= 4) {
            if (answers[i] === 2) {
                cnt++;
            }
        } else if (i % 10 >= 2) {
            if (answers[i] === 1) {
                cnt++;
            }
        } else if (i % 10 >= 0){
            if (answers[i] === 3) {
                cnt++;
            }
        }
    }
    return cnt;
};


function solution(answers) {
    var answer = [];
    let result1 = check1(answers);
    let result2 = check2(answers);
    let result3 = check3(answers);
    

    const max= Math.max(result1, result2, result3);
   
    if (max === result1) {
        answer.push(1)
    }
    if (max === result2) {
        answer.push(2)
    }
    if (max === result3) {
        answer.push(3)
    }
   
    return answer;

}

/**
 * 
 * 
 * 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 *               
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
                    0, 1, 2, 3, 4, 5, 6, 7
                    2, 1, 2, 3, 2, 4, 2, 5
                        1 3 4 5 
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 * 
 * answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]
 */


 console.log(solution([1,2,3,4,5]))
 console.log(solution([1,3,2,4,2]))