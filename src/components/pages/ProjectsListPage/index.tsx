import { useContext } from "react";

import { Context } from "../../../Context";
import S from "./styled"



export const ProjectsListPage: React.FC = () => {

  const {service} = useContext(Context);

  service.getAllProjects()
    .then(res=>console.log(res))

  return (
    <S.Wrapper>
      <p>ProjectsListPage</p>
    </S.Wrapper>
  );
}