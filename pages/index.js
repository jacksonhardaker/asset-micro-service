import { IndexPage } from "../components/IndexPage";
import { AssetOptionsProvider } from "../context/AssetOptionsContext";

export default function Index() {
  return (
    <AssetOptionsProvider>
      <IndexPage />
    </AssetOptionsProvider>
  )
}
