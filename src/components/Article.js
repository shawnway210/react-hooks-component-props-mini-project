import React from "react"
import ArticleList from "./ArticleList"
import blogData from "../data/blog"
const Article = (props) => {
    const title = props.title
    const date =props.date
    const preview = props.previews 
    return(
        <article>
            <h3>{props.title}</h3>
            <small>{props.date || 'January 1, 1970'}</small>
            <p>{props.preview}</p>
        </article>
    )
}
export default Article