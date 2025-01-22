import {headers} from "next/headers";

export default async function FooterSlot() {
    const host = await headers().then(headers => headers.get('x-current-host'));
    const result = await fetch(host + '/random/api').then(res => res.json()).then(data => data.message);
    return (
        <div style={{color: 'darkgreen', animation: 'mymove 2s infinite alternate'}}>FOOTER HAS LOADED, {result}</div>
    )
}

export const dynamic = 'force-dynamic';
