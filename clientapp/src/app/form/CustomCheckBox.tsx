import { useField } from 'formik';
import React from 'react';
import { Form, Label } from 'semantic-ui-react';

interface Props {
    placeholder: string;
    name: string;
    type?: string;
    label?: string;
}

export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name); 
    return (
        <Form.Field error={meta.touched && !!meta.error}>
           <div className="ckeckbox-align">
                <input  {...field} {...props} checked = {field.value} />
                <label>{props.label}</label>
           </div>
            
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}

           
        </Form.Field>
    )
}