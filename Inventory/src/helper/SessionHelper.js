class SessionHelper {
  static SetToken(token) {
    localStorage.setItem("accessToken", token);
  }
  static GetToken() {
    return localStorage.getItem("accessToken");
  }
  static RemoveToken() {
    return localStorage.removeItem("accessToken");
  }
  static SetUserDetails(UserDetails) {
    localStorage.setItem("UserDetails", JSON.stringify(UserDetails));
  }
  static GetUserDetails() {
    return JSON.parse(localStorage.getItem("UserDetails"));
  }
  static RemoveUserDetails() {
    return localStorage.removeItem("UserDetails");
  }
  static RecoverVerifyEmail(Email) {
    return localStorage.setItem("RecoverVerifyEmail", Email);
  }
  static GetRecoverVerifyEmail() {
    return localStorage.getItem("RecoverVerifyEmail");
  }
  static SetRecoverVerifyOTP(OTP) {
    return localStorage.setItem("RecoverVerifyOTP", OTP);
  }
  static GetRecoverVerifyOTP() {
    return localStorage.getItem("RecoverVerifyOTP");
  }

  static ResetStorage() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("UserDetails");
    localStorage.removeItem("RecoverVerifyEmail");
    localStorage.removeItem("RecoverVerifyOTP");
    return true;
  }
}

export default SessionHelper;
