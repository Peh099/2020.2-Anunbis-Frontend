import React from 'react';
import { useHistory } from 'react-router';
import {
  BtnEdition,
  Container,
  End,
  Main,
  ProfessorSearchStyle,
} from './styles';
import Menu from '../Menu';
import Input from '../Input';
import Button from '../Button';
import { logOut } from '../../services/Auth';
import MenuOptions from '../MenuOptions';

function ProfessorSearch({ history }) {
  const [isValid, setIsValid] = React.useState(false);
  const onSubmit = (data) => {
    if (data.key === 'Enter' && isValid) {
      history?.push(`/user/professor/search/${data.target.value.trim()}`);
    }
  };
  const validate = (e) => {
    const value = e.target.value.trim();
    const isValidLength = value.length > 1 && value.length < 254;
    setIsValid(isValidLength);
  };
  return (
    <ProfessorSearchStyle isValid={isValid}>
      <Input
        type="text"
        width="min(100%, 400px)"
        text="Informe o nome do professor"
        onkeydown={onSubmit}
        onChange={validate}
      />
    </ProfessorSearchStyle>
  );
}

export default function LayoutApp({ children }) {
  const history = useHistory();
  const [menuOptions, setMenuOptions] = React.useState('');

  function makeMenuOptions() {
    if (menuOptions === '') {
      return setMenuOptions(
        <MenuOptions>
          <Button
            type="button"
            backColor="#FFD54F"
            text="CONFIGURAR"
            padding="3px"
            onClick={() => {
              setMenuOptions('');
              history?.push('/user/profile');
            }}
          />
          <Button
            backColor="#FFD54F"
            text="SOBRE"
            padding="3px"
            onClick={() => {
              history?.push('/');
            }}
          />
          <Button
            backColor="#FFD54F"
            text="SAIR"
            padding="3px"
            onClick={() => {
              logOut();
              history?.push('/');
            }}
          />
        </MenuOptions>,
      );
    }
    return setMenuOptions('');
  }

  return (
    <Container>
      <Menu>
        <ProfessorSearch history={history} />
        <End>
          <BtnEdition
            text="ººº"
            padding="0px"
            backColor="#212121"
            onClick={() => makeMenuOptions()}
            data-testid="btn-layout-1"
          />
          {menuOptions}
        </End>
      </Menu>
      <Main>{children}</Main>
    </Container>
  );
}
