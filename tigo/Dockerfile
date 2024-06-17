ARG BUILD_FROM
FROM $BUILD_FROM

# Arbeitsverzeichnis im Container festlegen
WORKDIR /usr/src/app

RUN apk update
RUN apk upgrade

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NVM_VERSION 0.39.7
ENV NODE_VERSION 20

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v$NVM_VERSION/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
RUN npm ci

# Anwendungscode kopieren
COPY . .

# Container soll auf Port 3000 lauschen
EXPOSE 3000

# Startbefehl für die Anwendung
CMD ["npm", "start"]