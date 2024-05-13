import React from "react"
import Post from "./Post"

export default function IdeikoPostList({posts}) {
    return (
        <>
            {posts.map((post) => {
                return (
                    <Post post={post}/>
                )
            })}
        </>
    )
}