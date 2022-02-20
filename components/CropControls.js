import { Cell } from 'baseui/layout-grid';
import { FormControl } from 'baseui/form-control';
import { Select } from 'baseui/select';
import { useAssetOptionsDispatch, useAssetOptionsState, actions } from '../context/AssetOptionsContext';

const cropOptions = [
  { label: 'Contain', id: 'contain' },
  { label: 'Cover', id: 'cover' },
  { label: 'Inside', id: 'inside' },
  { label: 'Outside', id: 'outside' },
  { label: 'Fill', id: 'fill' },
];

const alignmentOptions = [
  { label: 'Northwest', id: 'northwest' },
  { label: 'North', id: 'north' },
  { label: 'Northeast', id: 'northeast' },
  { label: 'West', id: 'west' },
  { label: 'Center', id: 'center' },
  { label: 'East', id: 'east' },
  { label: 'Southwest', id: 'southwest' },
  { label: 'South', id: 'south' },
  { label: 'Southeast', id: 'southeast' },
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

  const [currentCrop] = crop;

  return (
    <Cell span={12}>
      <FormControl
        label={() => "Fit"}>
        <Select
          options={cropOptions}
          value={crop}
          placeholder="Crop?"
          onChange={params => dispatch(actions.SET_CROP, params.value)}
          {...miscSelectOptions}
        />
      </FormControl>
      {(currentCrop?.id === 'contain' || currentCrop?.id === 'cover') && <FormControl
        label={() => "Position"}>
        <Select
          options={alignmentOptions}
          value={alignment}
          placeholder="Alignment"
          onChange={params => dispatch(actions.SET_ALIGNMENT, params.value)}
          {...miscSelectOptions}
        />
      </FormControl>}
    </Cell>
  )
}
