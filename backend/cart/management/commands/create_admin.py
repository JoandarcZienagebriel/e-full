
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
import os

class Command(BaseCommand):
    help = "Create a production admin account"

    def handle(self, *args, **options):
        User = get_user_model()

        username = os.environ.get("ADMIN_USERNAME")
        email = os.environ.get("ADMIN_EMAIL")
        password = os.environ.get("ADMIN_PASSWORD")

        if not all([username, email, password]):
            raise ValueError("Missing admin environment variables")

        if User.objects.filter(username=username).exists():
            self.stdout.write("Admin already exists.")
            return

        User.objects.create_superuser(
            username=username,
            email=email,
            password=password
        )

        self.stdout.write(self.style.SUCCESS("Admin created successfully!"))
