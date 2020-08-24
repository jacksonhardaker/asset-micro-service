import { useState } from 'react';
import { Cell } from 'baseui/layout-grid';
import { Checkbox } from "baseui/checkbox";
import { Slider } from 'baseui/slider';
import { useAssetOptionsDispatch, useAssetOptionsState, actions } from '../context/AssetOptionsContext';

export const BlurControls = () => {
  const [blurEnabled, setBlurEnabled] = useState(false);
  const { blur } = useAssetOptionsState();
  const dispatch = useAssetOptionsDispatch();

  return (
    <Cell span={12}>
      <Checkbox
        checked={blurEnabled}
        onChange={e => setBlurEnabled(e.target.checked)}
      >Blur?</Checkbox>
      {blurEnabled && <Slider
        max={10}
        disabled={!blurEnabled}
        value={blur}
        onChange={({ value }) => value && dispatch(actions.SET_BLUR, value)}
      />}
    </Cell>
  )
}
