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

FROM base as front
COPY --from=build-front app/dist /app/dist
COPY --from=build-front app/server /app/server
WORKDIR app
ENV PORT 3000
EXPOSE 3000
CMD ["bun", "server/entry.bun.js"]
