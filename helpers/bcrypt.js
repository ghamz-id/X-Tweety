const bcrypt = require("bcryptjs");

const hashPassword = (plainPass) => {
	return bcrypt.hashSync(plainPass, bcrypt.genSaltSync(10));
};

const comparePassword = (plainPass, hash) => {
	return bcrypt.compareSync(plainPass, hash);
};

module.exports = {
	hashPassword,
	comparePassword,
};
