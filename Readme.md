This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## next文档

https://www.nextjs.cn/docs/getting-started

## 路由

Next.js 支持具有动态路由的 pages

如果你创建了一个命名为 pages/posts/[id].js 的文件，那么就可以通过 posts/1、posts/2 等类似的路径进行访问。

## 渲染

Next.js 具有两种形式的预渲染： 静态生成（Static Generation） 和 服务器端渲染（Server-side Rendering）。

静态生成 （推荐）：HTML 在 构建时 生成，并在每次页面请求（request）时重用。

服务器端渲染：在 每次页面请求（request）时 重新生成 HTML。

Next.js 允许为每个页面 选择 预渲染的方式。你可以创建一个 “混合渲染” 的 Next.js 应用程序：对大多数页面使用“静态生成”，同时对其它页面使用“服务器端渲染”。

出于性能考虑，相对服务器端渲染，我们更 推荐 使用 静态生成 。

nextjs 提供的四个类似于生命周期的静态方法

https://juejin.cn/post/6844904165630541837

## sass

npm install sass

next.config.js
```js
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
```