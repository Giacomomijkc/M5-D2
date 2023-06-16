import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FooterLinks } from '../data/FooterLink';

class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Row className="row d flex justify-content-around align-items-center text-light bg-dark py-5 px-5 mt-5">
           
                {FooterLinks.map((link) => {
                    return(
                        <Col className='col-md-4'>
                        <a className="footer-title" key={link.id} href={link.href}>{link.title}</a>
                        <p className="footer-paragraph">{link.description}</p>
                        </Col>
                    )
                })}
          
        </Row>
        )
    }

}

export default Footer;