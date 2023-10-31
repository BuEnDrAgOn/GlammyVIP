git pull origin develop
docker compose down
docker rmi database-frontend
docker build -t database-frontend .
docker compose up -d