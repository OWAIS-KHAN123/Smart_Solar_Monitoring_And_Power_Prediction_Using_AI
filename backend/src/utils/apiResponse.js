// Standardized API Response Utility
class ApiResponse {
  static success(res, data, message = 'Success') {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  static created(res, data, message = 'Created') {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  }

  static notFound(res, message = 'Resource not found') {
    return res.status(404).json({
      success: false,
      message,
    });
  }

  static error(res, message = 'Internal server error', statusCode = 500) {
    return res.status(statusCode).json({
      success: false,
      error: message,
    });
  }
}

module.exports = ApiResponse;