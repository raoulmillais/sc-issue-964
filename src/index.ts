import { ApiPromise } from '@polkadot/api';
import {
    ScProvider
} from "@polkadot/rpc-provider/substrate-connect"

async function initApi(): Promise<ApiPromise> {
  const response = await fetch('./assets/spec.json')
  const spec = await response.text()
  const provider = new ScProvider(spec);
  await provider.connect();

  return await ApiPromise.create({ provider });
} 

(async () => {
  const api = await initApi();
})()
