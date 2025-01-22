import {headers} from "next/headers";

export default async function TopSlot() {
    const host = await headers().then(headers => headers.get('x-current-host'));
    const result = await fetch(host + '/random/api').then(res => res.json()).then(data => data.message);
    return (
        <div style={{color: 'darkred', animation: 'mymove 2s infinite alternate'}}>TOPSLOT HAS LOADED, {result}</div>
    )
}

export const dynamic = 'force-dynamic';
