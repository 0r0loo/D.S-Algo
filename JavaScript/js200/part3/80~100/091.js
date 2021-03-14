// 091 배열 순환하기(forEach)

/*
    Array 내장 객체의 forEach 메소드는 배열 내부 요소를 순환하며, 각 요소에 대해 callbck 함수를 생성한다.

    배열.forEach(callback함수) 
*/

const arr = [
    {id :0, name: 'h', age :6},
    {id:1, name : 'i', age : 3},
    {id : 2, name : 'a', age : 5},
    {id : 3, name: 'woo', age : 2}
]

arr.forEach(el => {
    console.log(el.name)
})
