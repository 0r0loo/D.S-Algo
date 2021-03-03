// 028 객체 이해하기 !
/*
    원시 자료형은 하나의 값을 저장한다. 그러나 일반적으로 접하는 상황은 한 가지 정보만을 필요로 하지 않고 많은 정보를 처리해야 하는 경우가 많은데,
    그렇다고 여러 번 몇십 개의 변수를 선언해서 값을 저장하면 코드가 점점 복잡해진다. 여러 개의 값을 한번에 접근할 수 있도록, 자바스크립트는 객체(Object)를 제공한다.

    객체(Object)는 값들을 그룹으로 묶은 데이터 모음이다. 객체를 만드는 방법은 표현식으로 중괄호 {} 를 사용하면 된다.
    중괄호 안에 여러 값들을 넣을 수 있는데, 키(Key) 와 값(Value)을 한 쌍으로 정의하며 이를 속성(Properties)이라 부른다.
    {
        key : value
    }

    하나의 키(Key) 에는 하나의 값이 매핑된다. 객체 안에 중복된 키 이름은 허용하지 않으며, 두 줄 이상의 속성을 정의할 떄는 콤마, 를 사용하여 구분한다
    이 경우 가독성을 위해 각 속성 앞에는 들여쓰기를 하고 끝나는 지점에는 콤마를 두는 것을 권장한다.
*/

var family = {
    'address' : 'Seoul',
    members : {},
    addFamily : function(age, name, role) {
        this.members[role] = {
            age : age,
            name : name
        };
    },
    getHeadcount : function() {
        return Object.keys(this.members).length;
    }
}

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'Lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

console.log(family.getHeadcount());

/*
    객체를 설명하는데 있어 JSON을 설명하지 않을 수 없다. JSON(JavaScript Object Notation)은 자바스크립트의 객체와 매우 유사한 구조를 지닌
    데이터 교환 형식(format)이다.
    JSON 형태는 객체와 비슷하게 키:값 쌍의 모음들로 이루어져있다. 그러나 반드시 속성 키 이름은 큰따옴표 ""로 표시된 문자열이어야하고, 
    값은 오직 문자열, 숫자, 배열, true, false, null 또는 JSON 객체만 가능하다

    {
        "key" : "value"
    }
    
    이처럼 객체와 JSON의 형태는 비슷해 보여도 동일하지 않다 또한 자바스크립에서는 JSON을 분석하고 직렬화 하는 메소드들을 제공하는데
    JSON 객체ㅏㄱ 있다.

    
*/
