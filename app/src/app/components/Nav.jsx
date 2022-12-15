import { Link } from "react-router-dom";
import { Box} from "@mui/material";


const Nav = () => {
    return (
        <Box sx={{display: "flex", justifyContent: "space-around", m:3}}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
        </Box>
    );
}
 
export default Nav;