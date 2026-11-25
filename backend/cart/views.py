from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import CartSerializer, ProductSerializer, TotalSerializer, InfoSerializer
from .models import Cart, Product, InfoForm
from decimal import Decimal
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import JsonResponse
from rest_framework.generics import ListAPIView

class ProductView(generics.ListCreateAPIView):
    serializer_class= ProductSerializer
    queryset=Product.objects.all()
    permission_classes=(permissions.AllowAny,)

class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes=(permissions.AllowAny,)


class ListCart(generics.ListCreateAPIView):
    serializer_class = CartSerializer
    queryset = Cart.objects.all()
    permission_classes=(permissions.AllowAny,)

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Cart.objects.filter(user=self.request.user)
        guest_id = self.request.query_params.get('guest_id')
        if guest_id:
            return Cart.objects.filter(guest_id=guest_id)
        return Cart.objects.none()

    def create(self, request, *args, **kwargs):
        products = request.data.get('products', [])
        guest_id = request.data.get('guest')
        created_items = []
        for item in products:
            serializer = self.get_serializer(data=item)
            serializer.is_valid(raise_exception=True)
            if request.user.is_authenticated:
                serializer.save(user=request.user, guest=None)
            else:
                guest = InfoForm.objects.get(id=guest_id)
                serializer.save(user=None, guest=guest)
            created_items.append(serializer.data)

        return Response(created_items, status=201)

class CartTotalView(generics.ListAPIView):
    serializer_class = TotalSerializer
    permission_classes=(permissions.AllowAny,)
    def get_queryset(self):
        print("Authenticated:", self.request.user.is_authenticated)

        guest_id = self.request.query_params.get('guest_id')

        print("Received guest ID:", guest_id)

        if self.request.user.is_authenticated:
            return Cart.objects.filter(user=self.request.user)

        if guest_id:
            cart_items = Cart.objects.filter(guest_id=guest_id)

            print("Found cart records:", cart_items.count())

            return cart_items

        return Cart.objects.none()
class InfoFormView(generics.ListCreateAPIView):
    serializer_class = InfoSerializer
    queryset = InfoForm.objects.all()
    permission_classes=(permissions.AllowAny,)
    authentication_classes = []
    def get_queryset(self):
        guest_id = self.request.query_params.get('guest_id')
        if guest_id:
            return Cart.objects.filter(guest_id=guest_id)


from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated



from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def get_csrf(request):
    return JsonResponse({"message": "CSRF cookie set"})