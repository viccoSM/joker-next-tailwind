import Toast from '@/components/Toast';
import { FC, createContext, useEffect, useReducer } from 'react';
import { AppContextState, initialState } from './rootStateContext';
import { AppContextAction, appContextReducer } from './rootActionContext';
import { INITIAL_STATE_MESSAGE, SHOW_TOAST } from './reducersContext/toastReducers';

const AppContext = createContext<{
  state: AppContextState;
  dispatch: React.Dispatch<AppContextAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const AppContextProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(appContextReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}

      {/* Add component global */}
      <Toast
        show={state.toast.isShow}
        message={state.toast.message}
        type={state.toast.type}
        onClose={() => dispatch({ type: 'HIDE_TOAST' })}
      />
      {/* ---***--- */}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
