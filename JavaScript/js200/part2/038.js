// 038 함수 나머지 매개변수 이해하기

/*
    ES6에서 새로 추가된 나머지는 매개변수는 매개변수를 정의할 때 정해지지 않은 매개변수들은 정의할 수 있게 한다.
    arguments 객체와 유사하나 arguments 객체는 함수에 전달되는 모든 전달 인자를 포함하는 반면에,
    나머지 매개변수는 정해지지 않은 나머지를 의미한다.

    나머지 매개변수는arguments 객체와 다르게 매개변수를 작성하는 곳에서 작성하고, 다른 매개변수와의 차이점을 두기 위해 ... 연산자와 함꼐 작성한다

    function(parameter, ...restParameter) {
        // arguments 객체는 나머지 매개변수와 다르게 함수 몸통에서만 사용한다.
    }

    arguemnts 객체와 나머지 매개변수와의 가장 큰 차이점은 arguments 객체는 배열이 아니지만 나머지 매개변ㄱ수는 배열이라는 점이다.
*/

function sum (...args) {
    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1))
    return total;
}

console.log(sum(1, 2, 3));

function sum2 (a, b, ...others) {
    var total = a + b;
    for (var i = 0; i < others.length; i ++) {
        total += others[i];

    }
    return total;
}

console.log(sum2(1, 2));
console.log(sum2 (1, 2, 3, 4));