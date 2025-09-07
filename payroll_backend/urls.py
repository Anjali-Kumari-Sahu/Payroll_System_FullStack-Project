
# path("api/health/", include("health.urls")),

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from employees.views import EmployeeViewSet
from payroll.views import PayrollViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
router = routers.DefaultRouter()
router.register(r'employees', EmployeeViewSet)
router.register(r'payrolls', PayrollViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("admin/", admin.site.urls),
    path("api/employees/", include("employees.urls")),
    path("api/payroll/", include("payroll.urls")),
    path("api/authentication/", include("authentication.urls")),
]







