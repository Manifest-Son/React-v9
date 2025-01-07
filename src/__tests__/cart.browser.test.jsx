import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";

test("Snapshot with nothing in cart", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="cart"
        >
          <h2>
            Cart
          </h2>
          <ul />
          <p>
            Total: KES 0.00
          </p>
          <button>
            Checkout
          </button>
        </div>
      </DocumentFragment>
    `);
});

test("Lol", () => {
  expect({
    id: "calabrese",
    name: "The Calabrese Pizza",
    category: "Supreme",
    description: "lol pizza from Calabria",
    image: "/public/pizzas/calabrese.webp",
    size: { S: 12.25, M: 16.25, L: 20.25 },
  }).toMatchSnapshot();
});
