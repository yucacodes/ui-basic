FROM debian:bookworm-slim as base
# Install prerequisites
RUN apt-get update && apt-get install -y \
  curl unzip
RUN curl -fsSL https://bun.sh/install | bash
RUN mv ~/.bun /opt/bun
ENV PATH=$PATH:/opt/bun/bin

FROM base as build
# Install packages
COPY package.json .
COPY bun.lockb .
RUN bun install
COPY . /app
WORKDIR app
RUN bun run build:docs

FROM nginx:alpine as front
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build app/dist /usr/share/nginx/html
EXPOSE 80
