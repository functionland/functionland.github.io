# Running in development:

  ## Cloning the Project
  1. Clone the project dev repo:
	  `git clone https://github.com/mhshakouri/functionland.github.io.git`
	  OR
	  `gh repo clone mhshakouri/functionland.github.io`
2. Switch to dev branch:
	`git switch dev`
3. Running the project:
	`npm i` || `npm install`
	then
	`npm run dev`
# Editing content:
Current data being rendered is a set of data mocks, but for better modification experience its all actually mocked in the folder : `src/lib/components/data-mocks`
Static files such as images and video's refrenced in data-mocks folder are located in `static` folder in the root directory.
  
  

# Running in production:

  
## 1. Installing docker and docker compose
1. Install docker from this guide:

`https://docs.docker.com/engine/install/ubuntu/`

2. Install docker-compose from this guide:

`https://docs.docker.com/compose/install/`

## 2. Preparing to run
### http auth protection
In case you need to protect the staging enviroment with an http auth protocol, generate user:pass with the following command:

`echo $(htpasswd -nb user password) | sed -e s/\\$/\\$\\$/g`

then copy the result in the console in `docker-compose.yml` file on line 59:

`- "traefik.http.middlewares.fxland-auth.basicauth.users=fxland:$$apr1$$PgKn6LCV$$MPUbn1rEw96J1iNZa2Arb."  #replace generated password with your own`

### Disabling http auth
Just comment the lines 59 and 60 in docker-compose.yml file:

`- "traefik.http.middlewares.fxland-auth.basicauth.users=fxland:$$apr1$$PgKn6LCV$$MPUbn1rEw96J1iNZa2Arb."  #replace generated password with your own`

`- "traefik.http.routers.fxland.middlewares=fxland-auth"`

You can do the same for traefik monitor dashboard on line 41 and 42, it's recommended to protect the traefik dashboard with http auth.

### Configuring domain names, secrets, envs:
1. `docker-compose.yml`

Replace domain names on lines `40` and `57`, accordingly for traefik monitor dashboard, and the website.

2. `./configs/traefik.yml`

Replace domain names on lines `20` and `22` and also a valid email address at line `34`.

3. Create an .env file from the template provided in `.env.example` and provide the required keys, domain names, etc, in this `.env` file.

4. Prepare for ssl cert creation:

Remove `./configs/acme.json` if exists

Create new acme.json with the right permission using the following commands:

`touch ./configs/acme.json`

`chmod 600 ./configs/acme.json`

## Running in production/staging:
### Initial run
To run the container just run the following the command:

	`docker-compose up -d`

### Logs
`docker-compose logs -f`

### Recreate
`docker-compose up -d --force-recreate`

### Recreate + build
`docker-compose up -d --force-recreate --build`

### Stop
`docker-compose stop`

### Destroy
`docker-compose down -v`

### Scaling:
`docker-compose up --scale fxland=2 --force-recreate --build -d`


### Easy deploy (pull, rebuild, serve and scale)
Making `deploy.sh` executable (once):

`chmod +x deploy.sh`

Run:

`./deploy.sh`
