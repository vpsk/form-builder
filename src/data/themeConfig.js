export const themes = [
    {
        value: 'blue',
        displayValue: 'Blue',
        type: 'theme'
    },
    {
        value: 'light',
        displayValue: 'Light',
        type: 'theme'
    }
];

export const themeData = {
    light: {
        name: "Light",
        colors: {
            body: "#FFFFFF",
            text: "#000000",
            button: {
                text: "#FFFFFF",
                background: "#000000"
            },
            error: 'red',
        },
    },
    blue: {
        name: "blue",
        colors: {
            body: "#c9f2ff",
            text: "#0d47a1",
            button: {
                text: "#ffffff",
                background: "#0d47a1"
            },
            error: 'red'
        },
    }
}