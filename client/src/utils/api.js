const baseUrl = '';

async function get(endpoint, token = null) {
    const options = {
        method: 'GET',
        // headers: {
        //     ...(token && { Authorization: `Bearer ${token}` })
        // }
    };

    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();

    if (!response.ok) throw Error(json.message);
    return json;
}

export async function getPosts(channel) {
    return await get(`api/posts`);
}
