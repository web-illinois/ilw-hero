import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-hero";

const content = html`
    <ilw-hero>
        <img src="https://picsum.photos/1920/1280" alt="Background Image" slot="background">
        <h1>Innovating solutions every year</h1>
        <ul class="ilw-buttons">
            <li>
                <a href="#">Link 1</a>
            </li>
            <li>
                <a href="#">Link 2</a>
            </li>
            <li>
                <a href="#">Link 3</a>
            </li>
        </ul>
    </ilw-hero>
`;

test("image should be displayed", async () => {
    const screen = render(content);
    const element = screen.getByRole("img");
    await expect.element(element).toBeVisible();
});

test("renders heading", async () => {
    const screen = render(content);
    const element = screen.getByText("Innovating solutions every year");
    await expect.element(element).toBeInTheDocument();
});

test("renders buttons", async () => {
    const screen = render(content);
    const btn1 = screen.getByText("Link 1");
    const btn2 = screen.getByText("Link 2");
    const btn3 = screen.getByText("Link 3");

    await expect.element(btn1).toBeInTheDocument();
    await expect.element(btn2).toBeInTheDocument();
    await expect.element(btn3).toBeInTheDocument();
});