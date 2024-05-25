import { getLocais, deleteLocalById } from "../../services/LocaisService";
import { useEffect } from "react";
import { Section } from "../../pages/Locais/styles";

import { MdModeEditOutline } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";

export function LocaisList({ locais, setLocais, handleEdit }) {
    const getAllLocais = async () => {
        try {
            const data = await getLocais();
            setLocais(data);
        } catch {
            console.log("Erro ao buscar locais");
        }
    };

    useEffect(() => {
        getAllLocais();
    }, []);

    const handleDeleteLocal = async (id) => {
        try {
            if (window.confirm("Você tem certeza que deseja excluir este local?")) {
                await deleteLocalById(id);
                getAllLocais();
            }
            alert("Local excluído com sucesso!");
        } catch (error) {
            console.log("Erro ao deletar local");
        }
    };

    return (
        <>
            <ul>
                {locais && locais.length > 0 ? (
                    locais.map((local) => (
                        <Section key={local.id}>
                            <div>
                                <h3>{local.nome}</h3>
                                <p>{local.endereco}</p>
                                <p>{local.cidade}</p>
                                <p>{local.estado}</p>
                                <p>{local.pais}</p>
                            </div>
                            <div>
                                <MdModeEditOutline onClick={() => handleEdit(local)} />
                                <FaTrashCan onClick={() => handleDeleteLocal(local.id)} />
                            </div>
                        </Section>
                    ))
                ) : (
                    <p>Nenhum local encontrado...</p>
                )}
            </ul>
        </>
    );
}
