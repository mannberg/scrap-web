import marked from "marked";
import { writable, derived, get } from 'svelte/store';
import { swift } from "svelte-highlight/languages";
import hljs from "highlight.js";

// TODO: This should probably not be here...
marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});

const landingPageTitle = "Welcome!";
const loginUsername = writable("");
const loginPassword = writable("");
const loginButtonEnabled = derived(
    [loginUsername, loginPassword],
    ([$username, $password]) => {
        return $username.length > 0 && $password.length > 0;
    });

export const landingPageState = {
    title: landingPageTitle,
    username: loginUsername,
    password: loginPassword,
    loginButtonEnabled
};

const markdownDraft = writable("");
const markdownHTMLOutput = derived(markdownDraft, ($draft) => { return marked($draft); });
const publishButtonEnabled = derived(markdownDraft, ($draft) => { return $draft.length > 0; });

export const editorState = {
    markdownDraft,
    markdownHTMLOutput,
    publishButtonEnabled
};
