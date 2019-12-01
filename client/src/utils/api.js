import { normalize, schema } from 'normalizr';
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
    return await get(`api/posts/${channel}`);
}

export async function getAPost(postId) {
    return await get(`api/posts/${postId}`);
}

export async function getTop5Channels() {
    return await get(`api/channels/top5`);
}

export async function getChannelDetails(channelId){
    return await get(`api/channels/details/${channelId}`);
}

export async function getCommentsby(postId){
    const normalizedData = normalize(await get(`api/comments/ofapost/${postId}`), post);
    return normalizedData.entities;
}

const user = new schema.Entity("users");

const createdBy = new schema.Entity("createdBys", {
    userCom: user
},{idAttribute:'userCom'});

const child = new schema.Entity("children", {
    createdBy: createdBy,
});

const comment = new schema.Entity("comments", {
    createdBy: createdBy,
    children: [child]
});

const post = new schema.Entity("posts", {
    comments: [comment]
})

