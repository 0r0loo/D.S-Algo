// 102 객체에서 값만 추출하기 (values)

/*
    Object 객체의 메소드 values 를 활용하면, 객체의 속성값(value ) 만 추출할 수 있다. 추출된 속성값들은 배열에 담아 반환된다.
*/

const obj = {
    movie : 'Sunny',
    music : 'Like Sugar',
    style : 'Retro',
    price : Infinity
}

const arr = Object.values(obj);
console.log(arr);