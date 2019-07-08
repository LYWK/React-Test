import React,{Component} from 'react'
import { Table } from 'react-bootstrap';

class MyPage extends Component{
    render(){
        return (
            <div>
               <Table striped bordered hover variant="dark">
          
                <tbody>
                    <tr>
                    <td rowSpan = '2' colSpan = '2'>1</td>
                    <td>ID</td>
                    <td>이름</td>
                    </tr>

                    <tr>
                    <td>hong</td>
                    <td>홍길동</td>
                    </tr>

                    <tr>
                    <td>전화번호</td>
                    <td colSpan='2'>larry the bird</td>
                    </tr>

                    <tr>
                    <td>주소 </td>
                    <td colSpan='2'>서울 </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        );
    }
}
export default MyPage;