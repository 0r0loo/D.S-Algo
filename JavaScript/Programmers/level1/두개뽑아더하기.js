// 21년 2월 13일 토요일 
function solution(numbers) {
    var answer = [];
    const sumList = [];
    for(let i = 0; i < numbers.length; i ++){
        for(let j = i + 1; j < numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            if(sumList.indexOf(sum) === -1){
                sumList.push(sum);
            }
        }

    }
    answer = sumList.sort((f, s) => f - s);
    return answer;
}

/**
 * 
numbers	       result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]
 * 
 * 
 */


 // 다른 사람 풀이
 // 이중 포문 안에서 if 문으로 골라내는게 아니라 셋으로 했네... 셋사용법 찾아봐야할듯
 // set 사용하면 중복된거 알아서 제거되네; if문 쓸필요가 없었음......
 // 그다음 전개 연산자로 다 전개시켜서 배열에 넣기 잘하는구만 
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}