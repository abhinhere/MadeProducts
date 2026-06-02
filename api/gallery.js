export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        return res.status(500).json({ error: 'Missing Supabase credentials in environment variables.' });
    }

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/synced_media?gallery_publish_status=eq.success&order=instagram_timestamp.desc&limit=8`, {
            method: "GET",
            headers: {
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: `Failed to fetch from Supabase: ${response.statusText}` });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Gallery API Error:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
