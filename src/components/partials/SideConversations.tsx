import React from 'react';
import ConversationListHeader from './ConversationListHeader';
import FilterTabs from './FilterTabs';
import ConversationList from './ConversationList';

export default class Conversations extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end" style={{width: "350px", zIndex: 998}}>
        <ConversationListHeader />
        <FilterTabs />
        <ConversationList />
      </div>
    );
  }
}
