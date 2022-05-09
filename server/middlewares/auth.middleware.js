import securityHelper from '../helpers/security';

const verifyUserRequest = async (req, res, next) => {
  try {
    const { token, businessunit } = req.headers;
    const { originalUrl: path, method } = req;
    const targetEndpoint = securityHelper.endpoints
      .find((end) => end.path === path && end.method === method);
    if (!targetEndpoint) res.status(400).send({ error: 'RUTA NO CONFIGURADA' });
    const { scopes, permissions } = targetEndpoint;
    const security = await securityHelper
      .verifyAccesToken(token, scopes, permissions, businessunit, true);
    req.local.security = security;
    next();
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).send(err.response.data);
    } else {
      console.error(err);
      res.status(500).send('ERROR EN AUTH');
    }
  }
};

export default verifyUserRequest;
