## 7z-win

搭配 [node-7z](https://www.npmjs.com/package/node-7z) 使用

```typescript
import { extractFull, Data } from 'node-7z'
import { path7za } from '7z-win'

public static unzip(source: string, target: string): Promise<Data[]> {
    return new Promise(async (resolve, reject) => {
        let files: Data[] = []
        const myStream = extractFull(source, target, {
            $bin: path7za,
            charset: 'utf-8'
        })
        myStream.on('data', function (data) {
            files.push(data)
        })
        myStream.on('error', (err) => {
            reject(err)
        })
        myStream.on('end', function () {
            resolve(files)
        })

    })
}
```