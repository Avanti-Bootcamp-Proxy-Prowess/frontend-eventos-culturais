import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form, Wrapper, Wrapper1, Wrapper2, Button, Section, PopUp } from "./styles";

import { MdAddCircleOutline, MdModeEditOutline, MdClose, MdCheckCircle, MdOutlineCancel } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";

export function Categorias() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [search, setSearch] = useState("");

    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [editNome, setEditNome] = useState("");
    const [editDescricao, setEditDescricao] = useState("");
    const [editId, setEditId] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        if (!nome || !descricao) {
            return alert("Preencha todos os campos!");
        }

        api.post("/categorias", { nome, descricao })
            .then((response) => {
                alert("Categoria cadastrada com sucesso!");
                setCategorias([...categorias, response.data]);
                setNome("");
                setDescricao("");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar!");
                }
            });
    }

    useEffect(() => {
        async function fetchCategorias() {
            try {
                const response = await api.get("/categorias", {
                    params: { nome: search }
                });
                setCategorias(response.data);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        }
        fetchCategorias();
    }, [search]);

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    function handleDelete(id) {
        if (window.confirm("Você tem certeza que deseja excluir esta categoria?")) {
            api.delete(`/categorias/${id}`)
                .then(() => {
                    alert("Categoria excluída com sucesso!");
                    setCategorias(categorias.filter(categoria => categoria.id !== id));
                })
                .catch(error => {
                    if (error.response) {
                        alert(error.response.data.message);
                    } else {
                        alert("Não foi possível excluir!");
                    }
                });
        }
    }

    function handleEdit(categoria) {
        setEditNome(categoria.nome);
        setEditDescricao(categoria.descricao);
        setEditId(categoria.id);
        setIsEditPopupOpen(true);
    }

    function handleUpdate(event) {
        event.preventDefault();
        if (!editNome || !editDescricao) {
            return alert("Preencha todos os campos!");
        }

        api.put(`/categorias/${editId}`, { nome: editNome, descricao: editDescricao })
            .then((response) => {
                alert("Categoria atualizada com sucesso!");
                setCategorias(categorias.map(categoria => categoria.id === editId ? response.data : categoria));
                setIsEditPopupOpen(false);
                setEditNome("");
                setEditDescricao("");
                setEditId(null);
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível atualizar!");
                }
            });
    }

    return (
        <Container>
            <Header />
            <Wrapper>
                <h2>Categorias</h2>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Nome"
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <Input
                        placeholder="Descrição"
                        type="text"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <Button type="submit">
                        <MdAddCircleOutline />
                    </Button>
                </Form>
            </Wrapper>

            <Wrapper>
                <Input
                    placeholder="Pesquisa"
                    type="text"
                    value={search}
                    onChange={handleSearch}
                />
            </Wrapper>

        
            <Wrapper>
                {categorias.map((categoria) => (
                    <Section key={categoria.id}>
                        <div>
                            <h3>{categoria.nome}</h3>
                            <p>{categoria.descricao}</p>
                        </div>
                        <Wrapper1>
                            <MdModeEditOutline onClick={() => handleEdit(categoria)} />
                            <FaTrashCan onClick={() => handleDelete(categoria.id)} />
                        </Wrapper1>
                    </Section>
                ))}
            </Wrapper>

            {isEditPopupOpen && (
                <PopUp color="red">
                    <Form onSubmit={handleUpdate}>
                        <Input
                            placeholder="Nome"
                            type="text"
                            value={editNome}
                            onChange={e => setEditNome(e.target.value)}
                        />
                        <Input
                            placeholder="Descrição"
                            type="text"
                            value={editDescricao}
                            onChange={e => setEditDescricao(e.target.value)}
                        />
                        <Wrapper2>
                            <Button type="submit">
                                <MdCheckCircle size={30} color="green" />
                            </Button>
                            <MdOutlineCancel onClick={() => setIsEditPopupOpen(false)} size={30} color="red" cursor="pointer"/>
                            {/* <MdClose onClick={() => setIsEditPopupOpen(false)} size={78} color="red" cursor="pointer"/> */}
                        </Wrapper2>
                    </Form>
                </PopUp>
            )}
        </Container>
    );
}
