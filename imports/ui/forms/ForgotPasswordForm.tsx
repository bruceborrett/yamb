import React from "react";

import { Formik, Form, FormikHelpers } from "formik"
import { z } from "zod";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Accounts } from "meteor/accounts-base";

type Props = {
  submitDone: () => void
}

type FormValues = {
  email: string
}

export const ForgotPasswordForm = ({ submitDone }: Props) => {
  const initialValues: FormValues = {
    email: '',
  }

  const schema = z.object({
    email: z.string().email(),
  })

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    actions.setSubmitting(true)
    Accounts.forgotPassword({ email: values.email }, (error) => {
      if (error) {
        actions.setStatus(error.message)
        actions.setSubmitting(false)
      } else {
        submitDone()
      }
    });
  }

  return (
    <Formik
      initialValues={initialValues}
      validation={schema.parse}
      onSubmit={handleSubmit}
    >
      {({status, isSubmitting}) => (
        <Form>
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="youremail@example.com"
            className="mb-4" />
          <Button type="submit" className="mb-2 w-32">
            {isSubmitting ? 'Sending Email...' : 'Reset Password'}
          </Button>
          {status && <p className="text-orange-500 font-bold mb-6">{status}</p>}
        </Form>
      )}
    </Formik>
  )
}
