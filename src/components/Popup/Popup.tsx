import React from 'react';

export interface PopupProps {
  label: string;
}

const Popup = (props: PopupProps) => {
  return <div>{props.label}</div>;
};

export default Popup;
