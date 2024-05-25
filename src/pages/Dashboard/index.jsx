import { useEffect, useState } from "react";
import { 
    Container, WrapperPesquisar, WrapperFiltros, Grid, 
    EventCard, Input, Select, Option 
} from "./styles";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

export function Dashboard() {
    const [eventos, setEventos] = useState([]);
    const [search, setSearch] = useState("");
    const [categoriaId, setCategoriaId] = useState("");
    const [localId, setLocalId] = useState("");
    const [dataEvento, setDataEvento] = useState("");

    const [categorias, setCategorias] = useState([]);
    const [locais, setLocais] = useState([]);

    useEffect(() => {
        async function fetchInitialData() {
            try {
                const [categoriasResponse, locaisResponse] = await Promise.all([
                    api.get("/categorias"),
                    api.get("/locais")
                ]);
                setCategorias(categoriasResponse.data);
                setLocais(locaisResponse.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }

        fetchInitialData();
    }, []);

    useEffect(() => {
        async function fetchFilteredEvents() {
            try {
                const response = await api.get("/eventos/filtrar", {
                    params: {
                        nome: search || undefined,
                        categoria: categoriaId || undefined,
                        local: localId || undefined,
                        data: dataEvento || undefined
                    }
                });
                console.log("Resposta pesquisa:", response.data); // Log para verificar os eventos recebidos
                setEventos(response.data);
            } catch (error) {
                console.error("Erro ao buscar eventos:", error);
            }
        }

        fetchFilteredEvents();
    }, [search, categoriaId, localId, dataEvento]);

    return (
        <Container>
            <Header />
            <WrapperPesquisar>
                <Input 
                    placeholder="Pesquisar" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </WrapperPesquisar>
            <WrapperFiltros>
                <Select value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)}>
                    <Option value="">Categoria</Option>
                    {categorias.map((categoria) => (
                        <Option key={categoria.id} value={categoria.id}>{categoria.nome}</Option>
                    ))}
                </Select>
                <Select value={localId} onChange={(e) => setLocalId(e.target.value)}>
                    <Option value="">Local</Option>
                    {locais.map((local) => (
                        <Option key={local.id} value={local.id}>{local.nome}</Option>
                    ))}
                </Select>
                <Input 
                    type="datetime-local" 
                    value={dataEvento} 
                    onChange={(e) => setDataEvento(e.target.value)} 
                />
            </WrapperFiltros>
            <Grid>
                {eventos.map((evento) => (
                    <EventCard key={evento.id}>
                        <h3>{evento.nome}</h3>
                        <p>{new Date(evento.data_evento).toLocaleDateString()}</p>
                        <p>{evento.descricao}</p>
                        <p>Categoria: {evento.categoria.nome}</p>
                        <p>Local: {evento.local.nome}</p>
                    </EventCard>
                ))}
            </Grid>
        </Container>
    );
}