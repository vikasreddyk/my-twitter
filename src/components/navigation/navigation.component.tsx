import { Nav, Button } from 'react-bootstrap';
import './navigation.component.scss';
import { useState } from 'react';

function NavigationComponent() {
    const [active, setActive] = useState(0);
    return (
        <Nav className="flex-column twitter-nav-items">
            <Nav.Item><i className="bi bi-twitter twitter-icon"></i></Nav.Item>
            <Nav.Item><Button variant="outline-primary" className={`nav-button ${active===0 ? "active" : ""}`}>
                <i className="bi bi-hash"></i>
                <span>Explore</span>
            </Button></Nav.Item>
            <Nav.Item><Button variant="outline-primary" className={`nav-button ${active===1 ? "active" : ""}`}>
                <i className="bi bi-star-fill"></i>
                <span>Favorites</span>
            </Button></Nav.Item>
        </Nav>
    )
}

export default NavigationComponent;