/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserClasses as UserClasses0 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserClassesUpdateFormInputValues = {
    UserClasses?: string;
    UserID?: string;
    ClassID?: string;
    RegistrationDate?: string;
};
export declare type UserClassesUpdateFormValidationValues = {
    UserClasses?: ValidationFunction<string>;
    UserID?: ValidationFunction<string>;
    ClassID?: ValidationFunction<string>;
    RegistrationDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserClassesUpdateFormOverridesProps = {
    UserClassesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UserClasses?: PrimitiveOverrideProps<TextFieldProps>;
    UserID?: PrimitiveOverrideProps<TextFieldProps>;
    ClassID?: PrimitiveOverrideProps<TextFieldProps>;
    RegistrationDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserClassesUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserClassesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userClasses?: UserClasses0;
    onSubmit?: (fields: UserClassesUpdateFormInputValues) => UserClassesUpdateFormInputValues;
    onSuccess?: (fields: UserClassesUpdateFormInputValues) => void;
    onError?: (fields: UserClassesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserClassesUpdateFormInputValues) => UserClassesUpdateFormInputValues;
    onValidate?: UserClassesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserClassesUpdateForm(props: UserClassesUpdateFormProps): React.ReactElement;
