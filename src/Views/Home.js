import React from 'react'
import { Button } from 'react-bootstrap';


function Home(){
    return (
        <div>
            <div className="container">
                <h2 className="title">Select The Region</h2>
                <div className="d-grid gap-2">
                <Button href="/asia" variant="outline-success" size="lg">
                    Asia
                </Button>
                <Button href="/europe" variant="outline-success" size="lg">
                    Europe
                </Button>
                <Button href="/northamerica" variant="outline-success" size="lg">
                    North America
                </Button>
                <Button href="/southamerica" variant="outline-success" size="lg">
                    South America
                </Button>
                <Button href="/australia" variant="outline-success" size="lg">
                    Australia
                </Button>
                <Button href="/africa" variant="outline-success" size="lg">
                    Africa
                </Button>
                </div>
            </div>
        </div>
    )
}

export default Home