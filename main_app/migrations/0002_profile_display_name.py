# Generated by Django 3.1 on 2020-08-05 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='display_name',
            field=models.CharField(default='Name', max_length=200),
            preserve_default=False,
        ),
    ]