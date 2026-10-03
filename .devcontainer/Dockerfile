# Update the NODE_VERSION arg in docker-compose.yml to pick a Node version: 18, 16, 14
ARG NODE_VERSION=26
FROM mcr.microsoft.com/devcontainers/javascript-node:${NODE_VERSION}

# VARIANT can be either 'hugo' for the standard version or 'hugo_extended' for the extended version.
ARG VARIANT=hugo_extended
# VERSION can be either 'latest' or a specific version number
ARG HUGO_VERSION="0.165.0"

ARG DART_SASS_VERSION="1.99.0"

# Download Dart Sass and Hugo
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates curl git openssl && \
    rm -rf /var/lib/apt/lists/* && \
    case "$(uname -m)" in \
    aarch64) \
    export ARCH=arm64 ;; \
    *) \
    export ARCH=x64 ;; \
    esac && \
    echo "${ARCH}" && \
    curl --proto "=https" --tlsv1.2 -fsSL -o dart-sass.tar.gz "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-${ARCH}.tar.gz" && \
    tar -xf dart-sass.tar.gz && \
    cp -r dart-sass/* /usr/local/bin && \
    rm -rf dart-sass* && \
    case "$(uname -m)" in \
    aarch64) \
    export ARCH=arm64 ;; \
    *) \
    export ARCH=amd64 ;; \
    esac && \
    echo "${ARCH}" && \
    curl --proto "=https" --tlsv1.2 -fsSL -o hugo.tar.gz "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${VARIANT}_${HUGO_VERSION}_linux-${ARCH}.tar.gz" && \
    tar -xf hugo.tar.gz hugo && \
    rm hugo.tar.gz && \
    mv hugo /usr/bin/hugo
# Hugo dev server port
EXPOSE 1313

# [Optional] Uncomment this section to install additional OS packages you may want.
#
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install more global node packages
# RUN sudo -u node npm install -g <your-package-list-here>