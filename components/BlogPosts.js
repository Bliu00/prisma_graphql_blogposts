import { useImperativeHandle } from "react";
import BlogPost from "./BlogPost";

const BlogPosts = ({onDelete, onEdit, data}) => {

    return data.blogPosts.map((blogPostData) => <BlogPost onEdit={onEdit} onDelete={onDelete} 
                                                key={blogPostData.id} {...blogPostData} />)

}

export default BlogPosts;