git pull origin develop
docker compose down
docker rmi berefrontend
docker build -t berefrontend .
docker compose up -d