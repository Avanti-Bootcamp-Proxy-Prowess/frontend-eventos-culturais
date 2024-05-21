import { useState } from "react";

import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { api } from "../../services/api";

export function SignUp() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {
        if (!nome || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/usuarios", { nome, email, password })
        .then(() => {
            alert("usuário cadastrado com sucesso");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        });
    }

    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocket Events</h1>
                <p>Aplicação para gerenciamento de eventos culturais.</p>
                <h2>Faça seu cadastro</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setNome(e.target.value)}
                />

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
                    title="Cadastrar"
                    onClick={handleSignUp}
                />

                <Link to={"/login"}>
                    Voltar para login
                </Link>
            </Form>

        </Container>
    );
}