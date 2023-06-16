import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import historyBooks from '../data/history.json';
import LatestReleases from './LatestReleases';

class PrimaryContent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container className='my-5'>
                <Row>
                    <Col className='d-flex flex-wrap gap-3'>
                        {historyBooks.map((historyBook) =>{
                            return (
                                <LatestReleases
                                    key={historyBook.asin}
                                    img={historyBook.img}
                                    title={historyBook.title}
                                    category={historyBook.category}
                                    price={historyBook.price}
                                />
                            )
                        })}

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PrimaryContent;