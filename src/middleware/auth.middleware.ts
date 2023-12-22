import { isRequired } from "../common/validate";
import { configValidateType } from "../types";

export const registerRequest: configValidateType = {
  body: {
    email: {
      rules: [isRequired],
      msg: {
        isRequired: "ss"
      }
    },
  }
};
