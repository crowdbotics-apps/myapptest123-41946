
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DetailViewSet
router = DefaultRouter()
router.register('detail', DetailViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
