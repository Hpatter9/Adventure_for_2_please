import Header from '../header/header';
import Footer from '../footer/footer';

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