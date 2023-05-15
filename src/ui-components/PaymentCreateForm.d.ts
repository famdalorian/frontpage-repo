/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PaymentCreateFormInputValues = {
    PaymentID?: string;
    UserID?: string;
    MembershipID?: string;
    PaymentDate?: string;
    PaymentMethod?: string;
    PaymentAmmount?: number;
    PaymentStatus?: boolean;
};
export declare type PaymentCreateFormValidationValues = {
    PaymentID?: ValidationFunction<string>;
    UserID?: ValidationFunction<string>;
    MembershipID?: ValidationFunction<string>;
    PaymentDate?: ValidationFunction<string>;
    PaymentMethod?: ValidationFunction<string>;
    PaymentAmmount?: ValidationFunction<number>;
    PaymentStatus?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentCreateFormOverridesProps = {
    PaymentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    PaymentID?: PrimitiveOverrideProps<TextFieldProps>;
    UserID?: PrimitiveOverrideProps<TextFieldProps>;
    MembershipID?: PrimitiveOverrideProps<TextFieldProps>;
    PaymentDate?: PrimitiveOverrideProps<TextFieldProps>;
    PaymentMethod?: PrimitiveOverrideProps<TextFieldProps>;
    PaymentAmmount?: PrimitiveOverrideProps<TextFieldProps>;
    PaymentStatus?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PaymentCreateFormProps = React.PropsWithChildren<{
    overrides?: PaymentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PaymentCreateFormInputValues) => PaymentCreateFormInputValues;
    onSuccess?: (fields: PaymentCreateFormInputValues) => void;
    onError?: (fields: PaymentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PaymentCreateFormInputValues) => PaymentCreateFormInputValues;
    onValidate?: PaymentCreateFormValidationValues;
} & React.CSSProperties>;
export default function PaymentCreateForm(props: PaymentCreateFormProps): React.ReactElement;
