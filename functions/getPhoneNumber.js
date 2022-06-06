const getPhoneNumber = (phone) => phone.replace(/[^\d.]/g, '');
export default getPhoneNumber;
