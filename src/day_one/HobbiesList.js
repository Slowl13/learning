export default function Hobbies(props){

    return (
        <div>
            <h2>Мои хобби</h2>
            {   
                props.hobbies.length > 0 
                ? <ul className="hobbies-list">
                    {props.hobbies.map((elem, index) => (<li key={index}>{elem}</li>))}
                </ul> 
                : <p>Список хобби пуст</p>}
        </div>
    )
}