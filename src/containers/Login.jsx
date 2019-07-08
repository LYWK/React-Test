import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

class Login extends Component{
    constructor(props){
             super(props);
             this.state = {
                    customerId : '',
                    password : ''
             }
    }
    render(){
        return (
            <div>
               <form onSubmit="{this.handleSubmit}">
                   <Form>
                        <Form.Group controlId="customerId">
                            <Form.Label>Cutomer ID</Form.Label>
                            <Form.Control type="text" placeholder="Cutomer ID" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                    <Button variant="success">전송</Button>
                    <Button variant="warning">취소</Button>
               </form>
            </div>
        );
    }

}
export default Login;