document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".item");
  const rightCtns = document.querySelectorAll(".right--ctn");
  // Mặc định mở mục "2020"
  listItems[0].style.color = "#0cf";
  rightCtns[0].classList.add("active");
  listItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Bỏ lớp active khỏi tất cả các rightCtns
      rightCtns.forEach((rightCtn) => {
        rightCtn.classList.remove("active");
      });
      // Thêm lớp active vào rightCtn tương ứng với mục được chọn
      rightCtns[index].classList.add("active");

      // Set màu cho tất cả các mục về màu trắng
      listItems.forEach((item) => {
        item.style.color = "white";
      });

      // Set màu cho mục được chọn
      item.style.color = "#0cf";
    });
  });
});
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
btn1.addEventListener("click", () => {
  window.open("https://www.facebook.com/yukicute1009", "_blank", "noopener");
});
