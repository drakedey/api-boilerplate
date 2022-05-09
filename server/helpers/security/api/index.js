import axios from 'axios';

const { URL_HOST_LOGIN } = process.env;

const verifyAccesToken = async (
  token,
  scopes,
  permissions,
  businessUnitsToCheck,
  getUserData = false,
) => {
  console.log(businessUnitsToCheck)
  const headers = {
    token,
    scopeIds: scopes.join(','),
    permissionIds: permissions.join(','),
    businessUnitUUIDsToCheck: businessUnitsToCheck,
    getUserData: getUserData.toString(),
  };

  return axios.post(`${URL_HOST_LOGIN}rest/auth/verify-access-token`, null, { headers });
};

export default { verifyAccesToken };
