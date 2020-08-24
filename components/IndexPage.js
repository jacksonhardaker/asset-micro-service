import React from 'react';
import { Heading, HeadingLevel } from 'baseui/heading';
import { Grid, Cell } from 'baseui/layout-grid';
import { Results } from './Results';
import { GenerateAssetForm } from './GenerateAssetForm';

export const IndexPage = React.memo(() => {
  return (
    <main>
      <Grid>
        <Cell span={12}>
          <HeadingLevel>
            <Heading>Asset Micro Service</Heading>
          </HeadingLevel>
        </Cell>
      </Grid>
      <GenerateAssetForm />
      <Results />
    </main>
  )
});
