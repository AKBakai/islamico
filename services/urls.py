from django.urls import path

from services.views import services

urlpatterns = [
    path('', services, name='services'),
    # path('partners', partners, name='partners'),
]