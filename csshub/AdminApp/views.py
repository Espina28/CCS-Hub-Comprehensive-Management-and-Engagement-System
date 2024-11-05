from django.shortcuts import render

# Create your views here.
def eventsDashboard(request):
    return render(request, "eventsPanel.html")

def userRequestPanel(request):
    return render(request, "requestPanel.html")

def usersPanel(request):
    return render(request, "userPanel.html")
