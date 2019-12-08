const superagent = require('superagent');
const MY_GRAPHQL_URL = 'https://hasura.kuropen.org/v1/graphql';

/**
 * Get cached Y.O.N.O. blog articles.
 * @param {number} limit 
 * @return {Promise<any[]>}
 */
const getYonoArticles = async (limit = 3) => {
  const query = `
  query GetYonoArticles {
    yono_articles(limit: ${limit}, order_by: {published_at: desc}) {
      id
      image_url
      published_at
      title
      url
    }
  }
  `;

  const result = await superagent
    .post(MY_GRAPHQL_URL) 
    .send({"query": query})
    .set("accept", "json");
  return JSON.parse(result.text).data.yono_articles;
};

export default getYonoArticles;
