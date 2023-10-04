import BackgroundLogin from "../../components/BackgroundLogin/backgroundLogin"
import "./styles.scss"
import ImgLogo from "../../assets/login-marca-assets-negativa-09.svg"
import { Input, Logo } from "../../components/components"

export default function Register() {
    return (
        <>
            <div className="view-login">
                <BackgroundLogin />
            </div>
            <div className="content-login">
                <Logo src={ImgLogo} alt="Logo" />
                <p>c a d a s t r o</p>
                <div className="form">
                    <div className="container-name">
                        <div className="input-label">
                            <label>Primeiro nome*</label>
                            <Input placeholder="Primeiro nome" />
                        </div>
                        <div className="input-label" id="last-name">
                            <label>Ultimo nome*</label>
                            <Input placeholder="Último nome" />
                        </div>
                    </div>
                    <div className="input-label">
                        <label>E-mail*</label>
                        <Input placeholder="******" />
                    </div>
                    <div className="input-label">
                        <label>Senha*</label>
                        <Input placeholder="******" />
                    </div>
                    <div className="input-label">
                        <label>Confirme a senha*</label>
                        <Input placeholder="******" />
                    </div>
                    <div className="button-label">
                        <label>Não possui uma conta?</label>
                        <button className="new-account">Criar minha conta em aca.so</button>
                    </div>
                    <button className="back-login">Voltar ao login</button>
                </div>
            </div>
        </>
    )
}