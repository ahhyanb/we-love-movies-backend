function asyncErrorBoundary(delegate, defaultStatus) {
    // Return a new function that takes request, response, and next as arguments
    return function(request, response, next) {
      // Create a Promise and try to run the delegate function
      try {
        delegate(request, response, next);
      } catch (error) {
        // If an error happens, use defaultStatus if available
        const status = error.status; //or defaultStatus;
        const message = error.message;
        // Pass the error details to Express
        next({ status, message });
      }
    }
  }
  