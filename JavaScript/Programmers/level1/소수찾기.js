// 21년 2월 14일 일요일
// 내풀이

// 시간 초과뜸
// function solution(n) {
    
//     let decimalCnt = 0;

//     for (let i = 2; i <= n; i++) {
//         let isDecimal = true
//         for (let j = 2; j < i; j++) {
//             if(i % j === 0) {
//                 isDecimal = false;
//                 break;
//             }
//         }
//         if (isDecimal === true) {
//             decimalCnt++;
//         }
//     }
//     return decimalCnt;
// }

// console.log(solution(10))


function solution(n) {
    const nList = []

    for (let i = 2; i <= n; i++) {
        nList.push(i);
    }


    for (let i = 2; i * i < n; i++) {
        for (let j = 0; j < nList.length; j ++) {
            if (nList[j] % i === 0) {
                nList.splice(i, 1);
                j = 0;
            }
        }

    }

    console.log(nList)




    return ;

}

console.log(solution(10))













