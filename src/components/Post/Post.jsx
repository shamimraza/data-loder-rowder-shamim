import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './post.css'

const Post = ({post}) => {
    const {id, title,body} = post

const navigate = useNavigate();
const handleNavigation = ()=>{
    navigate(`/post/${id}`);
}

    return (
        <div className='post'>
           <h5>Id: {id}</h5>
           <h5>title: {title}</h5>
           <p>{body}</p>
           <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
            <button onClick={handleNavigation}>Button Handler</button>
        </div>
    );
};

export default Post;