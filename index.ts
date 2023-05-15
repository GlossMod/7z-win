import { join } from 'path'

export class _7zWin {
    public getPath() {
        return join(__dirname, "win", "7z.exe")
    }
}