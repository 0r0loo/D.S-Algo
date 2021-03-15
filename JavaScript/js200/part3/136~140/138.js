// 138 Promise 이해하기

/*
    ES6 에서 비동기 처리하기 위해 Promise 객체를 소개했다.
    Promise는 객체로써 언젠간 완료될 일(계산)을 나타낸다. 완료되면 하나의 값을 결과로 반환하는데 실패하여 정상적인 값 대신 실패의 이유를 반환할 수도 있다
    Promise 객체는 다음과 같은 세 가지의 상태를 가진다
    - 대기중 (Pending) : 아직 결과가 없는 상태이다. 약속을 했지만 아직 약속에 대한 결과가 나오지 않은 상태
    - 이행됨 (Fulfilled) : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태이다. 이때 결과로 하나의 값이 전달된다
    - 거부됨 (Rejected) : 비동기 처리가 실패한 상태이다. 약속이 거부되고 그 결과로 거절된 이유를 전달한다.

    Promise 객체는 다음 두가지 메소드를 가진다
    - then(onFulfilled, onReject) : 약속이 완료도ㅒㅆ을 떄 호출될 함수들을 정의한다.
      이때 첫 번재 인자로 전달되는 함수는 약속이 성공적으로 이행 뙜을때 호출되고,
      두번째 인자로 전달된 함수는 거부도ㅒㅆ을 떄 호출된다.
      두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개 변수를 통해 전달된다.
    - catch(onReject) : 약속이 거부됐을 때 호출될 함수(onReject)를 등록한다.

    다음의 그림에서 객체는 비동기 코드를 가지며 대기 중인 상태로 만들어지고 이후 비동기 코드에서 resolve나 reject를 호출하면 Promise 객체에
    등록한 어떠한 함수들이 호출되는지를 보여준다.
*/

function promiseForHomework (mustDo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('doing homework');
            if (mustDo) {
                resolve({
                    result : 'homwork-result'
                });
            } else {
                reject(new Error('Too lazy!'));
            }
        }, 3000);
    });
}

const promiseA = promiseForHomework(true);
console.log('promisA created');

const promiseB = promiseForHomework();
console.log('promiseB created');

promiseA.then(v => console.log(v));
promiseB.then(v => console.log(v)).catch(e => console.error(e))