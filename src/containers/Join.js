import React,{Component} from 'react'
import {Form, Button} from 'react-bootstrap'
class Join extends Component{
    constructor(props){
         super(props);
         this.state = {
            customerId : '',
            password : '',
            customerName : '',
            phone : '',
            city : ''
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
                        <Form.Group controlId="customerName">
                            <Form.Label>Cutomer Name</Form.Label>
                            <Form.Control type="text" placeholder="Cutomer Name" />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                        
                    </Form>
                    <Button variant="success">전송</Button>
                    <Button variant="warning">취소</Button>
               </form>
            </div>
        );
    }
}
export default Join;