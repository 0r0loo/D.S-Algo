# + 와 -를 번갈아 출력한다.
print('+와 -를 번갈아 출력한다.')
n = int(input('몇 개를 출력할까요? : '))

for i in range(n):
    if i % 2:
        print('-', end='')
    else:
        print('+', end='')

print()

"""
    for문을 실행할때마다 if문을 실행하기때문에 좋지 않은코드
    또 range안에 숫자가 바뀌게되면
    - + 순서가 바껴서 안의 코드 순서도 바꿔야한다.
    즉 유지보수에 안좋다.
"""
