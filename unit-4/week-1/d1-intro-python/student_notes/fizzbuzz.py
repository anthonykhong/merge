# Functions are defined using the def keyword
def fizz_buzz(max_num):
  # Code blocks are defined using 
  # indentation after a :
  '''
  Loops through 1 up to max_num and prints message depending on evaluation of the integer
  '''
  for num in range(1, max_num):
    if num % 3 == 0 and num % 5 == 0:
      # Using string format method
      print('{} is FizzBuzz'.format(num))
    elif num % 3 == 0:
      # Using newer f-string approach
      print(f'{num} is Fizz')
    elif num % 5 == 0:
      print(f'{num} is Buzz')
    else:
      print(num)

fizz_buzz(31)


