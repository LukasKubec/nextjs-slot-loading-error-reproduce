import {sleep} from '../sleep';

export default async function TopSlot() {
    const result = await sleep(10000);
    return (
        <div style={{color: 'darkred', animation: 'mymove 2s infinite alternate'}}>TOPSLOT HAS LOADED, {result}</div>
    )
}
