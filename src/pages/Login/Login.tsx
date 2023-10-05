import BackgroundLogin from "../../components/BackgroundLogin/backgroundLogin"
import "./styles.scss"
import ImgLogo from "../../assets/login-marca-assets-negativa-09.svg"
import { Input, Logo } from "../../components/components"

export default function Login() {

    return (
        <>
            <div className="view-login">
                <BackgroundLogin classBackground={'background'}/>
            </div>
            <div className="content-login">
                <Logo src={ImgLogo} alt="Logo" />
                <p>l o g i n</p>
                <div className="form">
                    <div className="input-label">
                        <label>E-mail</label>
                        <Input placeholder="Seu@e-mail.com" />
                    </div>
                    <div className="input-label">
                        <label>Senha</label>
                        <Input placeholder="******" />
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