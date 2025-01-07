import { cleanup, render } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);
test("Alt text renders on Pizza Image", async () => {
  const name = "My Favourite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );
  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});
test("To have default image if none is provided", async () => {
  const screen = render(
    <Pizza name="something else" description="super cooln pizza" />,
  );
  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
