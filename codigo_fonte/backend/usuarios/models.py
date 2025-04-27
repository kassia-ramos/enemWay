from django.db import models
from django.contrib.auth.models import AbstractUser

# personalizado para usar os campos da documentação
class Usuario(AbstractUser):
    email = models.EmailField(unique=True)

    #Campos personalizaveis, porém com estrutura de autenticação do Django
    def __str__(self):
        return self.username


#simulação das notas
class Simulacao(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='simulacoes')

    nota_matematicaeTecnologias = models.FloatField()
    nota_linguagensCodigoseTecnologias = models.FloatField()
    nota_cienciasHumanaseTecnologias = models.FloatField()
    nota_cienciasNaturezaeTecnologias = models.FloatField()
    nota_redacao = models.FloatField()

    curso_desejado = models.CharField(max_length=100)
    instituicao_desejada = models.CharField(max_length=100)
    estado = models.CharField(max_length=50)

    data_criacao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.usuario.username} - {self.curso_desejado} ({self.data_criacao.date()})"

