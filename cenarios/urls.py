from django.urls import path

from .views.homeview import FocusHome

urlpatterns = [
    path('', FocusHome.as_view(), name='home'),
]