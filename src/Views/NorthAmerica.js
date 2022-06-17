import React from 'react'
import { Button } from 'react-bootstrap';


function NorthAmerica(){
    return (
        <div>
            <div className="container">
                <h2 className="title">Select The Region</h2>
                <div className="d-grid gap-2">
                <Button href="/country/United%20States%20of%20America" variant="success" size="lg">
                    United States of America
                </Button>
                <Button href="/country/Canada" variant="success" size="lg">
                    Canada
                </Button>
                <Button href="/country/Mexico" variant="success" size="lg">
                    Mexico
                </Button>
                <Button href="/country/Haiti" variant="success" size="lg">
                    Haiti
                </Button>
                <Button href="/country/Jamaica" variant="success" size="lg">
                    Jamaica
                </Button>
                </div>
            </div>
        </div>
    )
}

export default NorthAmerica