import Header from '../header/header';
import Footer from '../footer/Footer';

const Layout = ({children})=> {
    return (
        <>
            <Header />
            <main data-testid="main">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;