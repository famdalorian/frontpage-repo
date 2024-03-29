/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UserClasses as UserClasses0 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserClassesCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    UserClasses: "",
    UserID: "",
    ClassID: "",
    RegistrationDate: "",
  };
  const [userClasses, setUserClasses] = React.useState(
    initialValues.UserClasses
  );
  const [UserID, setUserID] = React.useState(initialValues.UserID);
  const [ClassID, setClassID] = React.useState(initialValues.ClassID);
  const [RegistrationDate, setRegistrationDate] = React.useState(
    initialValues.RegistrationDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserClasses(initialValues.UserClasses);
    setUserID(initialValues.UserID);
    setClassID(initialValues.ClassID);
    setRegistrationDate(initialValues.RegistrationDate);
    setErrors({});
  };
  const validations = {
    UserClasses: [],
    UserID: [],
    ClassID: [],
    RegistrationDate: [],
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
          UserClasses: userClasses,
          UserID,
          ClassID,
          RegistrationDate,
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
          await DataStore.save(new UserClasses0(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserClassesCreateForm")}
      {...rest}
    >
      <TextField
        label="User classes"
        isRequired={false}
        isReadOnly={false}
        value={userClasses}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              UserClasses: value,
              UserID,
              ClassID,
              RegistrationDate,
            };
            const result = onChange(modelFields);
            value = result?.UserClasses ?? value;
          }
          if (errors.UserClasses?.hasError) {
            runValidationTasks("UserClasses", value);
          }
          setUserClasses(value);
        }}
        onBlur={() => runValidationTasks("UserClasses", userClasses)}
        errorMessage={errors.UserClasses?.errorMessage}
        hasError={errors.UserClasses?.hasError}
        {...getOverrideProps(overrides, "UserClasses")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={UserID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              UserClasses: userClasses,
              UserID: value,
              ClassID,
              RegistrationDate,
            };
            const result = onChange(modelFields);
            value = result?.UserID ?? value;
          }
          if (errors.UserID?.hasError) {
            runValidationTasks("UserID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("UserID", UserID)}
        errorMessage={errors.UserID?.errorMessage}
        hasError={errors.UserID?.hasError}
        {...getOverrideProps(overrides, "UserID")}
      ></TextField>
      <TextField
        label="Class id"
        isRequired={false}
        isReadOnly={false}
        value={ClassID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              UserClasses: userClasses,
              UserID,
              ClassID: value,
              RegistrationDate,
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
        label="Registration date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={RegistrationDate && convertToLocal(new Date(RegistrationDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              UserClasses: userClasses,
              UserID,
              ClassID,
              RegistrationDate: value,
            };
            const result = onChange(modelFields);
            value = result?.RegistrationDate ?? value;
          }
          if (errors.RegistrationDate?.hasError) {
            runValidationTasks("RegistrationDate", value);
          }
          setRegistrationDate(value);
        }}
        onBlur={() => runValidationTasks("RegistrationDate", RegistrationDate)}
        errorMessage={errors.RegistrationDate?.errorMessage}
        hasError={errors.RegistrationDate?.hasError}
        {...getOverrideProps(overrides, "RegistrationDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
