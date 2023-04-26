import React from 'react';

import { Container }  from './styles';

interface ISelectInputProps {//interface com typescript dos botoes especificado o que é
    options: {
        value: string | number;
        label: string | number;
    }[],    
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;//onChange: ao mudar um valor capturar isso de imediato e mudar evento,React.ChangeEvent HTMLSelectElement:mudar evento html e react,,,retorna void vazio ou indefinido 
    defaultValue?: string | number;//coloca no valor default string ou numero
}

const SelectInput: React.FC<ISelectInputProps> = ({ //inputs do site botoes opcionais listagem,,conecta interface ts ISelectInputProps
  options, 
  onChange, 
  defaultValue 
}) => (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>{/*coloca o onChange no retorno html no select*/}
        {
          options.map(option => (
            <option 
            key={option.value}
            value={option.value}
            >
              {option.label}
            </option>
          ))              
        }
      </select>
    </Container>
);


export default SelectInput;