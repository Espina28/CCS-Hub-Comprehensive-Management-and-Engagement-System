from django.db import models

# makemigrations
# migrate

# Create your models here.
class Member(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    email = models.CharField(max_length=100)  # Using EmailField for email validation
    program = models.CharField(max_length=100)
    year_level = models.IntegerField() 
    is_active = models.BooleanField(default=True) 
    student_id_number = models.CharField(max_length=50)
    committee_name = models.CharField(max_length=100) 
    committee_position = models.CharField(max_length=100)  

    def __str__(self):
        return self.name  # Optional: returns the name when the object is printed
