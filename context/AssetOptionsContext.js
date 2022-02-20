import { useContext, createContext, useReducer, useCallback } from 'react';
import { useResults } from './ResultsContext';

const baseURL = 'api/sharp';

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
  const { setResult } = useResults();

  const generateURL = useCallback(() => {
    const [blur] = state.blur;
    const [quality] = state.quality;
    const optimizeForWebEnabled = quality < 100;
    const [crop] = state.crop;
    const [alignment] = state.alignment;

    const params = {
      src: state.src,
      w: state.width || undefined,
      h: state.height || undefined,
      b: blur > 0 ? blur : undefined,
      q: optimizeForWebEnabled ? quality : undefined,
      fit: crop?.id || undefined
    };

    // const cropParams = crop && alignment ? {
    //   [crop.id]: alignment.id
    // } : {};

    const queryString = Object.entries({ ...params, /*...cropParams*/ }).reduce((queryString, [key, value]) => value ? `${queryString}&${key}=${value}` : queryString, '');

    return `${window.location.origin}/api/sharp?${queryString}`;
  }, [state]);

  const generateAndStoreResult = () => {
    setResult(
      generateURL()
    );
  }

  const value = {
    ...state,
    generateURL,
    generateAndStoreResult
  };

  return (
    <assetOptionsState.Provider value={value}>
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
