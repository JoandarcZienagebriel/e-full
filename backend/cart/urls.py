from django.urls import path
from .views import ListCart, ProductView, CartTotalView, get_csrf, ProductDetailView, InfoFormView
from . import views
urlpatterns=[
    path('products/', ProductView.as_view()),
    path('data/', ListCart.as_view()),
    path('total/', CartTotalView.as_view()),
    path('csrf/', get_csrf),
    path('products/<str:pk>/', ProductDetailView.as_view()),
    path('info/', InfoFormView.as_view())

]