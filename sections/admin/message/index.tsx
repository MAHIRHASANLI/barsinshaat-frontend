"use client";
import { GetAllMessage, removeMessage } from "@/api_requests/message_request";
import React from "react";
import styles from "./index.module.css";
import { MessageTypes } from "@/types";
import SweetAlert from "@/utils/sweet_Alert";
import TitleSection from "@/components/user/section_title";
type Props = {};

const MessageSection = (props: Props) => {
  const [messages, setMessages] = React.useState<MessageTypes[]>([]);
  const [notFoundSMS, setNotFoundSMS] = React.useState<string>();
  React.useEffect(() => {
    GetAllMessage().then(({ responseMessage }) => {
      console.log("responseMessage: ", responseMessage);
      if (responseMessage.length > 0) setMessages(responseMessage);
      else setNotFoundSMS("Gonderilmish mesaj yoxdur!");
    });
  }, []);
  async function handleDelete(e: any, id: string | undefined) {
    if (confirm("Əminsiz?")) {
      try {
        const response = await removeMessage(id || "");
        if (response && response.success) {
          SweetAlert("error", "Silmə uğursuz oldu!");
        } else {
          SweetAlert("success", "Mesaj uğurla silindi!");
          e.target.parentElement.parentElement.remove();
        }
      } catch (error) {
        console.error("Xəta baş verdi:", error);
      }
    }
  }

  return (
    <div>
      <TitleSection
        firtTitle="Gələn"
        lastTitle="Mesajlar"
        description="Göndərilmiş bütün mesajlar buradadır!"
      />
      <div className={styles.table}>
        {notFoundSMS ? (
          <h2>{notFoundSMS}</h2>
        ) : (
          messages.map((message, i) => (
            <div className={styles.item} key={i}>
              <div>
                <p>
                  Adı Soy adı: <span>{message.fullName}</span>
                </p>
              </div>
              <div>
                <p>
                  Email: <span>{message.email}</span>
                </p>
              </div>{" "}
              <div>
                <p>
                  Mövzu: <span>{message.topic}</span>
                </p>
              </div>
              <div>
                <p>
                  Mesajı: <span>{message.message}</span>
                </p>
              </div>{" "}
              <div className={styles.button}>
                <button onClick={(e) => handleDelete(e, message._id)}>
                  Sil
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MessageSection;
