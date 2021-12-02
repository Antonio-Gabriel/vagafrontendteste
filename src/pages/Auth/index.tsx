import { Container, Content, Form, Header } from "./styles";

import { ChangeEvent, useState } from "react";
import { IAuthentication } from "../../types/IAuthentication";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input/index";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

interface IPropsTheme {
  toggleTheme: () => void;
}

export function Auth({ toggleTheme }: IPropsTheme) {
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
        toast.success("Authorized");

        setData({
          username: "",
          password: "",
        });

        history.push("/dashboard");
      } else {
        toast.error("Usuário or password invalid!");

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
        <div className="translate">
          <i className="icon-g_translate"></i>
        </div>
        <div className="theme" onClick={toggleTheme}>
          <i className="icon-dark"></i>
        </div>
      </header>
      <Content>
        <div className="text">
          <h1>Faça o Login para continuar a navegar na plataforma</h1>
          <p>É bom ter você de volta.</p>
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
