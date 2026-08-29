const errorHandler = (err, req, res, next) => {
    console.error(err);
   let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = "Validation failed";
    }

    if (err.name === "CastError") {
        statusCode = 400;
        message = "Invalid ID";
    }

    return res.status(statusCode).json({
        success: false,
        message
    });
};

export default errorHandler;