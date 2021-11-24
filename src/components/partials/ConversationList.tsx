// Imports
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ConversationListItem from './ConversationListItem';

/*
 * Generates a list of conversation items
 */
export default class ConversationList extends React.Component<any, any> {
  /**
   * Class constructor
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  constructor(props : object) {
    super(props);
    this.state = {data: []};
  }

  /**
   * Fetch Group and Individual chats
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  async componentDidMount() {
    // Variables
    let messages : Array<MessageListMessage> = [];

    // Fetch Groups Data
    const groups = await fetch(`https://api.groupme.com/v3/groups?access_token=${this.props.accessToken}&omit=memberships`);
    const groupsJson = await groups.json();
    (groupsJson.response || []).forEach((group : any) => {
      messages.push({
        isGroup: true,
        name: group.name,
        message_date: new Date(group.messages.last_message_created_at * 1000),
        message: group.messages.preview.text,
        author: group.messages.preview.nickname
      })
    });

    // Fetch Chats (DMs) Data
    const chats = await fetch(`https://api.groupme.com/v3/chats?access_token=${this.props.accessToken}`);
    const chatsJson = await chats.json();
    (chatsJson.response || []).forEach((chat : any) => {
      messages.push({
        isGroup: false,
        name: chat.other_user.name,
        message_date: new Date(chat.last_message.created_at * 1000),
        message: chat.last_message.text,
        author: null
      })
    });

    // Set Data
    this.setState({
      data: messages.sort((a, b) => { return b.message_date.getTime() - a.message_date.getTime(); })
    });
  }

  /**
   * Render component
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  render() {
    return (
      <ListGroup variant="flush" className="border-bottom scrollarea" style={{overflow: "auto"}}>
        {(this.state.data || []).map((chatItem : MessageListMessage, index : number) => (
          <ConversationListItem
            key={index}
            isGroup={chatItem.isGroup}
            name={chatItem.name}
            message_date={chatItem.message_date}
            message={chatItem.message}
            author={chatItem.author}
          />
        ))}
      </ListGroup>
    );
  }
}
