//Importando styled para usarlo en este componente
import styled from 'styled-components';

//Implementando styled
const StyledButton = styled.button`
background-color: ${props => props.blue ? 'blue' : 'gray'};
`;


//Create the component Button
const Button = ({children,blue}) => {

    return  <StyledButton blue={blue}>{children}</StyledButton>

}

//Exportando el componente para usarlo
export default Button;