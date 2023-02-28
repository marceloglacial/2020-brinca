import { getBlocks } from './getBlocks';

export const getEvents = async () => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events?populate=content,thumbnail`
  );
  const events = await results.json();
  return events?.data;
};

export const getSingleEvent = async (eventId) => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}?populate=content.photos,content.buttons,content.image,thumbnail`
  );
  const event = await results.json();
  const eventAttributes = event.data.attributes;
  return {
    id: event.data.id,
    title: eventAttributes.title,
    blocks: getBlocks(eventAttributes.content),
  };
};
