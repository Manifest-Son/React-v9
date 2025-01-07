import {render} from "@testing-library/react"
import { expect, test, vi } from "vitest"
import createFetchMock from "vitest-fetch-mock"
import { QueryClientProvider, QueryClient, QueryClient } from "@tanstack/react-query"
import {Route} from "../routes/contacts.lazy"

const QueryClient = new QueryClient();

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

test("Can submit contact form", async () => {
    fetchMocker.mockResponse(JSON.stringify({status: "ok"}))
    const screen = render(
        <QueryClientProvider client={queryClient}>
            <Route.options.component />
        </QueryClientProvider>
    );

    const nameInput = screen.getPlaceholderText("Name");
    const emailInput = screen.getPlaceholderText("Email");
    const messageTextArea = screen.getPlaceholderText("Message");

    const testData = {
        name: "Lennox",
        email: "lenny@gmail.com",
        messageTestArea:"I am glad that i made it through"
    }

    nameInput.value = testData.name;
    emailInput.value = testData.email;
    messageTextArea.value = testData.messageTestArea;

    const btn = screen.getByRole("button");
    btn.click();
})