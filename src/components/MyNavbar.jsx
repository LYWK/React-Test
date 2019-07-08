import React from 'react'
import {Navbar, Nav,NavDropdown,Form, FormControl,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from "../containers/Login"
import Join from "../containers/Join"
import MyPage from "../containers/MyPage"
import Home from "../containers/Home"
import Hello from "../containers/Hello.jsx"
import LightSwitch from "../containers/LightSwitch"
import Timer from "../containers/Timer.jsx"
import Clock from "../containers/Clock.jsx"
import TodoApp from '../containers/TodoApp.jsx';


const MyNavbar = () =>{
    return (
      <Router>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">bit camp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
          <Nav.Link href="#home"><Link to = "/home">Home</Link></Nav.Link>
          <Nav.Link href="#link">스케줄러</Nav.Link>
          
          <Nav.Link>
            <Link to ="/hello">hello</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to ="/switch">스위치</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to ="/timer">타이머</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to ="/clock">시계</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to ="/todoapp">스케줄</Link>
          </Nav.Link>
          <NavDropdown title="회원관리" id="basic-nav-dropdown">
            <NavDropdown.Item href="#"><Link to = "/join">회원가입</Link></NavDropdown.Item>
            <NavDropdown.Item href="#"><Link to = "/login">로그인</Link></NavDropdown.Item>
            <NavDropdown.Item href="#"><Link to = "/mypage">마이페이지</Link></NavDropdown.Item>
            <NavDropdown.Item href="#"><Link to = "/home">홈</Link></NavDropdown.Item>
            
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
          </NavDropdown>
         </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Navbar>
 
        <Route path="/login" component = {Login}/>
        <Route path="/join"  component = {Join}/>
        <Route path="/mypage" component = {MyPage}/>
        <Route path="/home"  component = {Home}/>
        <Route path="/hello"  component = {Hello}/>
        <Route path="/switch"  component = {LightSwitch}/>
        <Route path="/timer"  component = {Timer}/>
        <Route path="/clock"  component = {Clock}/>
        <Route path="/todoapp"  component = {TodoApp}/>
    </Router>
    )

}
export default MyNavbar;