import React, { useState, useEffect } from 'react';
import { supabase } from './../Client.jsx'
import Card from '../components/Card';
import "./../App.css"
import { Link } from 'react-router-dom';

const CrewmateGallery = () => {

    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('CrewmateInfo')
                .select()
                .order('created_at', { ascending: false })

            // set state of posts
            console.log(data)
            setCrewmates(data);
        }
        fetchPosts()
    }, []);
    
    return (
        <>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "50px", marginTop: "20px"}}>
                <h1>Character Gallery</h1>
                <div className="readCharacter">
                    {
                        crewmates && crewmates.length > 0 ?
                        crewmates.map((character,index) => 
                        <Link key={index} to={`/edit/${character.crew_id}`} style={{extDecoration: "none", color: "inherit"}}>
                            <Card id={character.crew_id} name={character.name} health={character.health} class={character.class}/>
                        </Link>
                        ) : <h2>{'No Characters Yet 😞'}</h2>
                    }
                </div>  
            </div>
        </>
    )
}

export default CrewmateGallery;