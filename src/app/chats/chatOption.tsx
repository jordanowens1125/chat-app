const ChatOption = () => {
  return (
    <div className="chat-option">
      <img
        className="messageImg"
        src="https://images.unsplash.com/photo-1688902325229-f6f2ad06561d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=695&q=80"
        alt=""
      />
      <div className="flex-col">
        <p className="chat-title">Title</p>
        <p className="message-time">1.23 P.M.</p>
        <p className="last-message">Last message</p>
      </div>
    </div>
  );
};

export default ChatOption;
