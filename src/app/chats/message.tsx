import Image from "next/image";

const Message = ({ userComment = false }: Boolean) => {
  return (
    // <div className={isThisACurrentUserComment ? "message own" : "message"}>
    //   {/* <img className='messageImg' src={comment._id} alt='' /> */}
    //   <h5>{comment.creator.email}</h5>
    //   <div className="messageText">{comment.text}</div>
    // </div>
    <div className={userComment ? "message own" : "message"}>
      {/* <Image
        alt="idk"
        src={
          "https://images.unsplash.com/photo-1688902325229-f6f2ad06561d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=695&q=80"
        }
        width={25}
        height={25} className="messageImg"
      /> */}
      <div className="message-header">
        <img
          className="messageImg"
          src="https://images.unsplash.com/photo-1688902325229-f6f2ad06561d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=695&q=80"
          alt=""
        />
        {/* <Image
          src={
            "https://lh3.google.com/u/0/ogw/AGvuzYZhC5xrit6_mYiG_aOsbhqMoj49fe6ACge-WY8o=s32-c-mo"
          }
          alt="name"
          layout="fill"
        /> */}
        <div className="flex-col">
          <b className="message-sender">Jordan Owens</b>
          <p className="message-time">1:23 P.M.</p>
        </div>
      </div>

      <p className="messageText">
        Text text text text text Text text text text text Text text text text
        text Text text text text text Text text text text text Text text text
        text text Text text text text text Text text text text text Text text
        text text text Text text text text text Text text text text text Text
        text text text text Text text text text text
      </p>
    </div>
  );
};

export default Message;
