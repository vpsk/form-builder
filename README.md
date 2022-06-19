# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### How to use this?

Sample field object you can provide to `FormBuilder` component to create a dynamic form. Entered user input type will be captured in value field and based on validation field object it can show the errors.

```
fields: [
    {
        label: 'Name',
        id: 'name',
        type: 'input',
        placeholder: 'Enter name',
        dataType: 'text',
        value: '',
        validation: {
            required: true
        },
        valid: false,
        errorMessage: 'Please Enter Your Name',
    }
]
```

Form config can have nested field based on parent field selection. In below code example based on user selection between `student` or `parent` next field shown up.

```
{
    id: 'relation',
    label: 'Select Your Identity',
    type: 'radio',
    dataType: 'radio',
    value: '',
    validation: {
        required: true,
    },
    options: [
        {
            value: 'student',
            displayValue: 'Student'
        },
        {
            value: 'parents',
            displayValue: 'Parents'
        },
    ],
    valid: false,
    errorMessage: 'Please select',
    student: {
        fields: [
            {
                id: 'name',
                type: 'input',
                placeholder: 'Enter your favorite subject',
                dataType: 'text',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                errorMessage: '',
            },
        ]
    },
    parents: {
        fields: [
            {
                id: 'street',
                type: 'textarea',
                placeholder: 'Describe your child nature',
                dataType: 'text',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                errorMessage: '',
            }
        ]
    }
}
```

### Theme

Current form support `light` and `blue` theme.
