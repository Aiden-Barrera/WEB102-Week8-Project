import { useEffect, useState } from "react"
import "./../App.css"
import { supabase } from './../Client'
import { useParams, useNavigate } from "react-router-dom"


const EditCrewmate = () => {
    const navigate = useNavigate()
    const {crew_id} = useParams()
    const [crewmateInfo, setCrewmateInfo] = useState({
        name: "",
        health: "",
        class: ""
    })

    const fetchCharacter = async () => {
        console.log(crew_id)

        const {data, err} = await supabase.from('CrewmateInfo')
            .select("*")
            .eq('crew_id', crew_id)
            .single()

        if (err) {
            console.error("Error fetching crewmate:", err);
            return;
        }
        setCrewmateInfo(data)
    }

    useEffect(() => {
        fetchCharacter()
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(crewmateInfo)
        setCrewmateInfo((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const updateCharacter = async (e) => {
        e.preventDefault()
        console.log(crewmateInfo)
        await supabase.from('CrewmateInfo')
            .update({name: crewmateInfo.name, health: crewmateInfo.health, class: crewmateInfo.class})
            .eq("crew_id", crew_id)

        alert(`${crewmateInfo.name} Successfully Updated`)
        navigate("/show")
    }

    const deleteCharacter = async (e) => {
        e.preventDefault()
        await supabase.from('CrewmateInfo')
            .delete()
            .eq('crew_id', crew_id)
        
        alert(`Successfully Deleted`)
        navigate("/show")
    }

    if (!crewmateInfo) return <h2>Loading...</h2>

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // centers horizontally
            alignItems: "center",
            width: "100%",
            height: "100vh"    
        }}>
            <div className="card" style={{padding: "20px"}}>
                <h1>Edit {crewmateInfo?.name}</h1>
                <form>
                    <div style={{display: "flex", justifyItems: "center", alignItems: "flex-start", gap: "35px"}}>

                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", gap: "10px"}}>
                            <label htmlFor="name" style={{fontSize: "32px", fontWeight: "700"}}>Name:</label><br/>
                            <input type="text" id="name" name="name" placeholder={crewmateInfo?.name} onChange={handleChange}/><br/>
                            <br/>
                        </div>
                        
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", gap: "10px"}}>
                            <label htmlFor="health" style={{fontSize: "32px", fontWeight: "700"}}>Health:</label><br/>
                            <input type="number" id="health" name="health" placeholder={crewmateInfo?.health} onChange={handleChange}/><br/>
                            <br/>
                        </div>
                        
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", gap: "10px"}}>
                            <label htmlFor="class" style={{fontSize: "32px", fontWeight: "700"}}>Class:</label><br/>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignContent: 'center', gap: "5px"}}>
                            {["Barbarian", "Bard", "Wizard", "Monk", "Paladin"].map((cls) => (
                                <label key={cls} style={{display: "flex", gap: "10px", fontSize: "18px", fontWeight: "700"}}>
                                <input type="radio" name="class" value={cls} checked={crewmateInfo?.class === cls} onChange={handleChange} /><br/>
                                    <span>{cls}</span>
                                </label>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "25px"}}>
                        <button value="Submit" onClick={updateCharacter} style={{width: "30%", height: "auto", fontSize: "20px", backgroundColor: "#f09c96", borderRadius: "12px", padding: "10px", fontWeight: "700"}}>Submit</button>
                        <button style={{width: "30%", height: "auto", fontSize: "20px", backgroundColor: "#f09c96", borderRadius: "12px", padding: "10px", fontWeight: "700"}} onClick={deleteCharacter}>Delete {crewmateInfo.name}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditCrewmate