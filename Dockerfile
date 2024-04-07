## Dockerfile for jhipster spring-boot angular application
FROM node:20.11.1 AS generator



FROM eclipse-temurin:17.0.9_9-jdk-focal AS build

WORKDIR /app

COPY . .

RUN ./mvnw -ntp -Pprod clean verify -DskipTests

FROM eclipse-temurin:17.0.9_9-jre-focal

WORKDIR /app

COPY --from=build /app/target/*.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
