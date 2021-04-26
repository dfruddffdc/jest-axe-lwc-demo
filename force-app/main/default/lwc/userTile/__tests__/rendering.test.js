import { clearUp, getCreateComponent } from "c/testUtils";
import { axe, toHaveNoViolations } from "jest-axe";
import UserTile from "c/userTile";

expect.extend(toHaveNoViolations);

const createComponent = getCreateComponent(UserTile, "c-user-tile");

describe("c-user-tile", () => {
  afterEach(clearUp);

  it.each`
    role
    ${"developer"}
    ${"support"}
    ${"sales"}
  `("should be accessible when role is $role", async () => {
    const companyName = "example company";
    const name = "example name";
    const role = "developer";
    const website = "example website";

    const userList = createComponent({
      companyName,
      name,
      role,
      website
    });
    expect(await axe(userList)).toHaveNoViolations();
  });
});
