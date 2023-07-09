FROM node as build
WORKDIR /movietime
COPY package.json .
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /movietime/build /usr/share/nginx/html
