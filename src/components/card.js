import { styled } from "@mui/material/styles";
import { Box, Card, TextField } from "@mui/material";
export const CustomBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center ",
  height: "100vh",
  background: "#01579b",
}));

export const MyCard = styled(Card)(({ theme }) => ({
  width: 500,
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));
export const Form = styled("form")(() => ({
  margin: "10px 0",
  justifyContent: "center",
}));
export const FileType = styled("input")(() => ({
  padding: "8px",
  display: "none",
}));
export const UploadImg = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  padding:'8px 0',
  '& .imgBox': {
    height: '80px',
    width: '80px',
    border:'1px solid gray',
    borderRadius: '50%',
    marginRight: '8px',
    '& img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      borderRadius:"50%"
    }
  }
}))
export const Label = styled("label")(() => ({
  border: "1px solid #ccc",
  display: "inline-flex",
  padding: "6px 12px",
  cursor: "pointer",
  marginBottom: "6px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  "&: hover": {
    background: "gray",
    color: "white",
    borderRadius: "5px",
    outLine:'none'
  },
  "& .icon": {
    fontSize: "20px",
    marginRight: "8px",
  },
}));
export const Input = styled(TextField)(() => ({
  margin: "8px 0",
  width: "100%",
}));
