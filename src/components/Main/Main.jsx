import React, { useEffect, useState } from 'react';
import './Main.css'

const Main = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <main>
            <div className="blog-container">
                {
                    blogs.map(blog => console.log(blog))
                }
            </div>
            <div className="bookmark-box"></div>
        </main>
    );
};

export default Main;