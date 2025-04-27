from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario, Simulacao

# Customização do admin para o model de usuário
@admin.register(Usuario)
class UsuarioAdmin(UserAdmin):
    model = Usuario
    list_display = ('username', 'email', 'is_staff', 'is_active')
    search_fields = ('username', 'email')
    ordering = ('username',)

# Registro da Simulação
@admin.register(Simulacao)
class SimulacaoAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'curso_desejado', 'instituicao_desejada', 'estado', 'data_criacao')
    search_fields = ('curso_desejado', 'instituicao_desejada', 'estado')
    list_filter = ('estado', 'data_criacao')

