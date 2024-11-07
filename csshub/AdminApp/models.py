from django.db import models

# Create your models here.

class Event(models.Model):
    name = models.CharField(max_length=100)
    creator = models.CharField(max_length=100)  
    description = models.TextField()
    image = models.ImageField(upload_to='event_images/', blank=True, null=True)  # Save the image file
    date = models.DateField()
    location = models.CharField(max_length=100)
    fee = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    status = models.CharField(max_length=20)

    def __str__(self):
        return self.name