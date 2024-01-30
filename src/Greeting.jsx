import { useState } from "react"

const Greeting = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const onClick = () => setLoggedIn(true);
    return(
        <div className="greeting-container">
            <p>Welcome to RTL</p>
            {isLoggedIn && <p>Hello John</p>}
            <button type="button" onClick={onClick}>SignIn</button>
        </div>
    )
}

export default Greeting;