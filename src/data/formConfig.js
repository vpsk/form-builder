const formData = {
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
        },
        {
            label: 'Address',
            id: 'street',
            type: 'textarea',
            placeholder: 'Enter Address',
            dataType: 'text',
            value: '',
            validation: {
                required: false
            },
            valid: false,
            errorMessage: 'Please Enter Your Address',
        },
        {
            label: 'Zipcode',
            id: 'zipCode',
            type: 'input',
            placeholder: 'Enter zipcode',
            dataType: 'number',
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            errorMessage: 'Please Enter Your Zipcode',
        },
        {
            label: 'Country',
            id: 'country',
            type: 'select',
            placeholder: 'Enter country',
            dataType: 'text',
            options: [
                {
                    value: 'IN',
                    displayValue: 'India'
                },
                {
                    value: 'USA',
                    displayValue: 'America'
                },
                {
                    value: 'JAP',
                    displayValue: 'Japan'
                },

            ],
            value: '',
            validation: {
                required: true
            },
            valid: false,
            errorMessage: '',
        },
        {
            label: 'Email',
            id: 'email',
            type: 'input',
            placeholder: 'Enter email',
            dataType: 'email',
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            errorMessage: '',
        },
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
                        placeholder: 'Enter name',
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
                        placeholder: 'Enter Address',
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
        },
    ]
}


export default function getFormData() {
    return formData;
}