import { createElement } from "lwc";
import { axe, toHaveNoViolations } from "jest-axe";
import UserList from "c/userList";

expect.extend(toHaveNoViolations);

function clearUp() {
  const body = document.body;

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }

  jest.clearAllMocks();
}

function createComponent() {
  const component = createElement("c-user-list", {
    is: UserList
  });
  document.body.appendChild(component);

  return component;
}

function flushPromises() {
  return new Promise(setImmediate);
}

describe("c-user-list", () => {
  afterEach(clearUp);
  it("should be accessible", async () => {
    const userList = createComponent();
    await flushPromises();

    expect(await axe(userList)).toHaveNoViolations();
  });
});
