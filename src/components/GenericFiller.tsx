import React from 'react';

type Props = {
  placeholder: string;
};

/**
 * Conversation filler container
 */
const GenericFiller = ({ placeholder }: Props): JSX.Element => (
  <div className="d-flex justify-content-center align-items-center w-100 bg-light position-relative p-5">
    <h2 className="text-muted">{placeholder}</h2>
  </div>
);

export default GenericFiller;
