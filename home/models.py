from ckeditor.fields import RichTextField
from django.db import models


class Services(models.Model):
    title = models.CharField(max_length=255)
    text = RichTextField()
    image = models.ImageField(upload_to='home/%Y/%m/%d')

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'


class Products(models.Model):
    title = models.CharField(max_length=255)
    text = RichTextField()
    image = models.ImageField(upload_to='products/%Y/%m/%d')

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'


class Face(models.Model):
    title = models.CharField(max_length=500)
    image = models.ImageField(upload_to='face/%Y/%m/%d')

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Заголовка'
        verbose_name_plural = 'Заголовки'