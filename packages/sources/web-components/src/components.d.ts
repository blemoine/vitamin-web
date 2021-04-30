/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size": 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant": | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnTextInput {
        /**
          * The helper of the text input.
          * @default 'My helper'
         */
        "helper": string;
        /**
          * The icon to be displayed
          * @default null
         */
        "icon": string;
        /**
          * The id of the text input.
          * @default 'my-id'
         */
        "id": string;
        /**
          * The disabled state of the text-input.
          * @default false
         */
        "isDisabled": boolean;
        /**
          * Is the text-input multiline or not.
          * @default false
         */
        "isMultiline": boolean;
        /**
          * The label of the text input.
          * @default 'My label'
         */
        "label": string;
        /**
          * The placeholder of the text input.
          * @default 'My placeholder'
         */
        "placeholder": string;
        /**
          * The state of the text-input.
          * @default null
         */
        "state": 'valid' | 'error' | null;
    }
}
declare global {
    interface HTMLVtmnButtonElement extends Components.VtmnButton, HTMLStencilElement {
    }
    var HTMLVtmnButtonElement: {
        prototype: HTMLVtmnButtonElement;
        new (): HTMLVtmnButtonElement;
    };
    interface HTMLVtmnTextInputElement extends Components.VtmnTextInput, HTMLStencilElement {
    }
    var HTMLVtmnTextInputElement: {
        prototype: HTMLVtmnTextInputElement;
        new (): HTMLVtmnTextInputElement;
    };
    interface HTMLElementTagNameMap {
        "vtmn-button": HTMLVtmnButtonElement;
        "vtmn-text-input": HTMLVtmnTextInputElement;
    }
}
declare namespace LocalJSX {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size"?: 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant"?: | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnTextInput {
        /**
          * The helper of the text input.
          * @default 'My helper'
         */
        "helper"?: string;
        /**
          * The icon to be displayed
          * @default null
         */
        "icon"?: string;
        /**
          * The id of the text input.
          * @default 'my-id'
         */
        "id"?: string;
        /**
          * The disabled state of the text-input.
          * @default false
         */
        "isDisabled"?: boolean;
        /**
          * Is the text-input multiline or not.
          * @default false
         */
        "isMultiline"?: boolean;
        /**
          * The label of the text input.
          * @default 'My label'
         */
        "label"?: string;
        /**
          * The placeholder of the text input.
          * @default 'My placeholder'
         */
        "placeholder"?: string;
        /**
          * The state of the text-input.
          * @default null
         */
        "state"?: 'valid' | 'error' | null;
    }
    interface IntrinsicElements {
        "vtmn-button": VtmnButton;
        "vtmn-text-input": VtmnTextInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vtmn-button": LocalJSX.VtmnButton & JSXBase.HTMLAttributes<HTMLVtmnButtonElement>;
            "vtmn-text-input": LocalJSX.VtmnTextInput & JSXBase.HTMLAttributes<HTMLVtmnTextInputElement>;
        }
    }
}
