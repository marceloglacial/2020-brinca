import { createClient } from 'contentful';

const client = createClient({
  space: 'porl7lsz9dye',
  accessToken: 'UEF_hA-eUFY9wdhw-8PsItx-6m2XY9iiOvhHO3J2wCA',
});

export const getContentful = async (type) => {
  const data = await client.getEntries({ content_type: type });
  const { total, skip, limit, items } = data;
  const fields = items.map((item) => {
    return {
      id: item.sys.id,
      ...item.fields,
    };
  });
  return { total, skip, limit, data: fields };
};
