import BackgroundLogin from "../../components/BackgroundLogin/backgroundLogin"
import "./styles.scss"
import { useNavigate } from 'react-router-dom'
import ImgLogo from "../../assets/login-marca-assets-negativa-09.svg"
import { ButtonBlue, ButtonWhite, Input, LabelErrorMessage, Logo } from "../../components/components"
import { useState, useEffect } from "react"
import { HttpRequest } from "../../utils/api"

export default function ConfirmEmail() {
    const [hasError, setHasError] = useState(false);
    const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(2 * 60);
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [codeEmail, setCodeEmail] = useState('')

    const minutes = Math.floor(totalTimeInSeconds / 60)
    const seconds = totalTimeInSeconds % 60

    const navigate = useNavigate()

    useEffect(() => {
        if (totalTimeInSeconds === 0) {
            setButtonDisabled(!setButtonDisabled);
        } else {
            setTimeout(() => {
                setTotalTimeInSeconds(totalTimeInSeconds - 1);
            }, 1000)
        }
    }, [totalTimeInSeconds])

    const confirmCode = () => {
        const body = {
            "email": localStorage.getItem('user-email'),
            "confirmation_code": codeEmail
        }

        HttpRequest({ url: 'auth/v2/confirm-sign-up', method: 'POST', body })
            .then((res) => {
                if (res.message) {
                    setHasError(true)
                } else {
                    setCodeEmail('');
                    navigate('/login')
                }
            })
    }

    const resendConfirmEmail = () => {
        const body = {
            'email': localStorage.getItem('user-email')
        }
        HttpRequest({ url: 'auth/resend-confirmation-code', method: 'POST', body })
            .then(() => {
                alert('E-mail reenviado!')
            })
    }

    return (
        <>

            <div className="view-login">
                <BackgroundLogin classBackground={'background'} />
            </div>
            <div className="content-login">
                <Logo src={ImgLogo} alt="Logo" />
                <div className="title">
                    <p>c o n f i r m a r </p>
                    <p>e - m a i l</p>
                </div>
                <div className="form">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        confirmCode()
                    }}>
                        <div className="input-label">
                            <label className="label-text">Código</label>
                            <Input
                                value={codeEmail}
                                onChange={e => setCodeEmail(e.target.value)}
                                onFocus={() => setHasError(false)}
                                className={hasError ? 'input-error' : ''}
                                placeholder="Digite o código recebido..."
                            />
                            {hasError && <LabelErrorMessage>Código incorreto</LabelErrorMessage>}
                        </div>
                        <ButtonWhite>Confirmar e-mail</ButtonWhite>
                    </form>
                    <div className="button-label">
                        <label className="label-text">Não recebeu o código?</label>
                        <ButtonBlue
                            onClick={() => resendConfirmEmail()}
                            disabled={buttonDisabled}>
                            {!buttonDisabled ? 'Reenviar código' :
                                `Aguarde ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} para reenviar`}
                        </ButtonBlue>
                    </div>
                </div>
            </div >
        </>
    )
}