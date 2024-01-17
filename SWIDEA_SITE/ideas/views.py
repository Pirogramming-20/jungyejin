from django.shortcuts import render,redirect
from .forms import IdeaForm
from .models import Idea

# Create your views here.

def idea_list(request):
    ideas=Idea.objects.all()
    ctx={'ideas':ideas}
    return render(request,'ideas/idea_list.html',ctx)

def create(request):
    if request.method=='GET':
        form=IdeaForm()
        ctx={'form':form}
        return render(request, 'ideas/idea_create.html', ctx)
    
    form=IdeaForm(request.POST, request.FILES)
    if form.is_valid():
        idea_instance=form.save()
    return redirect('ideas:detail',idea_instance.id)

def detail(request,pk):
    idea=Idea.objects.get(id=pk)
    ctx={'idea':idea}
    return render(request,'ideas/idea_detail.html',ctx)

def delete(request, pk):
  if request.method == 'POST':
    Idea.objects.get(id=pk).delete()
  return redirect('/')

def update(request, pk):
   idea=Idea.objects.get(id=pk)

   if request.method=='GET':
      form=IdeaForm(instance=idea)
      ctx={'form':form, 'pk':pk}
      return render(request, 'ideas/idea_update.html',ctx)
   
   else:    
    form=IdeaForm(request.POST, request.FILES, instance=idea)
    if form.is_valid():
            form.save()
    return redirect('ideas:detail',pk)