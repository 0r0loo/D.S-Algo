// 21년 2월 14일 일요일
// 내풀이
function solution(s) {
    var answer = false;
    
    if(s.length === 4) {
         for (let i = 0; i < s.length; i++) {
            if(s[i] < 10) {
                answer = true;
             } else {
                answer = false;
                break;
             }
        }
    }
   
     if(s.length === 6) {
         for (let i = 0; i < s.length; i++) {
            if(s[i] < 10) {
                answer = true;
             } else {
                answer = false;
                break;
             }
        }
    }
    
    
    return answer;
}








// 다른사람 풀이

// 정규표현식을 활용한 풀이
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }
  
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log( alpha_string46("a234") );
  