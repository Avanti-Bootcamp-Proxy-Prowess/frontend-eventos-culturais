import { useEffect, useState } from "react";

import { getLocais, createLocal, updateLocalById, deleteLocalById } from "../../services/LocaisService";
import { api } from "../../services/api";

import { LocaisList } from "../../components/LocaisList";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Container, Wrapper, Form, Button, PopUp } from "./styles";
import { MdAddCircleOutline, MdModeEditOutline, MdClose, MdCheckCircle } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

export function Locais() {
    const [locais, setLocais] = useState([]);
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");
    const [search, setSearch] = useState("");

    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [editNome, setEditNome] = useState("");
    const [editEndereco, setEditEndereco] = useState("");
    const [editCidade, setEditCidade] = useState("");
    const [editEstado, setEditEstado] = useState("");
    const [editPais, setEditPais] = useState("");
    const [editId, setEditId] = useState(null);

    const getAllLocais = async () => {
        const updatedLocais = await getLocais();
        setLocais(updatedLocais);
    };

    useEffect(() => {
        getAllLocais();
    }, []);

    useEffect(() => {
        async function fetchLocais() {
            try {
                const response = await api.get("/locais", {
                    params: search ? { nome: search } : {},
                });
                setLocais(response.data);
            } catch (error) {
                console.error("Erro ao buscar locais:", error);
            }
        }
        fetchLocais();
    }, [search]);

    function handleSearch(event) {
        setSearch(event.target.value)
    };

    const handleCreate = async (event) => {
        if(!nome || !endereco || !cidade || !estado || !pais) {
            alert('Preencha todos os campos')
        }

        event.preventDefault();
        const data = { nome, endereco, cidade, estado, pais };

        await createLocal(data);
        await getAllLocais();
    };

    const handleEdit = (local) => {
        setEditNome(local.nome);
        setEditEndereco(local.endereco);
        setEditCidade(local.cidade);
        setEditEstado(local.estado);
        setEditPais(local.pais);
        setEditId(local.id);
        setIsEditPopupOpen(true);
    };

    const handleUpdateLocal = async (event) => {
        event.preventDefault();
        try {
            await updateLocalById(editId, {
                nome: editNome,
                endereco: editEndereco,
                cidade: editCidade,
                estado: editEstado,
                pais: editPais,
            });
            setIsEditPopupOpen(false);
            await getAllLocais();
        } catch (error) {
            console.log("Erro ao atualizar local");
        }
    };

    return (
        <Container>
            <Header />
            <Wrapper>
                <div>
                    <h2>Locais</h2>
                </div>
                <Form onSubmit={handleCreate}>
                    <Input
                        className="nome"
                        placeholder="Nome"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <Input
                        className="endereço"
                        placeholder="Endereço"
                        type="text"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    />
                    <Input
                        className="cidade"
                        placeholder="Cidade"
                        type="text"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    />
                    <Input
                        className="estado"
                        placeholder="Estado"
                        type="text"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                    />
                    <Input
                        className="pais"
                        placeholder="País"
                        type="text"
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                    />
                    <Button type="submit">
                        <MdAddCircleOutline />
                    </Button>
                </Form>
            </Wrapper>

            <Wrapper>
                <Input
                placeholder="Pesquisar"
                type="text" 
                value={search}
                onChange={handleSearch}
                />
            </Wrapper>

            <Wrapper>
                <LocaisList
                    locais={locais} 
                    setLocais={setLocais} 
                    handleEdit={handleEdit} 
                />
            </Wrapper>

            {isEditPopupOpen && (
                <PopUp color="red">
                    <Form onSubmit={handleUpdateLocal}>
                        <Input
                            placeholder="Nome"
                            type="text"
                            value={editNome}
                            onChange={(e) => setEditNome(e.target.value)}
                        />
                        <Input
                            placeholder="Endereço"
                            type="text"
                            value={editEndereco}
                            onChange={(e) => setEditEndereco(e.target.value)}
                        />
                        <Input
                            placeholder="Cidade"
                            type="text"
                            value={editCidade}
                            onChange={(e) => setEditCidade(e.target.value)}
                        />
                        <Input
                            placeholder="Estado"
                            type="text"
                            value={editEstado}
                            onChange={(e) => setEditEstado(e.target.value)}
                        />
                        <Input
                            placeholder="País"
                            type="text"
                            value={editPais}
                            onChange={(e) => setEditPais(e.target.value)}
                        />
                        <Button type="submit">
                            <MdCheckCircle size={30} color="green" />
                        </Button>
                        <ImCancelCircle onClick={() => setIsEditPopupOpen(false)} size={60} color="red" cursor="pointer" />
                    </Form>
                </PopUp>
            )}
        </Container>
    );
}