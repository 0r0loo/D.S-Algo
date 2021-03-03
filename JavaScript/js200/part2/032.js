// 032 ES6의 향상된 객체 문법 알아보기 - 비구조화 할당

/*
    비구조화 할당(Destructuring Assignment) 이란, 배열이나 객체의 값을 새로운 변수에 쉽게 할당한다.
    ES6 이전에는 변수 하나에 값 하나를 일일히 할당해야 했으나 ES6부터는 비구조화 할당을 통해 손쉽게 값을 할당 할 수 있다.

    객체 비구조화할당을 활용해 중괄호{} 안에 속성 이름을 넣어 객체의 여러 속성을 한 번에 가져올 수 있다.
*/

var obj = {
    a:1,
    b:2,
    c:30,
    d:44,
    e:5
};

var {a, c} = obj;

console.log(`a ${a}`)
console.log(`c : ${c}`);

var {a:newA=10, f:newF=5} = obj;
console.log(`newA ${newA}`)
console.log(`newF : ${newF}`)