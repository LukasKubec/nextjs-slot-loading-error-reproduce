import { sleep } from '../sleep';

export default async function FooterSlot() {
    await sleep(10000);
    return (
        <div style={{color: 'darkgreen', animation: 'mymove 2s infinite alternate'}}>FOOTER HAS LOADED</div>
    )
}
