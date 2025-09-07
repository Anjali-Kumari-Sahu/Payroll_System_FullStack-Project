from rest_framework import viewsets
from .models import Payroll
from .serializers import PayrollSerializer
from django.http import JsonResponse
class PayrollViewSet(viewsets.ModelViewSet):
    queryset = Payroll.objects.all()
    serializer_class = PayrollSerializer

def ping(request):
    return JsonResponse({"message": "pong!"})
