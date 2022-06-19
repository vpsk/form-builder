import styled from 'styled-components'
import { themes } from "../../data/themeConfig";
import { RadioButton } from "../../components/formAtoms/radio";
import Label from "../../components/formAtoms/label";

const ThemeButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2em;
    align-items: end;
    label {
      margin-right: 10px;
    }
`;

function Theme({ updateTheme, theme }) {
    return <ThemeButton>
        <Label label="Select your theme"></Label>
        {
            themes.map((option, idx) => (
                <div key={idx} onClick={() => updateTheme(option.value)}>
                    <RadioButton name={option.type} checked={option.value === theme}> {option.displayValue}</RadioButton>
                </div>
            ))
        }
    </ThemeButton>
}

export default Theme;