# 1. Use a flexible, small base image
FROM alpine:latest

# 2. Install common essentials (optional, can be added later)
RUN apk add --no-cache bash

# 3. Set the working directory
WORKDIR /app

# 4. Copy your files
COPY . .

# 5. Define a placeholder command
CMD ["/bin/sh"]
