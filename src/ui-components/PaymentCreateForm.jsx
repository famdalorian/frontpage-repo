/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Payment } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PaymentCreateForm(props) {
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
    PaymentID: "",
    UserID: "",
    MembershipID: "",
    PaymentDate: "",
    PaymentMethod: "",
    PaymentAmmount: "",
    PaymentStatus: false,
  };
  const [PaymentID, setPaymentID] = React.useState(initialValues.PaymentID);
  const [UserID, setUserID] = React.useState(initialValues.UserID);
  const [MembershipID, setMembershipID] = React.useState(
    initialValues.MembershipID
  );
  const [PaymentDate, setPaymentDate] = React.useState(
    initialValues.PaymentDate
  );
  const [PaymentMethod, setPaymentMethod] = React.useState(
    initialValues.PaymentMethod
  );
  const [PaymentAmmount, setPaymentAmmount] = React.useState(
    initialValues.PaymentAmmount
  );
  const [PaymentStatus, setPaymentStatus] = React.useState(
    initialValues.PaymentStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPaymentID(initialValues.PaymentID);
    setUserID(initialValues.UserID);
    setMembershipID(initialValues.MembershipID);
    setPaymentDate(initialValues.PaymentDate);
    setPaymentMethod(initialValues.PaymentMethod);
    setPaymentAmmount(initialValues.PaymentAmmount);
    setPaymentStatus(initialValues.PaymentStatus);
    setErrors({});
  };
  const validations = {
    PaymentID: [],
    UserID: [],
    MembershipID: [],
    PaymentDate: [],
    PaymentMethod: [],
    PaymentAmmount: [],
    PaymentStatus: [],
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
          PaymentID,
          UserID,
          MembershipID,
          PaymentDate,
          PaymentMethod,
          PaymentAmmount,
          PaymentStatus,
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
          await DataStore.save(new Payment(modelFields));
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
      {...getOverrideProps(overrides, "PaymentCreateForm")}
      {...rest}
    >
      <TextField
        label="Payment id"
        isRequired={false}
        isReadOnly={false}
        value={PaymentID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PaymentID: value,
              UserID,
              MembershipID,
              PaymentDate,
              PaymentMethod,
              PaymentAmmount,
              PaymentStatus,
            };
            const result = onChange(modelFields);
            value = result?.PaymentID ?? value;
          }
          if (errors.PaymentID?.hasError) {
            runValidationTasks("PaymentID", value);
          }
          setPaymentID(value);
        }}
        onBlur={() => runValidationTasks("PaymentID", PaymentID)}
        errorMessage={errors.PaymentID?.errorMessage}
        hasError={errors.PaymentID?.hasError}
        {...getOverrideProps(overrides, "PaymentID")}
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
              PaymentID,
              UserID: value,
              MembershipID,
              PaymentDate,
              PaymentMethod,
              PaymentAmmount,
              PaymentStatus,
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
        label="Membership id"
        isRequired={false}
        isReadOnly={false}
        value={MembershipID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PaymentID,
              UserID,
              MembershipID: value,
              PaymentDate,
              PaymentMethod,
              PaymentAmmount,
              PaymentStatus,
            };
            const result = onChange(modelFields);
            value = result?.MembershipID ?? value;
          }
          if (errors.MembershipID?.hasError) {
            runValidationTasks("MembershipID", value);
          }
          setMembershipID(value);
        }}
        onBlur={() => runValidationTasks("MembershipID", MembershipID)}
        errorMessage={errors.MembershipID?.errorMessage}
        hasError={errors.MembershipID?.hasError}
        {...getOverrideProps(overrides, "MembershipID")}
      ></TextField>
      <TextField
        label="Payment date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={PaymentDate && convertToLocal(new Date(PaymentDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              PaymentID,
              UserID,
              MembershipID,
              PaymentDate: value,
              PaymentMethod,
              PaymentAmmount,
              PaymentStatus,
            };
            const result = onChange(modelFields);
            value = result?.PaymentDate ?? value;
          }
          if (errors.PaymentDate?.hasError) {
            runValidationTasks("PaymentDate", value);
          }
          setPaymentDate(value);
        }}
        onBlur={() => runValidationTasks("PaymentDate", PaymentDate)}
        errorMessage={errors.PaymentDate?.errorMessage}
        hasError={errors.PaymentDate?.hasError}
        {...getOverrideProps(overrides, "PaymentDate")}
      ></TextField>
      <TextField
        label="Payment method"
        isRequired={false}
        isReadOnly={false}
        value={PaymentMethod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PaymentID,
              UserID,
              MembershipID,
              PaymentDate,
              PaymentMethod: value,
              PaymentAmmount,
              PaymentStatus,
            };
            const result = onChange(modelFields);
            value = result?.PaymentMethod ?? value;
          }
          if (errors.PaymentMethod?.hasError) {
            runValidationTasks("PaymentMethod", value);
          }
          setPaymentMethod(value);
        }}
        onBlur={() => runValidationTasks("PaymentMethod", PaymentMethod)}
        errorMessage={errors.PaymentMethod?.errorMessage}
        hasError={errors.PaymentMethod?.hasError}
        {...getOverrideProps(overrides, "PaymentMethod")}
      ></TextField>
      <TextField
        label="Payment ammount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={PaymentAmmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              PaymentID,
              UserID,
              MembershipID,
              PaymentDate,
              PaymentMethod,
              PaymentAmmount: value,
              PaymentStatus,
            };
            const result = onChange(modelFields);
            value = result?.PaymentAmmount ?? value;
          }
          if (errors.PaymentAmmount?.hasError) {
            runValidationTasks("PaymentAmmount", value);
          }
          setPaymentAmmount(value);
        }}
        onBlur={() => runValidationTasks("PaymentAmmount", PaymentAmmount)}
        errorMessage={errors.PaymentAmmount?.errorMessage}
        hasError={errors.PaymentAmmount?.hasError}
        {...getOverrideProps(overrides, "PaymentAmmount")}
      ></TextField>
      <SwitchField
        label="Payment status"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PaymentStatus}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              PaymentID,
              UserID,
              MembershipID,
              PaymentDate,
              PaymentMethod,
              PaymentAmmount,
              PaymentStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.PaymentStatus ?? value;
          }
          if (errors.PaymentStatus?.hasError) {
            runValidationTasks("PaymentStatus", value);
          }
          setPaymentStatus(value);
        }}
        onBlur={() => runValidationTasks("PaymentStatus", PaymentStatus)}
        errorMessage={errors.PaymentStatus?.errorMessage}
        hasError={errors.PaymentStatus?.hasError}
        {...getOverrideProps(overrides, "PaymentStatus")}
      ></SwitchField>
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
