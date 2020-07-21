const { Board, Inspector } = require('../models');
const helpers = require('../helpers/response');

module.exports = {
  insertBoard: (async (req, res) => {
    const response = {};
    try {
      const { body } = req;
      const data = await Board.create(body);
      if (data === undefined) {
        response.status = 400;
        response.message = 'Input Invalid';

        helpers.helpers(res, response);
      } else {
        response.status = 201;
        response.message = 'Product Has Been Added';
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

  getBoard: async (req, res) => {
    const response = {};
    try {
      const { inspectorId } = req.params;
      const data = await Inspector.findAll({
        where: {
          id: inspectorId,
        },
      });
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
  },
};
