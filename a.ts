/*
const readline = require('readline');
class Mutex {
    private _locked = false
    acquire() {
        return new Promise<void>(resolve => {
            const timer = setInterval(() => {
                if (!this._locked) {
                    this._locked = true
                    clearInterval(timer)
                    resolve()
                }
            }, 0)
        })
    }
    release() {
        this._locked = false
    }
}
var rl = readline.createInterface({ input: process.stdin, output: process.stdout })
async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function Readline() {
    return new Promise<string>(resolve => {
        var input: string
        rl.once('line', (data:string) => input = data)
        const timer = setInterval(() => {
            if (input) {
                clearInterval(timer)
                resolve(input)
            }
        }, 0)
    });
}


rl.write("123")
console.log(rl.line);
*/