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
export declare type ClassesCreateFormInputValues = {
    ClassID?: string;
    ClassName?: string;
    Instructor?: string;
    ClassTime?: string;
    ClassDuration?: string;
    ClassCapactity?: number;
};
export declare type ClassesCreateFormValidationValues = {
    ClassID?: ValidationFunction<string>;
    ClassName?: ValidationFunction<string>;
    Instructor?: ValidationFunction<string>;
    ClassTime?: ValidationFunction<string>;
    ClassDuration?: ValidationFunction<string>;
    ClassCapactity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClassesCreateFormOverridesProps = {
    ClassesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ClassID?: PrimitiveOverrideProps<TextFieldProps>;
    ClassName?: PrimitiveOverrideProps<TextFieldProps>;
    Instructor?: PrimitiveOverrideProps<TextFieldProps>;
    ClassTime?: PrimitiveOverrideProps<TextFieldProps>;
    ClassDuration?: PrimitiveOverrideProps<TextFieldProps>;
    ClassCapactity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClassesCreateFormProps = React.PropsWithChildren<{
    overrides?: ClassesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClassesCreateFormInputValues) => ClassesCreateFormInputValues;
    onSuccess?: (fields: ClassesCreateFormInputValues) => void;
    onError?: (fields: ClassesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClassesCreateFormInputValues) => ClassesCreateFormInputValues;
    onValidate?: ClassesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClassesCreateForm(props: ClassesCreateFormProps): React.ReactElement;
