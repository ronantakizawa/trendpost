import axios from "axios";

export var options = {
    method: 'GET',
    url: 'https://instagram-data1.p.rapidapi.com/hashtag/feed',
    params: {hashtag: 'trending'},
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'instagram-data1.p.rapidapi.com'
    }
};
export async function findHashtag(){
    var stringFinal="";

    await axios.request(options).then(function (response) {
        stringFinal+=response.data.collector[0].hashtags[Math.floor(Math.random() * 5)];
    });
    return stringFinal;




}
