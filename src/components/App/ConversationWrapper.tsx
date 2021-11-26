// Imports
import React from 'react';
import Conversation from './Conversation';
import { ConversationProvider } from '../DataProviders/ConversationProvider';
import { useAuth } from '../AuthProvider';
import { useParams } from 'react-router-dom';

/**
 * Conversation filler container
 */
const ConversationWrapper = (props: any): JSX.Element => {
  const { accessToken } : any = useAuth();
  const { type, id } : any = useParams();

  return (
    <ConversationProvider id={id} type={type} token={accessToken} >
      <Conversation />
    </ConversationProvider>
  );
};

export default ConversationWrapper;
