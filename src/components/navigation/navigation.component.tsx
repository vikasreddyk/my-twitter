import { Nav, Button } from 'react-bootstrap';
import './navigation.component.scss';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function NavigationComponent() {
    const [active, setActive] = useState(0);
    let history = useHistory();

    const setActivepage = (activeIndex:number)=>{
        setActive(activeIndex);
        if(activeIndex ===0 ){
            history.push("/explore");
        }
        else if(activeIndex ===1){
            history.push("/favorites");
        }
    }

    return (
        <Nav className="flex-column twitter-nav-items">
            <Nav.Item><i className="bi bi-twitter twitter-icon"></i></Nav.Item>
            <Nav.Item><Button onClick={()=>setActivepage(0)} variant="outline-primary" className={`nav-button ${active===0 ? "active" : ""}`}>
                <i className="bi bi-search"></i>
                <span>Explore</span>
            </Button></Nav.Item>
            <Nav.Item><Button onClick={()=>setActivepage(1)} variant="outline-primary" className={`nav-button ${active===1 ? "active" : ""}`}>
                <i className="bi bi-star-fill"></i>
                <span>Favorites</span>
            </Button></Nav.Item>
        </Nav>
    )
}

export default NavigationComponent;