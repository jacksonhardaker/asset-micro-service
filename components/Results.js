import { Grid, Cell } from 'baseui/layout-grid';
import { useResults } from '../context/ResultsContext';
import { useLoading } from '../context/LoadingContext';

export const Results = () => {
  const { result } = useResults();
  const { setIsLoading } = useLoading();

  if (!result)
    return null;

  return (
    <Grid>
      <Cell span={12}>
        <p>{result}</p>
        <img src={result} alt="" onLoad={() => setIsLoading(false)} />
      </Cell>
    </Grid>
  )
};
