import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            {children}
            {/* <Outlet /> */}
        </>
    );
}

export default HeaderOnly;
