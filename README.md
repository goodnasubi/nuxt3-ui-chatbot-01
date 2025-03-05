# Nuxt UI v3 Starter

Look at [Nuxt docs](https://nuxt.com/docs/getting-started/introduction) and [Nuxt UI docs](https://ui3.nuxt.dev) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## このNuxt3 UI プロジェクトの作成方法

- 下記コマンドで、nuxt ui v3 テンプレートから作成した

```bash
npx nuxi init -t ui3 .  --packageManager pnpm
```
詳細は、[Use our Nuxt Starter](https://ui3.nuxt.dev/getting-started/installation/nuxt#use-our-nuxt-starter) を参考



## corepack の不具合解消

```bash
npx nuxi init -t ui3 .  --packageManager pnpm
```
コマンド実行時に、システムエラーになる可能性があります。（直近では解決しているかも）

```bash
/usr/local/share/nvm/versions/node/v20.18.1/lib/node_modules/corepack/dist/lib/corepack.cjs:21535
  if (key == null || signature == null) throw new Error(`Cannot find matching keyid: ${JSON.stringify({ signatures, keys })}`);
                                              ^

Error: Cannot find matching keyid: {"signatures":[{"sig":"MEUCIQC8OzFLCoQAQwmVP0rCi9pnLihViK6ifO20e6CQu337BwIgfhzo2SVsCmifbOuvXg1+3CIPBeKfrV5ibPWFI/NdBOo=","keyid":"SHA256:DhQ8wR5APBvFHLF/+Tc+AYvPOdTpcIDqOhxsBHRwC7U"}],"keys":[{"expires":null,"keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","keytype":"ecdsa-sha2-nistp256","scheme":"ecdsa-sha2-nistp256","key":"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE1Olb3zMAFFxXKHiIkQO5cJ3Yhl5i6UPp+IhuteBJbuHcA5UogKo0EWtlWwW6KSaKoTNEYL7JlCQiVnkhBktUgg=="}]}
    at verifySignature (/usr/local/share/nvm/versions/node/v20.18.1/lib/node_modules/corepack/dist/lib/corepack.cjs:21535:47)
    at fetchLatestStableVersion (/usr/local/share/nvm/versions/node/v20.18.1/lib/node_modules/corepack/dist/lib/corepack.cjs:21553:5)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async fetchLatestStableVersion2 (/usr/local/share/nvm/versions/node/v20.18.1/lib/node_modules/corepack/dist/lib/corepack.cjs:21672:14)
    at async Engine.getDefaultVersion (/usr/local/share/nvm/versions/node/v20.18.1/lib/node_modules/corepack/dist/lib/corepack.cjs:22292:23)
    at async Engine.executePackageManagerRequest (/usr/local/share/nvm/versions/node/v20.18.1/lib/node_modules/corepack/dist/lib/corepack.cjs:22390:47)
    at async Object.runMain (/usr/local/share/nvm/versions/node/v20.18.1/lib/node_modules/corepack/dist/lib/corepack.cjs:23096:5)

Node.js v20.18.1

 ERROR  Error: corepack pnpm install failed.                                                                                                                           nuxi  7:54
 ```

- ここの ["Cannot find matching keyid" in Corepack](https://zenn.dev/progfay/articles/corepack-verify-signature) サイトを参考に、解決します。

### 解決方法

- Corepack を v0.31.0 にアップデートするには、以下の手順を実行してください：

1. Corepack を有効化: まず、Corepack を有効にします。ターミナルで以下のコマンドを実行してください。

```bash
corepack enable
```

2. Corepack をアップデート: 次に、Corepack を最新バージョンにアップデートします。以下のコマンドを実行してください。

```bash
npm install -g corepack@0.31.0
```

これで、Corepack が v0.31.0 にアップデートされます。もし何か問題が発生した場合や、追加のサポートが必要な場合はお知らせください。

