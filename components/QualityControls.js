import { Cell } from 'baseui/layout-grid';
import { Slider } from 'baseui/slider';
import { useAssetOptionsDispatch, useAssetOptionsState, actions } from '../context/AssetOptionsContext';

export const QualityControls = () => {
  const { quality } = useAssetOptionsState();
  const dispatch = useAssetOptionsDispatch();

  return (
    <Cell span={12}>
      <Slider
        max={100}
        value={quality}
        onChange={({ value }) => value && dispatch(actions.SET_QUALITY, value)}
      />
    </Cell>
  )
}
