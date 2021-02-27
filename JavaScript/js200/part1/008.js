// 008 자료형 이해하기
/*
    프로그래밍 언어는 값을 특정 유형으로 분류한다. 특정 유형을 다른 말로 자료형 또는 타입이라고 한다.

*/

var x = 5;  // Number
var y = 'five' // String
var isTrue = true; // Boolean
var empty = null; // nul
var nothing; // undefined
var sym = Symbol('me') // SYmbol

var item = {
    price : 5000,
    count : 10
}; // Object

var fruits = ['apple', 'orange', 'kiwi']; // Array
var addFruit = function () {
    fruits.push(fruit);
} // Function

addFruit('watermelon');
console.log(fruits);


/*
    자바스크립트는 크게 두 가지 타입으로 구분한다. 첫 번째 기본타입이 되는 원시타입(Primitve Data Type) 과 두번째 참조타입(Reference Data Type)
    원시 타입 : Number, Boolean, String, Symbol, null, undefined
    참조 타입 : Object

    원시 타입은 값이 변수에 할당될 때 메모리 상에 고정된 크기로 저장된다. 즉, 해당 변수에 직접 값을 보관한다.
    이렇듯 고정된 공간에 보관된 원시 타입의 값은 변경 불가능한 값, 불변값인 특징을 가진다.

    숫자형 : 숫자를 표현하는 자료형이다.
    문자형 : 작은 따옴표 또는 큰 따옴표를 양끝에 두고 그 안에 한 글자 이상의 문자 기호 또는 숫자가 있는 자료형을 문자형이라고 함.
    불린형 : 참 또는 거짓 두 가지 값을 가진다.
    심볼형 : 심볼 자료형은 ES6 부터 추가된 원시 자료형이다. 다른 원시형과 다르게 유일하게 변경 불가능한 자료형으로, 참조형의 키(key)로도 사용 가능하다.
    null과 undefined : null은 빈 값을 의미하고, undefined는 존재하지 않는 값을 의미함

    참조 타입은 원시 타입과 달리 변수에 고정된 크기를 저장하지 않고 값의 메모리 주소를 참조한다. 
    참조 타입인 객체의 특징을 살펴보면 그 이유를 알수 있는데, 객체는 속성들(properties)의 집합을 의미하며, 집합 내부에는 순서도 크기도 고정되어 있지 않다.
    이러한 고정되지 않은 값을 변수에 할당하려면 직접 해당 값을 저장할 수 없으나 참조하는 것은 가능하다
    따라서 참조 타입은 값의 메모리 주소를 변수에 할당하여 값을 참조한다.
    
    메모리 주소를 통해 값을 참조한다는 의미는, '주소'라는 의미 그대로 이해하면 된다.

    객체 : 객체는 {} 안에 키 : 값 형태로 이루어진 속성들의 모음이다. 여기서 키는 반드시 문자(String) 자료형이어야 하고,
    이 속성 키를 통해 해당 속성에 매핑된 값에 접근할 수 있다.

    Global Object 객체는 모든 객체의 부모가 되는 객체이다. 이를 부모삼아 함수(function), 배열(Array), 
    원시 자료형을 객체로 감싼 새로운 형태의 객체(String, Number, Boolean)와 특수연산에 특화된 내장 객체(Math, JSON, RegEx) 그리고
    Iterable 과 Collection 특성의 객체(Map, Set, WeakMap, WeakSet) 등의 표준 내장 객체가 있다.
    
 
 

 */






