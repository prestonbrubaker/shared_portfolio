module.exports = {
  apps: [{
    name: 'shared_portfolio',
    script: 'server.js',
    interpreter: 'authbind',
    args: '--deep node'
  }]
};
