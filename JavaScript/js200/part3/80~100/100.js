// 100 중첩된 배열을 단일하게 만들기 (reduce)

/*
    reduce 메소드의 다른 활용 예제로, 중첩된 배열을 단일 값으로 누적하는 방법을 알아보자
*/

const arr = [1, [2, 3], [4, 5, 6], ['배열', '나누기'], 'JavaScript'];

const result = arr.reduce((acc, el) => {
    return acc.concat(el);
}, []);

console.log(result);

