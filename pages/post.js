function Post(props) {
    // Render post...
    return (
        <div>Next stars: {props.stars}</div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } }
        ],
        fallback: true //or false 
    };
}

// 在使用 getStaticProps 静态生成
export async function getStaticProps({ params }) {
    // 参数包含post ' id '。
    // 如果路由类似/posts/1，则params。id是1
    const res = await fetch(`https://api.github.com/repos/vercel/next.js`)
    const post = await res.json()

    // 通过道具将post数据传递到页面
    return { props: { stars: post.stargazers_count } }
}

export default Post