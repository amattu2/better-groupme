// Imports
import React from 'react';
import { Text, Images, Reply, Poll } from './MessageTypes';
import { useAuth } from '../../AuthProvider';
import { PollProvider } from '../../DataProviders/Poll';
import { useParams } from 'react-router-dom';

/**
 * Conversation message container
 */
const ConversationMessageContent = (props: any): JSX.Element => {
  const { text, attachments } : any = props;
  const { accessToken } : any = useAuth();
  const { type, id } : any = useParams();

  console.log("---- MESSAGE PROPS ----");
  console.log(props);

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
  return <i><b>[Oops, I'm unsure how to parse this content. Please report it.]</b></i>;

    /*
      <Alert variant="secondary" className="text-center">
        November 21st, 2021
      </Alert>
      <li className="clearfix">
        <div className="message-data">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
          <span className="message-data-time">10:15 AM, Today</span>
        </div>
        <div className="message my-message float-start">Project has been already finished and I have results to show you.</div>
      </li>
      <li className="clearfix">
        <div className="message-data">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
          <span className="message-data-time">10:15 AM, Today</span>
        </div>
        <div className="message my-message float-start w-100">

        </div>
      </li>
      <li className="clearfix">
        <div className="message-data">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
          <span className="message-data-time">11:42 PM, Today</span>
        </div>
        <div className="message my-message float-start">
          Hey
          <span className="d-inline-flex align-items-center mx-1">
            <b>@<a href="#/">Alan Miller</a></b>
            <Badge bg="warning" className="ms-1">YOU</Badge>
          </span>
          can you PM me asap?
        </div>
      </li>
      <li className="clearfix">
        <div className="message-data">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
          <span className="message-data-time">11:50 PM, Today</span>
        </div>
        <div className="message my-message float-start w-100">

        </div>
      </li>
      <li className="clearfix text-end">
        <div className="message-data">
          <span className="message-data-time">Today 11:52 PM &middot; <b>GroupMe</b></span>
        </div>
        <i>Benjamin Mourside Added bot TestBot to Group</i>
      </li>
      <li className="clearfix text-end">
        <div className="message-data">
          <span className="message-data-time">Today 11:55 PM &middot; <b>Test Bot</b></span>
          <img src="https://i.groupme.com/700x623.jpeg.98a1c69b708e46c3affbaaae39416e9d" alt="Avatar" />
        </div>
        <div className="message other-message float-end">
          Hello from a bot
        </div>
      </li>
    */
};

export default ConversationMessageContent;
