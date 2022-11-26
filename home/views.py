from django.shortcuts import render
from home.models import Services, Products, Face


def home(request):
    service = Services.objects.all()
    product = Products.objects.all()
    face = Face.objects.filter().order_by('-id')[:1]
    context = {
        'services': service,
        'products': product,
        'faces': face
    }
    return render(request, 'home.html', context)
