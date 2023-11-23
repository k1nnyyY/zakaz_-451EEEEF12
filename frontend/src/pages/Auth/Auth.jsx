import styles from "./Auth.module.css";
import or from "../../assets/Content divider.svg";
import { React } from "react";

const Auth = () => {
  return (
    <div>
      <div>
        <div className={styles.login_wrapper}>
          <div className={styles.content_wrapper}>
            <h1 style={{
              fontWeight: "500"
            }}>Регистрация</h1>
            <input
              className={styles.input_style}
              type="text"
              placeholder="Имя"
            />
            <input
              className={styles.input_style}
              type="text"
              placeholder="Почта"
            />
            <input
              className={styles.input_style}
              type="text"
              placeholder="Телефон"
            />
            <input
              className={styles.input_style}
              type="text"
              placeholder="Пароль"
            />
            <div className={styles.line}>
              <input type="checkbox"/>
              <p className={styles.sogl}>Я согласен с условиями обслуживания <br/>и политикой конфиденциальности.</p>
            </div>
            <button className={styles.login_button}>Зарегистрироваться</button>
            <p className={styles.no_title}>Уже есть аккаунт? <span className={styles.no_main}>Войти</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
