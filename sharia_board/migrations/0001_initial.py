# Generated by Django 4.1.3 on 2022-11-15 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ShariaBoard1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to='sharia_board/%Y/%m/%d')),
            ],
            options={
                'verbose_name': 'ШС',
                'verbose_name_plural': 'ШС',
            },
        ),
        migrations.CreateModel(
            name='ShariaBoard2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('subtitle', models.CharField(max_length=500)),
                ('image', models.ImageField(upload_to='sharia_board/%Y/%m/%d')),
            ],
            options={
                'verbose_name': 'Шариатский совет',
                'verbose_name_plural': 'Шариатский совет',
            },
        ),
    ]
