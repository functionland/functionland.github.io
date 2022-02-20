 #! /bin/sh.
rm -rf ./build

git pull

docker-compose up --scale fxland=2 --force-recreate --build -d