
const config = require('../config');

exports.loginAdmin = async (req, res, next) => {
    const { username, password } = req.body;
    if (!(username && password)) {
       return res
          .status(401)
          .send({ error: "Nhập đầy đủ tài khoản và mật khẩu" });
    }
    else if (username === config.account_admin.username && password === config.account_admin.password) {
       return res.status(200).json({ success: true });
    }
    else {
       return res.status(404).send('Username or password is incorrect');
    }
 };
 