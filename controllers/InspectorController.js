const { Inspector } = require('../models');
const helpers = require('../helpers/response');

module.exports = {
  getInspectors: (async (req, res) => {
    const response = {};
    try {
      const data = await Inspector.findAll({});

      if (data.length === 0) {
        response.status = 404;
        response.message = 'Data Not Found';

        helpers.helpers(res, response);
      } else {
        response.status = 200;
        response.message = 'OK';
        response.data = data;

        helpers.helpers(res, response);
      }
    } catch (err) {
      response.status = 500;
      response.message = 'Internal Server Error';
      response.err = err;

      helpers.helpers(res, response);
    }
  }),
};
