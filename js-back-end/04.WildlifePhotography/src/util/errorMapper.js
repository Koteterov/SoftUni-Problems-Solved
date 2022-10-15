module.exports = (error) => {
    if (error.name == 'ValidationError') {
        return Object
            .entries(error.errors)
            .map(([key, err]) => err.properties.message)
    } else {
        return error.message;
    }
};