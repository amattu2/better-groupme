// Imports
import React from 'react';

/**
 *
 */
export const Reply = (props: any): JSX.Element => {
  const { text } = props;

  return (
    <blockquote className={"mb-0 text-muted" + (text && text.length > 0 && " mb-1")}>
      <p className="mb-0">[MESSAGE REPLY HERE]</p>
    </blockquote>
  );
};
