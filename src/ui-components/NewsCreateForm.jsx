/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { News } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NewsCreateForm(props) {
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
    NewsID: "",
    NewsTitle: "",
    NewsContent: "",
    PublicationDate: "",
  };
  const [NewsID, setNewsID] = React.useState(initialValues.NewsID);
  const [NewsTitle, setNewsTitle] = React.useState(initialValues.NewsTitle);
  const [NewsContent, setNewsContent] = React.useState(
    initialValues.NewsContent
  );
  const [PublicationDate, setPublicationDate] = React.useState(
    initialValues.PublicationDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNewsID(initialValues.NewsID);
    setNewsTitle(initialValues.NewsTitle);
    setNewsContent(initialValues.NewsContent);
    setPublicationDate(initialValues.PublicationDate);
    setErrors({});
  };
  const validations = {
    NewsID: [],
    NewsTitle: [],
    NewsContent: [],
    PublicationDate: [],
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
          NewsID,
          NewsTitle,
          NewsContent,
          PublicationDate,
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
          await DataStore.save(new News(modelFields));
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
      {...getOverrideProps(overrides, "NewsCreateForm")}
      {...rest}
    >
      <TextField
        label="News id"
        isRequired={false}
        isReadOnly={false}
        value={NewsID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NewsID: value,
              NewsTitle,
              NewsContent,
              PublicationDate,
            };
            const result = onChange(modelFields);
            value = result?.NewsID ?? value;
          }
          if (errors.NewsID?.hasError) {
            runValidationTasks("NewsID", value);
          }
          setNewsID(value);
        }}
        onBlur={() => runValidationTasks("NewsID", NewsID)}
        errorMessage={errors.NewsID?.errorMessage}
        hasError={errors.NewsID?.hasError}
        {...getOverrideProps(overrides, "NewsID")}
      ></TextField>
      <TextField
        label="News title"
        isRequired={false}
        isReadOnly={false}
        value={NewsTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NewsID,
              NewsTitle: value,
              NewsContent,
              PublicationDate,
            };
            const result = onChange(modelFields);
            value = result?.NewsTitle ?? value;
          }
          if (errors.NewsTitle?.hasError) {
            runValidationTasks("NewsTitle", value);
          }
          setNewsTitle(value);
        }}
        onBlur={() => runValidationTasks("NewsTitle", NewsTitle)}
        errorMessage={errors.NewsTitle?.errorMessage}
        hasError={errors.NewsTitle?.hasError}
        {...getOverrideProps(overrides, "NewsTitle")}
      ></TextField>
      <TextField
        label="News content"
        isRequired={false}
        isReadOnly={false}
        value={NewsContent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              NewsID,
              NewsTitle,
              NewsContent: value,
              PublicationDate,
            };
            const result = onChange(modelFields);
            value = result?.NewsContent ?? value;
          }
          if (errors.NewsContent?.hasError) {
            runValidationTasks("NewsContent", value);
          }
          setNewsContent(value);
        }}
        onBlur={() => runValidationTasks("NewsContent", NewsContent)}
        errorMessage={errors.NewsContent?.errorMessage}
        hasError={errors.NewsContent?.hasError}
        {...getOverrideProps(overrides, "NewsContent")}
      ></TextField>
      <TextField
        label="Publication date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={PublicationDate && convertToLocal(new Date(PublicationDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              NewsID,
              NewsTitle,
              NewsContent,
              PublicationDate: value,
            };
            const result = onChange(modelFields);
            value = result?.PublicationDate ?? value;
          }
          if (errors.PublicationDate?.hasError) {
            runValidationTasks("PublicationDate", value);
          }
          setPublicationDate(value);
        }}
        onBlur={() => runValidationTasks("PublicationDate", PublicationDate)}
        errorMessage={errors.PublicationDate?.errorMessage}
        hasError={errors.PublicationDate?.hasError}
        {...getOverrideProps(overrides, "PublicationDate")}
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
