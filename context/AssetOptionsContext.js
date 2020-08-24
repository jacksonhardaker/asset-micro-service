import { useContext, createContext, useReducer } from 'react';

export const actions = {
  SET_BLUR: 'SET_BLUR',
  SET_QUALITY: 'SET_QUALITY',
  SET_WIDTH: 'SET_WIDTH',
  SET_HEIGHT: 'SET_HEIGHT',
  SET_CROP: 'SET_CROP',
  SET_ALIGNMENT: 'SET_ALIGNMENT',
  SET_SRC: 'SET_SRC',
  RESET: 'RESET',
}

const initialOptions = {
  blur: [0],
  quality: [60],
  crop: [],
  alignment: [],
};

const assetOptionsState = createContext(initialOptions);
const assetOptionsDispatch = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_BLUR:
      return { ...state, blur: action.payload };
    case actions.SET_QUALITY:
      return { ...state, quality: action.payload };
    case actions.SET_WIDTH:
      return { ...state, width: action.payload };
    case actions.SET_HEIGHT:
      return { ...state, height: action.payload };
    case actions.SET_CROP:
      return { ...state, crop: action.payload };
    case actions.SET_ALIGNMENT:
      return { ...state, alignment: action.payload };
    case actions.SET_SRC:
      return { ...state, src: action.payload };
    case actions.RESET:
      return initialOptions;
    default:
      return state;
  }
};

export const AssetOptionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialOptions);

  return (
    <assetOptionsState.Provider value={state}>
      <assetOptionsDispatch.Provider value={dispatch}>
        {children}
      </assetOptionsDispatch.Provider>
    </assetOptionsState.Provider>
  );
};

export const useAssetOptionsState = () => useContext(assetOptionsState);

export const useAssetOptionsDispatch = () => {
  const dispatch = useContext(assetOptionsDispatch);

  return (type, payload) => dispatch({ type, payload });
};
