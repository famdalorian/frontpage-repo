/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Classes } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ClassesUpdateForm(props) {
  const {
    id: idProp,
    classes: classesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ClassID: "",
    ClassName: "",
    Instructor: "",
    ClassTime: "",
    ClassDuration: "",
    ClassCapactity: "",
  };
  const [ClassID, setClassID] = React.useState(initialValues.ClassID);
  const [ClassName, setClassName] = React.useState(initialValues.ClassName);
  const [Instructor, setInstructor] = React.useState(initialValues.Instructor);
  const [ClassTime, setClassTime] = React.useState(initialValues.ClassTime);
  const [ClassDuration, setClassDuration] = React.useState(
    initialValues.ClassDuration
  );
  const [ClassCapactity, setClassCapactity] = React.useState(
    initialValues.ClassCapactity
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = classesRecord
      ? { ...initialValues, ...classesRecord }
      : initialValues;
    setClassID(cleanValues.ClassID);
    setClassName(cleanValues.ClassName);
    setInstructor(cleanValues.Instructor);
    setClassTime(cleanValues.ClassTime);
    setClassDuration(cleanValues.ClassDuration);
    setClassCapactity(cleanValues.ClassCapactity);
    setErrors({});
  };
  const [classesRecord, setClassesRecord] = React.useState(classesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Classes, idProp)
        : classesModelProp;
      setClassesRecord(record);
    };
    queryData();
  }, [idProp, classesModelProp]);
  React.useEffect(resetStateValues, [classesRecord]);
  const validations = {
    ClassID: [],
    ClassName: [],
    Instructor: [],
    ClassTime: [],
    ClassDuration: [],
    ClassCapactity: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ClassID,
          ClassName,
          Instructor,
          ClassTime,
          ClassDuration,
          ClassCapactity,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Classes.copyOf(classesRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClassesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Class id"
        isRequired={false}
        isReadOnly={false}
        value={ClassID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClassID: value,
              ClassName,
              Instructor,
              ClassTime,
              ClassDuration,
              ClassCapactity,
            };
            const result = onChange(modelFields);
            value = result?.ClassID ?? value;
          }
          if (errors.ClassID?.hasError) {
            runValidationTasks("ClassID", value);
          }
          setClassID(value);
        }}
        onBlur={() => runValidationTasks("ClassID", ClassID)}
        errorMessage={errors.ClassID?.errorMessage}
        hasError={errors.ClassID?.hasError}
        {...getOverrideProps(overrides, "ClassID")}
      ></TextField>
      <TextField
        label="Class name"
        isRequired={false}
        isReadOnly={false}
        value={ClassName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClassID,
              ClassName: value,
              Instructor,
              ClassTime,
              ClassDuration,
              ClassCapactity,
            };
            const result = onChange(modelFields);
            value = result?.ClassName ?? value;
          }
          if (errors.ClassName?.hasError) {
            runValidationTasks("ClassName", value);
          }
          setClassName(value);
        }}
        onBlur={() => runValidationTasks("ClassName", ClassName)}
        errorMessage={errors.ClassName?.errorMessage}
        hasError={errors.ClassName?.hasError}
        {...getOverrideProps(overrides, "ClassName")}
      ></TextField>
      <TextField
        label="Instructor"
        isRequired={false}
        isReadOnly={false}
        value={Instructor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClassID,
              ClassName,
              Instructor: value,
              ClassTime,
              ClassDuration,
              ClassCapactity,
            };
            const result = onChange(modelFields);
            value = result?.Instructor ?? value;
          }
          if (errors.Instructor?.hasError) {
            runValidationTasks("Instructor", value);
          }
          setInstructor(value);
        }}
        onBlur={() => runValidationTasks("Instructor", Instructor)}
        errorMessage={errors.Instructor?.errorMessage}
        hasError={errors.Instructor?.hasError}
        {...getOverrideProps(overrides, "Instructor")}
      ></TextField>
      <TextField
        label="Class time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={ClassTime && convertToLocal(new Date(ClassTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              ClassID,
              ClassName,
              Instructor,
              ClassTime: value,
              ClassDuration,
              ClassCapactity,
            };
            const result = onChange(modelFields);
            value = result?.ClassTime ?? value;
          }
          if (errors.ClassTime?.hasError) {
            runValidationTasks("ClassTime", value);
          }
          setClassTime(value);
        }}
        onBlur={() => runValidationTasks("ClassTime", ClassTime)}
        errorMessage={errors.ClassTime?.errorMessage}
        hasError={errors.ClassTime?.hasError}
        {...getOverrideProps(overrides, "ClassTime")}
      ></TextField>
      <TextField
        label="Class duration"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={ClassDuration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClassID,
              ClassName,
              Instructor,
              ClassTime,
              ClassDuration: value,
              ClassCapactity,
            };
            const result = onChange(modelFields);
            value = result?.ClassDuration ?? value;
          }
          if (errors.ClassDuration?.hasError) {
            runValidationTasks("ClassDuration", value);
          }
          setClassDuration(value);
        }}
        onBlur={() => runValidationTasks("ClassDuration", ClassDuration)}
        errorMessage={errors.ClassDuration?.errorMessage}
        hasError={errors.ClassDuration?.hasError}
        {...getOverrideProps(overrides, "ClassDuration")}
      ></TextField>
      <TextField
        label="Class capactity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ClassCapactity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              ClassID,
              ClassName,
              Instructor,
              ClassTime,
              ClassDuration,
              ClassCapactity: value,
            };
            const result = onChange(modelFields);
            value = result?.ClassCapactity ?? value;
          }
          if (errors.ClassCapactity?.hasError) {
            runValidationTasks("ClassCapactity", value);
          }
          setClassCapactity(value);
        }}
        onBlur={() => runValidationTasks("ClassCapactity", ClassCapactity)}
        errorMessage={errors.ClassCapactity?.errorMessage}
        hasError={errors.ClassCapactity?.hasError}
        {...getOverrideProps(overrides, "ClassCapactity")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || classesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || classesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
