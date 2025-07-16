from rest_framework import serializers
from .models import Usuario  
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Simulacao

class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = Usuario(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class SimulacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Simulacao
        fields = '__all__'
        read_only_fields = ['usuario', 'data_criacao']