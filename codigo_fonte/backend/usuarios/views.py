from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Usuario, Simulacao
from .serializers import UsuarioSerializer, SimulacaoSerializer

class UsuarioViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [permissions.IsAuthenticated]

class SimulacaoViewSet(viewsets.ModelViewSet):
    queryset = Simulacao.objects.all()
    serializer_class = SimulacaoSerializer
    permission_classes = [permissions.IsAuthenticated]

