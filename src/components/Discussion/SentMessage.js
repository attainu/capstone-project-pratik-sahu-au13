import React from "react";

export function SentMessage({ messageData }) {
  return <div className="messageBox__sender">{messageData.message}</div>;
}
