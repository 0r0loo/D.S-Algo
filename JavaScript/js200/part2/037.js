// 037 함수 기본 매개변수 처리하기

/*
    ES6에 새롭게 추가된 기본 매개변수는 매개변수를 정의할 때 기본으로 할당될 인자값과 함께 작성하는 매개변수를 말한다.
    값을 할당하는 연산자인 = 를 이용하여 정의하게 된다.
*/

function drawChart(width = 200, height = 400) {
    console.log(`${width} ${height}`);
}

drawChart(100);
drawChart();


function drawChart2 (width = 200, height = width / 2) {
    console.log(`${width} ${height}`)
}

drawChart2(300);
drawChart2();

