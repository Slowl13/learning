import Children from "./Children"

export default function App({children}){
    return (
        <>
            <p>TEST BELOW</p>
            {children}
            <p>TEST UNDER</p>
        </>
    )
}