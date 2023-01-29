
import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import logo from "../../assets/logo.png"
import axios from "axios"

export default function SignUpPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSignUp(e) {
        e.preventDefault()
        setIsLoading(true)

        const URL = `${process.env.REACT_APP_API_URL}/signUp`;
		const body = form;

		try {
            if (body.password === body.confirmPassword){
                const res = await axios.post(URL, body);
                console.log(res.data)
                navigate('/');
            } else {
                setIsLoading(false)
                alert("Senhas não são iguais")
            }
			
		} catch (err) {
            setIsLoading(false)
			alert(err.response.data);
		}
    }

    return (
        <Container>
            <img src={logo} alt="logo img"/>
            <StyledForm onSubmit={handleSignUp}>
                <StyledInput
                    name="name"
                    placeholder="Nome"
                    type="text"
                    required
                    disabled={isLoading}
                    value={form.name}
                    onChange={handleForm}
                />
                <StyledInput
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                    disabled={isLoading}
                    value={form.email}
                    onChange={handleForm}
                />
                <StyledInput
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                    disabled={isLoading}
                    value={form.password}
                    onChange={handleForm}
                />
                <StyledInput
                    name="confirmPassword"
                    placeholder="Confirme a senha"
                    type="password"
                    required
                    disabled={isLoading}
                    value={form.confirmPassword}
                    onChange={handleForm}
                />
                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Cadastrar"}
                </StyledButton>
            </StyledForm>

            <StyledLink to="/">
                Já tem uma conta? Entre agora!
            </StyledLink>
        </Container>
    )
}