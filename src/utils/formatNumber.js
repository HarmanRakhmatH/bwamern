export default number => {
    const formatNumbering = new Intl.NumberFormat("id-ID");
    return formatNumbering.format(number);
};

// TODO: api bawaan browser Intl singakatan International