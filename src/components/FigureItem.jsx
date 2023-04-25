import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import Money from "~/components/Money";

const FigureItem = ({meta, srcImg, name, price}) => {
  return (
      <Link to={'/product/' + meta}
            className={"d-flex flex-column h-100"}
            style={{textDecoration: "none"}}
      >
        <Card className="h-100">
          <div className={"img-figure"}>
            <Card.Img variant="top" src={srcImg}/>
          </div>
          <Card.Body className={"item-content"}>
            <Card.Title className={"title-figure"}>{name}</Card.Title>
            <Card.Text className={"price"}>
              <Money money={price} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
  );
};

export default FigureItem;