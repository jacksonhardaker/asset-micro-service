import { Cell } from 'baseui/layout-grid';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { useAssetOptionsDispatch, actions } from '../context/AssetOptionsContext';

export const SrcControls = () => {
  const dispatch = useAssetOptionsDispatch();
  return (
    <Cell span={12}>
      <FormControl
        label={() => "Image URL"}>
        <Input
          placeholder="https://www.example.com"
          onChange={e => dispatch(actions.SET_SRC, e.target.value)}
        />
      </FormControl>
    </Cell>
  )
}
