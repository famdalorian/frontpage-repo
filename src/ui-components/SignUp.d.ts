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
export declare type SignUpInputValues = {
    FirstName?: string;
    LastName?: string;
    Email?: string;
    PasswordHash?: string;
    MembershipID?: string;
    Address?: string;
    PhoneNumber?: number;
    picture?: string;
};
export declare type SignUpValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    PasswordHash?: ValidationFunction<string>;
    MembershipID?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    PhoneNumber?: ValidationFunction<number>;
    picture?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpOverridesProps = {
    SignUpGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordHash?: PrimitiveOverrideProps<TextFieldProps>;
    MembershipID?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    PhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    picture?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SignUpProps = React.PropsWithChildren<{
    overrides?: SignUpOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SignUpInputValues) => SignUpInputValues;
    onSuccess?: (fields: SignUpInputValues) => void;
    onError?: (fields: SignUpInputValues, errorMessage: string) => void;
    onChange?: (fields: SignUpInputValues) => SignUpInputValues;
    onValidate?: SignUpValidationValues;
} & React.CSSProperties>;
export default function SignUp(props: SignUpProps): React.ReactElement;
