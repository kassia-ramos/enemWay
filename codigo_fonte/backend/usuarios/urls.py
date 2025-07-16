from django.urls import path
from .views import UserCreateView
from .views import SimulacaoCreateView
from .views import SimulacaoListView
from .views import UsuarioMeAPIView

urlpatterns = [
    path('usuarios/', UserCreateView.as_view(), name='usuario-create'),
    path('simulacoes/', SimulacaoCreateView.as_view(), name='simulacoes-create'),
    path('simulacoes/listar/', SimulacaoListView.as_view(), name='simulacoes-listar'),
    path('usuarios/me/', UsuarioMeAPIView.as_view(), name='usuario-me'),
]
