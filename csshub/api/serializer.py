from rest_framework import serializers
from AdminApp.models import Event


class EventPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        # fields = ["id", "name", "creator", "description", "image", "date", "location", "fee", "discount", "status"]
        fields = '__all__'  