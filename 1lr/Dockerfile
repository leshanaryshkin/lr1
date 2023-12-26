FROM node:lts-alpine
WORKDIR /usr/src/infogaz-frontend
COPY ["./package.json","./package-lock.json*","./"]
#RUN apk add curl && apk add bash && curl https://bun.sh/install | bash
#RUN export PATH="$HOME/.bun/bin"
RUN npm install
RUN npm install js-cookie
#RUN bun install
#RUN bun install js-cookie
COPY . .
RUN chown -R node /usr/src/infogaz-frontend
USER node
RUN npm run build

CMD ["npm","start"]
