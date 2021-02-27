# 1부터 n까지 정수의 합 구하기 1 (while 문)

print('1부터 n까지 정수의 합을 구한다.')
n = int(input('n값을 입력하세요.: '))

sum = 0
i = 1

while i < n:
    sum += i
    i += 1
