import { useState } from "react";

import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";

import { useAuth } from "../../hooks/auth"

import { Link } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    function handleLogin() {
        login({ email, password });
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Events</h1>
                <p>Aplicação para gerenciamento de eventos culturais.</p>
                <h2>Faça seu login</h2>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Entrar"
                    onClick={handleLogin}
                />
                <Link to={"/register"}>
                    Criar conta
                </Link>
            </Form>
            <Background />
        </Container>
    );
}