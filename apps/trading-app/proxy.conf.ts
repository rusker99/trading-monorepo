const tradingAppProxyConfig = {
  "/api": {
    "target": `http://${process.env.API_HOST || 'localhost'}:4200`,
    "secure": false,
    "logLevel": "debug"
  }
}
module.exports = tradingAppProxyConfig;
