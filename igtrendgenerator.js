import {findHashtag,options} from "./findHashtag.js"
import { GoogleSearch } from 'google-search-results-nodejs';

let queryInfo = {

    "Trending Hashtag":"",
    "Relevant Images":[]
}

export function getHomePage(req, res) 
{
        res.send("Welcome to the IG Trend Generator! Create a POST request with your API keys to get an image.");
}


export async function generatePhoto(req, res)
{
  try
  {
      options.headers["X-RapidAPI-Key"]=req.body.instagramAPIID;
      const search = new GoogleSearch(req.body.serpAPIID);
  }
  catch (err)
  {
    res.send("Enter both API keys");
  }
    options.headers["X-RapidAPI-Key"]=req.body.instagramAPIID;
    const search = new GoogleSearch(req.body.serpAPIID);
    var hashtag = await findHashtag();
    queryInfo["Trending Hashtag"]=hashtag;
    const params = {
        q: hashtag,
        tbm: "isch",
        ijn: "0"
      };
      // Show result as JSON
      search.json(params, function callback(data){
        queryInfo["Relevant Images"]=data["images_results"].slice(0,5);
        res.send(queryInfo);
      });

  
}




