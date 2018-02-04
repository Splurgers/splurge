/**
 * @param {Object} options
 * @param {} options.Splurge Splurge payload
 * @param {String} options.userId 
 * @throws {Error}
 * @return {Promise}
 */
module.exports.splurgeCreation = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    code: 200,
    data: 'splurgeCreation ok!'
  };
};

/**
 * @param {Object} options
 * @param {String} options.userId 
 * @throws {Error}
 * @return {Promise}
 */
module.exports.fetchSplurges = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new Error({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    code: 200,
    data: 'fetchSplurges ok!'
  };
};

