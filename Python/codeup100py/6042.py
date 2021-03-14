# 6042 : [기초-값변환] 실수 1개 입력받아 소숫점이하 자리 변환하기(설명)(py)
"""
    예시
print(round(f, 2))


참고
round(수, 자릿수) 를 사용하면 원하는 자리까지의 정확도로 반올림 된 실수 값을 만들어 준다. 
round(f, 2) 는 f 에 저장되어있는 수를 소수점 아래 3 번째 자리에서 반올림해서 값을 만든다.

컴퓨터 프로그래밍에서 실수 변환이나 실수를 사용하는 계산은
정확하게 변환되거나 계산되는 것이 아니라, 거의 모두 근사값으로 계산되는 것이라고 할 수 있다. 

실수가 컴퓨터로 저장되기 위해서는 디지털방식으로 2진 정수화되어 저장되어야 하는데,
그 과정에서 아주 작은 부분이 저장되지 않고 사라지는 잘림(truncation) 오차가 자주 발생하기 때문이다.

 

이 round로 처리된 값을 print로 출력하는 경우 소숫점 둘째자리 이상 불필요한 0이 있는 경우 출력되지 않는다.

예)

round(x,2) 결과가 5.67인 경우 5.67 이 출력됨.

round(x,2) 결과가 5.60인 경우 5.6 만 출력됨.

round(x,2) 결과가 5.00인 경우 5.0 만 출력됨. 
"""

a = input()
print(round(float(a), 2))
