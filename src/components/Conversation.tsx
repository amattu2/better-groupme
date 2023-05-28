// Imports
import React from 'react';
import { Alert, CloseButton, InputGroup, FloatingLabel, ButtonGroup, Button, Form, Spinner } from 'react-bootstrap';
import ConversationMessage from './ConversationMessage';
import { useConversationData } from './Contexts/Conversation';
import { useConversationListData } from './Contexts/ConversationList';
import { useProfileData } from './Contexts/UserProfile';

/**
 * Conversation container
 */
const Conversation = (props: any): JSX.Element => {
  const { id } : any = props;
  const conversations : any = useConversationListData();
  const messages : any = useConversationData();
  const profile : any = useProfileData();

  if (messages.status === 'LOADING' || conversations.status === 'LOADING' || profile.status === 'LOADING') {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 bg-light">
        <Spinner animation="border" />
      </div>
    );
  } else if (messages.status === 'ERROR' || conversations.status === 'ERROR' || profile.status === 'ERROR') {
    window.location.hash = "#";
    return <div />;
  }

  const convo : any = conversations.value.filter((d : any) => d.id === id)[0];
  if (!convo || !convo.name) {
    window.location.hash = "#";
    return <div />;
  }

  return (
    <div className="d-flex-fill w-100 bg-light position-relative">
      <span className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom bg-white">
        <span className="fs-5 fw-semibold">{convo.name}</span>
        <CloseButton className="ms-auto" onClick={() => window.location.hash = ""} />
      </span>
      <div className="overflow-auto chat-history p-3">
        {/* Public Group Alert */}
        {messages.value.length >= 0 && messages.value.length < 10 && convo.isPublic &&
          <Alert variant="warning" dismissible>
            <Alert.Heading>Reminder</Alert.Heading>
            <p>This is a public access group, anyone can join with the invite link. Any message you send is visible to past and present group members, and once sent, messages cannot be reliably deleted.</p>
          </Alert>
        }

        {/* Conversation Messages */}
        {messages.value.length > 0 &&
          <ul className="m-b-0">
            {(messages.value || []).slice(0).reverse().map((messageItem : ConversationMessage, index : number) => (
              <ConversationMessage key={index} {...messageItem} isSelf={messageItem.sender_id === profile.value.id} isLast={index === messages.value.length-1} />
            ))}
          </ul>
        }
      </div>
      <div className="position-absolute bottom-0 start-0 end-0 p-2 bg-white d-flex border-top">
        <InputGroup>
          <FloatingLabel label="Message" style={{width: "100%"}}>
            <Form.Control
              as="textarea"
              placeholder="Enter your message"
              style={{height: "55px"}}
            />
          </FloatingLabel>
        </InputGroup>
        <div className="align-items-center d-flex justify-content-center">
          <ButtonGroup className="ms-1">
            <Button variant="dark">+</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
