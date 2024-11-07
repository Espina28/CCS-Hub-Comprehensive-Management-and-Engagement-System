from django.shortcuts import render
from .models import Event

# Create your views here.

def eventsDashboard(request):
    all_event = Event.objects.all()
    return render(request, "eventsPanel.html", {"events": all_event})

def userRequestPanel(request):
    return render(request, "requestPanel.html")

def usersPanel(request):
    return render(request, "userPanel.html")
