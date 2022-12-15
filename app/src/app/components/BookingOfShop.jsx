import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Typography} from '@mui/material';

const BookingOfShop = ({shop}) => {

    const handleDelete = async (id) => {
        console.log(id);
    }
    return (
        <Box sx={{marginTop: 5}}>
            <Typography variant="h6">
                Bookings
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Numéro de telephone</TableCell>
                        <TableCell>Titre du post</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {shop.bookings && shop.bookings.map((booking) => (
                        <TableRow key={booking._id}>
                            <TableCell>
                                {booking._id}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {booking.telephoneNumber}
                            </TableCell>
                            <TableCell>
                                {
                                    shop.posts && shop.posts.map(
                                        (post) => post._id === booking.post && <p>{post.title}</p>
                                    )
                                }
                            </TableCell>
                            <TableCell>
                                <Button color="error" variant="contained" onClick={()=> handleDelete(booking._id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
 
export default BookingOfShop;