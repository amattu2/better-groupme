// Imports
import React from 'react';
import FilterTabs from './FilterTabs';

/**
 * Combines the sidebar component
 */
const SideConversations = (props: any): JSX.Element => {
  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white border-end" style={{width: "350px", zIndex: 998}}>
      <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <span className="fs-5 fw-semibold">Conversations</span>
      </div>
      <FilterTabs />
    </div>
  );
};

export default SideConversations;
