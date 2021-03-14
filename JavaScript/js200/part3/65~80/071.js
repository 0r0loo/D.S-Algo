// 071 문자열 길이 구하기(length)
/*
    length 는 String 객체에 미리 정의되어 있는 기본 속성(Property)이다.
    이를 통해 문자열의 길이를 구할 수 있느넫, 호출하는 방법은 다음과 가탇

    문자열.length
*/

const arr =['short', 'long sentence, it is not appropriate'];

arr.forEach(str => {
    if (str.length < 10) console.log(str);
})

