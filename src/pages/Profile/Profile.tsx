import "./styles.scss"
import ImageDefaultProfile from '../../assets/profile-image.png'
import Stars from '../../assets/stars.jpg'
import { ButtonWhite } from "../../components/components"
import Ellipses from "../../components/Ellipses/Ellipses"
import { useEffect, useState } from "react"
import { HttpRequest } from "../../utils/api"

export default function Profile() {
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userImage, setUserImage] = useState(null)

    const refreshToken = () => {
        const body = {
            'refresh_token': localStorage.getItem('refresh_token')
        }
        HttpRequest({ url: 'auth/refresh-token', method: 'POST', body, config: { headers: { 'Authorization': `Bearer ${localStorage.getItem('id_token')}` } } })
            .then((res) => {
                console.log(res)
                localStorage.setItem('access_token', res.data.access_token)
                localStorage.setItem('id_token', res.data.id_token)
                loadDataUser()
            })
    }

    const loadDataUser = () => {
        HttpRequest({ url: 'user/profile', method: 'GET', config: { headers: { 'Authorization': `Bearer ${localStorage.getItem('id_token')}` } } })
            .then((res) => {
                if (res.message) {
                    refreshToken()
                } else {
                    console.log(res)
                    setUserFirstName(res.data.family.first_name.name);
                    setUserLastName(res.data.family.last_name.name);
                    setUserImage(res.data.profile_picture);
                }
            })
    }

    useEffect(() => {
        loadDataUser();
        setTimeout(() => {
            loadDataUser();
        }, 50000)
    }, [])

    return (
        <>
            <div className="background-profile">
                <img className="stars" src={Stars}></img>
                <div className="info-user">
                    <p className="firstname">{userFirstName}</p>
                    <p className="lastname">{userLastName}</p>
                    <div className="activity-container">
                        <p className="activity">Ativo há pelo menos</p>
                        <p className="minutes">42 minutos</p>
                    </div>
                    <ButtonWhite>Sair de aca .so</ButtonWhite>
                </div>
                <div className="elipses">
                    <Ellipses />
                    <div className="background-image">
                        <img src={userImage ? userImage : ImageDefaultProfile} className="image-profile" ></img>
                    </div>
                </div>
            </div>
        </>
    )
}