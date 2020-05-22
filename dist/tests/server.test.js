"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _server = _interopRequireDefault(require("../server"));

var _constants = require("../utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const request = (0, _supertest.default)(_server.default);
describe("GET /v1/num_to_english", () => {
  it("returns correct words when given valid number", async done => {
    const {
      body
    } = await request.get("/v1/num_to_english").send({
      number: 2020202
    });
    expect(body.status).toBe("ok");
    expect(body.statusCode).toBe(200);
    expect(body.num_in_english).toBe("two million twenty thousand two hundred two");
    done();
  });
  it("returns correct words when given number with commas", async done => {
    const {
      body
    } = await request.get("/v1/num_to_english").send({
      number: "1,234"
    });
    expect(body.status).toBe("ok");
    expect(body.statusCode).toBe(200);
    expect(body.num_in_english).toBe("one thousand two hundred thirty four");
    done();
  });
  it("returns correct words when given number 0", async done => {
    const {
      body
    } = await request.get("/v1/num_to_english").send({
      number: 0
    });
    expect(body.status).toBe("ok");
    expect(body.statusCode).toBe(200);
    expect(body.num_in_english).toBe("zero");
    done();
  });
  it("returns correct words when given negative number", async done => {
    const {
      body
    } = await request.get("/v1/num_to_english").send({
      number: -22000001
    });
    expect(body.status).toBe("ok");
    expect(body.statusCode).toBe(200);
    expect(body.num_in_english).toBe("negative twenty two million one");
    done();
  });
  it("returns correct error when given out of bounds number", async done => {
    const {
      body
    } = await request.get("/v1/num_to_english").send({
      number: "9007199254740996"
    });
    expect(body.status).toBe("error");
    expect(body.statusCode).toBe(400);
    expect(body.message).toBe(_constants.MESSAGES.OUT_OF_BOUNDS);
    done();
  });
  it("returns correct error when given number with invalid characters", async done => {
    const {
      body
    } = await request.get("/v1/num_to_english").send({
      number: "1234a"
    });
    expect(body.status).toBe("error");
    expect(body.statusCode).toBe(400);
    expect(body.message).toBe(_constants.MESSAGES.INVALID_INPUT);
    done();
  });
  it("returns correct error when given empty string", async done => {
    const {
      body
    } = await request.get("/v1/num_to_english").send({
      number: ""
    });
    expect(body.status).toBe("error");
    expect(body.statusCode).toBe(400);
    expect(body.message).toBe(_constants.MESSAGES.INVALID_INPUT);
    done();
  });
  it("returns correct error when number not provided", async done => {
    const {
      body
    } = await request.get("/v1/num_to_english").send({});
    expect(body.status).toBe("error");
    expect(body.statusCode).toBe(400);
    expect(body.message).toBe(_constants.MESSAGES.INVALID_INPUT);
    done();
  });
});