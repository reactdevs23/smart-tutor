"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import EmojiPicker from "emoji-picker-react";
import Chat from "./Chat/Chat";
import { oponent, user, send, emoji } from "@/images";

const ChatBox = () => {
  const [dummyChat, setDummyChat] = useState([
    {
      messages: ["Hello", "How are you"],
      yourMsg: true,
      profileImg: user,
    },
    {
      messages: ["I am fine", "How are you", "How is the weather there"],
      yourMsg: false,
      profileImg: oponent,
    },
    {
      messages: ["I am fine as well"],
      yourMsg: true,
      profileImg: user,
    },
    {
      messages: ["Hello", "How are you"],
      yourMsg: false,
      profileImg: oponent,
    },
    {
      messages: [
        "I am fine",
        "How are you",
        "How is the weather there",
        "How is the weather there",
      ],
      yourMsg: true,
      profileImg: user,
    },
    // {
    //   messages: [
    //     "I am fine",
    //     "How are you",
    //     "How is the weather there",
    //     "How is the weather there",
    //   ],
    //   yourMsg: false,
    //   profileImg: oponent,
    // },
  ]);
  const [emojiPickerToggle, setEmojiPickerToggle] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const chatWrapperRef = useRef(null);
  const sendMsg = (e) => {
    e.preventDefault();
    if (messageInput === "") return;
    let lastMsgSentByYou = true;
    const copyChat = [...dummyChat];
    copyChat.forEach((elem, idx) => {
      if (idx === dummyChat.length - 1) {
        if (elem.yourMsg) {
          elem.messages.push(messageInput);
        } else {
          lastMsgSentByYou = false;
        }
      }
    });
    setDummyChat((prev) => {
      if (!lastMsgSentByYou) {
        return [
          ...prev,
          { yourMsg: true, messages: [messageInput], profileImg: user },
        ];
      } else {
        return copyChat;
      }
    });
    setMessageInput("");
  };
  useEffect(() => {
    chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
  }, [dummyChat]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.chatComp}>
        <div className={styles.chatHeader}>
          <h2>Chat Room</h2>
          <div className={styles.statusBar}>
            <span>Live</span>
            <p>Total Online: 296 Users</p>
          </div>
        </div>
        <div ref={chatWrapperRef} className={styles.chatRoom}>
          {dummyChat.map((elem, idx) => {
            return <Chat {...elem} key={idx + new Date()} />;
          })}
        </div>
        <form onSubmit={sendMsg} className={styles.inputDiv}>
          <input
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onClick={() => setEmojiPickerToggle(false)}
            type="text"
            placeholder="Type Something ..."
          />
          <div className={styles.rightInput}>
            <div type="button" className={styles.emojiWrapper}>
              <button className={styles.emoji}>
                <img
                  onClick={() => setEmojiPickerToggle((prev) => !prev)}
                  src={emoji.src}
                  alt=""
                />
              </button>
              <div className={styles.emojiPicker}>
                {emojiPickerToggle && (
                  <EmojiPicker
                    theme="dark"
                    previewConfig={false}
                    width={300}
                    height={350}
                    onEmojiClick={(e) =>
                      setMessageInput((prev) => (prev += e.emoji))
                    }
                  />
                )}
              </div>
            </div>
            <button type="submit" className={styles.send}>
              <img src={send.src} alt="#" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
