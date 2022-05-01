const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

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

export async function getAllTechnologies() {
  const data = await fetchCmsAPI(`{
        allTechnologies{
          id, 
          name, 
          logo{
            url(imgixParams:{fm:jpg,fit:crop, h:120, w:120})
          },
          defaultVisible
        }
      }`);

  return data.allTechnologies;
}

export default { getAllTechnologies };
