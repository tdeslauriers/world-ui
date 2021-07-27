import { health } from "./userApi";

describe("health test", () => {
  let data = null;

  beforeAll(() =>
    health().then((response) => {
      data = response;
    })
  );

  it("status", () => expect(data.status).toEqual("UP"));
});
