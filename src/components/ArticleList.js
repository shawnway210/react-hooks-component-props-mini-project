import React from "react"
import Article from "./Article"
const ArticleList = (props) => {
    return(
        <main>
            {props.posts.map((post) => (
                <Article key={post.id} post={post} />
            ))}
        </main>

    )
}
export default ArticleList