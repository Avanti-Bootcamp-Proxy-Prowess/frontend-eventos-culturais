// import { GridContainer, GridContainerItem } from "./styles";

// export function EventGrid() {
//     return (
//         <GridContainer>
//             <GridContainerItem>evento 1</GridContainerItem>
//             <GridContainerItem>evento 2</GridContainerItem>
//             <GridContainerItem>evento 3</GridContainerItem>
//             <GridContainerItem>evento 4</GridContainerItem>
//             <GridContainerItem>evento 5</GridContainerItem>
//             <GridContainerItem>evento 6</GridContainerItem>
//         </GridContainer>
//     )
// }

import React from 'react';

export function EventGrid({ eventos }) {
    return (
        <div>
            {eventos.map(evento => (
                <div key={evento.id}>
                    <h3>{evento.nome}</h3>
                    <p>Data: {new Date(evento.data_evento).toLocaleDateString()}</p>
                    <p>Local: {evento.local.nome}</p>
                    <p>Categoria: {evento.categoria.nome}</p>
                    <p>{evento.descricao}</p>
                </div>
            ))}
        </div>
    );
}
