/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable object-curly-newline */
import permissions from './permissions.dictionary';
import scopes from './scopes.dicitionary';

const DEFAULT_SCOPES = [scopes.MULTIPLE_BUSINESS_UNITS_USER, scopes.ALLY_USER];

const routes = [
	{ method: 'POST', path: '/claims/', permissions: [permissions.CREATE_CLAIM], scopes: DEFAULT_SCOPES },
].map(route => ({ ...route, path: `/api/v1.0${route.path}` }));

export default routes;
