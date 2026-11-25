from rest_framework import serializers
from .models import Cart, Product, InfoForm

class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=InfoForm
        fields=['id', 'name', 'email', 'phone', 'address']


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model= Product
        fields='__all__'

class TotalSerializer(serializers.ModelSerializer): 
    total= serializers.SerializerMethodField()
    class Meta:
        model= Cart
        fields=['total']
    
    def get_total(self, obj):
        if obj.user_id:
            cart_items = Cart.objects.filter(user=obj.user)
        elif obj.guest_id:
            cart_items = Cart.objects.filter(guest=obj.guest)
        else:
            return Decimal('0.00')
        total = sum(
            item.price * item.quantity
            for item in cart_items
        )
        return total


