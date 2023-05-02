import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Main = () => {
    const [blogs, setBlogs] = useState([])

    const [bookmarks, setBookmarks] = useState([])

    const [duration, setDuration] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

   
    const addToBookmark = (blog) => {
        const newBookmarks = [...bookmarks, blog.title]
        setBookmarks(newBookmarks)
        
    }

    const handledMarkBlog = (time) => {
        const newDuration = [...duration, parseInt(time)]
        setDuration(newDuration)
    }
    // console.log(duration)

    return (
        <main>
            <section>
                <div className="blog-container">
                    {
                        blogs.map(blog => <Blog
                            blog={blog}
                            key={blog.id}
                            addToBookmark={addToBookmark}
                            handledMarkBlog={handledMarkBlog}
                        ></Blog>)
                    }
                </div>
                <Bookmark
                    bookmarks={bookmarks}
                    duration={duration}
                ></Bookmark>
            </section>
        </main>
    );
};

export default Main;