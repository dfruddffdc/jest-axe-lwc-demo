import { clearUp, flushPromises, getCreateComponent } from "c/testUtils";
import { axe, toHaveNoViolations } from "jest-axe";
import UserList from "c/userList";

expect.extend(toHaveNoViolations);

const createComponent = getCreateComponent(UserList, "c-user-list");

describe("c-user-list", () => {
  afterEach(clearUp);
  it("should be accessible", async () => {
    const userList = createComponent();
    await flushPromises();

    expect(await axe(userList)).toHaveNoViolations();
  });
});
