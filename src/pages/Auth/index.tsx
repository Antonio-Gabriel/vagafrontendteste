import { Container, Content, Form, Header } from "./styles";

import { Input } from "../../components/Input/index";
import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";

interface IPropsTheme {
  toggleTheme: () => void;
}

export function Auth({ toggleTheme }: IPropsTheme) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      username,
      password,
    };

    console.log(data);
  }

  function AuthUser() {
    console.log("click");
  }

  return (
    <>
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
            <body className="card">
              <Header>
                <h2>Wiid.FrontEnd</h2>
              </Header>

              <Form onSubmit={handleSubmit}>
                <Input
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  type="text"
                  required
                />
                <Input
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  isPassword
                  type="password"
                  required
                />

                <Button
                  text="login"
                  width={100}
                  height={4}
                  handler={AuthUser}
                />
              </Form>
            </body>
          </div>
        </Content>
      </Container>
    </>
  );
}
