from django.urls import path

from .views.loginview import FocusLogin

urlpatterns = [
    path('', FocusLogin.as_view(), name='login'),
]