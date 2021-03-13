// 053 클래스 정적 메소드와 속성 정의하기

/*
    일반적인 메소드는 해당 클래스의 인스턴스를 통해 호출한다.
    반면 정적 메소드는 클래스를 통해 직접 호출하는 메소드를 말한다.
    클래스에서 정적 메소드는 static 키워드를 사용하여 정의한다.
*/

class Product {
    static build (name, price){
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    static getTaxPrice(product) {
        return (product.price * 0.1) + product.price;
    }

    constructor (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product {
    depose() {
        this.deposed = true;
    }
}

const gum = Product.build('껌', 1000);
console.log(gum)

const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice)