import { memo } from "react"
import styled from 'styled-components'
import Label from './label';
import { Error, CommonInputStyle } from "./common";
import { debounce } from "../../utils/debounce";

const Input = styled.input`
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.valid ? props.theme.colors.error : props.theme.colors.text};
  ${CommonInputStyle}
`;

function InputText({ metadata, setField, path, index, theme }) {
    const { label, dataType, value, placeholder, errorMessage, valid } = metadata;
    return (
        <div>
            <Label label={label}></Label>
            <Input
                valid={valid}
                type={dataType || 'text'}
                placeholder={placeholder}
                value={value || ''}
                onChange={(e) => debounce(setField(e.target.value, index, path))}
            />
            {valid && <Error>{errorMessage}</Error>}
        </div>
    );
}

export default memo(InputText);