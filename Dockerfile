FROM debian:bookworm-slim as base
# Install prerequisites
RUN apt-get update && apt-get install -y \
  curl unzip
RUN curl -fsSL https://bun.sh/install | bash
RUN mv ~/.bun /opt/bun
ENV PATH=$PATH:/opt/bun/bin

FROM base as app
COPY package.json .
COPY bun.lockb .
RUN bun install
COPY . /app
WORKDIR app

FROM app as build-front
RUN bun run build:docs

FROM nginx:alpine as front
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-front app/dist /usr/share/nginx/html
EXPOSE 80

FROM app as build-lib
RUN bun run build:lib

FROM node:slim as publish-lib 
COPY --from=build-lib /app/package.json /app/package.json
COPY --from=build-lib /app/dist /app/dist
WORKDIR app
CMD ["npm", "run", "npm-publish" ]
