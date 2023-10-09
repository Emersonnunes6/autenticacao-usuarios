import BackgroundLogin from "../../components/BackgroundLogin/backgroundLogin"
import "./styles.scss"
import ImgLogo from "../../assets/login-marca-assets-negativa-09.svg"
import { ButtonWhite, LabelErrorMessage, Logo, PasswordViewControl } from "../../components/components"
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { HttpRequest } from "../../utils/api"
import CustomInput from "../../components/CustomInput/CustomInput"
import Eye from '../../assets/eye-password.svg'

interface InputsForm {
    email: string,
    first_name: string,
    last_name: string,
    password: string,
}

export default function Register() {
    const [hasError, setHasError] = useState(false);
    const [passwordView, setPasswordView] = useState(false)
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm<InputsForm>()

    const onSubmit: SubmitHandler<InputsForm> = (data: InputsForm) => {
        if (data.password === passwordConfirmation) {
            HttpRequest({ url: 'auth/sign-up', method: 'POST', body: data })
                .then((res: any) => {
                    if (res.message) {
                        alert(res.message)
                    } else {
                        reset();
                        navigate('/confirmEmail');
                        localStorage.setItem('user-email', data.email)
                    }
                }).catch((err: any) => {
                    alert(err)
                })
        } else {
            setHasError(true)
        }
    }

    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="view-register">
                    <BackgroundLogin classBackground={'background-register'} />
                </div>
                <div className="content-login">
                    <Logo src={ImgLogo} alt="Logo" />
                    <p>c a d a s t r o</p>
                    <div className="form">
                        <div className="container-name">
                            <CustomInput
                                register={{ ...register("first_name") }}
                                label='Primeiro nome*'
                                placeholder="Primeiro nome"
                                className="label-text"
                            />
                            <CustomInput
                                register={{ ...register("last_name") }}
                                label='Ultimo nome*'
                                placeholder="Último nome"
                                className="label-text"
                                id="last-name"
                            />
                        </div>
                        <CustomInput
                            register={{ ...register("email") }}
                            label='E-mail*'
                            placeholder="Seu@email.com"
                            className="label-text"
                        />
                        <div className="input-label">
                            <label className="label-text">Senha*</label>
                            <input
                                onFocus={() => setHasError(false)}
                                className={hasError ? 'input-error' : ''}
                                type={passwordView ? "text" : "password"}
                                {...register("password")}
                                placeholder="******"
                            />
                            <PasswordViewControl onClick={() => setPasswordView(!passwordView)} src={Eye}></PasswordViewControl>
                            {hasError && <LabelErrorMessage>Senhas não coincidem</LabelErrorMessage>}
                        </div>
                        <div className="input-label">
                            <label className="label-text">Confirme a senha*</label>
                            <input
                                onFocus={() => setHasError(false)}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                value={passwordConfirmation}
                                className={hasError ? 'input-error' : ''}
                                type={passwordView ? "text" : "password"}
                                placeholder="******"
                            />
                            <PasswordViewControl onClick={() => setPasswordView(!passwordView)} src={Eye}></PasswordViewControl>
                            {hasError && <LabelErrorMessage>Senhas não coincidem</LabelErrorMessage>}
                        </div>
                        <div className="button-label">
                            <label className="label-button">Não possui uma conta?</label>
                            <ButtonWhite className="new-account">Criar minha conta em aca.so</ButtonWhite>
                        </div>
                        <button onClick={() => navigate('/login')} className="back-login">Voltar ao login</button>
                    </div>
                </div>
            </form>
        </>
    )
}