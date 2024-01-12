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

def reviews_update(request,pk):
    review_=review.objects.get(id=pk)
    if request.method=="POST":
        review_.title=request.POST["title"]
        review_.year=request.POST["year"]
        review_.genre=request.POST["genre"]
        review_.star_rating=request.POST["star"]
        review_.running_time=request.POST["time"]
        review_.comment=request.POST["comment"]
        review_.director=request.POST["director"]
        review_.actor=request.POST["actor"]
        review_.save()
        return redirect(f"/{pk}")
    
    context={
        "review":review_
    }
    return render(request, 'reviews_update.html',context)

# def reviews_delete(request,pk):