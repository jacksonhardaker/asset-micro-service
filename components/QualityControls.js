import { useState } from 'react';
import { Cell } from 'baseui/layout-grid';
import { Checkbox } from "baseui/checkbox";
import { Slider } from 'baseui/slider';
import { useAssetOptionsDispatch, useAssetOptionsState, actions } from '../context/AssetOptionsContext';

export const QualityControls = () => {
  const [optimizeForWebEnabled, setOptimizeForWebEnabled] = useState(true);
  const { quality } = useAssetOptionsState();
  const dispatch = useAssetOptionsDispatch();

  return (
    <Cell span={12}>
      <Checkbox
        checked={optimizeForWebEnabled}
        onChange={e => setOptimizeForWebEnabled(e.target.checked)}
      >Optimize for Web?</Checkbox>
      {optimizeForWebEnabled && <Slider
        max={100}
        value={quality}
        onChange={({ value }) => value && dispatch(actions.SET_QUALITY, value)}
      />}
    </Cell>
  )
}
