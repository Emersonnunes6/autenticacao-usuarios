import BackgroundLogin from "../../components/BackgroundLogin/backgroundLogin"
import "./styles.scss"
import ImgLogo from "../../assets/login-marca-assets-negativa-09.svg"
import { ButtonBlue, ButtonWhite, Input, Logo } from "../../components/components"

export default function ConfirmEmail() {
    return (
        <>
            <div className="view-login">
                <BackgroundLogin classBackground={'background'}/>
            </div>
            <div className="content-login">
                <Logo src={ImgLogo} alt="Logo" />
                <div className="title">
                    <p>c o n f i r m a r </p>
                    <p>e - m a i l</p>
                </div>
                <div className="form">
                    <div className="input-label">
                        <label>Código</label>
                        <Input placeholder="Digite o código recebido..." />
                    </div>
                    <ButtonWhite>Confirmar e-mail</ButtonWhite>
                    <div className="button-label">
                        <label>Não recebeu o código?</label>
                        <ButtonBlue>Aguarde 1:59 para reenviar</ButtonBlue>
                    </div>
                </div>
            </div>
        </>
    )
}