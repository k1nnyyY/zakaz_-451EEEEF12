import styles from "./ThridModal.module.css";
import { React } from "react";
import mail from "../../../assets/mail.svg";

const ThridModal = () => {
  return (
    <div>
      <div>
        <div className={styles.login_wrapper}>
          <div className={styles.content_wrapper}>
            <img className={styles.mail} src={mail} />
            <h2
              style={{
                fontWeight: "500",
                textAlign: "center",
                marginBottom: "-30px",
              }}
            >
              Отправлено!
            </h2>
            <h6 className={styles.title}>
              Мы отправили вам по электронной почте ссылку <br />
              для сброса пароля.
            </h6>
            <p className={styles.no_title}>
              <span className={styles.no_main}>Назад к логину</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThridModal;
