import { isDependent, isEmail, isRequired } from "../common/validate";
import { configValidateType } from "../types";

export const registerRequest: configValidateType = {
  body: {
    email: {
      rules: [isRequired, isEmail],
      msg: {
        isRequired: "Email không được để trống",
        isEmail: "Email không đúng định dạng"
      }
    },

    user_name: {
      rules: [isRequired],
      msg: {
        isRequired: "Tài khoản không được để trống"
      }
    },

    password: {
      rules: [isRequired],
      msg: {
        isRequired: "Mật khẩu không được để trống"
      }
    },

    confirm_password: {
      rules: [isRequired, isDependent],
      dependent: "password",
      msg: {
        isRequired: "Mật khẩu không được để trống",
        isDependent: "Mật khẩu không khớp"
      }
    }
  }
};
