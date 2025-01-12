import React, {useState, useEffect } from "react";
import axios from "axios";

function ChatPage() {

    const [chats, setChats] = useState([]);
    const FetchChats = async () => {
        try {
            const response = await axios.get("http://localhost:3000/chats");
            console.log(response.data);
            setChats(response.data); 
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    };
    

  useEffect(() => {
    FetchChats();
  }, []);

  return <div>{chats.map((chat)=>{
    return <div key={chat._id}>{chat.chatName} </div>
  })}</div>;
}

export default ChatPage;
