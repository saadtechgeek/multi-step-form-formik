import { Card, CardContent, Typography } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';

export default function Home() {
  return (
    <Card>
      <CardContent>
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            millionaire: false,
            money: 0,
            description: '',
          }}
        onSubmit={() => {}}>
          <Form>
            <Field name="firstName" component={TextField} label="First Name" />
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
}
