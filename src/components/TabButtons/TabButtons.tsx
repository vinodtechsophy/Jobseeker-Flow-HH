import React, { ReactElement, FC, useEffect } from "react";
import { Button, ButtonGroup } from "@mui/material";

const TabButton: FC<any> = (props): ReactElement => {
  const [tabCount, setTabCount] = React.useState<number>(0);
  return (
    <ButtonGroup fullWidth sx={{ border: "none", gap: "1%" }}>
      {props.ButtonList.map((button: any, index: any) => (
        <Button
          key={button.name}
          className={
            tabCount === index && button?.name === props.ButtonList[index]?.name
              ? "tab-list--active-button"
              : "tab-list-button"
          }
          onClick={() => {
            setTabCount(index);
            props.setContestStatus(button.status);
          }}
        >
          {button?.name}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default TabButton;
