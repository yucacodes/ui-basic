FROM node as base
# Install prerequisites
RUN apt-get update && apt-get install -y \
  curl unzip && curl -fsSL https://bun.sh/install | bash
RUN mv ~/.bun /opt/bun
ENV PATH=$PATH:/opt/bun/bin

FROM base as app
WORKDIR app
COPY package.json .
COPY bun.lockb .
RUN bun install
COPY . /app

FROM app as build-front
RUN bun run build:docs

FROM nginx as front
COPY --from=build-front app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
