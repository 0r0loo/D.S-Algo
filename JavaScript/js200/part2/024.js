// 024 삼항 연산자

/*
    삼항 연산자는 if와 switch 처럼 조건문을 처리하는 연산자이다.
    일반적으로 if 조건문의 축양형으로 사용되며, 세개의 문장으로 구성된다
    조건문 ? 표현문1 : 표현문2
    
    조건문은 반드시 결과가 참 과 거짓으로 반환되어야 한다. 그리고 그결과가 true 이면 표현문1을 실행하고 false이면 표현문 2를 실행
*/

var condition = 5 > 10;
condition ? console.log('left') : console.log('Right');
