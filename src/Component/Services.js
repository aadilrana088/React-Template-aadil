import React from 'react'
import {Card,CardDeck, Container} from 'react-bootstrap'
import {AiFillBank,AiFillAudio,AiFillCamera} from 'react-icons/ai'
function Service() {
    return(
        <div className="service-div">
            <div className="section-title">
                <h2>Services</h2>
                <h3>Check our <span>Services</span></h3>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>
            <div className="service-card">
                <Container>
                <div className="service-card-deck">
                <CardDeck>
                <Card className="icon-box">
                <Card.Body>
                <div className="card-icon">
                    <AiFillBank />
                </div>
                <Card.Title>Lorem Ipsum</Card.Title>
                <Card.Text>
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                </Card.Text>
                </Card.Body>
                </Card>
                <Card className="icon-box">
                    <Card.Body>
                    <div className="card-icon">
                        <AiFillAudio />
                    </div>
                    <Card.Title>Sed ut perspiciatis</Card.Title>
                    <Card.Text>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore            </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="icon-box">
                    <Card.Body>
                    <div className="card-icon">
                        <AiFillCamera />
                    </div>
                    <Card.Title>Magni Dolores</Card.Title>
                    <Card.Text>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
                </div>
                <div className="service-card-deck">
                <CardDeck>
                <Card className="icon-box">
                <Card.Body>
                <div className="card-icon">
                    <AiFillBank />
                </div>
                <Card.Title>Lorem Ipsum</Card.Title>
                <Card.Text>
                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                </Card.Text>
                </Card.Body>
                </Card>
                <Card className="icon-box">
                    <Card.Body>
                    <div className="card-icon">
                        <AiFillAudio />
                    </div>
                    <Card.Title>Sed ut perspiciatis</Card.Title>
                    <Card.Text>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore            </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="icon-box">
                    <Card.Body>
                    <div className="card-icon">
                        <AiFillCamera />
                    </div>
                    <Card.Title>Magni Dolores</Card.Title>
                    <Card.Text>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck> 
                </div>
                </Container>
            </div>
        </div>
    )
}
export default Service;