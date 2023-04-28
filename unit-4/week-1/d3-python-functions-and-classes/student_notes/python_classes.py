# nums = [1, 2, 3]

# print(dir(nums))

# class Dog():
#   def __init__(self, name, age=0):
#     self.name = name
#     self.age = age

#   def bark(self):
#     print(f'{self.name} says woof!')
    
#   def __str__(self):
#     return f'Dog named {self.name} is {self.age} years old'
  
# spot = Dog('Spot', 8)

# print(spot) # -> Dog named Spot is 8 years old

# class Vehicule:
#     def __init__(self, make, model):
#         self.make = make
#         self.model = model
#         self.running = False

#     def start(self):
#         self.running = True
#         print("running...")

#     def stop(self):
#         self.running = False
#         print("stopped...")

#     def __str__(self):
#         return (f"Vehicule is a {self.make} model {self.model}")
    
# car = Vehicule("Audi", "R8")

class Dog():
  # class attribute
  next_id = 1

  # updated __init__
  def __init__(self, name, age=0):
    self.name = name
    self.age = age
    self.id = Dog.next_id
    Dog.next_id += 1

  def bark(self):
    print(f'{self.name} says woof!')

  # updated __str__
  def __str__(self):
    return f'Dog ({self.id}) named {self.name} is {self.age} years old'
  
#   new code below
  @classmethod
  def get_total_dogs(cls):
    # cls represents the Dog class
    return cls.next_id - 1

spot = Dog('Spot', 8)
pup = Dog('Lassie')

# class methods are called on the class, not an instance
print(Dog.get_total_dogs())  # -> 2

# Pass in superclass as argument
class ShowDog(Dog):
  # Add additional parameters AFTER those in the superclass
  def __init__(self, name, age=0, total_earnings=0):
    # Always call the superclass's __init__ first
    Dog.__init__(self, name, age)
    # Now add any new attributes
    self.total_earnings = total_earnings
  
  # Add additional methods
  def add_prize_money(self, amount):
    self.total_earnings += amount
    print(f'{self.name}\'s new total earnings are ${self.total_earnings}')

winky = ShowDog('Winky', 3, 1000)
print(winky) # Yay, inherited the overriden __str__
winky.bark() # Yay, inherited the bark method
print(winky.total_earnings) # -> 1000
winky.add_prize_money(500) # New method that 'Dogs' don't have
print(winky.total_earnings) # -> 1500
