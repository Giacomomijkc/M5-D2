import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class LatestReleases extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.img}/>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>Euro: {this.props.price}</Card.Text>
                            <Card.Text>Categoria: {this.props.category}</Card.Text>
                        </Card.Body>
                    </Card>
        )
    }
}

export default LatestReleases;