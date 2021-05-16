from rest_framework.routers import DefaultRouter

from .views import DeviceView

router = DefaultRouter()
router.register("", DeviceView, base_name="device")


urlpatterns = router.urls
