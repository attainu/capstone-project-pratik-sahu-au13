import React from "react";

export function ReceivedMessage({ messageData }) {
  return <div className="messageBox__receiver">{messageData.message}</div>;
}
