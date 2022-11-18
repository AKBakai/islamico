
from ckeditor.fields import RichTextField
from django.db import models


class Services(models.Model):
    title = models.CharField(max_length=255)
    text = RichTextField()
    image = models.ImageField(upload_to='services/%Y/%m/%d')

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'
