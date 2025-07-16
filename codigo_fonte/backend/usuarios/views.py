from rest_framework import generics
from .models import Usuario
from .serializers import UsuarioSerializer
from .models import Simulacao
from .serializers import SimulacaoSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response


class UserCreateView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


class SimulacaoCreateView(generics.CreateAPIView):
    queryset = Simulacao.objects.all()
    serializer_class = SimulacaoSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)

class SimulacaoListView(generics.ListAPIView):
    serializer_class = SimulacaoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Retorna apenas as simulações do usuário logado, ordenadas da mais recente para a mais antiga
        return Simulacao.objects.filter(usuario=self.request.user).order_by('-data_criacao')
    
class UsuarioMeAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        data = {
            "username": user.username,
            "email": user.email,
        }
        return Response(data)