import React from 'react';
import { Card } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const Cart = () => {
    return (
        <div className="cart">
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Header><h3>Course Added</h3> </Card.Header>
                <Card.Body>
                    <Card.Title>Light Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;