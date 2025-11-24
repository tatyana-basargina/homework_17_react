import {Register} from "./Register.tsx";
import {Login} from "./Login.tsx";
import {NotFoundPage} from "./NotFoundPage.tsx";

export const HomePage = () => {
    return (<>
        HomePage

        <Register />
        <Login />
        <NotFoundPage />
    </>)
}