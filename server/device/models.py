from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()
class Device(models.Model):
    device = models.CharField(max_length=200)
    manufacturer = models.CharField(max_length=200)
    os = models.CharField(max_length=200)
    last_checked_out_by = models.ForeignKey(
        User, on_delete=models.SET_NULL, blank=True, null=True)
    is_checked_out = models.BooleanField(default=False)
    last_checked_out_date = models.DateTimeField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.email
