// 096 배열의 특정 조건을 기준으로 필터링 하기 (filter)

/*
    Array 객체의 filter 메소드는 인자로 대입된 callback 함수를 통해 배열 내부를 순환하면서,
    요소 각각이 특정 조건을 만족하는지 확인한다.
    확인하는 방식은 callback 함수 내부에 정의된 문장들을 통해 테스트하게 되는데, callback 함수의 반환값은 무조건 true 또는 false 이어야한다.
    이 중에서 true 결과값을 만족하는 요소들을 다시 새로운 배열에 담아 반환한다.


*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredTwo = arr.filter(a => {
    console.log(`현재 위치의 값은 ${a} 입니다.`)
    return a % 2 === 0;
});
console.log(filteredTwo);

