import 'es6-promise';
process.env.NODE_ENV = 'test';

import './index';
import './extractFromAST';
import './network_interface/ApolloNetworkInterface';
import './server/serverUtil';
import './queryTransformers';
