// Imports
import React from 'react';
import { Text, Images, Reply, Poll } from './MessageTypes';
import { useAuth } from './Contexts/AuthProvider';
import { PollProvider } from './Contexts/Poll';
import { useParams } from 'react-router-dom';

/**
 * Conversation message container
 */
const ConversationMessageContent = (props: any): JSX.Element => {
  const { text, attachments } : any = props;
  const { accessToken } : any = useAuth();
  const { type, id } : any = useParams();

  // Raw Text
  if (text && attachments.length === 0) {
    return <Text {...props} />;
  }

  // Image Attachment(s)
  const images = attachments.filter((a : any) => a.type === 'image');
  if (images.length > 0) {
    return (
      <>
        {text && text.length > 0 && <Text {...props} />}
        <Images {...props} images={images} />
      </>
    );
  }

  // Reply
  const reply = attachments.filter((a : any) => a.type === 'reply');
  if (reply.length > 0) {
    return (
      <>
        <Reply {...props} />
        {text.length > 0 && <Text {...props} />}
      </>
    );
  }

  // Poll
  const poll = attachments.filter((a : any) => a.type === 'poll');
  if (type === "group" && poll.length > 0 && typeof(poll[0].poll_id) === "string") {
    return (
      <PollProvider group_id={id} poll_id={poll[0].poll_id} token={accessToken}>
        <Poll {...props} />
      </PollProvider>
    )
  }

  // Default
  return <i><b>(Invalid Message Type)</b></i>;
};

export default ConversationMessageContent;
