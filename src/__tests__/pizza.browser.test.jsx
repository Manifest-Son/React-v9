import { render } from "@testing-library/react";
import { expect, test} from "vitest"
import Pizza from "../Pizza";

test("Alt text renders on image", async () => {
    const name = "My Favourite pizza";
    const src = "https://picsum.photos/200"
    const screen = render(
        <Pizza name={name} image={src} decsription="cool browser stuff" />
    );

    const img = await screen.getByRole("img");
    await expect.element(img).toBeInTheDocument();
    await expect.element(img).toHaveAttribute("src", src);
    await expect.element(img).toHaveAttribute("alt", name)
});