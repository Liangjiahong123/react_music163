import { useSelector, useDispatch, shallowEqual, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '@/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const appShallowEqual = shallowEqual;
