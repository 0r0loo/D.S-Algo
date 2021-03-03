// 030 ES6 의 향상된 객체 문법 알아보기 - 단축 속성명

/*
    ES6에 새로 추가된 JavaScript 기능인 단축 속성명을 활용하여, 객체의 속성을 좀 더 간단하게 정의할 수 있다.
    앞에 살펴봤던 것처럼 객체 속성을 리터럴로 정의하기 위해서는 키 : 값으로 작성해야 했다.
    단축 속성명은 변수가 미리 준비되어 있는 경우 활용 가능하며, 변수명으로 속성의 키와 값을 한번에 정의할 수 있다.
    이는 객체 리터럴 선언 시 코드를 더 짧고 가독성 있게 만들어 준다.

    {변수명}
*/

var address = 'Seoul';
var members = {};
var addFamily = function(age, name, role) {
    this.members[role] = {age, name};
};

var getHeadcount = function () {
    return Object.keys(this.members).length;
}

var family = {address, members, addFamily, getHeadcount};

