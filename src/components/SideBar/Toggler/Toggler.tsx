

import clsx from 'clsx';
import { useSwitch, UseSwitchProps } from '@mui/core/SwitchUnstyled';
import S from './Toggler.styled';

interface MuiToggler {
  defaultChecked: boolean;
  type: 'language' | 'theme';
}

const MuiToggler:React.FC<MuiToggler> = ({defaultChecked, type}) =>  {
    const { getInputProps, checked, disabled, focusVisible } = useSwitch({defaultChecked});
  
    const stateClasses = {
      checked,
      disabled,
      focusVisible,
    };
  
    return (
      <S.SwitchRoot className={clsx(stateClasses)}>
        <S.SwitchTrack>
          <S.SwitchThumb className={clsx(stateClasses)}/>
        </S.SwitchTrack>
        <S.SwitchInput {...getInputProps()} aria-label="Demo switch" />
      </S.SwitchRoot>
    );
  }
  
export const Toggler:React.FC<{type: 'language' | 'theme'}> = ({type}): JSX.Element => {
    return <MuiToggler defaultChecked type={type}/>;
}
  