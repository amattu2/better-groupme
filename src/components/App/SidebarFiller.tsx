// Imports
import React from 'react';
import { ListGroup } from 'react-bootstrap';

/**
 * SidebarFiller filler container (temporary)
 */
const SidebarFiller = (props: any): JSX.Element => {
  return (
    <ListGroup variant="flush" className="border-bottom scrollarea">
      <ListGroup.Item action className="py-3 lh-tight">
        <p className="m-0">Temporary sidebar component</p>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SidebarFiller;
