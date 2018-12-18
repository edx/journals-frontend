const helpers = {
  accessLengthInMonths(accessLength) {
    let monthsLength = '';
    if (accessLength !== undefined && accessLength > 0) {
      const accessLengthMonths = parseInt(accessLength / 30, 10);
      monthsLength = accessLengthMonths > 1 ? `${accessLengthMonths} months` : `${accessLengthMonths} month`;
    } else {
      monthsLength = 'unlimited time';
    }
    return monthsLength;
  },
};

export default helpers;
