// 045 객체 속성 기술자 이해하기

let user = {
    name : 'jeado'
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);

let user2 = {};
Object.defineProperties(user2, 'name', {
    value: 'jeado',
    enumerable : true,
    configurable:true,
    writable : false
})
console.log(user2.name)
user2.name = 'bbo';
console.log(user2.name)