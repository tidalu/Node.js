const crytpo = require('node:crypto');

process.env.UV_THREADPOOL_SIZE = 8

const MAX_CALLS = 8;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  crytpo.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}

// const start = Date.now();

// crytpo.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crytpo.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');
// crytpo.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512');

// console.log('Hash: ', Date.now() - start);
