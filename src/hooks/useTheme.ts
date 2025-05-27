// hooks/useTheme.ts
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store';
import {toggleTheme} from '../store';
import {getTheme} from '../theme';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const currentTheme = getTheme(theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return {
    theme,
    toggleTheme: handleToggleTheme,
    currentTheme,
  };
};
