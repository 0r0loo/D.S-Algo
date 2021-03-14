// 093 배열의 순서를 반대로 나열하기 (reverse)

/*
    Array 객체의 reverse 메소드 배열 순서를 반대로 나열한다.
    함수 호출 시 원본 배열을 변형하기 떄문에 주의해야한다.
*/

const str = 'abcdefg'
const arr = str.split('');
arr.reverse();
console.log(arr.join(''))