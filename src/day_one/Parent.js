import ProfileHeader from "./ProfileHeader";
import UserInfo from "./UserInfo";
import Hobbies from "./HobbiesList";
import "./Timer.css";

export default function Me(){
    const name = "Jhon";
    const surname = "Joe";
    const hobbies = ["Хобби 1", "Хобби 2", "Хобби 3"];

    return(
        <div className="profile-container">
            <ProfileHeader></ProfileHeader>
            <UserInfo name={name} surname={surname}></UserInfo>
            <Hobbies hobbies={[...hobbies]}></Hobbies>
        </div>
    )
}