import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

const IndexComponent = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        obtenerPosts();
    }, []);

    const obtenerPosts = async () =>{
        const letra = String.fromCharCode((Math.floor(Math.random() * (122 - 97)) + 97).toString());
        const datos = await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${letra}&limit=100&ts=1&apikey=e3b6cd13afe5e9aedc8f5cece55c33a3&hash=de285c65408cacd2481d09cc689822ec`)
        const listadoPosts = await datos.json();
        setPosts(listadoPosts.data.results);
    }

    return (
        <div>
            <h1>Marvel Superheroes</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (
                            <tr>
                                <td>
                                    <Link to={`/posts/${post.id}`}>{post.id}</Link>
                                </td>
                                <td>
                                    {post.name}
                                </td>
                                <td>
                                    {post.description}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default IndexComponent
