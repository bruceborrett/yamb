import React from "react";

import { Meteor } from "meteor/meteor"
import { Formik, Form, FormikHelpers } from "formik"
import { z } from "zod";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

type Props = {
  submitDone: () => void
}

type FormValues = {
  email: string
  password: string
}

export const SignInForm = ({ submitDone }: Props) => {
  const initialValues: FormValues = {
    email: '',
    password: ''
  }

  const schema = z.object({
    email: z.string().email(),
    password: z.string()
  })

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    actions.setSubmitting(true)
    Meteor.loginWithPassword(values.email, values.password, (err: Error | undefined) => {
      actions.setSubmitting(false)
      if (err) {
        console.log(err)
        if ('reason' in err) {
          actions.setStatus(err.reason)
        } else {
          actions.setStatus(err.message)
        }
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
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="**************"
            className="mb-4" />
          <Button type="submit" className="mb-2 w-32">
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </Button>
          {status && <p className="text-orange-500 font-bold mb-6">{status}</p>}
        </Form>
      )}
    </Formik>
  )
}
