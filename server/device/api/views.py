from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated

from device.models import Device
from .serializers import (
    DeviceSerializer,
)


class DeviceView(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.DestroyModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    """
    create:
    Create a new device

    list:
    List all device

    delete:
    Delete a device by ID
    """

    # TODO: manage all payment process in the backend
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
    permission_classes = (IsAuthenticated, )
