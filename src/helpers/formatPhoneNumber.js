export const formatPhoneNumber = (phone) => {
    if (phone) {
        const cleanedNumber = phone.replace(/\D/g, '');

        const countrycode = cleanedNumber.substring(0, 2);

        const formattedNumber = `+${countrycode} (${cleanedNumber.substring(2, 5)}) ${cleanedNumber.substring(5, 8)} ${cleanedNumber.substring(8, 10)} ${cleanedNumber.substring(10)}`;

        return formattedNumber;
    }
    return ''

}