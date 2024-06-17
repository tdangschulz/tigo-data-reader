# Verwende ein Node.js-Image als Basis
FROM node:20

# Arbeitsverzeichnis im Container festlegen
WORKDIR /usr/src/app

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm ci

# Anwendungscode kopieren
COPY . .

# Container soll auf Port 3000 lauschen
EXPOSE 3000

# Startbefehl für die Anwendung
CMD ["npm", "start"]