// 110 특정 자리수에서 반올림 하기 (round)

/*
    Math 객체의 round 메소드는 매개변수의 소수점 다음의 값을 반환한다.
*/

const val = 573.926;

console.log(Math.round(val));
console.log(Math.round(val * 10) / 10);
console.log(Math.round(val * 100) / 100);
console.log(Math.round(val / 10) * 10);
console.log(Math.round(val / 100) * 100);