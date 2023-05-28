// Imports
import React from 'react';
import { Spinner, Card, Col, Button, Form } from 'react-bootstrap';
import { BsFileBarGraphFill } from 'react-icons/bs';
import { usePollData } from '../../Contexts/Poll';

/**
 *
 */
export const Poll = (props: any): JSX.Element => {
  const data = usePollData();

  if (data.status !== "LOADED") {
    return (
      <Card>
        <Card.Header as="h6" className="d-flex align-items-center">
          <BsFileBarGraphFill />
          <span className="ms-2">Poll</span>
        </Card.Header>
        <Card.Body>
          <Spinner animation="border" />
        </Card.Body>
      </Card>
    );
  }

  const expired = new Date(data.value.expires_at * 1000);
  const isExpired = expired <= new Date();

  return (
    <Card>
      <Card.Header as="h6" className="d-flex align-items-center">
        <BsFileBarGraphFill />
        <span className="ms-2">Poll</span>
      </Card.Header>
      <Card.Body>
        <Card.Title>{data.value.subject}</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Col sm={10}>
                {data.value.options.map((opt : any, index : number) => {
                  return (
                    <Form.Check
                      key={index}
                      type={data.value.type === "single" ? "radio" : "checkbox"}
                      label={opt.title}
                      name={"poll-" + data.value.id + "-opt"}
                      id={"poll-" + data.value.id + "-" + index}
                      disabled={isExpired}
                    />
                  );
                })}
              </Col>
            </Form.Group>
          </Form>
        <div className="float-end">
          <Button variant="outline-secondary">Results</Button>
          <Button variant="primary ms-2" disabled={isExpired}>Submit</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
