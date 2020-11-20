/**
 * This function can makes mysql queries.
 * Note: The function just support async.
 * @param callback The callback function.
 * @param callbackArguments The callback function args.
 * @param databaseConnection The MySQL connection
 * @param query The query line
 * @param params ...
 * @returns Returns an integer of the height of the text.
 */
declare function dbQuery(...args: any[]): boolean