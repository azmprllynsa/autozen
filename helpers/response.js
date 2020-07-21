module.exports = {
  helpers: (res, response) => res.status(response.status).json({
    status: response.status || 500,
    message: response.message || null,
    data: response.data || null,
    err: response.err || null,
  }),
};
