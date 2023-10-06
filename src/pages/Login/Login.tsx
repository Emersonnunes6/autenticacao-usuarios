import BackgroundLogin from "../../components/BackgroundLogin/backgroundLogin"
import "./styles.scss"
import { useForm, SubmitHandler } from "react-hook-form"
import ImgLogo from "../../assets/login-marca-assets-negativa-09.svg"
import { useNavigate } from 'react-router-dom'
import { Input, Logo } from "../../components/components"
import CustomInput from "../../components/CustomInput/CustomInput"
import { HttpRequest } from "../../utils/api"
import { UserAuthContext } from "../../contexts/userAuth"
import { useContext } from "react"

interface InputsFormLogin {
    email: string,
    password: string,
}

export default function Login() {

    const { isAuthenticated, setIsAuthenticated } = useContext(UserAuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm<InputsFormLogin>()

    const onSubmit: SubmitHandler<InputsFormLogin> = (data: InputsFormLogin) => {
        HttpRequest({ url: 'auth/v2/login', method: 'POST', body: data })
            .then((res: any) => {
                if (res.message) {
                    alert(res.message)
                } else {
                    setIsAuthenticated(true)
                    console.log(isAuthenticated)
                    reset();
                    localStorage.setItem('user-email', data.email);
                    localStorage.setItem('access_token', res.data.token.access_token)
                    localStorage.setItem('id_token', res.data.token.id_token)
                    localStorage.setItem('refresh_token', res.data.token.refresh_token)
                    navigate('/profile');
                }
            }).catch((err: any) => {
                console.log(err)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="view-login">
                    <BackgroundLogin classBackground={'background'} />
                </div>
                <div className="content-login">
                    <Logo src={ImgLogo} alt="Logo" />
                    <p>l o g i n</p>
                    <div className="form">
                        <CustomInput
                            register={{ ...register("email") }}
                            label='E-mail'
                            placeholder="Seu@e-mail.com"
                            className="label-text"
                        />
                        <CustomInput
                            register={{ ...register("password") }}
                            label='Senha'
                            type="password"
                            placeholder="******"
                            className="label-text"
                        />
                        <button className="button-login">Entrar</button>
                        <div className="button-label">
                            <label className="label-button">Não possui uma conta?</label>
                            <button onClick={() => navigate('/register')} className="button-forget">Criar minha conta em aca.so</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}