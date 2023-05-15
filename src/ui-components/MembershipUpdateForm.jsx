/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Membership } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MembershipUpdateForm(props) {
  const {
    id: idProp,
    membership: membershipModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    MembershipID: "",
    MembershipPrice: "",
    Duration: "",
    Benefits: "",
    WalletID: "",
  };
  const [MembershipID, setMembershipID] = React.useState(
    initialValues.MembershipID
  );
  const [MembershipPrice, setMembershipPrice] = React.useState(
    initialValues.MembershipPrice
  );
  const [Duration, setDuration] = React.useState(initialValues.Duration);
  const [Benefits, setBenefits] = React.useState(initialValues.Benefits);
  const [WalletID, setWalletID] = React.useState(initialValues.WalletID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = membershipRecord
      ? { ...initialValues, ...membershipRecord }
      : initialValues;
    setMembershipID(cleanValues.MembershipID);
    setMembershipPrice(cleanValues.MembershipPrice);
    setDuration(cleanValues.Duration);
    setBenefits(cleanValues.Benefits);
    setWalletID(cleanValues.WalletID);
    setErrors({});
  };
  const [membershipRecord, setMembershipRecord] =
    React.useState(membershipModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Membership, idProp)
        : membershipModelProp;
      setMembershipRecord(record);
    };
    queryData();
  }, [idProp, membershipModelProp]);
  React.useEffect(resetStateValues, [membershipRecord]);
  const validations = {
    MembershipID: [],
    MembershipPrice: [],
    Duration: [],
    Benefits: [],
    WalletID: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          MembershipID,
          MembershipPrice,
          Duration,
          Benefits,
          WalletID,
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
            Membership.copyOf(membershipRecord, (updated) => {
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
      {...getOverrideProps(overrides, "MembershipUpdateForm")}
      {...rest}
    >
      <TextField
        label="Membership id"
        isRequired={false}
        isReadOnly={false}
        value={MembershipID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MembershipID: value,
              MembershipPrice,
              Duration,
              Benefits,
              WalletID,
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
        label="Membership price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={MembershipPrice}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              MembershipID,
              MembershipPrice: value,
              Duration,
              Benefits,
              WalletID,
            };
            const result = onChange(modelFields);
            value = result?.MembershipPrice ?? value;
          }
          if (errors.MembershipPrice?.hasError) {
            runValidationTasks("MembershipPrice", value);
          }
          setMembershipPrice(value);
        }}
        onBlur={() => runValidationTasks("MembershipPrice", MembershipPrice)}
        errorMessage={errors.MembershipPrice?.errorMessage}
        hasError={errors.MembershipPrice?.hasError}
        {...getOverrideProps(overrides, "MembershipPrice")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Duration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MembershipID,
              MembershipPrice,
              Duration: value,
              Benefits,
              WalletID,
            };
            const result = onChange(modelFields);
            value = result?.Duration ?? value;
          }
          if (errors.Duration?.hasError) {
            runValidationTasks("Duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("Duration", Duration)}
        errorMessage={errors.Duration?.errorMessage}
        hasError={errors.Duration?.hasError}
        {...getOverrideProps(overrides, "Duration")}
      ></TextField>
      <TextField
        label="Benefits"
        isRequired={false}
        isReadOnly={false}
        value={Benefits}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MembershipID,
              MembershipPrice,
              Duration,
              Benefits: value,
              WalletID,
            };
            const result = onChange(modelFields);
            value = result?.Benefits ?? value;
          }
          if (errors.Benefits?.hasError) {
            runValidationTasks("Benefits", value);
          }
          setBenefits(value);
        }}
        onBlur={() => runValidationTasks("Benefits", Benefits)}
        errorMessage={errors.Benefits?.errorMessage}
        hasError={errors.Benefits?.hasError}
        {...getOverrideProps(overrides, "Benefits")}
      ></TextField>
      <TextField
        label="Wallet id"
        isRequired={false}
        isReadOnly={false}
        value={WalletID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MembershipID,
              MembershipPrice,
              Duration,
              Benefits,
              WalletID: value,
            };
            const result = onChange(modelFields);
            value = result?.WalletID ?? value;
          }
          if (errors.WalletID?.hasError) {
            runValidationTasks("WalletID", value);
          }
          setWalletID(value);
        }}
        onBlur={() => runValidationTasks("WalletID", WalletID)}
        errorMessage={errors.WalletID?.errorMessage}
        hasError={errors.WalletID?.hasError}
        {...getOverrideProps(overrides, "WalletID")}
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
          isDisabled={!(idProp || membershipModelProp)}
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
              !(idProp || membershipModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
