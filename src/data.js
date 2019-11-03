const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync('src/json/accounts.json', { encoding: 'utf8'});
const userData  = fs.readFileSync('src/json/users.json', { encoding: 'utf8'});
const accounts = JSON.parse(accountData);
const users  = JSON.parse(userData);


const writeJSON = () => {
  const accountsJSON = JSON.stringify(accounts, null, 4);
  fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, 'UTF8');
}

module.exports = {
  accounts,
  users,
  writeJSON
}
