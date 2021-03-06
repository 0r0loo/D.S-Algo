// 069 문자열 자르기 2 (substring)

/*
    String 내장 객체의 substing 메소드는 인자로 시작 지점의 인덱스와 종료 지점의 인덱스를 받는다.
    두 번쨰 인자인 종료 인덱스는 선택사항이므로 필수값은 아니다
    substring 메소드 실행 결과값은 새로운 문자열을 반환하며 기존 문자열을 변경하지 않는다.

    'string'.substing(startIdx, endIdx)

    substring 메소드는 거의 대부분 slice 메소드와 동일하게 수횅하지만, 몇 가지 부분에서 다른 결과를 반환
*/

// 첫번쨰 인자가 두번쨰 인자보다 크면 인수를 교환해서 수행함
