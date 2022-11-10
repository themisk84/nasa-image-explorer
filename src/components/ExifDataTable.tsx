import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";

interface ExifdataProps {
  apertureValue?: number;
  artist?: string;
  cfaPattern?: string;
  colorSpace?: string;
}

const ExifDataTable = ({
  apertureValue,
  artist,
  cfaPattern,
  colorSpace,
}: ExifdataProps): JSX.Element => {
  return (
    <Box>
      <Paper>
        <Box sx={{ marginLeft: "15px", paddingTop: "15px" }}>
          <Typography variant="h5">EXIF Data</Typography>
          <Typography variant="body2" color="text.secondary">
            Meatada stored on the image file
          </Typography>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Key</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>ApertureValue</TableCell>
              <TableCell>{apertureValue}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Artist</TableCell>
              <TableCell>{artist}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CFAPattern</TableCell>
              <TableCell>{cfaPattern}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ColorSpace</TableCell>
              <TableCell>{colorSpace}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default ExifDataTable;
