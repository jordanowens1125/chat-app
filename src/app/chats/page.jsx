"use client";
import { getServerSession } from "next-auth";
import styles from "../page.module.css";
import ChatOption from "./chatOption";
import Message from "./message";
import { useEffect } from "react";
import io from 'socket.io-client'
let socket;

const Page = () => {
  
//  useEffect(() => {
//     fetch('/api/socket').finally(() => {
//       const socket = io()

//       socket.on('connect', () => {
//         console.log('connect')
//         socket.emit('hello')
//       })

//       socket.on('hello', data => {
//         console.log('hello', data)
//       })

//       socket.on('a user connected', () => {
//         console.log('a user connected')
//       })

//       socket.on('disconnect', () => {
//         console.log('disconnect')
//       })
//     })
//   }, [])

  let lastSender = {};
  const goToBottom = () => {
    const messages = document.getElementsByClassName("message");
    const length = messages.length;
    const el = length < 1 ? "" : messages[length - 1];
    if (el !== "") {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <section className="chat-page">
        <div className="chat-selection-sidebar">
          <p className="chat-selection-heading theme-text">Chats</p>
          <div className="chat-selection-options">
            <ChatOption />
            <ChatOption />
            <ChatOption />
            <ChatOption />
            <ChatOption />
            <ChatOption />
            <ChatOption />
            <ChatOption />
            <ChatOption />
            <ChatOption />
            <ChatOption />
          </div>
        </div>

        <div className="flex-col full-width grow">
          <div className="chat-heading">
            <p>Chat Title</p>
            <button onClick={goToBottom}>Scroll To Bottom</button>
          </div>

          <div className="chat">
            <Message userComment={true} />
            <Message />
            <Message userComment={true} />
            <Message userComment={true} />
            <Message />
          </div>
          <form className="new-message">
            <input type="text" className="chat-input" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Page;
