import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <body>
        <Header/>
        <Outlet/>

        </body>
    );
};

export default MainLayout;