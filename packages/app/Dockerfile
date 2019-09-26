FROM yurikrupnik/client-apps_lerna AS builder

#ARG NODE_ENV_DOCKER=true
#ARG npm-name=@krupnik
#ARG package-name=webserver1
ARG port=9000
#ARG host=http://0.0.0.0
#ENV HOST=$host
ENV PORT=$port
ARG dest_port=8000
ENV DEST_PORT=$dest_port
ENV DESTINATION_HOST=http://gateway1

#RUN echo ${DEST_PORT}
#RUN echo ${PORT}
#RUN echo ${HOST}

COPY . ./packages/webservers/webserver1
RUN npm run pi
RUN npx lerna run build --scope @krupnik/fe-webserver1

FROM node:12-alpine
WORKDIR /usr/src/app
COPY --from=builder /app/packages/webservers/webserver1/dist .
RUN npm install --only=production

EXPOSE 9000
CMD ["npm", "start"]
