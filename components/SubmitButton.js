import { Grid, Cell } from 'baseui/layout-grid';
import { Button, SIZE } from 'baseui/button';
import { useResults } from '../context/ResultsContext';
import { useAssetOptionsState } from '../context/AssetOptionsContext';
import { useLoading } from '../context/LoadingContext';

export const SubmitButton = () => {
  const { generateURL, src } = useAssetOptionsState();
  const { result } = useResults();
  const { isLoading } = useLoading();

  return (
    <Grid>
      <Cell span={12}>
        <Button
          disabled={!src || (generateURL() === result)}
          isLoading={isLoading}
          size={SIZE.large}>
          Generate</Button>
      </Cell>
    </Grid>
  );
}
