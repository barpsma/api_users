# api_users

Test Rekrutmen Backend PT HERBA PENAWAR ALWAHIDA INDONESIA

# ERD

![ERD](https://github.com/barpsma/DFD_ERD_API_USERS/assets/79141552/8744a9fc-2b79-4b5c-8c29-a16ee46119c2)

# DFD

DFD Level 0 API Users
![DFD Level 0 API Users](https://github.com/barpsma/DFD_ERD_API_USERS/assets/79141552/4cf075b7-4c80-4307-b616-927db3cc81e3)

DFD Level 1 proses Register
![DFD Level 1 proses Register](https://github.com/barpsma/DFD_ERD_API_USERS/assets/79141552/98ccade0-ed61-4787-8997-35b096110628)

DFD Level 1 proses Login

![DFD Level 1 proses Login](https://github.com/barpsma/DFD_ERD_API_USERS/assets/79141552/66279220-38b7-411c-8a32-90a2985d527b)

DFD Level 1 proses Get Users
![DFD Level 1 proses Get Users](https://github.com/barpsma/DFD_ERD_API_USERS/assets/79141552/5b6c1ce3-3b13-48e6-8c41-9615faeae42a)

DFD Level 1 proses Delete Users by ID
![DFD Level 1 proses Delete Users by ID](https://github.com/barpsma/DFD_ERD_API_USERS/assets/79141552/579258c3-6ce3-479b-a07e-e43ea838d837)

DFD Level 1 proses Get Users by ID
![DFD Level 1 proses Get Users by ID](https://github.com/barpsma/DFD_ERD_API_USERS/assets/79141552/7da864ce-f913-4114-9d73-e21dedf58066)

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

The result should be like this

![unit test](https://github.com/barpsma/DFD_ERD_API_USERS/assets/79141552/3f2835ee-da03-416a-bee3-85867caabf25)

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
