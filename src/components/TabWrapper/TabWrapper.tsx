import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import "./TabWrapperStyles.css";
import { green, orange, pink } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  tabWrapperMainTabs: {
    "&.MuiTabs-root .MuiTabScrollButton-root svg": {
      color: "white",
    },
    height: "60px",
    borderRadius: "10px 10px 0 0",
    backgroundColor: "#4D6CD9",
  },
  tabWrapperMainTab: {
    marginTop: "7px",
    marginLeft: "3px",
    width: "24.5%", // "12%"
    textTransform: "none",
    color: "white !important",
    "&.Mui-selected": {
      marginTop: "6px",
      height: "15px",
      borderRadius: "15px ",
      backgroundColor: "#F1F7FF",
      border: "none",
      color: "#4D6CD9 !important",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
    },
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  disablePadding?: boolean;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, disablePadding, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="tab-panel"
    >
      {value === index && (
        <Box sx={disablePadding ? {} : { p: 2 }}>{children}</Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabWrapper = ({ tabsList, tabIndex, setTabIndex }: any) => {
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          className={classes.tabWrapperMainTabs}
          aria-label="basic tabs example"
          variant="scrollable"
        >
          {tabsList.map((tab: any) => (
            <Tab
              className={classes.tabWrapperMainTab}
              label={tab.title}
              {...a11yProps(tab.index)}
              key={tab.index}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabWrapper;
