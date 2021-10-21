import { useHistory } from "react-router-dom";
import { useContext } from "react";

import Translate from "../../global/Translate";
import { Context } from "../../Context/";
import { IProject } from "../../global/interface";
import S from "./ProjectsListItem.styled"

interface IProps {
  project?: IProject;
}

export const ProjectsListItem: React.FC<IProps> = ({project}) => {

  const {state} = useContext(Context);
  const {language} = state;
  const {thumbnail, projectName, id, permission} = project!;
  const history = useHistory();

  if (!permission) {
    return (
      <S.Wrapper permission={permission}>
        <S.ThumbNail permission={permission} src={thumbnail} alt=''/>
        <S.HoverFill />
        <S.Title permission={permission}>{Translate[language].permission}</S.Title>
        <S.Lock />
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper onClick={() => history.push(`/${id}`, project)} permission={permission}>
      <S.ThumbNail permission={permission} src={thumbnail} alt=''/>
      <S.HoverFill />
      <S.Title permission={permission}>{projectName}</S.Title>
    </S.Wrapper>
  );
}
