# api_users

Test Rekrutmen Backend PT HERBA PENAWAR ALWAHIDA INDONESIA

## Postman Documentations

Import TodoListFull_Deploy.json to your Postman and enjoy

## Installation

Clone this repo

```bash
git clone https://github.com/barpsma/api_users.git
```

Open directory

```bash
cd api_users
```

Install package

```bash
npm install
```

configure .env

```bash
nano .env
```

configure config database

```bash
nano /config/config.json
```

Create database that has been configured in config.json

```bash
sequelize db:create
```

Migrate database

```bash
sequelize db:migrate
```

## Testing

```bash
npm test
```

## Usage

Make sure nodejs already installed on your computer

```bash
npm start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
