// 21년 02월 13일 토요일
function solution(participant, completion) {
    var answer = '';
    
    const partResult = participant.reduce((accu, curr) => { 
        accu[curr] = (accu[curr] || 0) + 1; 
        return accu;
      }, {});
    
    const compResult = completion.reduce((accu, curr) => { 
        accu[curr] = (accu[curr] || 0) + 1; 
        return accu;
      }, {});

    for(let key in partResult){
        if(partResult[key] !== compResult[key]){
            answer = key
        }
    }


return answer;




    // 시간초과뜸... ㅠㅠ
    // for(let i = 0; i < participant.length; i++){
    //     for(let j = 0; j < completion.length; j++){
    //         if(participant[i] === completion[j]){
    //             participant[i] = undefined;
    //             completion[j] = undefined;
    //         } 
    //     }
    // }
    // answer = participant.filter(item => !(item === undefined));
    // return answer[0];
}



const c = ['mislav', 'stanko', 'mislav', 'ana'];
const d = ['stanko', 'ana', 'mislav'];
console.log(solution(c, d))



// 다른 사람 풀이
function solution(participant, completion) {
    /*
    for(let i in participant) {
        if(completion.includes(participant[i]) == false) return participant[i];
        completion.splice(completion.indexOf(participant[i]), 1);
    }
    */

    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}