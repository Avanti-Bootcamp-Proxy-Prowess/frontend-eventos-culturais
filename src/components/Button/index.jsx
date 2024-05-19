import { Container } from "./styles";

export function Button({title, loading = false, ...rest}) {
    return (
        <Container 
            type="Button"
            disabled={loading}
            {...rest}
        >
            { loading ? 'Carregando...' : title}
        </Container>
    )
}