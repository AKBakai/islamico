from django.shortcuts import render
from sharia_board.models import ShariaBoard1, ShariaBoard2


def sharia_board(request):
    sharia = ShariaBoard1.objects.all()
    info = ShariaBoard2.objects.all()
    context = {
        'sharia_board': sharia,
        'sharia_info': info
    }
    return render(request, 'sharia_board.html', context)
