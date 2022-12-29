import { ChatGPTAPIBrowser } from 'chatgpt';

let chatgptApi: ChatGPTAPIBrowser;

export async function init(): Promise<void> {
    // const email: string | undefined = process.env.OPENAI_EMAIL;
    // const password: string | undefined = process.env.OPENAI_PASSWORD;

    // if (!email || !password) {
    //     throw new Error("Missing ChatGPT credentials.");
    // }

    // // use puppeteer to bypass cloudflare (headful because of captchas)
    // const api = new ChatGPTAPIBrowser({
    //     email,
    //     password,
    //     // markdown: false
    // });

    // // TODO: figure this out
    // await api.initSession();
    // chatgptApi = api;
}

export async function sendMessage(): Promise<string> {
    // const result = await chatgptApi.sendMessage('Hello World!');
    // return result.response;
    return "ChatGPT disbled.";
}
