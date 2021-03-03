// 035 예외 처리하기

/*
    자바스크립트 코드를 실행하다 에러가 발생하면 그 즉시 중단된다.
    이를 대비해서 예외처리는 반드시 필요하다. 자바스크립트에서 사용할 수 있는 예외 처리 방법에는 throw 문과 try-catch-finally 문이 있다

    예외 처리 시 에러 종류는 크게 두 가지로 나눈다. 하나는 예상치 못한에러, 다른 하나는 개발자가 의도한 에러가 있다.

    여기서 개발자가 의도한 에러란, 코드에서 잘못될 가능성을 예상하고 발생시키는 에러를 의미한다. 먼저 후자의 경우 throw 문을 사용한다.
    throw 문은 고의로 에러를 발생시켜 예외 상황을 알리는 역할을 한다.
    그리고 throw문이 실행되면 실행되고 있던 블록을 빠져 나간다.


*/

function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값이다.'
    console.log('숫자형으로 확인됭ㅆ더ㅣ')
}
checkNumber(100);
checkNumber('Wrong Type')
console.log('완료')


/*
    throw 문은 예외 상황을 미리 파악하고 에러를 발생시켜 이후 코드가 실행되지 않도록 한다.
    이는 결국 에러를 발생 시킨 것이므로, 프로그램이 중단되는 것을 막을 수 없다. 이 에러 발생에 대한 대응책이 바로
    try-catch-finally 문이다. 그리고 트라이 캐치 파이널리 문을 통해 앞에서 설명한 예상치 못한 에러와 개발자가 의도한 에러 모두 대응 가능하다
    트라이 캐치 파이널리 문은 트라이 블록 안에서 발생된 에러를 잡아내고, catch 블록으로 제어권을 넘긴다. trye 블록에서 발생된 에러 정보는
    catch 문의 변수로 전달되기 떄문에, 개발자는 프로그램 종료 없이 어떤 에러가 발생했는지 확인할 수 있다. finally 블록은 에러 발생 여부와 상관없이
    실행되는 블록이다. 예를들어 이를 활용하면 파일 읽기/쓰기를 할 때 에러가 발생되더라도 항상 파일 close 구문을 실행할 수 있다.
*/

function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값이다.';
    console.log('숫자형 값으로 확인 되었다.')
}


try {
    checkNumber(100);
    checkNumber('adsd');
} catch (e) {
    console.log('에러발생 ' + e)
} finally {
    console.log('완료')
}
