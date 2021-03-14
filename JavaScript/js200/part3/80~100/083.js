// 083 배열 길이 구하기(length)

/*
    Array 내장 객체는 배열 길이를 확인할 수 있는 length 속성을 갖고 있다
*/

const ship = {
    max :4,
    passengers: [],
    onBoard: function(name) {
        if(this.passengers.length === 4){
            console.log(`this ship is full. ${name} can not board this ship.`);
        } else {
            this.passengers.push(name);
            console.log(`${name} boarded`)
        }
    }
}

ship.onBoard('chloe')
ship.onBoard('jay')
ship.onBoard('david')
ship.onBoard('asher')
ship.onBoard('daniel')

console.log(ship.passengers)