from rest_framework import authentication
from users.models import Detail
from .serializers import DetailSerializer
from rest_framework import viewsets

class DetailViewSet(viewsets.ModelViewSet):
    serializer_class = DetailSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Detail.objects.all()