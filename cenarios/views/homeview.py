from django.shortcuts import render
from django.views import View

class FocusHome(View):

    def get(self, request):
    	return render(request, 'cenarios/index.html', {})