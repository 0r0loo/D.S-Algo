# 6045 : [기초-산술연산] 정수 3개 입력받아 합과 평균 출력하기(설명)(py)

a, b, c = input().split(' ')

num1, num2, num3 = int(a), int(b), int(c)

sum = num1 + num2 + num3
avg = round(sum / 3, 2)
print(sum, avg)
