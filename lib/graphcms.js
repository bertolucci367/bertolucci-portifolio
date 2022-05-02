const API_URL =
  'https://api-us-west-2.graphcms.com/v2/ckhwru7ly4xvt01xs07jqaofg/master';
const API_TOKEN = process.env.GRAPHCMS_AUTH_TOKEN;

const fetchCmsAPI = async (query, { variables } = {}) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
};

export async function getAllTypologies() {
  const data = await fetchCmsAPI(`{
    typologies {
        id
        name
        products(last: 1) {
          photo {
            url
          }
        }
      }
      }`);

  return data.typologies;
}

export async function getAllLines() {
  const data = await fetchCmsAPI(`{
    lines(first: 10) {
      id
      name
      products(first: 1) {
        photo(first: 1) {
          url
        }
        description {
          text
        }
      }
    }
  }`);

  return data.lines;
}

export default { getAllTypologies, getAllLines };
