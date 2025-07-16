# Use uma imagem oficial do Python leve
FROM python:3.12-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo de dependências
COPY requirements.txt .

# Instala as dependências
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copia o restante do código do backend para dentro do container
COPY . .

# Expõe a porta que o Django usa
EXPOSE 8000

# Comando para rodar o servidor Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
