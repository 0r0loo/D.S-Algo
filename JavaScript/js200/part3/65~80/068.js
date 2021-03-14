// 문자열 자르기 1 (slice)

/*
    긴 문장에서 원하는 위치의 특정 문자열만 잘라내는 것이 필요한 경우가 있다.
    자바스크립트에서는 여러 내장 함수들을 활용하여 다양한 방법으로 문자열을 자를 수 있다.
    각 함수 마다의 장단점이 있기 떄문에, 각각의 특징을 고려하여 경우에 맞게 활용하는 방법을 알아 두어야 한다.
  
    String 내장 객체의 slice 메소드는 인자로 시작 지점의 인덱스와 종료 지점의 인덱스를 받는다
    두번쨰 인자인 종료 인덱스는 선택 사항이므로 필수 값은 아니다.
    지정한 범위의 인덱스 문자열을 반환하되, 기존 문자열에 영향을 미치지 않는다

    'string'.slice(startIdx, endIdx)
*/

const sentences = 'The sun will shine on us again';
console.log(sentences.slice(13))
console.log(sentences.slice(13, 24))
console.log(sentences.slice(0))
console.log(sentences.slice(0, -23))    // 마이너스는 뒤에서부터
console.log(sentences.slice(50))    // 문자열의 길이를 넘으면 빈문자열 반환
console.log(sentences.slice(7, 2)) // 첫번쨰 인자가 두번쨰 인자보다 크면 작동 x