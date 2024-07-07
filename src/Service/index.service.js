const crypto = require('crypto');
exports.generateCode = (number) => {
    // Sinh 3 byte ngẫu nhiên
    const randomBytes = crypto.randomBytes(number / 2);
    // Chuyển đổi thành một số nguyên
    const randomSixDigitNumber = parseInt(randomBytes.toString('hex'), 16);
    // Lấy 6 số cuối cùng và thêm các số 0 đằng trước nếu cần
    const formattedNumber = String(randomSixDigitNumber).slice(-number).padStart(number, '0');
    return formattedNumber;
}