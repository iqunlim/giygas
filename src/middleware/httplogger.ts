import morgan, { StreamOptions } from "morgan";
import logger from "../utils/logger";

const stream: StreamOptions = {
  write: (message) => logger.http(message),
};

// Build the morgan middleware
const morganMiddleware = morgan("combined", { stream: stream });

export default morganMiddleware;
