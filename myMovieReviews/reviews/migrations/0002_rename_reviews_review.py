# Generated by Django 5.0.1 on 2024-01-12 09:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='reviews',
            new_name='review',
        ),
    ]
