FROM ghcr.io/home-assistant/devcontainer:addons

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID
USER $USERNAME

# Default powerline10k theme, no plugins installed
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.2.0/zsh-in-docker.sh)" -- \
    -p git \
    -p ssh-agent \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions \
    -p https://github.com/zsh-users/zsh-syntax-highlighting

RUN sed -i 's/^plugins=.*/plugins=(git zsh-syntax-highlighting zsh-completions zsh-autosuggestions)/' ~/.zshrc