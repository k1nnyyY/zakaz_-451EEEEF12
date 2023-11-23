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
              }}
            >
              Восстановление <br />
              пароля
            </h1>
            <p>
              На Email, который вы зарегистрировали учетную запись будет
              отправлена ссылка для сброса пароля.
            </p>
            <input
              className={styles.input_style}
              type="text"
              placeholder="Почта"
            />
            <div className={styles.line}>
              <input type="checkbox" />
              <p className={styles.sogl}>
                Я согласен с условиями обслуживания <br />и политикой
                конфиденциальности.
              </p>
            </div>
            <button className={styles.login_button}>Зарегистрироваться</button>
            <p className={styles.no_title}>
              Уже есть аккаунт? <span className={styles.no_main}>Войти</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneModal;
