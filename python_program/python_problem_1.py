
num=0

while True:
    try:
        next_num=int(input("부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능) :"))
        if 0 < next_num and next_num < 4:
            break
        else:
            print("1,2,3 중 하나를 입력하세요")
    except ValueError:
        print("정수를 입력하세요")

for i in range(next_num):
    num=num+1
    print("playerA : ",num)

while True:
    try:
        next_num=int(input("부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능) :"))
        if 0 < next_num and next_num < 4:
            break
        else:
            print("1,2,3 중 하나를 입력하세요")
    except ValueError:
        print("정수를 입력하세요")

for i in range(next_num):
    num=num+1
    print("playerB : ",num)