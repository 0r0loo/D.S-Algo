// 클로저 이해하기

function createCounterClosure () {
    let count = 0;
    return {
        increase : function () {
            count++;
        },
        getCount : function () {
            return count;
        }
    };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log('counter 1의 값 : ' + counter1.getCount());
counter2.increase();
console.log('counter 2의 값 : ' + counter2.getCount());

/*
    위 코드에서 counter1 과 counter2의 메소드들이 다른 count 에 접근하는 것은
    다른 렉시컬 환경의 환경 레코드에서 count 에 접근하는 것이다. 이러한 현상이 가능한 이우는 바로 클로저 떄문이다.

    클로저란 함수가 정의될 떄의 렉시컬 환경을 기억하는 함수를 말한다.
    
*/