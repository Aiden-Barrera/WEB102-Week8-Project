import { useState } from "react"
import "./../App.css"
import { supabase } from './../Client'


const CreateCrewmate = () => {
    const [crewmateInfo, setCrewmateInfo] = useState({
        name: "",
        health: "",
        class: ""
    })

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

    const sendCharacter = async (e) => {
        e.preventDefault()
        console.log(crewmateInfo)
        await supabase.from('CrewmateInfo')
            .insert({name: crewmateInfo.name, health: crewmateInfo.health, class: crewmateInfo.class})
            .select()

        alert("Character Created")
        window.location = "/"
    }

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
                <h1>Create your Character</h1>
                <form>
                    <div style={{display: "flex", justifyItems: "center", alignItems: "flex-start", gap: "35px"}}>

                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", gap: "10px"}}>
                            <label htmlFor="name" style={{fontSize: "32px", fontWeight: "700"}}>Name:</label><br/>
                            <input type="text" id="name" name="name" onChange={handleChange}/><br/>
                            <br/>
                        </div>
                        
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", gap: "10px"}}>
                            <label htmlFor="health" style={{fontSize: "32px", fontWeight: "700"}}>Health:</label><br/>
                            <input type="number" id="health" name="health" onChange={handleChange}/><br/>
                            <br/>
                        </div>
                        
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", gap: "10px"}}>
                            <label htmlFor="class" style={{fontSize: "32px", fontWeight: "700"}}>Class:</label><br/>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignContent: 'center', gap: "5px"}}>
                            {["Barbarian", "Bard", "Wizard", "Monk", "Paladin"].map((cls) => (
                                <label key={cls} style={{display: "flex", gap: "10px", fontSize: "18px", fontWeight: "700"}}>
                                <input type="radio" name="class" value={cls} onChange={handleChange} /><br/>
                                    <span>{cls}</span>
                                </label>
                            ))}
                            </div>
                        </div>
                    </div>
                    <button value="Submit" onClick={sendCharacter} style={{width: "30%", height: "auto", fontSize: "20px", backgroundColor: "#f09c96", borderRadius: "12px", padding: "10px", fontWeight: "700"}}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCrewmate