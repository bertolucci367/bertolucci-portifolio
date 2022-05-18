/* eslint-disable */

import { jsonToGraphQLQuery, EnumType } from 'json-to-graphql-query';

let data;

const fetchCmsAPI = async (query, { variables } = {}) => {
  const res = await fetch(
    'https://api-us-west-2.graphcms.com/v2/ckhwru7ly4xvt01xs07jqaofg/master',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjkzNDIxMjAsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NraHdydTdseTR4dnQwMXhzMDdqcWFvZmcvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMDg2NDA5MWItMjZjYi00MDA2LTg4NzEtNzMyNTQyZWM5ZDA1IiwianRpIjoiY2tzaWM4YTZ1MXRleTAxeGw5ZDhrZ3F6ZSJ9.5L0Z4HdaDNEgcwC1ptZupQrelAzqNc4RAGtDaCXqmbNJpBwxWFxHnP5SA-UDndc2CRHBG53nvfixBGciCEtsRSeHgzdI1MzQchMAww1n1NTTFFKB5R7s0O9x651ffOvDYmU5p6ZITTT53k5ZG01UMMsoByZfygZAK8IVxk144hVOkOEvJHaToai_VKGwiD5TwDIq1R__cLAN27IfCglF0HvSFTxAP6dOBF8rFwGtfEuRL7x1wMNcKmMBrAcPiuCHxUZYnK-Yfwpt3AylXCZJreXpWLs1rSPc9tQScgeH-8FRn7z1sPvY3ZsOLynC85QOcPzxydzIsrLTeeoRBtcMj7dSwy1DMVlCMTN7t-ue7hfTq5d53eNVq600KRdMbZU19goCyg-By5wI7MRL8hlNbEoSwo_5Ois1IgYli51qCCDB8b3D5Ol9W3MmxqZk-IjIPbhcecBFdjx1nN6eKaBS2WjFKsD1E9iN6blnuegN2CzWBjBr6Y-k9gX0rPnoK8FOUbkRquaF8YggiGK2aL27D4pf7ume8ZelimiAC5CcBydqya5fS1DQu_NXqXo7hJC4kW4CO1YLQUjKNKue1DkYtsmQNIiBciFwXZMI2NatN6IYoiwE180XR5PvNak3CHdpCuPYsWj7LQjxXsT5KShgV2ib49qc_GrbpBMThaS9oXk`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  );

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    // throw new Error('Failed to fetch API');
  }

  return json.data;
};

export async function getAllTypologies() {
  data = await fetchCmsAPI(`{
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
  data = await fetchCmsAPI(`{
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

export const getAllDesigners = async () => {
  data = await fetchCmsAPI(`{
    designers {
      id
      name
      photo {
        url(
          transformation: {document: {output: {format: webp}}}
        )
      }
      text
    }
  }`);

  return data.designers;
};

export const getSliderHome = async () => {
  data = await fetchCmsAPI(`{
    slidersCopy {
      id
      photoBannerSlider {
        url(transformation: {document: {output: {format: webp}}})
      }
    }
  }`);

  return data.slidersCopy;
};

export const getSliderOurHistory = async () => {
  data = await fetchCmsAPI(`{
    slidersNossasHistorias {
      photoNossaHistoriaSlider {
        url(transformation: {document: {output: {format: webp}}})
        alt
      }
    }
  }`);

  return data.slidersNossasHistorias;
};

export const getSliderFabric = async () => {
  data = await fetchCmsAPI(`{
    sliderFabricas1 {
      photoFabrica {
        url(transformation: {document: {output: {format: webp}}})
      }
    }
  }`);

  return data.sliderFabricas1;
};

export const instaFeed = async () => {
  const res = await fetch(
    `https://graph.instagram.com/me/media?access_token=IGQVJYWkhZANmxoMC12aHloUmhSUmRNWFU0Wm9PZAktZAUFZA0b1ZAGQ2dZAUEJxMkhyN2lmY0IwaVppblZAwdUlRWlkzQm5ySWtsZAUZAFUmFoNUpBVmhpVHRVa1FDWXNYVDVXY1Nwa1ZAZAZA25lbTZADSXNaaTM4awZDZD&fields=media_url,media_type,caption,permalink`,
  );

  const json = await res.json();

  return json.data;
};

export const getAllProductsThumbs = async (page, pageCount, where) => {
  const skiped = pageCount * page;
  pageCount = pageCount;
  let query = {
    query: {
      products: {
        __args: {
          skip: skiped,
          first: pageCount,
          orderBy: new EnumType('name_ASC'),
          where: {},
        },
        id: true,
        slug: true,
        name: true,
        cover: {
          url: true,
        },
        photo: {
          __args: {
            first: 1,
          },
          url: true,
        },
      },
      productsConnection: {
        __args: {
          where: {},
        },
        aggregate: {
          count: true,
        },
      },
    },
  };

  if (where.materials.length > 0) {
    query.query.products.__args.where.materials_every = {};
    query.query.products.__args.where.materials_every.id_in = where.materials;
  }

  if (where.lines.length > 0) {
    query.query.products.__args.where.lines_every = {};
    query.query.products.__args.where.lines_every.id_in = where.lines;
  }

  if (where.typologies.length > 0) {
    query.query.products.__args.where.typologies_every = {};
    query.query.products.__args.where.typologies_every.id_in = where.typologies;
  }

  if (where.designer.length > 0) {
    query.query.products.__args.where.designer = {};
    query.query.products.__args.where.designer.id_in = where.designer;
  }

  query.query.products.__args.where.name_contains = where.contains;

  if (where.orderBy.length > 0) {
    query.query.products.__args.orderBy = new EnumType(where.orderBy);
  }

  query.query.productsConnection.__args.where =
    query.query.products.__args.where;

  query = jsonToGraphQLQuery(query);
  data = await fetchCmsAPI(query);
  return data;
};

export const getProduct = async (params) => {
  let query = {
    query: {
      products: {
        __args: {
          where: {
            id: '',
          },
        },
        id: true,
        slug: true,
        name: true,
        photo: {
          url: true,
        },
        designer: {
          name: true,
          text: true,
        },
        text: {
          text: true,
        },
        finishings: {
          name: true,
        },
        description: {
          text: true,
        },
        materials: {
          name: true,
        },
        files: {
          id: true,
          name: true,
        },
        lines: {
          id: true,
        },
        typologies: {
          id: true,
        },
        height: true,
        diameter: true,
      },
    },
  };

  query.query.products.__args.where.id = params;
  query = jsonToGraphQLQuery(query);
  data = await fetchCmsAPI(query);
  console.log(data.products[0]);
  return data.products.length > 0 ? data.products["0"] : [];
};

export const getDesigner = async (params) => {
  let query = {
    query: {
      designers: {
        __args: {
          where: {
            id: '',
          },
        },
        id: true,
        slug: true,
        name: true,
        photo: {
          url: true,
        },
        products: {
          name: true,
          text: {
            text: true,
          },
          photo: {
            url: true,
          },
        },
        description: {
          text: true,
        },
      },
    },
  };

  query.query.designers.__args.where.id = params;
  query = jsonToGraphQLQuery(query);
  data = await fetchCmsAPI(query);
  console.log(data);
  return data.designers.length > 0 ? data.designers[0] : [];
};

export const getAllProductsCount = async () => {
  data = await fetchCmsAPI(`{
    productsConnection{
      aggregate {
        count
      }
    }
  }`);
  return data.productsConnection.aggregate.count;
};

export const getRelatedProducsSameLineFromCms = async (lineId, selfProduct) => {
    let query = {
    query: {
      products: {
        __args: {
          where: {
            lines_every: { id: '' },
          },
        },
        id: true,
        name: true,
        cover: {
          url: true,
        },
        photo: {
          __args: {
            first: 1,
          },
          url: true,
        },
      },
    },
  };

  query.query.products.__args.where.lines_every.id = lineId;
  query.query.products.__args.where.id_not = selfProduct;

  data = await fetchCmsAPI(jsonToGraphQLQuery(query));
  return data.products;
}

export const getRelatedProducsSameTypoFromCms = async (lineId, selfProduct) => {
    let query = {
    query: {
      products: {
        __args: {
          where: {
            typologies_every: { id: '' },
          },
          first: 20
        },
        id: true,
        name: true,
        cover: {
          url: true,
        },
        photo: {
          __args: {
            first: 1,
          },
          url: true,
        },
      },
    },
  };

  query.query.products.__args.where.typologies_every.id = lineId;
  query.query.products.__args.where.id_not = selfProduct;

  data = await fetchCmsAPI(jsonToGraphQLQuery(query));
  return data.products;
}


export const getAllFilters = async () => {
  data = await fetchCmsAPI(`{
    typologies {
      id
      name
    }
    materials {
      id
      name
    }
    designers {
      id
      name
    }
    lines {
      id
      name
    }
  }`);
  return data;
};

export const getAllProducts = async () => {
  data = await fetchCmsAPI(`{
    products{
      id
    }
  }`);
  return data.products;
};

export default {
  getAllDesigners,
  getAllTypologies,
  getAllLines,
  getAllProductsThumbs,
  getAllProductsCount,
  getSliderOurHistory,
  getSliderFabric,
  getAllFilters,
  getProduct,
  getAllProducts,
  getRelatedProducsSameLineFromCms,
  getRelatedProducsSameTypoFromCms
};
