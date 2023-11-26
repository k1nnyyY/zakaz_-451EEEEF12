import React, { useRef } from "react";
import styles from "./NewPassword.module.css";
import useForm from "react-hook-form";

const NewPassword = () => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
  };
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
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Password</label>
              <input
                name="password"
                type="password"
                ref={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}

              <label>Repeat password</label>
              <input
                name="password_repeat"
                type="password"
                ref={register({
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.password_repeat && (
                <p>{errors.password_repeat.message}</p>
              )}

              <input type="submit" onClick={handleSubmit(onSubmit)} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
