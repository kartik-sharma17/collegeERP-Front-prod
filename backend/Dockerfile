# for local server
# # Use OpenJDK 22 as base image
# FROM openjdk:22-jdk-slim

# # Set the working directory in container
# WORKDIR /app

# # Copy JAR file from host to container
# COPY target/college_erp-0.0.1-SNAPSHOT.jar /app/college_erp.jar

# # Expose port (adjust if needed)
# EXPOSE 8080

# # Run the JAR
# ENTRYPOINT ["java", "-jar", "college_erp.jar"]


# for render server
# Stage 1: Build the app
# Stage 1: Build the app with Maven and JDK 21
FROM maven:3.9.6-eclipse-temurin-21 as builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Use JDK 22 to run (you can still run with JDK 22 if you want)
FROM eclipse-temurin:22-jdk
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

