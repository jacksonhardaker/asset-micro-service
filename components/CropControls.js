import { Cell } from 'baseui/layout-grid';
import { FormControl } from 'baseui/form-control';
import { Select } from 'baseui/select';
import { useAssetOptionsDispatch, useAssetOptionsState, actions } from '../context/AssetOptionsContext';

const cropOptions = [
  { label: 'Contain', id: 'contain' },
  { label: 'Cover', id: 'cover' },
];

const alignmentOptions = [
  { label: 'Top Left', id: 'lt' },
  { label: 'Middle Left', id: 'lm' },
  { label: 'Bottom Left', id: 'lb' },
  { label: 'Top Center', id: 'ct' },
  { label: 'Middle Center', id: 'cm' },
  { label: 'Bottom Center', id: 'cb' },
  { label: 'Top Right', id: 'rt' },
  { label: 'Middle Right', id: 'rm' },
  { label: 'Bottom Right', id: 'rb' },
];

const miscSelectOptions = {
  clearable: false,
  deleteRemoves: false,
  onBlurResetsInput: false,
  onCloseResetsInput: false,
  onSelectResetsInput: false,
  clearable: true,
  searchable: false,
};

export const CropControls = () => {
  const { crop, alignment } = useAssetOptionsState();
  const dispatch = useAssetOptionsDispatch();

  return (
    <Cell span={12}>
      <FormControl
        label={() => "Image Crop"}>
        <Select
          options={cropOptions}
          value={crop}
          placeholder="Crop?"
          onChange={params => dispatch(actions.SET_CROP, params.value)}
          { ...miscSelectOptions }
        />
      </FormControl>
      {crop[0] && <FormControl
        label={() => "Crop Alignment"}>
        <Select
          options={alignmentOptions}
          value={alignment}
          placeholder="Alignment"
          onChange={params => dispatch(actions.SET_ALIGNMENT, params.value)}
          { ...miscSelectOptions }
        />
      </FormControl>}
    </Cell>
  )
}
