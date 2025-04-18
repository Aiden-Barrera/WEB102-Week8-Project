import { Link, Outlet } from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <div style={{display: "flex", height: "100vh", overflow: "hidden"}}>
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: '250px',
                    height: '100vh',
                    backgroundColor: '#333333',
                    color: 'white',
                    padding: '20px',
                    boxSizing: 'border-box'
                }}>
                <ul style={{ listStyle: 'none', padding: 0, color: "#ffffff" }}>
                    <li style={{margin: "25px", fontSize: "24px", fontWeight: "900"}}><Link to="/">HOME</Link></li>
                    <li style={{margin: "25px", fontSize: "24px", fontWeight: "900"}}><Link to="/create">CREATE A CREWMATE</Link></li>
                    <li style={{margin: "25px", fontSize: "24px", fontWeight: "900"}}><Link to="/show">CREWMATE GALLERY</Link></li>
                </ul>
                </div>

                <div style={{
                    marginLeft: '250px',
                    padding: '20px',
                    height: '100vh',
                    width: "100%",
                    boxSizing: 'border-box',}}
                >
                    <Outlet />
                </div>
            </div>
        </>
      )
}

export default Sidebar