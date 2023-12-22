import { isRequired } from "../common/validate";

export const registerRequest: configValidateType = {
  email: {
      rules: [isRequired],
      msg: {}
  },
};
