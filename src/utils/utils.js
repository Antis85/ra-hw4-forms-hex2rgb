const checkInput = ({ target }, prevColorStyle) => {
  const { value } = target;
  if (value.length < 7) {
    return prevColorStyle;
  }

  return !value.startsWith('#') || value.length > 7
    ? { backgroundColor: 'red' }
    : false;
};

const getRGBString = (value) => {
  if (value.startsWith('#')) {
    const rRGB = +('0x' + value.slice(1, 3)).toString();
    const gRGB = +('0x' + value.slice(3, 5)).toString();
    const bRGB = +('0x' + value.slice(5, 7)).toString();
    console.log(rRGB, gRGB, bRGB);
    const notNumber = isNaN(rRGB) || isNaN(gRGB) || isNaN(bRGB);
    console.log('?notNumber: ', notNumber);

    return (
      (notNumber && { backgroundColor: 'red' }) || {
        backgroundColor: `rgb(${rRGB}, ${gRGB}, ${bRGB})`,
      }
    );
  }
};

export { checkInput, getRGBString };
