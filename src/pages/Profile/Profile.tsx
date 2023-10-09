import "./styles.scss"
import ImageDefaultProfile from '../../assets/astronaut-svgrepo-com.svg'
import Stars from '../../assets/stars.jpg'
import { ButtonWhite } from "../../components/components"
import Ellipses from "../../components/Ellipses/Ellipses"
import { useEffect, useState, useContext } from "react"
import { HttpRequest } from "../../utils/api"
import { Navigate, useNavigate } from 'react-router-dom'
import { UserAuthContext } from "../../contexts/userAuth"
import moment from "moment"

export default function Profile() {
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userImage, setUserImage] = useState(null);
    const navigate = useNavigate();

    const { isAuthenticated, setIsAuthenticated } = useContext(UserAuthContext)

    const refreshToken = () => {
        const body = {
            'refresh_token': localStorage.getItem('refresh_token')
        }
        HttpRequest({ url: 'auth/refresh-token', method: 'POST', body, config: { headers: { 'Authorization': `Bearer ${localStorage.getItem('id_token')}` } } })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access_token)
                localStorage.setItem('id_token', res.data.id_token)
                loadDataUser()
            })
    }

    const loadDataUser = () => {
        HttpRequest({ url: 'user/profile', method: 'GET', config: { headers: { 'Authorization': `Bearer ${localStorage.getItem('id_token')}` } } })
            .then((res) => {
                if (res.message) {
                    if (res.message === "Refresh Token expired") {
                        localStorage.clear();
                        navigate('/login');
                    }
                    refreshToken();
                } else {
                    const minutesConected = moment(moment().format()).diff(moment(res.data.last_access_at).subtract(3, 'hour'), 'minutes')
                    localStorage.setItem('minutes-conected', minutesConected.toString())

                    setUserFirstName(res.data.family.first_name.name);
                    setUserLastName(res.data.family.last_name.name);
                    setUserImage(res.data.profile_picture);
                }
            })
    }


    const logout = () => {
        setIsAuthenticated(false);
        localStorage.clear();
        navigate('/login');
    }

    useEffect(() => {
        loadDataUser();
    }, [])

    return (
        <>
            {!isAuthenticated ? <Navigate to="/login" replace /> :
                <div className="background-profile">
                    <img className="stars" src={Stars}></img>
                    <div className="info-user">
                        <p className="firstname">{userFirstName}</p>
                        <p className="lastname">{userLastName}</p>
                        <div className="activity-container">
                            <p className="activity">Ativo há pelo menos</p>
                            <p className="minutes">{`${localStorage.getItem('minutes-conected')} ${localStorage.getItem('minutes-conected') === '1' ? 'minuto' : 'minutos'}`}</p>
                        </div>
                        <ButtonWhite onClick={() => logout()}>Sair de aca .so</ButtonWhite>
                    </div>
                    <div className="elipses">
                        <Ellipses />
                        <div className="background-image">
                            <img src={userImage ? userImage : ImageDefaultProfile} className="image-profile" ></img>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}