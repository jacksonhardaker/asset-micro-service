import Head from 'next/head';
import { IndexPage } from '../components/IndexPage';
import { AssetOptionsProvider } from '../context/AssetOptionsContext';
import { ResultsProvider } from '../context/ResultsContext';
import { LoadingProvider } from '../context/LoadingContext';

export default function Index() {
  return (
    <LoadingProvider>
      <ResultsProvider>
        <AssetOptionsProvider>
          <Head>
            <title>Asset Micro Service</title>
          </Head>
          <IndexPage />
        </AssetOptionsProvider>
      </ResultsProvider>
    </LoadingProvider>
  );
}
