from django.db import models
from django.utils import timezone

class Post(models.Model):
    title=models.CharField(max_length=255)
    content=models.TextField()
    like=models.BooleanField(default=False)
    date=models.DateTimeField(default=timezone.now)

class Comment(models.Model):
    post=models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    content=models.TextField()
    

# Create your models here.
