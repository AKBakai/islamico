from ckeditor.fields import RichTextField
from django.db import models


class ShariaBoard1(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='sharia_board/%Y/%m/%d')

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'ШС'
        verbose_name_plural = 'ШС'


class ShariaBoard2(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=500)
    text = RichTextField()
    image = models.ImageField(upload_to='sharia_board/%Y/%m/%d')

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Шариатский совет'
        verbose_name_plural = 'Шариатский совет'
