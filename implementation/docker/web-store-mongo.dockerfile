FROM mongo:4.0.2
COPY ./mongo-scripts/ /docker-entrypoint-initdb.d/