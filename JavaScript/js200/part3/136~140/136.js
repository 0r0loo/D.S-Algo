// 136 일정 시간 후에 코드 실행하기 (setTimeout)

/*
    자바스크립트에서 setTimeout은 글로벌 객체에 내장된 메소드이다.
    브라우저에서는 Window 전역 객체의 메소드로 정의되고, 서버 사이드 Node.js 에서는 GLOBAL이라 불리는 전역 객체 메소드로
    정의되어 있다.
    따라서 별도의 객체를 생성하거나 선언하지 않아도, setTimeout 함수 그대로 호출하여 실행할 수 이싿.

    setTimeout은 두개의 인자를 받는다.
    첫번째 인자에는 일정 시간 후 실행될 함수를 정의한다.
    그리고 두 번쨰 인자에는 지연 시간을 지정한다.
    지연 시간을 지정할 때는 ms 단위로 설정한다
    이렇듯 setTimeout은 지연 시간이 지난 후 함수 코드를 실행한다.
*/

const timer = {
    run : function() {
        if (this.t) {
            console.log('이미 실행된 타이머가 있다.');
        }
        
        this.t = setTimeout(function () {
            console.log('1초 뒤에 실행된다.')
        }, 1000);
    },
    cancer : function () {
        if (this.t) {
            clearTimeout(this.t);
            this.t = undefined;
        }
    }
}

timer.run();
timer.cancer();
timer.run();