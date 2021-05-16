from django.db import models

# Create your models here.
class Article(models.Model): #장고의 models 에서 Model 을 생성하겠다
    title = models.CharField(max_length=200)
    content = models.TextField() #제한 없는 긴 글을 위헤서는 textfield
    category = models.TextField()
    time = models.TextField(default='')

    def __str__(self):
        return self.title




