import React, { ReactElement, FC, useEffect } from "react";
import { TextField } from "@mui/material";
import "../../App.css";
import { InlineInputModal } from "../../pages/JobSeekerProfileFlow/JobSeekerProfileFlowConstants";
import { useAppDispatch } from "../../services/StoreHooks";

const InlineInputs: FC<any> = (props): ReactElement => {
  const [inputValues, setInputValues] = React.useState<any[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (JSON.stringify(props.value).length > 5)
      setInputValues((arr) => Object.values(props.value));
  }, []);
  const dispatchNotificationData = (notifyData) => {
    dispatch({
      type: "SEND_ALERT",
      data: {
        enable: notifyData.enable,
        type: notifyData.type,
        message: notifyData.message,
        duration: notifyData.duration,
      },
    });
  };

  return (
    <div id="root-component-container">
      {props.InlineInputTitle ? (
        <div className="experience-card-title">
          <div>
            <p>
              {props.InlineInputTitle} <span className="asterisk-span"> *</span>
            </p>
          </div>
        </div>
      ) : null}
      <div id="root-inline-inputbox-container" className="inline-div">
        {props.InlineInputsArray.map(
          (input: InlineInputModal, index: number) => (
            <React.Fragment key={input.label}>
              <div
                id={input.label + "-inline-inputbox-container"}
                className="number-input-field"
              >
                <TextField
                  id={input.label + "-inline-inputbox"}
                  name={input.label + "InlineInputbox"}
                  disabled={props.disabled}
                  type={input.type}
                  label={input.label}
                  value={
                    input.type === "number"
                      ? Number(inputValues[index])
                      : inputValues[index]
                  }
                  placeholder={input.placeholder}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (input.type === "number") {
                      if (Number(e.target.value) > Number(input.max)) {
                        const tempInputs = [...inputValues];
                        tempInputs[index] = 0;
                        setInputValues((arr) => tempInputs);
                        return "";
                      }
                      if (e.target.value !== "")
                        e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, Number(input.max?.toString().length) || 2);
                    }
                  }}
                  onChange={(e) => {
                    if (input.type === "number") {
                      if (Number(e.target.value) <= Number(input.max)) {
                        props.setValues(e.target.value.toString(), index);
                        const tempInputs = [...inputValues];
                        tempInputs[index] = e.target.value;
                        setInputValues((arr) => tempInputs);
                      } else {
                        props.setValues("", index);
                        const tempInputs = [...inputValues];
                        tempInputs[index] = "";
                        setInputValues((arr) => tempInputs);
                        dispatchNotificationData({
                          enable: true,
                          type: "warning",
                          message: "Invalid data, plz try again.",
                          duration: 2000,
                        });
                      }
                    } else {
                      props.setValues(e.target.value.toString(), index);
                      const tempInputs = [...inputValues];
                      tempInputs[index] = e.target.value;
                      setInputValues((arr) => tempInputs);
                    }
                  }}
                  InputProps={{
                    inputProps:
                      input.type === "number"
                        ? {
                            max: input?.max,
                            min: 0,
                          }
                        : {
                            maxLength: input?.maxLength,
                          },
                  }}
                  size="small"
                />
              </div>
              <div className="input-align">
                <span>{input.label}</span>
              </div>
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default InlineInputs;
