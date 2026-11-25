from django.contrib import admin

from .models import Cart, Product, InfoForm

class CartAdmin(admin.ModelAdmin):
    list_display=(
        'user',
        'guest',
        'product',
        'price',
        'quantity',
        'created_at',
  
    )

class ProductAdmin(admin.ModelAdmin):
    list_display=(
        'id',
        'slug',
        'name',
        'price',
        'unit',
        'category',
        'ingredient',
        'pasta_type',
        'pack_size',
        'description',
        'cooking_time',
        'suggested_dishes',
        'image',
        'best_seller',
        'featured',

    )

class InfoAdmin(admin.ModelAdmin):
    list_display=(
        'name',
        'email',
        'phone',
        'address',

    )


admin.site.register(Product, ProductAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(InfoForm, InfoAdmin)
# Register your models here.
