from django.shortcuts import render
from django.http import JsonResponse


def index(request):
    return JsonResponse([
      {
        "id": 1,
        "poll": "Poll 1"
      },
      {
        "id": 2,
        "poll": "Poll 2"
      }
    ], safe=False)