from django.urls import path,include
from .views import *

urlpatterns = [
    path('', reviews_list),
    path('<int:pk>',reviews_detail),
    path('write',reviews_write),
    path('<int:pk>/update',reviews_update),
    # path('<int:pk>/delete',reviews_delete),
    ]