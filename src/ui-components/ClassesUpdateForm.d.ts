/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Classes } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClassesUpdateFormInputValues = {
    ClassID?: string;
    ClassName?: string;
    Instructor?: string;
    ClassTime?: string;
    ClassDuration?: string;
    ClassCapactity?: number;
};
export declare type ClassesUpdateFormValidationValues = {
    ClassID?: ValidationFunction<string>;
    ClassName?: ValidationFunction<string>;
    Instructor?: ValidationFunction<string>;
    ClassTime?: ValidationFunction<string>;
    ClassDuration?: ValidationFunction<string>;
    ClassCapactity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClassesUpdateFormOverridesProps = {
    ClassesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ClassID?: PrimitiveOverrideProps<TextFieldProps>;
    ClassName?: PrimitiveOverrideProps<TextFieldProps>;
    Instructor?: PrimitiveOverrideProps<TextFieldProps>;
    ClassTime?: PrimitiveOverrideProps<TextFieldProps>;
    ClassDuration?: PrimitiveOverrideProps<TextFieldProps>;
    ClassCapactity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClassesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClassesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    classes?: Classes;
    onSubmit?: (fields: ClassesUpdateFormInputValues) => ClassesUpdateFormInputValues;
    onSuccess?: (fields: ClassesUpdateFormInputValues) => void;
    onError?: (fields: ClassesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClassesUpdateFormInputValues) => ClassesUpdateFormInputValues;
    onValidate?: ClassesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClassesUpdateForm(props: ClassesUpdateFormProps): React.ReactElement;
