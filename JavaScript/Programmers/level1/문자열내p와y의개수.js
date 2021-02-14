// 21년 2월 14일 일요일
// 내 풀이
function solution(s){
    var answer = true;
    const str= s.toUpperCase();
    let pCnt = 0;
    let yCnt = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'P') {
            pCnt++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'Y') {
            yCnt++;
        }
    }

    return pCnt === yCnt;
}
// 다른 사람 풀이
// 찢어서 그 길이를 쟤다니... 배열로 어케 생각했냐
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )
