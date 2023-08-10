import { ErrorRequestHandler } from "express";
import { ApiError } from "../errors/ApiError";
import { logger } from "../utils/logger";

export const apiErrorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  next
) => {
  response.status(response.statusCode === 200 ? 500 : response.statusCode);

  if (error.meta) {
    response.json(error.meta);
  } else {
    response.end();
  }
};
