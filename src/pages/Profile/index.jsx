import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from "./styles";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [nome, setNome] = useState(user.nome);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setpasswordOld] = useState();
    const [passwordNew, setpasswordNew] = useState();

    async function handleUpdate() {
        const user = {
            nome,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        await updateProfile({ user });
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="http://github.com/queziafiladelfo.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id='avatar' type='file' />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setpasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setpasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}