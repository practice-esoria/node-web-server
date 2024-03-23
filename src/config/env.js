import env from "dotenv";
//require("dotenv").config();
import envVar from "env-var";
//const { get } = require("env-var");

env.config();

export const envs = {
  PORT: envVar.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: envVar.get("PUBLIC_PATH").default("pulic").asString(),
};

// module.exports = {
//   envs,
// };
