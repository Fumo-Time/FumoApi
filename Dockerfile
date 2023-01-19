FROM node:18-alpine as builder

WORKDIR /builder

COPY . .

RUN yarn install --immutable
RUN yarn build

FROM node:18-alpine as runner

WORKDIR /app

COPY --from=builder /builder/dist .
COPY .yarn .yarn
COPY .yarnrc.yml .
COPY package.json .
COPY yarn.lock .
COPY .pnp.cjs .

COPY fumos fumos

EXPOSE 3000

CMD ["yarn", "node", "app.js"]
