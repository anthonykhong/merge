from django.db import models

from django.urls import reverse
# add this import
from datetime import date


# Create your models here.
class Cat(models.Model):
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    description = models.TextField(max_length=600)
    age = models.IntegerField()

    # new code below
    def __str__(self):
        return self.name
    
    # Add this method
    def get_absolute_url(self):
        return reverse('detail', kwargs={'cat_id': self.id})
    
    def fed_for_today(self):
        return self.feeding_set.filter(date=date.today()).count() >= len(MEALS)

    
MEALS = (
    ('B', 'Breakfast'),
    ('L', 'Lunch'),
    ('D', 'Dinner')
)
    
# Add new Feeding model below Cat model
class Feeding(models.Model):
    date = models.DateField('feeding date')
    meal = models.CharField(
        max_length=1,
        # add the 'choices' field option
        choices=MEALS,
        # set the default value for meal to be 'B'
        default=MEALS[0][0]
    )
    # Create a cat_id FK
    cat = models.ForeignKey(Cat, on_delete=models.CASCADE)

    def __str__(self):
    # Nice method for obtaining the friendly value of a Field.choice
        return f"{self.get_meal_display()} on {self.date}"
    
      # change the default sort
    class Meta:
         ordering = ['-date']




