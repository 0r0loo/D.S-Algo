
// 067 문자열 양 끝의 공백 없애기 (trim)

/*
    String 내장 객체의 trim 메소드는 문자열 양 끝의 공백, 탭, 줄바꿈을 제거한다.
    단 함수가 적용된 문자열 원본 값에는 영향을 끼치지 않기 때문에 활용하려면 별도로 값을 저장해야 한다.
*/

const sentences = ['       ABC abc', 'ABC abc      ', '       firtst second third forth sentence           '];

const filterSentence = (sentences) => {
    const filterd = [];
    sentences.forEach(s => {
        filterd.push(s.trim());
    });
    return filterd;
}

console.log(filterSentence(sentences))