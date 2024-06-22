var user = [{
    id: '6672124b-fd70-4316-8c65-2412835a8dfc',
    name: '1',
    dn: '1111-11-11',
    apelido: '1',
    email: '123@123091231',
    password: '1'
}, {
    id: '6672124b-fd70-4316-8c65-2412835a8dfc',
    name: '2',
    dn: '1111-11-11',
    apelido: '2',
    email: '123@123091231',
    password: '2'
}];
var message = [];


function getUser() {
    return user;
}

function getMessage() {
    return message;
}

module.exports = { getUser, getMessage }