import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Brand, ContentForm } from "./styles";
import { useSignUp } from "./hooks";
import loadSpinner  from "../../assets/spined-loading.gif";

export const SignUp = () => {
    const { email, password, loading, handleSignUp } = useSignUp();

    return (
        <Container>
            <Brand>
                <svg
                    width="44"
                    height="48"
                    viewBox="0 0 44 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z"
                fill="#065E7C"
                />
                </svg>
                <h1>food explorer</h1>
            </Brand>

            <ContentForm>
                <form>
                    <h1>Crie sua conta</h1>
                    <Input
                        type="text"
                        id="name"
                        title="Seu nome"
                        placeholder="Exemplo: Maria da Silva"
                        onChange={({ target }) => email.current = target.value}
                        required
                    />

                    <Input
                        type="email"
                        id="email"
                        title="Email"
                        placeholder="Exemplo: exemplo@exemplo.com"
                        onChange={({ target }) => email.current = target.value}
                        required
                    />

                    <Input
                        type="password"
                        id="password"
                        title="Senha"
                        placeholder="No mínimo 6 caracteres"
                        onChange={({ target }) => password.current = target.value}
                        minLength="6"
                        required
                    />

                    <Button
                        title={!loading.current ? "Criar conta" : ""}
                        image={loading.current && loadSpinner}
                        onClick={handleSignUp}
                        disabled={loading.current}
                    />

                    <a>Já tenho uma conta</a>
                </form>
            </ContentForm>
        </Container>
    );
}
