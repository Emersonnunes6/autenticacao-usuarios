import "./styles.scss"
import ImageDefaultProfile from '../../assets/profile-image.png'
import Stars from '../../assets/stars.jpg'
import { ButtonWhite } from "../../components/components"
import Ellipses from "../../components/Ellipses/Ellipses"

export default function Profile() {

    return (
        <>
            <div className="background-profile">
                <img className="stars" src={Stars}></img>
                <div className="info-user">
                    <p className="firstname">João</p>
                    <p className="lastname">Carlos</p>
                    <div className="activity-container">
                        <p className="activity">Ativo há pelo menos</p>
                        <p className="minutes">42 minutos</p>
                    </div>
                    <ButtonWhite>Sair de aca .so</ButtonWhite>
                </div>
                <div className="elipses">
                    <Ellipses />
                    <div className="background-image">
                        <img src={ImageDefaultProfile} className="image-profile" ></img>
                    </div>
                </div>
            </div>
        </>
    )
}