# Gunakan image node sebagai dasar
FROM node:latest

# Membuat dan mengatur direktori kerja
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Install dependensi
RUN npm install

# Menyalin seluruh kode proyek
COPY . .

RUN npm i -g sequelize-cli
RUN npm i -g nodemon

# Perintah untuk menjalankan aplikasi
ENTRYPOINT [ "./entrypoint.sh" ]