// 050 프로토타입 기반 상속 이해하기
/*
    자바스크립트에서 생성자 함수로부터 만들어진 객체는 그 생성자 함수의 프로토타입(Prototype)객체를 상속한다.
    모든 인스턴스는 해당 생성자 함수의 프로토타입 객체의 속성과 메소드들을 사용할 수 있다.
    
    자바스크립트에서 모든 함수는 prototype 속성으로 프로토타입 객체를 가진다.
    그리고 객체지향 프로그래밍 예제에서 본 것과 같이 모든 객체는 __proto__ 속성을 가지는데
    이 __proto__ 속성은 해당 객체를 생성한 생성자 함수의 prototype 객체를 가리킨다
    그래서 생성자 함수를 통해서 타입을 정의할 수 있다.
*/

function Storage () {
    this.dataStore = {};
}

Storage.prototype.put = function (key, data) {
    this.dataStore[key] = data;
}

Storage.prototype.getData = function (key) {
    return this.dataStore[key];
}

const productStroage = new Storage();
productStroage.put('id001', {name : '키보드', price : 2000});
console.log(productStroage.getData('id001'));

function RemovableStorage () {
    Storage.call(this);
}

RemovableStorage.prototype = Object.create(Storage.prototype);
RemovableStorage.prototype.removeAll = function () {
    this.dataStore = {};
}
