import React from 'react';

export default function DeliverableListItem(props) {
  return (
    <li className="deliverable_list_item">
      <span className="deliverable_name">{props.name}</span>
      <span className="deliverable_description">{props.description}</span>
    </li>
  )
}