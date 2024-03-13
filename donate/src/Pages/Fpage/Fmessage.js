import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Navbr from '../../Components/Navbr'


function Fmessage() {
    return (
        <>
        <Navbr />
        <div className="container h-100">
            <div className="row align-items-center justify-content-center h-100">
                <div className="col-md-6">
                    <Card className="border-0 shadow-lg">
                        <Card.Body className="p-5">
                            <h2 className="text-center mb-4">You Need to Login First</h2>
                            <div className="text-center">
                                <Button as={Link} to="/login"  variant="primary">Login</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        </>
    );
}

export default Fmessage;
