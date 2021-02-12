// 21년 2월 12일 금요일


// 내 풀이
function solution(n) {
    var answer = 0;
    let three = n.toString(3)
    let reverseThree = three.split('').reverse().join('');
    answer = Number(parseInt(reverseThree, 3).toString(10));
    return answer;
}
console.log(solution(45))

/**
 * 1. 입력 받은 숫자를 받아서 3진법 문자열로 바꿈
 * 2. 받은 문자열을 한단어씩 쪼개서 배열에 넣은후 뒤집어준 후 문자열로 합침
 * 3. 문자열을 3진수로 바꾼후 그걸 다시 10진법으로 바꿈 -> 그걸 숫자타입으로 바꿔줌
 * 4. 리턴
 * 
 * 
 *  parseInt 쓰임을 잘못 이해하고 쓴듯... 파라미터로 3넣어주면 reverseTree가 3진법이구나 이해해서 10진수 로 결과 리턴해주는데
 *  그거를 다시 10진수로 문자열로바꿈ㅋㅋㅋ 쓸대없는 코드였구만
 * 
 * parseInt 의 리턴값은 number임
 */

 // 다른 사람 풀이
 
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
// 전개 연산자를 사용해서 한번에 한문자씩 배열에 넣어줬네 