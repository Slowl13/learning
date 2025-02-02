export default function ProfileHeader(props){
    return (
        <div>
            <p>Имя: {props.name}</p>
            <p>Фамилия: {props.surname}</p>
        </div>
    )
}