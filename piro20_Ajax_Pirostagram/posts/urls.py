from django.contrib import admin
from django.urls import path,include
from .views import *

app_name = 'posts'
urlpatterns = [
    path('',posts_list,name='list'),
    path("create/",create,name='create'),
    path("detail/<int:pk>/",detail,name='detail'),
    path("delete/<int:pk>/",delete,name='delete'),
    path('like_ajax/', like_ajax, name='like_ajax'),
    path('comment/create/',comment_create,name='comment_create'),
    path('comment/delete/<int:pk>/',comment_delete,name='comment_delete'),
]