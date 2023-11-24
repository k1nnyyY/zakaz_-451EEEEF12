import styles from "./OneModal.module.css";
import { React } from "react";

const OneModal = () => {
  return (
    <div>
      <div>
        <div className={styles.login_wrapper}>
          <div className={styles.content_wrapper}>
            <h1
              style={{
                fontWeight: "500",
                textAlign: "center",
                marginBottom: "-30px"
              }}
            >
              Восстановление <br />
              пароля
            </h1>
            <h6 className={styles.title}>
              На Email, который вы зарегистрировали <br/>учетную запись будет
              отправлена ссылка <br/>для сброса пароля.
            </h6>
            <input
              className={styles.input_style}
              type="text"
              placeholder="Почта"
            />
            <button className={styles.login_button}>Сбросить пароль</button>
            <p className={styles.no_title}><span className={styles.no_main}>Назад к логину</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneModal;
