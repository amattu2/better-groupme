import React from 'react';
import { useParams } from 'react-router-dom';
import Conversation from '../components/Conversation/Conversation';
import { ConversationProvider } from '../components/Contexts/Conversation';

/**
 * Conversation filler container
 */
const ConversationWrapper = (): JSX.Element => {
  const { type, id } : any = useParams();

  return (
    <ConversationProvider id={id} type={type}>
      <Conversation id={id} />
    </ConversationProvider>
  );
};

export default ConversationWrapper;
