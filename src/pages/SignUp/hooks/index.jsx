import { useRef, useEffect } from "react";

export const useSignUp = () => {
    const name = useRef("");
    const email = useRef("");
    const password = useRef("");
    const loading = useRef(false);

    const handleSignUp = () => {
        console.log("Função de se registrar");
        console.log(`Email: ${email.current}`);
        console.log(`Email: ${email.current}`);
        console.log(`Password: ${password.current}`)
    };

    return {
        name,
        email,
        password,
        loading,
        handleSignUp
    };
};