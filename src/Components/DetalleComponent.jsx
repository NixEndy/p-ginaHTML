import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import IndexComponent from './IndexComponent';

const DetalleComponent = () => {

    const {id} = useParams();
    const [myId, setId] = useState([])
    const [name, setName] = useState([])
    const [description, setDescription] = useState([])
    const [thumbnail, setThumbnail] = useState([])
    const [comics, setComics] = useState([])

    useEffect(() => {
        obtenerPosts();
    }, []);

    const obtenerPosts = async () =>{
        const datos = await fetch(`http://gateway.marvel.com/v1/public/characters?id=${id}&ts=1&apikey=e3b6cd13afe5e9aedc8f5cece55c33a3&hash=de285c65408cacd2481d09cc689822ec`)
        const detallePost = await datos.json();
        setId(detallePost.data.results[0].id);
        setName(detallePost.data.results[0].name);
        setDescription(detallePost.data.results[0].description);
        var urlImage = detallePost.data.results[0].thumbnail.path 
        var urlExtension = detallePost.data.results[0].thumbnail.extension 
        var imgSrc=`${urlImage}/portrait_uncanny.${urlExtension}`
        setThumbnail(imgSrc);
        setComics(detallePost.data.results[0].comics.items);
    }

    return (
        <div>
            <h1>Superhero Details</h1>
            <hr/>
            <h4>{myId}</h4>
            <br></br>
            <h3>{name}</h3>
            <br></br>
            <p>{description}</p>
            <br/>
            <img src={thumbnail}></img>
            <br/>
            <br/>
            <h4>Comics</h4>
            <ul>
            {
                comics.map(comic => (
                    <li>{comic.name}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default DetalleComponent
