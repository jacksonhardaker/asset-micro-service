import { Cell } from 'baseui/layout-grid';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { useAssetOptionsDispatch, actions, useAssetOptionsState } from '../context/AssetOptionsContext';

export const SrcControls = () => {
  const dispatch = useAssetOptionsDispatch();
  const state = useAssetOptionsState();

  return (
    <Cell span={12}>
      <FormControl
        label={() => "Image URL"}>
        <Input
          value={state.src}
          placeholder="https://www.example.com"
          onChange={e => dispatch(actions.SET_SRC, e.target.value)}
        />
      </FormControl>
    </Cell>
  )
}
