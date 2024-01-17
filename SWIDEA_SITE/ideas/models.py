from django.db import models
from devtools.models import Devtool

# Create your models here.

class Idea(models.Model):
    title=models.CharField('제목',max_length=24)
    devtool=models.ForeignKey(Devtool,on_delete=models.CASCADE, verbose_name='개발툴')
    image=models.ImageField('이미지',blank=True, upload_to='ideas/%Y%m%d')
    content=models.CharField('내용',max_length=500)
    interest=models.IntegerField('관심도',default=0)
    mark=models.BooleanField(default=False)

    def __str__(self):
        return self.title