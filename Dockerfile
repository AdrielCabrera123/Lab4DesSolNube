FROM node:latest

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app
# Copiar el archivo package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto en el contenedor
EXPOSE 12900

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
