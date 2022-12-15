import { Box, Container } from "@mui/material";
import Nav from "../components/Nav";

const MainLayout = ({children}) => {
    return (
        <Container maxWidth="lg">
            <Box variant="header">
                <Nav />
            </Box>
            <Box variant="section">
                {children}
            </Box>
        </Container>
    );
}
 
export default MainLayout;