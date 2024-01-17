from django.shortcuts import render,redirect
from .forms import DevtoolForm
from .models import Devtool
from ideas.models import Idea

# Create your views here.

def tool_list(request):
    devtools=Devtool.objects.all()
    ctx={'devtools':devtools}
    return render(request,'devtools/devtool_list.html',ctx)

def create(request):
    if request.method=='GET':
        form=DevtoolForm()
        ctx={'form':form}
        return render(request, 'devtools/devtool_create.html', ctx)
    
    form=DevtoolForm(request.POST, request.FILES)
    if form.is_valid():
        Devtool_instance=form.save()
    return redirect('devtools:detail',Devtool_instance.id)

def detail(request,pk):
    devtool=Devtool.objects.get(id=pk)
    ideas=Idea.objects.all()
    ideas_filter=Idea.objects.filter(devtool__name=devtool.name)
    ctx={'devtool':devtool,'ideas':ideas_filter}
    return render(request,'devtools/devtool_detail.html',ctx)

def delete(request,pk):
    if request.method == 'POST':
        Devtool.objects.get(id=pk).delete()
    return redirect('devtools:list')

def update(request,pk):
     devtool=Devtool.objects.get(id=pk)

     if request.method=='GET':
        form=DevtoolForm(instance=devtool)
        ctx={'form':form, 'pk':pk}
        return render(request, 'devtools/devtool_update.html',ctx)
     else:    
        form=DevtoolForm(request.POST, request.FILES, instance=devtool)
        if form.is_valid():
            form.save()
        return redirect('devtools:detail',pk)