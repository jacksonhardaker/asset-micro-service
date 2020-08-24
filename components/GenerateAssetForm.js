import { Grid, Cell } from 'baseui/layout-grid';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Checkbox } from "baseui/checkbox";
import { Slider } from 'baseui/slider';
import { Select } from 'baseui/select';
import { SubmitButton } from './SubmitButton';
import { useAssetOptionsDispatch, useAssetOptionsState, actions } from '../context/AssetOptionsContext';
import { useState } from 'react';
import { useLoading } from '../context/LoadingContext';

export const GenerateAssetForm = () => {
  const { generateAndStoreResult, quality, blur, crop, alignment } = useAssetOptionsState();
  const dispatch = useAssetOptionsDispatch();
  const { setIsLoading } = useLoading();

  const [blurEnabled, setBlurEnabled] = useState(false);
  const [optimizeForWebEnabled, setOptimizeForWebEnabled] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    generateAndStoreResult()
  }

  return (
    <form onSubmit={onSubmit}>
      <Grid>
        <Cell span={12}>
          <FormControl
            label={() => "Image URL"}>
            <Input
              placeholder="https://www.example.com"
              onChange={e => dispatch(actions.SET_SRC, e.target.value)}
            />
          </FormControl>
        </Cell>
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
          <FormControl
            label={() => "Image Crop"}>
            <Select
              clearable={false}
              deleteRemoves={false}
              options={[
                { label: 'Contain', id: 'contain' },
                { label: 'Cover', id: 'cover' },
              ]}
              value={crop}
              onBlurResetsInput={false}
              onCloseResetsInput={false}
              onSelectResetsInput={false}
              searchable={false}
              placeholder="Crop?"
              clearable={true}
              onChange={params => dispatch(actions.SET_CROP, params.value)}
            />
          </FormControl>
          {crop[0] && <FormControl
            label={() => "Crop Alignment"}>
            <Select
              clearable={false}
              deleteRemoves={false}
              options={[
                { label: 'Top Left', id: 'lt' },
                { label: 'Middle Left', id: 'lm' },
                { label: 'Bottom Left', id: 'lb' },
                { label: 'Top Center', id: 'ct' },
                { label: 'Middle Center', id: 'cm' },
                { label: 'Bottom Center', id: 'cb' },
                { label: 'Top Right', id: 'rt' },
                { label: 'Middle Right', id: 'rm' },
                { label: 'Bottom Right', id: 'rb' },
              ]}
              value={alignment}
              onBlurResetsInput={false}
              onCloseResetsInput={false}
              onSelectResetsInput={false}
              searchable={false}
              placeholder="Alignment"
              clearable={true}
              onChange={params => dispatch(actions.SET_ALIGNMENT, params.value)}
            />
          </FormControl>}
        </Cell>
      </Grid>
      <SubmitButton />
    </form>
  )
};
