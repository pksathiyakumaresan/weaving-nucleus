const bcrypt = require('bcrypt');

(async () => {
  const hashedPassword = await bcrypt.hash('testpassword', 10);
  console.log(hashedPassword);
})();
