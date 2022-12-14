import {Select, MenuItem, InputLabel, FormControl} from '@mui/material';

const HeightFilter = ({height, setHeight}) => {
    return (
        <FormControl sx={{
            width: "200px"
        }}>
            <InputLabel id="demo-simple-select-label">Style</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Style"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            >
                <MenuItem value={140}>140cm</MenuItem>
                <MenuItem value={145}>145cm</MenuItem>
                <MenuItem value={150}>150cm</MenuItem>
                <MenuItem value={155}>155cm</MenuItem>
                <MenuItem value={160}>160cm</MenuItem>
                <MenuItem value={165}>165cm</MenuItem>
                <MenuItem value={170}>170cm</MenuItem>
                <MenuItem value={175}>175cm</MenuItem>
                <MenuItem value={180}>180cm</MenuItem>
                <MenuItem value={185}>185cm</MenuItem>
                <MenuItem value={190}>190cm</MenuItem>

            </Select>
        </FormControl>
    );
}
 
export default HeightFilter;