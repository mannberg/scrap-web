import LandingPage from "../LandingPage.svelte"
import { landingPageState } from "../stores.js"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/svelte"

const { 
    username, 
    password, 
    loginButtonEnabled } = landingPageState;

it("enables login button when username & password fields are not empty", async () => {
    const mockState = landingPageState;
    const { getByText, getByTestId } = render(LandingPage, { state: mockState })

    const loginButton = getByText("Login")
    const usernameInput = getByTestId("username")
    const passwordInput = getByTestId("password")
    
    expect(loginButton).toBeDisabled()
    expect(usernameInput.value).toBe("")
    expect(usernameInput.value).toBe("")
    
    await fireEvent.input(usernameInput, { target: { value: "joesouth"} })
    await fireEvent.input(passwordInput, { target: { value: "hello123"} })

    expect(loginButton).toBeEnabled()
})

//TODO: Fix
it("enables login button when username & password fields are not empty", async () => {
    // username.subscribe($ => expect($).toBe(""))()
    // password.subscribe($ => expect($).toBe(""))()
    // loginButtonEnabled.subscribe($ => expect($).toBe(false))()
    // username.set("joesouth")
    // loginButtonEnabled.subscribe($ => expect($).toBe(false))()
    // password.set("hello1234")
    // loginButtonEnabled.subscribe($ => expect($).toBe(true))()
})