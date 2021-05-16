from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated

from device.models import Device
from .serializers import (
    DeviceSerializer,
)


class DeviceView(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    """
    create:
    Create a new device

    list:
    List all device
    """

    # TODO: manage all payment process in the backend
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
    permission_classes = (IsAuthenticated, )
