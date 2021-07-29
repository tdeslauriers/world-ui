import { health, login } from "./userApi";

describe("health test", () => {
  let data = null;

  beforeAll(() =>
    health().then((response) => {
      data = response;
    })
  );

  it("status", () => expect(data.status).toEqual("UP"));
});

describe("login test", () => {
  let creds = {
    username: "darth.vader@empire.com",
    password: "Now-This-Is-Pod-Racing!!!",
  };
  // needs to be mocked for 'real' async test
  let token = null;
  beforeAll(() => {
    login(creds).then((response) => {
      token = response;
    });
  });

  it("username", () =>
    expect(token.username).toEqual("darth.vader@empire.com"));
});
