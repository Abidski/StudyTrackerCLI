import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export async function ReadUserInput(status, mode) {
    let answer;
    const rl = readline.createInterface({ input, output });
    while (!(Object.values(mode).includes(answer) && answer != status)) {
        answer = await rl.question("");
    }
    rl.close();
    return answer;
}
