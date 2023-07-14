import styles from "../page.module.css";
import Message from "./message";

const page = () => {
  let lastSender = {};
  return (
    <main className="flex gap0">
      <div className="chat-selection border"></div>

      <div className="flex-col full-width">
        <div className="chat-heading">
          <h1>Chat Title</h1>
          <button>Scroll To Bottom</button>
        </div>

        <div className="chat border">
          <Message userComment={true} />
          <Message />
          <Message userComment={true} />
          <Message />
        </div>
      </div>
    </main>
  );
};

export default page;
