import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { rootState } from '../redux/reducers';

export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector;