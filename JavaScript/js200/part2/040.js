// 040 함수 호이스팅 이해하기

/*
    자바스크립트에서는 함수르 선언하기 전에 호출이 가능하다.
    이러한 현상을 호이스팅이라고 한다.
    호이스팅을 직역하면 끌어올리기 인데 함수가 실제 호출하기 이전으로 끌어 올라간 것처럼 동작하기 떄문이다.
*/

hello();

function hello() {
    console.log('안녕하세요');
}


/*
    hello2();
    var hello2 = function () {
        console.log('언녕하세요');
    }

    TypeError 에러 발생 hello2라는 이름으로 호이스팅 일어나고 undefined가 할당됨
    그래서 언디파인드를 호출할 수 없기 떄문에 타입에러가 발생한 것이다
    만약 호이스팅이 이루어지지 않았다면 레퍼런스 에러로 헬로가 선언되지 않았다는 에러가 나와야함
*/

/*
    NOTE
    호이스팅은 자바스크립트의 코드를 해석하고 실행하는 방식 때문에 나타난ㄷ.
    간단하게 생각하면 자바스크립트는 코드를 해석하는 단계와 실행하는 단계로 나뉘고, 해석하는 단계에서 선언 문장을 초기화하면서
    스코프를 형성하고 실행하는 단계에서 값을 할당하거나 계산을 하는 행위를 한다고 볼수 있다.

    두 번째 코드를 예를들면 해석 단계에서 hello2가 변수를 선언하는 문장이 먼저 초기화를 하여 스코프에 hello2라는 이름에 undefine 라는 값을 할당했다가
    실행 단계에서 1라인의 hello2()를 호출하는것이다.
*/