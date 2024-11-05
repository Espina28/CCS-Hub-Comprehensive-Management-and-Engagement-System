from django.shortcuts import render,HttpResponse


# Create your views here.
def registration(request):
    return render(request, "user/registration.html")

def main(request):
    return render(request, "user/Main.html")