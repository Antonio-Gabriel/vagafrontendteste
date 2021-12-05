import { Container, Content, Form, Header } from "./styles";

import { ChangeEvent, useState } from "react";
import { IAuthentication } from "../../types/IAuthentication";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input/index";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface IPropsTheme {
  toggleTheme: () => void;
}

export function Auth({ toggleTheme }: IPropsTheme) {
  const [translation, setTranslation] = useState(false);
  const { t, i18n } = useTranslation();

  function changeLanguage() {
    i18n.changeLanguage(translation ? "pt" : "en");

    setTranslation(!translation);
  }

  let history = useHistory();
  const { signInUser } = useAuth();

  const [data, setData] = useState<IAuthentication>({
    username: "",
    password: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function handleAuthUser(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const isAuth = signInUser(data);
      if (isAuth) {
        toast.success(t("translation.Autorizado"));

        setData({
          username: "",
          password: "",
        });

        history.push("/dashboard");
      } else {
        toast.error(t("translation.Username or password invalid!"));

        setData({
          username: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <header>
        <div className="translate" onClick={changeLanguage}>
          <i className="icon-g_translate"></i>
        </div>
        <div className="theme" onClick={toggleTheme}>
          <i className="icon-dark"></i>
        </div>
      </header>
      <Content>
        <div className="text">
          <h1>{t("translation.Login to continue browsing the platform")}</h1>
          <p>{t("translation.It's good to have you back")}</p>
        </div>
        <div className="auth">
          <div className="card">
            <Header>
              <h2>Wiid.FrontEnd</h2>
            </Header>

            <Form onSubmit={handleAuthUser}>
              <Input
                name="username"
                value={data.username}
                onChange={handleInputChange}
                placeholder="Username"
                type="text"
                required
              />
              <Input
                name="password"
                value={data.password}
                onChange={handleInputChange}
                placeholder="Password"
                isPassword
                type="password"
                required
              />

              <Button text="login" width={100} height={4} />
            </Form>
          </div>
        </div>
      </Content>
    </Container>
  );
}
