# api_users

Test Rekrutmen Backend PT HERBA PENAWAR ALWAHIDA INDONESIA

## Postman Documentations

Import ApiUserTesRekrutmenHPAI.postman_collection.json to your Postman and enjoy

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

Run in docker

```bash
docker-compose up -d --build
```

## Optional

for configure config database

```bash
nano /config/config.json
```

```bash
nano docker-compose.yml
```

edit line 11 and 13 in "docker-compose.yml" for password mysql

## Testing

Make sure docker container already running

open shell

```bash
docker exec -it api_users-web-1 sh
```

and

```bash
npm test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
