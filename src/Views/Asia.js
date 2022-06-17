import React from 'react'
import { Button } from 'react-bootstrap';


function Asia(){
    return (
        <div>
            <div className="container">
                <h2 className="title">Select The Country</h2>
                <div className="d-grid gap-2">
                <Button href="/country/China" variant="success" size="lg">
                    China
                </Button>
                <Button href="/country/Sri%20Lanka" variant="success" size="lg">
                    Sri Lanka
                </Button>
                <Button href="/country/Pakistan" variant="success" size="lg">
                    Pakistan
                </Button>
                <Button href="/country/Bangladesh" variant="success" size="lg">
                    Bangladesh
                </Button>
                <Button href="/country/India" variant="success" size="lg">
                    India
                </Button>
                <Button href="/country/Nepal" variant="success" size="lg">
                    Nepal
                </Button>
                <Button href="/country/Maldives" variant="success" size="lg">
                    Maldives
                </Button>
                <Button href="/country/Iran" variant="success" size="lg">
                    Iran
                </Button>
                <Button href="/country/United%20Arab%20Emirates" variant="success" size="lg">
                    United Arab Emirates
                </Button>
                <Button href="/country/Japan" variant="success" size="lg">
                    Japan
                </Button>
                <Button href="/country/Singapore" variant="success" size="lg">
                    Singapore
                </Button>
                <Button href="/country/Thailand" variant="success" size="lg">
                    Thailand
                </Button>
                <Button href="/country/Malaysia" variant="success" size="lg">
                    Malaysia
                </Button>
                <Button href="/country/Indonesia" variant="success" size="lg">
                    Indonesia
                </Button>
                </div>
            </div>
        </div>
    )
}

export default Asia