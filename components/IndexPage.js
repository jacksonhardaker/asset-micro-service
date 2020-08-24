import { useState } from 'react';
import { Heading, HeadingLevel } from 'baseui/heading';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Grid, Cell } from 'baseui/layout-grid';
import { Checkbox } from "baseui/checkbox";
import { Slider } from 'baseui/slider';
import { Select } from 'baseui/select';
import { Button, SIZE } from 'baseui/button';
import { useAssetOptionsDispatch, useAssetOptionsState, actions } from '../context/AssetOptionsContext';

const baseURL = 'https://asset-micro-service.now.sh/api/process';

export const IndexPage = () => {
  const dispatch = useAssetOptionsDispatch();
  const state = useAssetOptionsState();

  const [blurEnabled, setBlurEnabled] = useState(false);
  const [optimizeForWebEnabled, setOptimizeForWebEnabled] = useState(true);
  
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const params = {
      src: state.src,
      w: state.width || undefined,
      h: state.height || undefined,
      b: state.blur[0] > 0 && blurEnabled ? state.blur[0] : undefined,
      raw: !optimizeForWebEnabled || undefined,
      q: optimizeForWebEnabled ? state.quality : undefined,
    };

    const cropParams = state.crop[0] && state.alignment[0] ? {
      [state.crop[0].id]: state.alignment[0].id
    } : {};

    const queryString = Object.entries({ ...params, ...cropParams }).reduce((queryString, [key, value]) => value ? `${queryString}&${key}=${value}` : queryString, '');

    setResult(`${baseURL}?${queryString}`);
  }

  return (
    <main>
      <Grid>
        <Cell span={12}>
          <HeadingLevel>
            <Heading>Asset Micro Service</Heading>
          </HeadingLevel>
        </Cell>
      </Grid>
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
              value={state.quality}
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
              value={state.blur}
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
                value={state.crop}
                onBlurResetsInput={false}
                onCloseResetsInput={false}
                onSelectResetsInput={false}
                searchable={false}
                placeholder="Crop?"
                clearable={true}
                onChange={params => dispatch(actions.SET_CROP, params.value)}
              />
            </FormControl>
            {state.crop[0] && <FormControl
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
                value={state.alignment}
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
        <Grid>
          <Cell span={12}>
            <Button
              disabled={!state.src}
              isLoading={isLoading}
              size={SIZE.large}>
              Generate</Button>
          </Cell>
        </Grid>
        {result && <Grid>
          <Cell span={12}>
            <p>{result}</p>
            <img src={result} alt="" onLoad={() => setIsLoading(false)} />
          </Cell>
        </Grid>}
      </form>
    </main>
  )
};
