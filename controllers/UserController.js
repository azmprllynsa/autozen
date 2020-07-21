const bcrypt = require('bcryptjs');
const { User } = require('../models');
const helpers = require('../helpers/response');

module.exports = {
  registerUser: (async (req, res) => {
    const response = {};
    try {
      const salt = bcrypt.genSaltSync(10);
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (user) {
        response.status = 203;
        response.message = 'Your email has been registered!';
        helpers.helpers(res, response);
      } else {
        const data = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, salt),
          location: req.body.location,
          isWaiting: true,
        });
        if (data === undefined) {
          response.status = 203;
          response.message = 'Data not found';
          helpers.helpers(res, response);
        } else {
          response.status = 201;
          response.message = 'Account has been created!';
          response.data = data;
          helpers.helpers(res, response);
        }
      }
    } catch (err) {
      response.status = 500;
      response.message = 'Internal Server Error';
      response.err = err;

      helpers.helpers(res, response);
    }
  }),

  loginUser: (async (req, res) => {
    const response = {};
    try {
      const { email } = req.body;
      const data = await User.findOne({
        where: {
          email,
        },
      });
      if (!data) {
        response.status = 404;
        response.message = 'Email Not Found! Please Register First!';

        helpers.helpers(res, response);
      } if (data) {
        const authorized = bcrypt.compareSync(req.body.password, data.password);
        if (!authorized) {
          response.status = 404;
          response.message = 'Password Incorrect!';

          helpers.helpers(res, response);
        } else {
          response.status = 200;
          response.message = `${email} Login Successfully!`;
          response.data = data;

          helpers.helpers(res, response);
        }
      }
    } catch (err) {
      response.status = 500;
      response.message = 'Internal Server Error';
      response.err = err;

      helpers.helpers(res, response);
    }
  }),

  getUser: (async (req, res) => {
    const response = {};
    try {
      const data = await User.findAll({});
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
