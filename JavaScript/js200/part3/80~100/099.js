// 099 배열 내 값을 누적시키기 (reduce)

/*
    Array 객체의 메소드 reduce 는 배열 요소를 순환하면서, 정의된 callback 함수에 의해 단일 값으로 누적 시킬 수 있다.

    reduce 메소드의 형태는 인자로 callback 함수와 초기값을 받는다, 첫 번째 callback 함수는 기존과 다른 메소드와 달리
    여러 매개변수를 정의한다.
    아래와 같이 최대 4개까지 매개변수를 받고, 첫 번쨰 누적된 값과ㅣ 현재 요소 값은 필수이다.
    reduce 메소드가 처음에 실행할 떄, 누적 된 값은 두 번쨰 인자(초기 값)을 할당 받는다.
    이후에는 배열 순환이 끝날 때까지 callback 함수에서 반환된 값으로 재 할당 된다.

    배열.reduce((누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열) => {
        return 누적값으로 변환되는 값
    }, 초기값)
;*/

const numArr = [1, 2, 3, 4, 5];
const result = numArr.reduce((acc, el) => {
    return acc + el;
}, 0);
console.log(result)