from django.urls import path
from . import views

urlpatterns = [
    path("events-dashboard", views.eventsDashboard, name="event panel"),
    path("user-request", views.userRequestPanel, name="user request"),
    path("user-panel", views.usersPanel, name="user panel")
]