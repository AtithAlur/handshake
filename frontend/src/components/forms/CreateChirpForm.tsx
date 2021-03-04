import React from 'react';

import {withFormik, FormikProps} from 'formik';
import * as Yup from 'yup';
import {Col, Form, Button} from 'react-bootstrap'

type FormFields = {
  text: string
}
type InnerFormProps = {}

const InnerForm = (props: InnerFormProps & FormikProps<FormFields>) => {
  const {errors, values, handleSubmit, handleChange, isSubmitting} = props;

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Post Chirp</Form.Label>
        <Form.Control
          name='text'
          type='textarea'
          value = {values.text}
          onChange = {handleChange}
          isInvalid = {!!errors.text}
        >
        </Form.Control>
        <Form.Control.Feedback type='invalid'>
          {errors.text}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type='submit'>Post</Button>
    </Form>
  )
}

const schema = Yup.object().shape({
  text: Yup.string().required().min(1).max(140)
})

type CreateChirpFormProps = {
  handleSubmit: () => {}
};

const CreateChirpForm = withFormik<CreateChirpFormProps, FormFields>({
  schemaValidation: schema,
  handleSubmit: (values: any, {actions, props}) => {
    props.handleSubmit(values.text)
    actions.isSubmitting(false)
  }
})(InnerForm);

export default CreateChirpForm;
