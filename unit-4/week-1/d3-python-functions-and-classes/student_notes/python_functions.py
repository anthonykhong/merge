# def fahr_to_kelvin(temp):
#     return((temp-32)*(5/9))+273.15

# function someFunction(){

# }

# def first_function():
#     pass

# result = first_function()
# print(result)

# def fn(*args):
#   print( type(args) )
#   for arg in args:
#     print(arg)

# fn(1, 2, 'SEI')

# def dev_skills(dev_name, **kwargs):
#   # kwargs will be a dictionary!
#   dev = {'name': dev_name, 'skills': kwargs}
#   return dev

# print(dev_skills('Jackie', HTML=5, CSS=3, JavaScript=4, Python=2))

def get_category(points):
  if points > 900:
    return 'Gold Member'
  elif points > 800:
    return 'Silver Member'
  else:
    return 'Bronze Member'

print( get_category(850) )