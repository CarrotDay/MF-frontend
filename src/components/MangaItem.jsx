import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
const MangaItem = ({meta, srcImg, name, price}) => {
  return (
    <Link to={'/product/' + meta}
          className="h-100 d-flex flex-column"
          style={{textDecoration: "none"}}
    >
      <Card className="h-100">
        <Card.Img variant="top" src={srcImg} className={"img-manga"}/>
        <Card.Body className={"item-content"}>
          <Card.Title className={"title-manga"}>{name}</Card.Title>
          <Card.Text className={"price"}>{price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MangaItem;