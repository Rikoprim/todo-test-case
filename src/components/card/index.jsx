import React from 'react';
import Badge from '../badge'
import { Card, CardBody, CardFooter, CardText, CardTitle } from './cardStyled';

const defaultProps = {
  title: '',
  text: '',
  status: '',
  onModalDetail: () => { },
}

const Cards = ( props = { ...defaultProps }) => {
  return (
    <Card onClick={props.onModalDetail}>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
      </CardBody>
      <CardFooter>
        <CardText>{props.text}</CardText>
        <Badge name={props.status === 1 ? 'Selesai' : 'Belum Selesai'} color={props.status === 1 ? 'success' : 'danger'} />
      </CardFooter>
    </Card>
  )
};

export default Cards;
