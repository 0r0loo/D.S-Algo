// 114 UTC 기준 날짜 출력하기 (Date.UTC)

const date = new Date();

const dateUTC = Date.UTC(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
);

console.log(new Date(dateUTC));

/*
    UTC란 Universal Time, Coordinated 의 줄임말로, 협정 세계표준시라는 뜻을 가진다.
    이는 그리니치평균시에 기반한 1972년 1월 1일부터 시행된 국제 표준시이다.
    여기서 그리니치는 영국 그리니치 천문대를 가리키며 그리니치를 중심으로 한 지구의 자전 주기 계산법과
    밀접한 관련이 있다. 이를 기준으로 각 나라별 시간이 다르다.
*/