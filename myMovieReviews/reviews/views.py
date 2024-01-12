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
    if request.method=="POST":
        review.objects.create(
            title=request.POST["title"],
            year=request.POST["year"],
            genre=request.POST["genre"],
            star_rating=request.POST["star"],
            running_time=request.POST["time"],
            comment=request.POST["comment"],
            director=request.POST["director"],
            actor=request.POST["actor"],
        )
        return redirect("/")
    return render(request,"reviews_write.html")

# def reviews_update(request,pk):


# def reviews_delete(request,pk):