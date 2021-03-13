// 058 모듈을 여러 이름으로 내보내고 가져오기

/*
    ES6 모듈 시스템에서는 이름 있는 변수나 혹은 클래스를 export 키워드를 사용하여 내보낼 수 있다.
    기본값 default 과 다르게 이름이 있기 떄문에 중복되지 않는 한 여러 이름있는 것들을 내보낼 수있다.
*/

export const version = 'v1.0';

export var personA = {
    name : 'a'
}

export function add(a, b) {
    return a + b ;
}

export class Person {
    constructor (name) {
        this.name = name;
    }
}

// app.js
import {add, Person, version} from './hello.js';

const result = add(1, 2);
const harin = new Person('harin');

console.log(result);
console.log(harin.name);
console.log(version);