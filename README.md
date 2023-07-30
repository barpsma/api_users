# api_users

Test Rekrutmen Backend PT HERBA PENAWAR ALWAHIDA INDONESIA

# ERD

![logo]({https://github.com/barpsma/api_users/blob/main/ERD.png?raw=true})

## Installation

Clone this repo

```bash
git clone https://github.com/barpsma/api_users.git
```

Open directory

```bash
cd api_users
```

configure .env

```bash
cp .env.example .env
```

```bash
nano .env
```

Run docker

```bash
docker-compose up -d --build
```

## Testing

Make sure docker container already running, wait a few moments until the db container has finished checking healthy

open shell

```bash
docker exec -it api_users-web-1 sh
```

```bash
npm test
```

if the error is related to NODE_ENV, follow these steps

```bash
npm install -g win-node-env
```

## Postman Documentations

Import ApiUserTesRekrutmenHPAI.postman_collection.json to your Postman and enjoy

## Optional

for configure config database

```bash
nano /config/config.json
```

```bash
nano docker-compose.yml
```

edit line 11 and 13 in "docker-compose.yml" for password mysql

Adminer

```bash
http://localhost:8081/
```

system : mysql
server : db
username : root
password : akbar

## License

[MIT](https://choosealicense.com/licenses/mit/)
