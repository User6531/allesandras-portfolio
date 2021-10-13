interface Themes {
    [key: string] : {
        fonts: string[],
        fontSizes: {
            [key: string]: string
        },
        colors: {
            [key: string]: string
        }
    }
}

export const themes:Themes = {
    light: {
        fonts: ["Lato-Regular", "Roboto"],
        fontSizes: {
            xSmall: "12px",
            small: "18px",
            medium: "24px",
            large: "30px",
            xxLarge: "36px"
        },
        colors: {
            backgroundColor: '#F9F6F1',
            textColor: 'black',
            backgroundModalColor: 'white'
        },
    },
    dark: {
        fonts: ["Lato-Regular", "Roboto"],
        fontSizes: {
            xSmall: "12px",
            small: "18px",
            medium: "24px",
            large: "30px",
            xxLarge: "36px"
        },
        colors: {
            backgroundColor: "#333333",
            textColor: 'white',
            backgroundModalColor: 'black'
        },
    }
}