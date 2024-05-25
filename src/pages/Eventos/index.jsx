import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { format, parseISO } from 'date-fns';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form, Wrapper, Wrapper1, Wrapper2, Button, Section, PopUp } from "./styles";
import { MdAddCircleOutline, MdModeEditOutline, MdClose, MdCheckCircle, MdOutlineCancel } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

export function Eventos() {
    const [nome, setNome] = useState("");
    const [dataEvento, setDataEvento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [eventos, setEventos] = useState([]);
    const [search, setSearch] = useState("");

    const [categorias, setCategorias] = useState([]);
    const [categoriaId, setCategoriaId] = useState("");

    const [locais, setLocais] = useState([]);
    const [localId, setLocalId] = useState("");

    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
    const [editNome, setEditNome] = useState("");
    const [editDataEvento, setEditDataEvento] = useState("");
    const [editDescricao, setEditDescricao] = useState("");
    const [editCategoriaId, setEditCategoriaId] = useState("");
    const [editLocalId, setEditLocalId] = useState("");
    const [editId, setEditId] = useState(null);

    const { user } = useAuth();
    const usuarioId = user ? user.id : null;

    function handleDateFormat(dateString) {
        const formattedDate = format(new Date(dateString), "dd/MM/yyyy HH:mm");
        return formattedDate;
    }

    function formatDataInput(data) {
        if (!data) return "";
        return format(parseISO(data), "yyyy-MM-dd'T'HH:mm");
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        if (!nome || !dataEvento || !descricao || !categoriaId || !localId) {
            return alert("Preencha todos os campos!");
        }

        api.post("/eventos", { nome, data_evento: dataEvento, descricao, categoria_id: categoriaId, local_id: localId, usuario_id: usuarioId })
            .then((response) => {
                alert("Evento cadastrado com sucesso!");
                fetchEventos();
                setEventos([...eventos, response.data]);
                setNome("");
                setDataEvento("");
                setDescricao("");
                setCategoriaId("");
                setLocalId("");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar o evento!");
                }
            });
    }

    async function fetchEventos() {
        try {
            const eventosResponse = await api.get("/eventos", {
                params: { nome: search }
            });
            console.log('Eventos:', eventosResponse.data);
            setEventos(eventosResponse.data);

            const categoriasResponse = await api.get("/categorias");
            console.log('Categorias:', categoriasResponse.data);
            setCategorias(categoriasResponse.data);

            const locaisResponse = await api.get("/locais");
            console.log('Locais:', locaisResponse.data);
            setLocais(locaisResponse.data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    useEffect(() => {
        fetchEventos();
    }, [search]);

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    function handleDelete(id) {
        if (window.confirm("Você tem certeza que deseja excluir este evento?")) {
            api.delete(`/eventos/${id}`)
                .then(() => {
                    alert("Evento excluído com sucesso!");
                    setEventos(eventos.filter(evento => evento.id !== id));
                })
                .catch(error => {
                    if (error.response) {
                        alert(error.response.data.message);
                    } else {
                        alert("Não foi possível excluir o evento!");
                    }
                });
        }
    }

    function handleEdit(evento) {
        setEditNome(evento.nome);
        setEditDataEvento(evento.data_evento);
        setEditDescricao(evento.descricao);
        setEditCategoriaId(evento.categoria_id);
        setEditLocalId(evento.local_id);
        setEditId(evento.id);
        setIsEditPopupOpen(true);
    }

    function handleUpdate(event) {
        event.preventDefault();
        if (!editNome || !editDataEvento || !editDescricao || !editCategoriaId || !editLocalId) {
            return alert("Preencha todos os campos!");
        }

        api.put(`/eventos/${editId}`, { nome: editNome, data_evento: editDataEvento, descricao: editDescricao, categoria_id: editCategoriaId, local_id: editLocalId })
            .then((response) => {
                alert("Evento atualizado com sucesso!");
                setEventos(eventos.map(evento => evento.id === editId ? response.data : evento));
                setIsEditPopupOpen(false);
                setEditNome("");
                setEditDataEvento("");
                setEditDescricao("");
                setEditCategoriaId("");
                setEditLocalId("");
                setEditId(null);
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível atualizar o evento!");
                }
            });
    }


    return (
        <Container>
            <Header />
            <Wrapper>
                <h2>Eventos</h2>
                <Form onSubmit={handleSubmit}>
                    <Input
                        placeholder="Nome"
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <Input
                        placeholder="Data do evento"
                        type="datetime-local"
                        value={dataEvento}
                        onChange={e => setDataEvento(e.target.value)}
                    />
                    <Input
                        placeholder="Descrição"
                        type="text"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <select value={categoriaId} onChange={e => setCategoriaId(e.target.value)}>
                        <option value="">Categoria</option>
                        {categorias.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                        ))}
                    </select>
                    <select value={localId} onChange={e => setLocalId(e.target.value)}>
                        <option value="">Local</option>
                        {locais.map(local => (
                            <option key={local.id} value={local.id}>{local.nome}</option>
                        ))}
                    </select>
                    
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
                {eventos.map((evento) => (
                    <Section key={evento.id}>
                        <div>
                            <h3>{evento.nome}</h3>
                            <p>Data do evento: {handleDateFormat(evento.data_evento)}</p>
                            <p>Descrição: {evento.descricao}</p>
                            <p>Categoria: {evento.categoria?.nome}</p>
                            <p>Local: {evento.local?.nome}</p>
                        </div>
                        <Wrapper1>
                            <MdModeEditOutline onClick={() => handleEdit(evento)} />
                            <FaTrash onClick={() => handleDelete(evento.id)} />
                        </Wrapper1>
                        
                    </Section>
                ))}
            </Wrapper>

                {/* update */}
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
                            placeholder="Data do evento"
                            type="datetime-local"
                            value={formatDataInput(editDataEvento)}
                            onChange={e => setDataEvento(e.target.value)}
                        />
                        <Input
                            placeholder="Descrição"
                            type="text"
                            value={editDescricao}
                            onChange={e => setEditDescricao(e.target.value)}
                        />
                        <select value={editCategoriaId} onChange={e => setEditCategoriaId(e.target.value)}>
                            <option value="">Categoria</option>
                            {categorias.map(categoria => (
                                <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                            ))}
                        </select>
                        <select value={editLocalId} onChange={e => setEditLocalId(e.target.value)}>
                            <option value="">Local</option>
                            {locais.map(local => (
                                <option key={local.id} value={local.id}>{local.nome}</option>
                            ))}
                        </select>
                        <Wrapper2>
                            <Button type="submit">
                            <MdCheckCircle size={30} color="green" />
                            </Button>
                            <MdOutlineCancel onClick={() => setIsEditPopupOpen(false)} size={30} color="red" cursor="pointer" />
                        </Wrapper2>    
                    </Form>
                </PopUp>
            )}
        </Container>
    );
}
