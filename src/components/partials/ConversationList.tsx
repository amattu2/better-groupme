import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ConversationListItem from './ConversationListItem';

export default class ConversationList extends React.Component<any, any> {
  constructor(props : object) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    // Fetch Groups Data
    const groups = await fetch(`https://api.groupme.com/v3/groups?access_token=${this.props.accessToken}`);
    const groupsJson = await groups.json();

    // Fetch Chats (DMs) Data
    const chats = await fetch(`https://api.groupme.com/v3/chats?access_token=${this.props.accessToken}`);
    const chatsJson = await chats.json();

    // Set Data
    this.setState({
      data: {
        groups: [... groupsJson.response],
        chats: [... chatsJson.response]
      }
    });
  }

  render() {
    console.log(this.state.data);

    return (
      <ListGroup variant="flush" className="border-bottom scrollarea" style={{overflow: "auto"}}>
        {this.state.data.groups.map((group : object) => (
          <ConversationListItem isGroup={true} name={"tbd"} date_string={"dt"} author={"aut"} last_message="last mess" />
        ))}
        {this.state.data.chats.map((chat : object) => (
          <ConversationListItem isGroup={false} name={"tbd"} date_string={"dt"} last_message="last mess" />
        ))}
      </ListGroup>
    );
  }
}
