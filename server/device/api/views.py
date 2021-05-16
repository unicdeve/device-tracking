from rest_framework import viewsets, mixins
from rest_framework.response import Response

from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template

from device.models import Device
from .serializers import (
    DeviceSerializer,
)


class DeviceView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """
    create:
    Create a new device
    """

    # TODO: manage all payment process in the backend
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
