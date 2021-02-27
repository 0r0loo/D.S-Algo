// 반복문 배우기 - for in

/*
    for - in 반복문은 앞에서 살펴본 for 반복문과 비슷하게 for 키워드를 사용한다.
    단, 순회 조건과 내부 요소에 접근하는 방법에 차이가 있는데, for - in 반복문은 in 키워드를 사용한다.
    키워드를 사이에 두고 오른쪽에는 반복할 대상 변수를 왼쪽에는 속성명을 작성한다.

    for (속성명 in 반복할 대상) {

    }
    
    반복문을 통해 내부 요소를 하나씩 순회할 때마다, 각 요소의 키(key) 정보가 for in에서 정의한 속성명으로 선언과 동시에 할당된다.
*/

var store = {
    snack : 1000,
    flower : 5000,
    bevarage : 2000
}

for (const item in store) {
    if (!store.hasOwnProperty(item)) {
        continue;
    }
    console.log(item + '는 가격이 ' +store[item] + ' 입니다.')
}

/*
    for-in 반복문으로 내부 요소 정보가 전달되어 코드가 실행되는 부분이다. 매 반복마다 hasOwnProperty를 이용하여
    store 객체에 item 키 정보가 있는지 확인한다. 없으면 continue를 통해 아래 코드는 실행하지 않고
    다음 순서로 넘어간다. 

    for-in 반복문을 사용할 떄는 hasOwnProperty 를 통해 객체 안에 속성이 있는지 한 번 더 확인하는 것을 권장한다.

    정상적으로 접근한 요소에 대해 출력한다. item에 순회하며 접근한 각 요소의 속성명(키 정보)이 순서대로 sanck, flower, bevarage 가 할당된다.
    속성명을 통해 속성값을 가져올 수 있다.

    자바스크립트는 객체 자료형 자체에 기본적으로 내장된 속성들이 있다.
    hasOwnProperty 속성도 이에 속하는 내장 속성이다. 고의로 hasOwnProperty 속성을 삭제 하지 않는 한,
    내장 속성은 별도로 정의하지 않고도 언제든지 사용할 수 있다.

    for-in은 순회 가능한 객체의 요소들을 열거한다. 단 객체 속성중에서 hasOwnProperty와 같은 내장속성은 열거하지 않고
    사용자가 직접 정의한 속성값들에 대해서만 열거한다. 따라서 예제에서는 store 객체에 직접 정의한 세 개의 속성에 대해서만 반복한 것을 알 수 있다.
*/



