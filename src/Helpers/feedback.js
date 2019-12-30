export default class Feedback {
  static success(data, res, status) {
    res.status(status).json({
      data,
      status: 'success',
    });
  }

  static error(err, req, res, next) {
    const { message, status } = err;
    const error = message;
    res.status(status).json({
      error,
      status: 'error',
    });
  }
}
