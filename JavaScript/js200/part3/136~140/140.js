// 140 Async 이해하기

/*
    ECSrit2017 ES8 에 소개된 async 함수를 살펴봄
    async 함수는 함수 안의 ㅁwait 구문과 함께 비동기 작업을 제어한다.
    awati 키워드는 반드시 async 함수 안에서만 유효하다.

    async 함수의 동작 방식은 다음과 같다
    처음 async 함수가 호출되어 await 키워드가 있는 비동기 작업(promise 객체)이 실행되면,
    해당 비동기 함수는 이벤트 루프를 통해 비동기로 작업을 처리한다.
    그동안 async 함수는 이러한 비동기 작업이 완료될 떄까지 일시 중지 상태로
    비동기 작업(Promise 객체)의 해결(resolve)을 기다린다. 이 작업이 완료되면 async 함수가 다시 실행되고 함수 결과를 반환한다.
    
    async 함수를 선언하는 방법에는 async 함수 선언문과 표현식이 있다
    이 선언문과 표현식은 '함수 이해하기' 에서 살펴본 선언문 / 표현식과 유사하다
    다만 async 함수는 function 선언 앞에 async 키워드가 붙는다.

    앞에서 학습한 Promise 조합하기 예제 코드를 Aysnc 함수로 바꿔 작성
*/

function doJob(name, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.stamina > 50) {
                person.stamina -= 30;
                resolve({
                    result : `${name} success`
                });
            } else {
                reject(new Error(`${name} failed`));
            }
        }, 1000)
    });
}
const harin = {stamina : 100};

const execute = async function () {
    try {
        let v = await doJob('work', harin);
        console.log(v.result);
        v = await doJob('study', harin);
        console.log(v.result);
        v = await doJob('work', harin);
        console.log(v.result);
        v = await doJob('study', harin);
        console.log(v.result);
    } catch (e) {
        console.log(e)
    }
}

execute()