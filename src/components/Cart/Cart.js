import React from 'react';
import { Card } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    const count = props.cart;
    let serial = 1;
    const totalPrice = count.reduce((sum, count) => sum + count.price, 0)
    return (
        <div className="cart">
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Header>
                    <h4>Course Added <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} /> <sup>{count.length}</sup> </h4>
                    <p>Total Price: <strong>${totalPrice.toFixed(2)}</strong></p>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <strong>Added Course List</strong>
                    </Card.Title>
                    <Card.Text>
                        {count.map(course => <p><span>{serial++}. {course.name}</span></p>)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Cart;