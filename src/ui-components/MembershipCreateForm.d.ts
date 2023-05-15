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
export declare type MembershipCreateFormInputValues = {
    MembershipID?: string;
    MembershipPrice?: number;
    Duration?: string;
    Benefits?: string;
    WalletID?: string;
};
export declare type MembershipCreateFormValidationValues = {
    MembershipID?: ValidationFunction<string>;
    MembershipPrice?: ValidationFunction<number>;
    Duration?: ValidationFunction<string>;
    Benefits?: ValidationFunction<string>;
    WalletID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MembershipCreateFormOverridesProps = {
    MembershipCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    MembershipID?: PrimitiveOverrideProps<TextFieldProps>;
    MembershipPrice?: PrimitiveOverrideProps<TextFieldProps>;
    Duration?: PrimitiveOverrideProps<TextFieldProps>;
    Benefits?: PrimitiveOverrideProps<TextFieldProps>;
    WalletID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MembershipCreateFormProps = React.PropsWithChildren<{
    overrides?: MembershipCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MembershipCreateFormInputValues) => MembershipCreateFormInputValues;
    onSuccess?: (fields: MembershipCreateFormInputValues) => void;
    onError?: (fields: MembershipCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MembershipCreateFormInputValues) => MembershipCreateFormInputValues;
    onValidate?: MembershipCreateFormValidationValues;
} & React.CSSProperties>;
export default function MembershipCreateForm(props: MembershipCreateFormProps): React.ReactElement;
