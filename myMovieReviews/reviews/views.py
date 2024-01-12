from django.shortcuts import render, HttpResponse,redirect
from .models import *

def reviews_list(request):
    reviews=review.objects.all()
    context={
        "reviews":reviews
    }
    return render(request, 'reviews_list.html',context)

def reviews_detail(request,pk):
    reviews=review.objects.get(id=pk)
    context={
        "review":reviews
    }
    return render(request, 'reviews_detail.html',context)

def reviews_write(request):
    # if request.method=="POST":
    #     review.objects.create(
    #         # title:
    #     )
    #     return redirect("")
    return render(request,"reviews_write.html")

# def reviews_update(request,pk):


# def reviews_delete(request,pk):