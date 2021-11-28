// Imports
import React from 'react';
import { Card, Accordion, Figure, Badge } from 'react-bootstrap';

/**
 *
 */
export const Images = (props: any): JSX.Element => {
  const { images } : any = props;

  return (
    <Card>
      <Card.Body>
        <Accordion defaultActiveKey="0">
          {images.map((a : any, index : number) => {
            return (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>Image #{index+1}</Accordion.Header>
                <Accordion.Body>
                  <Figure>
                    <Figure.Image src={a.url} fluid />
                    <Figure.Caption>
                      <Badge bg="primary">Meme</Badge>
                    </Figure.Caption>
                  </Figure>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Card.Body>
    </Card>
  );
};
