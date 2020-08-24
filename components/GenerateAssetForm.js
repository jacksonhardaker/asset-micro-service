import { Grid } from 'baseui/layout-grid';
import { SubmitButton } from './SubmitButton';
import { useAssetOptionsState } from '../context/AssetOptionsContext';
import { useLoading } from '../context/LoadingContext';
import { BlurControls } from './BlurControls';
import { QualityControls } from './QualityControls';
import { DimensionControls } from './DimensionControls';
import { CropControls } from './CropControls';
import { SrcControls } from './SrcControls';

export const GenerateAssetForm = () => {
  const { generateAndStoreResult } = useAssetOptionsState();
  const { setIsLoading } = useLoading();

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    generateAndStoreResult()
  }

  return (
    <form onSubmit={onSubmit}>
      <Grid>
        <SrcControls />
        <QualityControls />
        <BlurControls />
        <DimensionControls />
        <CropControls />
      </Grid>
      <SubmitButton />
    </form>
  )
};
