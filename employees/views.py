from django.http import JsonResponse
from rest_framework import viewsets
from .models import Employee
from .serializers import EmployeeSerializer
def ping(request):
    return JsonResponse({'ok': True, 'app': 'employees'})


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
