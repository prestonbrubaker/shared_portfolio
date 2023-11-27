module.exports = {
  apps: [{
    name: 'Shared Portfolio',
    script: 'server.js',
    interpreter: '/usr/bin/authbind',
    args: '--deep node'
  }]
};
