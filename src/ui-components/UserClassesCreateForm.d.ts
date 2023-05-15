/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserClassesCreateFormInputValues = {
    UserClasses?: string;
    UserID?: string;
    ClassID?: string;
    RegistrationDate?: string;
};
export declare type UserClassesCreateFormValidationValues = {
    UserClasses?: ValidationFunction<string>;
    UserID?: ValidationFunction<string>;
    ClassID?: ValidationFunction<string>;
    RegistrationDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserClassesCreateFormOverridesProps = {
    UserClassesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UserClasses?: PrimitiveOverrideProps<TextFieldProps>;
    UserID?: PrimitiveOverrideProps<TextFieldProps>;
    ClassID?: PrimitiveOverrideProps<TextFieldProps>;
    RegistrationDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserClassesCreateFormProps = React.PropsWithChildren<{
    overrides?: UserClassesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserClassesCreateFormInputValues) => UserClassesCreateFormInputValues;
    onSuccess?: (fields: UserClassesCreateFormInputValues) => void;
    onError?: (fields: UserClassesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserClassesCreateFormInputValues) => UserClassesCreateFormInputValues;
    onValidate?: UserClassesCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserClassesCreateForm(props: UserClassesCreateFormProps): React.ReactElement;
