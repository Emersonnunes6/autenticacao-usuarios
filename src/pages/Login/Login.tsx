import BackgroundLogin from "../../components/BackgroundLogin/backgroundLogin"
import "./styles.scss"
import Logo from "../../../public/images/login-marca-assets-negativa-09.svg"

export default function Login() {

    return (
        <>
            <div className="view-login">
                <BackgroundLogin />
            </div>
            <div className="content-login">
                <img src={Logo} alt="Logo" />
                <p>l o g i n</p>
                <div className="form">
                    <div className="input-label">
                        <label>E-mail</label>
                        <input placeholder="Seu@e-mail.com"></input>
                    </div>
                    <div className="input-label">
                        <label>Senha</label>
                        <input placeholder="******"></input>
                    </div>
                    <button className="button-login">Entrar</button>
                    <div className="button-label">
                        <label>Não possui uma conta?</label>
                        <button className="button-forget">Criar minha conta em aca.so</button>
                    </div>
                </div>
            </div>
        </>
    )
}