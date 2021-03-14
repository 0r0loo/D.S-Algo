// 103 객체를 배열로 반환하기 (entries)

/*
    Object 객체의 메소드 entries 는 객체를 배열로 변경한다. 이 때 객체 내부 요소도 {키 : 값} 을 [키, 값] 배열로 변경한다.
*/

const obj = {
    movie : 'Sunny',
    music : 'Like Sugar',
    style : 'Retro',
    price : Infinity
}

const modifiedObj = Object.entries(obj);
console.log(modifiedObj);
