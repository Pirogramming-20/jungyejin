from django.shortcuts import render, redirect
from .models import *
from .forms import *
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse

# Create your views here.
def posts_list(request):
    posts=Post.objects.all()
    ctx={'posts':posts}
    return render(request,'posts_list.html',ctx)

def create(request):
    if request.method=='GET':
        form=PostForm()
        ctx={'form':form}
        return render(request, 'posts_create.html', ctx)
    
    form=PostForm(request.POST, request.FILES)
    if form.is_valid():
        post_instance=form.save()
    return redirect('posts:list')

def detail(request, pk):
    post = get_object_or_404(Post, id=pk)
    comments = Comment.objects.filter(post=post)
    ctx = {'comments': comments, 'post': post}
    return render(request, 'posts_detail.html', ctx)

def delete(request, pk):
  if request.method == 'POST':
    Post.objects.get(id=pk).delete()
  return redirect('posts:list')

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def like_ajax(request):
    req=json.loads(request.body)
    post_id=req['id']

    post=Post.objects.get(id=post_id)

    post.like = not post.like  

    post.save()

    return JsonResponse({'id':post_id,'like': post.like})


@csrf_exempt
def comment_create(request):
    if request.method == 'POST':
        try:
            req = json.loads(request.body)
            post_id = req.get('id')
            post = get_object_or_404(Post, id=post_id)

            comment = Comment.objects.create(
                post=post,
                content=req.get("comment", ""),
            )
            comment_id = comment.id
            post.comments.add(comment)
            return JsonResponse({'id': post_id, 'comment': req.get("comment", ""), 'comment_id': comment_id})
        except Post.DoesNotExist:
            return JsonResponse({'error': 'Post not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        # GET 요청 응답 처리
        return JsonResponse({'error': 'GET request is not supported'}, status=405)


@csrf_exempt
def comment_delete(request, pk):
  try:
        req = json.loads(request.body)
        comment_id = req['comment_id']

        comment = Comment.objects.get(id=comment_id)
        comment.delete()

        return JsonResponse({'post_id': pk, 'comment_id': comment_id})
  except Comment.DoesNotExist:
        return JsonResponse({'error': 'Comment not found'}, status=404)
  except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

