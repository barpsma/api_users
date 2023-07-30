const request = require("supertest");
const app = require("../index");
const db = require("../models");
const jwt = require("jsonwebtoken");

describe("User Register", () => {
  it("Register User berhasil dengan valid credentials", async () => {
    const res = await request(app).post("/api/users").send({
      name: "admin 50",
      email: "admin50@gmail.com",
      password: "12345678",
      role: "admin",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message");
  });
  it("Register gagal saat email sudah terdaftar", async () => {
    const res = await request(app).post("/api/users").send({
      name: "admin 50",
      email: "admin50@gmail.com",
      password: "12345678",
      role: "admin",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("message");
  });
});

describe("User Login", () => {
  it("Login User berhasil dengan valid credentials", async () => {
    const res = await request(app).post("/api/login").send({
      email: "admin50@gmail.com",
      password: "12345678",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
  it("Login gagal dengan invalid credentials", async () => {
    const res = await request(app).post("/api/login").send({
      email: "admin20@gmail.com",
      password: "12345678",
    });

    expect(res.statusCode).toEqual(400);
  });
});

const user = {
  email: "admin50@gmail.com",
  password: "12345678",
};

let token;

beforeAll(async () => {
  await db.sequelize.sync();
  await request(app).post("/api/login").send(user);
  token = jwt.sign({ id: 1 }, process.env.JWT_SECRET);
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("Get List User", () => {
  it("return list user dan status 200 saat token sesuai", () => {
    request(app).get("/api/users").set("token", token).expect(200);
  });
});

describe("Get User by ID", () => {
  it("return user by id dan status 200 saat token sesuai", () => {
    request(app).get("/api/users/1").set("token", token).expect(200);
  });
});

describe("Delete User by ID", () => {
  it("hapus user by id dan status 200 saat token sesuai", () => {
    request(app).delete("/api/users/1").set("token", token).expect(200);
  });
});
