import { Cell } from 'baseui/layout-grid';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { useAssetOptionsDispatch, actions, useAssetOptionsState } from '../context/AssetOptionsContext';

export const DimensionControls = () => {
  const dispatch = useAssetOptionsDispatch();
  const state = useAssetOptionsState();

  return (
    <Cell span={12}>
      <FormControl
        label={() => "Width"}>
        <Input
          value={state.width}
          type="number"
          onChange={e => dispatch(actions.SET_WIDTH, e.target.value)}
          endEnhancer={() => "px"}
        />
      </FormControl>
      <FormControl
        label={() => "Height"}>
        <Input
          value={state.height}
          type="number"
          onChange={e => dispatch(actions.SET_HEIGHT, e.target.value)}
          endEnhancer={() => "px"}
        />
      </FormControl>
    </Cell>
  )
};
