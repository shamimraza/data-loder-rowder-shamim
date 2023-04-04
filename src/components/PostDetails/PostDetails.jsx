import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post
const navigate =useNavigate()
const gobackbtn = ()=>{
    navigate(-1)
}

    return (
        <div>
            <h2>Post Details Button: {post.length}</h2>
            <h5>id: {id}</h5>
            <h2>title: {title}</h2>
            <p>{body}</p>
            <button onClick={gobackbtn}>Go back</button>
        </div>
    );
};

export default PostDetails;