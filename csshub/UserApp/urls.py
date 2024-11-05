from django.urls import path
from . import views

urlpatterns = [
    path("auth/", views.registration, name="auth"),
    path("main/", views.main, name="main")
]