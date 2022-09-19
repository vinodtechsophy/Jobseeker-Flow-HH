import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  date: {
    marginRight: "5px",
    marginLeft: "15px",
    border: "2px",
    width: "58.26px",
    [`& fieldset`]: {
      border: "1.55749px solid #AAB0CB",
      borderRadius: 12,
    },
  },

  year: {
    marginRight: "5px",
    marginLeft: "15px",
    width: "88.26px",
    [`& fieldset`]: {
      border: "1.55749px solid #AAB0CB",
      borderRadius: 12,
    },
  },
}));
