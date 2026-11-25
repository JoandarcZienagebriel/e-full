from django.db import models
from django.conf import settings
from django.utils import timezone
from django.core.validators import RegexValidator
class Product(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    slug = models.SlugField(max_length=100, unique=True, null=True, blank=True)
    name = models.CharField(max_length=255, default='')
    category = models.CharField(max_length=100, default='')
    ingredient = models.CharField(max_length=100, default='')
    pasta_type = models.CharField(max_length=100, default='')
    pack_size = models.CharField(max_length=50, default='')

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.00
    )

    unit = models.CharField(max_length=50, default='')
    description = models.TextField(default='')
    cooking_time = models.CharField(max_length=100, default='')

    suggested_dishes = models.JSONField(default=list)

    image = models.ImageField(
        upload_to='assets/',
        blank=True,
        null=True
    )

    best_seller = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class InfoForm(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)   
    phone = models.CharField(
    max_length=13,
    unique=True,
    validators=[
        RegexValidator(
            regex=r'^\+251\d{9}$',
            message='Phone number must start with +251 followed by exactly 9 digits.'
        )
    ]
)
    status_choice=[
        ('bole', 'Bole'),
        ('lideta', 'Lideta'),
        ('mexico', 'Mexico'),
        ('jomo', 'Jomo'),
    ]
    address=models.CharField(
        max_length=20,
        choices=status_choice,
        default='bole',
    )

    def __str__(self):
        return self.name
    
    

 
class Cart(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
         null=True,
         blank=True,

    )
    guest = models.ForeignKey(
        InfoForm,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )

    created_at = models.DateTimeField( default=timezone.now)
    product=models.ForeignKey(
        Product,
        on_delete=models.CASCADE)
   
    price= models.DecimalField(max_digits=10, decimal_places=2, default=200)
    quantity= models.PositiveIntegerField(default=1)
    class Meta:
        constraints = [
            models.CheckConstraint(
                condition=(
                    models.Q(user__isnull=False, guest__isnull=True) |
                    models.Q(user__isnull=True, guest__isnull=False)
                ),
                name="cart_exactly_one_owner"
            )
        ]
    




# Create your models here.
