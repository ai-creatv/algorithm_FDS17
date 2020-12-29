
# 프로그래머스 스킬 체크 1단계

![화면 캡처 2020-12-29 114747](https://user-images.githubusercontent.com/69497936/103255511-e93a4c00-49cc-11eb-8a2e-4eec7187c9d9.jpg)


## #1 최대공약수, 최소공배수

```javascript
function solution(n, m) {
    let answer = [];
    const maxNum = Math.max(n,m);
    const minNum = Math.min(n,m);   

    const gcd = (minNum, maxNum) => {
        return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
    }
    const lcm = (minNum, maxNum) => {
        return minNum * maxNum / gcd(minNum, maxNum);
    }

    answer = [gcd(n,m),lcm(n,m)]
    return answer;
}
```

주어진 두 숫자의 최대공약수와 최소공배수 구하기



## #2 완주하지 못한 선수

```javascript
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for (let i = 0; i < participant.length; i++) {
        if(participant[i] === completion[i]) continue;
        return participant[i];
    }
}
```

participant에서 completion에 없는, 즉 완주하지 못한 선수 구하기
