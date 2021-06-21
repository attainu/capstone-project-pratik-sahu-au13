import React, { useEffect, useState } from "react";
import { callFirestore } from "../../firebase";

export function ChatRoom({
  setChatRoomId,
  setActiveRoomsBox,
  setActiveMessageBox,
}) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    callFirestore.collection("rooms").onSnapshot((rooms) => {
      setRooms(
        rooms.docs.map((doc) => ({
          id: doc.id,
          roomData: doc.data(),
        }))
      );
    });
  }, [setActiveRoomsBox, setActiveMessageBox]);

  const handleRoomClick = (id) => {
    setChatRoomId(id);
    setActiveMessageBox(true);
    setActiveRoomsBox(false);
  };

  return rooms.map((room) => (
    <div
      className="rightContainer__discussion-messageBox--chats"
      onClick={() => handleRoomClick(room.id)}
    >
      <div>{room.roomData.roomName}</div>
    </div>
  ));
}
