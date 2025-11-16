# Dockerfile para Kimi Quantum Marketing Backend
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración primero (para cacheo)
COPY package*.json ./
COPY server-railway.js ./
COPY railway.toml ./

# Instalar dependencias
RUN npm install --only=production

# Exponer puerto
EXPOSE 3000

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3000

# Comando de inicio
CMD ["node", "server-railway.js"]