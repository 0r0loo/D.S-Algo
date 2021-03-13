// 051 클래스 정으히가ㅣ

/*
    ES6 부터 class 키워드를 통해 클래스를 정의할 수 있다.
    클래스는 별도 타입의 객체를 생성하는 설계 도면이라 볼 수 있다.
    예를 들어 붕어빵 틀은 붕어빵을 만들기 위해 틀이라고 볼수 있는데, 여기서 붕어빵은 객체이고 붕어빵 틀이 클래스라고 볼수 있다.

    클래스를 통해 객체가 가져야 할 상태와 행위들을 속성과 메소드로 정의할 수 있다.
    예를 들어 카트 객체들은 상품을 추가할 수 있어야 하고, 상품 아이디어에 따라 상품을 바환해야 한다.
    이러한 카트 객체들의 특성을 카트 클래스로 정의하고 해당 클래스에서 만들어진 객체들은 모두 이러한 행위를 할 수 있게 된다.

    카트 클래스에서 만들어진 객체들을 카트 인스턴스라고 한다. 즉 특정 클래스를 통해 만들어진 객체를 해당 클래스의 인스턴스라고 하낟.
*/

class Cart {
    constructor () {
        this.store = {};
    }


    addProduct(product) {
        this.store[product.id] = product;
      }
    
    getProduct (id) {
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct({ id: 1, name: '노트북'})
console.log(cart1.store);

const p = cart1.getProduct(1);
console.log(p)
