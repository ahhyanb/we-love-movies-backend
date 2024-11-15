function asyncErrorBoundary(delegate, defaultStatus) {
    return (request, response, next) => {
        Promise.resolve()
            .then(() => delegate(request, response, next))
            .catch((error = {}) => {
                // Ensure status and message are correctly set
                const status = error.status || defaultStatus || 500; // Default to 500 if no status is provided
                const message = error.message || "An unknown error occurred."; // Default error message
                next({ status, message });
            });
    };
}

module.exports = asyncErrorBoundary;
