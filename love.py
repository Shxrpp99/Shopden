print("Welcome to the Love Calculator!")

name1 = input("Enter Your Name:- ")
name2 = input("Enter Your Loved One Name:- ")
 
name1_lowercase = name1.lower()
name2_lowercase = name2.lower()

name = name1_lowercase + name2_lowercase

t = name.count("t")
r = name.count("r")
u = name.count("u")
e = name.count("e")
true = t + r + u + e

l = name.count("l")
o = name.count("o")
v = name.count("v")
e = name2.count("e")
love = l + o + v + e

total = int(str(true)+str(love))

if total < 10 or total > 90:
    print(f"Your score is {total}, you go together like coke and mentos.")
elif total >= 40 and total <= 50:
    print(f"Your score is {total}, you are alright together.")
else:
    print(f"Your score is {total}.")