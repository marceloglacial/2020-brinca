const getPhoneNumber = (phone) => `+1${phone.replace(/[^\d.]/g, '')}`;
export default getPhoneNumber;
