import {SideBar} from '../SideBar/';
import {Main} from '../Main/';
import S from "./styled"

const App: React.FC = () => {

  return (
    <S.Wrapper>
        <SideBar />
        <Main />
    </S.Wrapper>
  );
}

export default App;
