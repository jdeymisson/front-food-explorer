import { Container, Label, Input as InputComponent } from './styles';

export const Input = ({ id, title, ...rest }) => {
    return (
    <Container>
        <Label htmlFor={id}>{title}</Label>
        <InputComponent id={id} {...rest} />
    </Container>
    )
}