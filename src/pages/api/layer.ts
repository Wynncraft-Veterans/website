const HEADERS: Record<string, string> = {
    'Content-Type': 'text/plain; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=60'
};

export async function GET(): Promise<Response> {
    try {
        const upstream = await fetch('http://api.wynnvets.org/v0/outbound/layer');
        if (!upstream.ok) {
            return new Response('unavailable', { status: 502, headers: HEADERS });
        }

        const body = await upstream.text();
        return new Response(body, { status: 200, headers: HEADERS });
    } catch (error) {
        return new Response('unavailable', { status: 502, headers: HEADERS });
    }
}
