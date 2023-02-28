import { API_BLOCKS, API_EVENTS_PARAMS } from '../constants';
import { getBlocks } from './getBlocks';

export const getEvents = async () => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${API_EVENTS_PARAMS}`
  );
  const events = await results.json();
  return events?.data;
};

export const getSingleEvent = async (eventId) => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}?${API_BLOCKS}`
  );
  const event = await results.json();
  const eventAttributes = event.data.attributes;
  return {
    id: event.data.id,
    title: eventAttributes.title,
    blocks: getBlocks(eventAttributes.content),
  };
};
