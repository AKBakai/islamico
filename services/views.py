from django.shortcuts import render
from services.models import Services


def services(request):
    service = Services.objects.all()
    context = {
        'services': service,
    }
    return render(request, 'home.html', context)


# def partners(request):
#     return render(request, 'buka.html')
