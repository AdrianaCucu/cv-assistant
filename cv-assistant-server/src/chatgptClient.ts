import {ChatGPTAPIBrowser} from 'chatgpt';

export async function sendMessage(): Promise<string> {
    const email: string | undefined = process.env.OPENAI_EMAIL;
    const password: string | undefined = process.env.OPENAI_PASSWORD;

    if (!email || !password) {
        throw new Error("Missing ChatGPT credentials.");
    }

    // use puppeteer to bypass cloudflare (headful because of captchas)
    const api = new ChatGPTAPIBrowser({
        email,
        password,
        // markdown: false
    });

    // await api.initSession();

    // const result = await api.sendMessage('Hello World!');
    // return result.response;

    return "banana";
}
