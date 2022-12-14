import Nav from "../components/Nav";

const MainLayout = ({children}) => {
    return (
        <>
            <header>
                <h1>My App</h1>
                <Nav />
            </header>
            <section>
                {children}
            </section>
        </>
    );
}
 
export default MainLayout;