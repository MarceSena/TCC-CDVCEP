import { SetupServer } from "@src/server";
import supertest from "supertest";

let server = new SetupServer();
beforeAll(async() => {
  await server.init();
  global.testRequest = supertest(server.getApp());
});
