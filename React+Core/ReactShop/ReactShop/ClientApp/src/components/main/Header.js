import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">테스트</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#link1">NEW</Nav.Link>
                            <Nav.Link href="#link2">BEST</Nav.Link>
                            <Nav.Link href="#link3">OUTER</Nav.Link>
                            <Nav.Link href="#link4">TOP</Nav.Link>
                            <Nav.Link href="#link5">DRESS</Nav.Link>
                            <Nav.Link href="#link6">BOTTOM</Nav.Link>
                            <Nav.Link href="#link7">SHOES/BAG</Nav.Link>
                            <Nav.Link href="#link8">ACC</Nav.Link>
                            <Nav.Link href="#link9">SALE</Nav.Link>
                            <NavDropdown title="마이페이지" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/1.1" className='item01'>관심상품</NavDropdown.Item>
                                <NavDropdown.Item href="#action/1.2" className='item01'>주문조회</NavDropdown.Item>
                                <NavDropdown.Item href="#action/1.3" className='item01'>적립금</NavDropdown.Item>
                                <NavDropdown.Item href="#action/1.4" className='item01'>마이쿠폰</NavDropdown.Item>
                                <NavDropdown.Item href="#action/1.5" className='item01'>내가쓴글</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="커뮤니티" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className='item01'>NOTICE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className='item01'>Q & A</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className='item01'>REVIEW</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#link10">로그인</Nav.Link>
                            <Nav.Link href="#link11">회원가입</Nav.Link>
                            <Nav.Link href="#link12">장바구니</Nav.Link>
                        </Nav>

                        {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;