# Generated by Django 5.1.2 on 2024-11-05 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('creator', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(blank=True, null=True, upload_to='event_images/')),
                ('date', models.DateTimeField()),
                ('location', models.CharField(max_length=100)),
                ('fee', models.DecimalField(decimal_places=2, max_digits=10)),
                ('discount', models.DecimalField(decimal_places=2, default=0, max_digits=5)),
                ('status', models.CharField(max_length=20)),
            ],
        ),
        migrations.DeleteModel(
            name='Member',
        ),
    ]
