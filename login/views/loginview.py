from django.shortcuts import render
from django.views import View

class FocusLogin(View):

    def get(self, request):
    	return render(request, 'login/login.html', {})