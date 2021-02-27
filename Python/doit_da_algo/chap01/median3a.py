def med3(a, b, c):
    """a, b, c의 중앙값을 구하여 반환 (다른 방법)"""
    if (b >= a and c <= a) or (b <= a and c >= a):
        return a
    elif (a > b and c < b) or (a < b and c > b):
        return b
    return c

# 효율적이지 않음
