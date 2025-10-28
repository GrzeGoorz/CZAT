const Message = () => {
  // const { authUser } = useAuthContext();
  //   const { selectedConversation } = useConversation();
  //   const fromMe = message.senderId === authUser._id;
  //   const formattedTime = extractTime(message.createdAt);
  //   const chatClassName = fromMe ? "chat-end" : "chat-start";
  //   const profilePic = fromMe
  //     ? authUser.profilePic
  //     : selectedConversation?.profilePic;
  //   const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  //   const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
          />
        </div>
      </div>
      <div className="chat-header">
        User Name
        <time className="text-xs opacity-50">12:45</time>
      </div>
      <div className="chat-bubble">
        Hello! How are you today?
        <div className="chat-actions">
          <button className="btn btn-xs">Reply</button>
        </div>
      </div>
    </div>
  );
};
export default Message;
