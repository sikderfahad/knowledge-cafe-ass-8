import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Main = () => {
    const [blogs, setBlogs] = useState([])

    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

   
    const addToBookmark = (blog) => {
        const newBookmarks = [...bookmarks, blog.title]
        setBookmarks(newBookmarks)
        
    }
    // console.log(bookmarks)


    return (
        <main>
            <section>
                <div className="blog-container">
                    {
                        blogs.map(blog => <Blog
                            blog={blog}
                            key={blog.id}
                            addToBookmark={addToBookmark}
                        ></Blog>)
                    }
                </div>
                <Bookmark bookmarks={bookmarks}></Bookmark>
            </section>
        </main>
    );
};

export default Main;