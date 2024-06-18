ARG BUILD_FROM
FROM $BUILD_FROM

# Arbeitsverzeichnis im Container festlegen
WORKDIR /usr/src/app

RUN apk update
RUN apk upgrade
RUN apk add -U curl bash ca-certificates openssl ncurses coreutils python3 make gcc g++ libgcc linux-headers grep util-linux binutils findutils
# nvm environment variables
ENV NVM_DIR /root/.nvm
ENV NVM_VERSION 0.39.7
ENV NODE_VERSION 20

RUN apk add --no-cache \
    bash \
    curl \
    git \
    make \
    g++ \
    openssl-dev \
    nodejs \
    npm

# Bestätige die Installation
RUN node -v
RUN npm -v

# Abhängigkeiten kopieren und installieren
COPY package*.json ./
COPY . .

RUN ls
RUN npm install
RUN ls -la
RUN npm run build

# Container soll auf Port 3000 lauschen
EXPOSE 3000
RUN ls -la
# Startbefehl für die Anwendung
CMD ["npm", "start"]