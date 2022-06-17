import React from 'react'
import { Button } from 'react-bootstrap';


function Asia(){
    return (
        <div>
            <div class="container">
                <h2 class="title">Select The Country</h2>
                <div className="d-grid gap-2">
                <Button href="/country?countryName=China" variant="success" size="lg">
                    China
                </Button>
                <Button href="/country?countryName=Sri%20Lanka" variant="success" size="lg">
                    Sri Lanka
                </Button>
                <Button href="/country?countryName=Pakistan" variant="success" size="lg">
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
                </div>
            </div>
        </div>
    )
}

export default Asia