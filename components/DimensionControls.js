import { Cell } from 'baseui/layout-grid';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { useAssetOptionsDispatch, actions } from '../context/AssetOptionsContext';

export const DimensionControls = () => {
  const dispatch = useAssetOptionsDispatch();

  return (
    <Cell span={12}>
      <FormControl
        label={() => "Width"}>
        <Input
          type="number"
          onChange={e => dispatch(actions.SET_WIDTH, e.target.value)}
          endEnhancer={() => "px"}
        />
      </FormControl>
      <FormControl
        label={() => "Height"}>
        <Input
          type="number"
          onChange={e => dispatch(actions.SET_HEIGHT, e.target.value)}
          endEnhancer={() => "px"}
        />
      </FormControl>
    </Cell>
  )
};
