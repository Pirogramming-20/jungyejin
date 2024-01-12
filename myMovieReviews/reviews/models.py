from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

class review(models.Model):
    title=models.CharField(max_length=50)
    year=models.IntegerField(
        validators=[MaxValueValidator(2024),MinValueValidator(1950)]
    )
    genre=models.CharField(max_length=32)
    star_rating=models.FloatField()
    running_time=models.IntegerField()
    comment=models.TextField()
    director=models.CharField(max_length=32)
    actor=models.CharField(max_length=32)