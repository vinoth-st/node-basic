const getUser = (req, res) => {
    res.send({'message' : 'User Info'});
};

const createUser = (req, res) => {
    res.send('Create User');
};

module.exports = { getUser, createUser };