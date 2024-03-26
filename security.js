const cleanData = DOMPurify.sanitize(dirtyData);
document.cookie = "name=value; HttpOnly";
function escapeHtml(unsafe) {
  return unsafe.replace(/[&<"']/g, function (m) {
    switch (m) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
    }
  });
}
function validateInput(input) {
  // Kiểm tra xem dữ liệu có tồn tại không
  if (!input) {
    alert("Vui lòng nhập dữ liệu.");
    return false;
  }
  // Kiểm tra xem dữ liệu có chứa các ký tự đặc biệt không
  var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (specialChars.test(input)) {
    alert("Dữ liệu không được chứa ký tự đặc biệt.");
    return false;
  }
  // Kiểm tra xem dữ liệu có đúng định dạng hay không (ví dụ: email, số điện thoại, ...)
  // Ví dụ kiểm tra email
  var emailFormat = /\S+@\S+\.\S+/;
  if (!emailFormat.test(input)) {
    alert("Vui lòng nhập đúng định dạng email.");
    return false;
  }
  // Nếu dữ liệu đã qua tất cả các kiểm tra, return true để cho phép sử dụng
  return true;
}
// Sử dụng hàm validateInput
var userInput = prompt("Nhập email của bạn:");
if (validateInput(userInput)) {
  alert("Email của bạn là: " + userInput);
} else {
  alert("Nhập lại email.");
}
