from django.contrib.auth import get_user_model
from rest_framework import serializers

from device.models import Device

User = get_user_model()

class DeviceSerializer(serializers.ModelSerializer):
    last_checked_out_by = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), default=serializers.CurrentUserDefault()
    )
    class Meta:
        model = Device
        fields = "__all__"

