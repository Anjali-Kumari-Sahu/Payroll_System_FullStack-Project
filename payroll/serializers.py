from rest_framework import serializers
from .models import Payroll

class PayrollSerializer(serializers.ModelSerializer):
    net_salary = serializers.ReadOnlyField()

    class Meta:
        model = Payroll
        fields = "__all__"
