Welcome to Trendpost, a RESTful API that finds images relevant to real-time trending Instagram hashtags. This API was made with Node.js and Express.j, and it returns a JSON text of images that match a trending hashtag on Instagram. If used properly, this API can help you find pictures to make posts that become trending. 


Prerequisites

This API uses two other APIs: 

Instagram Data API from Rapid API: https://rapidapi.com/logicbuilder/api/instagram-data1/

SERP API for Google Image search: https://serpapi.com/


Before starting, create an account with these APIs and get their API keys. 

Packages:

npm install npm@latest -g
Installation
Clone the repo
git clone https://github.com/ronantakizawa/trendpost

Install NPM packages:
'''
npm install
npm install express
npm install nodemon
```
Make sure that in package.json, the start script says "nodemon index.js"



Getting Started:

To test this API, make sure to have a API client downloaded. 
Here are some you can use:
Insomnia:https://insomnia.rest/
Postman: https://www.postman.com/

Feel free to change your desired PORT# by changing the index.js file. 
On your API client, enter http://localhost:(YOUR_PORT). 

Run npm start on terminal, and the application should start.

To get the Trendpost data, select POST. 
Type in a JSON file with a body that has parameters instagramAPIID and serpAPIID.

Example:
"instagramAPIID":"YOUR_API_KEY"
"serpAPIID": "YOUR_API_KEY"

Click send and you should shortly recieve your response!


Video Demonstration:
