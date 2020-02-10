import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

const Character = (props) => {
    const [speciesState, setSpeciesState] = useState("");

    useEffect(() => {
        console.log("character props", props)
        axios
        .get(`${props.species}`)
        .then(response => {
            setSpeciesState(response.data.name);
        })
        .catch(error => 
            console.log(error));
    }, [props]);

    const [homeworldState, setHomeworldState] = useState("");

    useEffect (() => {
        axios
        .get(`${props.homeworld}`)
        .then(response => {
            setHomeworldState(response.data.name);
        })
        .catch(error => console.log(error));
    }, [props.homeworld]);

    return(
        <Card style={{width: '30vw', margin: '2% auto'}}>
            <CardBody style={{backgroundColor: '#c8341e', borderRadius:'5px'}}>
                <CardTitle style={{backgroundColor: '#c8341e', color: 'white', fontSize: '1.4rem'}}>
                    {props.name}
                </CardTitle>
                <CardText>
                    <ListGroup style={{backgroundColor: 'f1f1f1', textAlign: 'justify', textJustify: 'left'}}>
                        <ListGroupItem>Species: {speciesState}</ListGroupItem>
                        <ListGroupItem>Homeworld: {homeworldState}</ListGroupItem>
                    </ListGroup>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Character;