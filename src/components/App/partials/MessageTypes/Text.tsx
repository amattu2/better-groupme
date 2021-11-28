// Imports
import React from 'react';

/**
 *
 */
export const Text = (props: any): JSX.Element => {
  const { text } : any = props;

  return <p className="mb-0" style={{whiteSpace: 'pre-wrap'}}>{text}</p>;
};
