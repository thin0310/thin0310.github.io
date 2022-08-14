
// Đăng bài //

// Để load page không mất thì mình phải lưu vào localStorage 
if (!localStorage.getItem("PostUpload")) {
  localStorage.setItem("PostUpload", JSON.stringify([]))
  render()
} else {
  render()
}

function add() {

  let item_Title = document.querySelector('.title').value
  let item_Content = document.querySelector('.content').value
  let file = document.getElementById("imageFile").files[0]
  let PostUpload = JSON.parse(localStorage.getItem("PostUpload"))
  let reader = new FileReader();
  reader.onload = function () {
    let Item = {
      Title: item_Title,
      Content: item_Content,
      imgSrc: reader.result
    }

    PostUpload.push(Item)
    localStorage.setItem("PostUpload", JSON.stringify(PostUpload))
    render()
  };
  reader.readAsDataURL(file);

}
function render() {
  let blogContainer = document.querySelector(".blog__container")
  let PostUpload = JSON.parse(localStorage.getItem("PostUpload"))
  blogContainer.innerHTML = `
  <div class="blog">
  <div class="blog__img">
    <img width="390px" height="220px"
      src="https://dulichchat.com/wp-content/uploads/2022/07/du-lich-ha-giang-review-dulichchat-4-390x220.jpg">
  </div>
  <div class="blog__text">
    <h3> Thanh xuân nhất định phải đến Hà Giang
      một lần </h3>
    <p>Nếu ai đó hỏi tôi rằng lần tiêu tiền xứng đáng nhất trong
      cuộc đời này là vào điều gì thì tôi sẽ không ngần ngại mà
      trả lời rằng: Đó chính là tấm vé Hai Trăm lên xe khách
      tuyến Hà Nội – Hà Giang vào buổi tối hôm…</p>
    <a class="xemthem" href="hagiang.html">Xem thêm</a>
  </div>
</div>
<div class="blog">
  <div class="blog__img">
    <img width="390px" height="220px"
      src="https://dulichchat.com/wp-content/uploads/2022/07/du-lich-dao-phu-quy-dulichchat-8-390x220.jpg">
  </div>
  <div class="blog__text">
    <h3>Bộ ảnh check in đảo Phú Quý cực đẹp</h3>
    <p>Phú Quý hoang sơ và quyến rũ, ngày càng thu hút nhiều
      hơn các tín đồ du lịch đến check in, khám phá. Cùng xem
      ngay bộ ảnh check in Phú Quý cực đẹp này và chuẩn bị
      hành trang cho mình bạn nhé!</p>
    <a class="xemthem" href="phuquy.html">Xem thêm</a>
  </div>
</div>
<div class="blog">
  <div class="blog__img">
    <img width="390px" height="220px"
      src="https://dulichchat.com/wp-content/uploads/2022/07/kinh-nghiem-du-lich-bali-thang-6-dulichchat-17Lempuyang-temple-390x220.jpg">
  </div>
  <div class="blog__text">
    <h3>Du lịch Bali tháng 6 - Check in vùng đất
      ngàn góc sống ảo</h3>
    <p>Sở thích của mình là chụp ảnh nên mình nghiên cứu đi Bali trên group tầm 1 tuần và chốt lịch trình những
      nơi muốn đến. Vẻ đẹp của Bali mình cảm nhận được là do thực vật, thiên nhiên đã tạo nên cảnh quang hết sức
      hùng vĩ. Cùng…</p>
    <a class="xemthem" href="bali.html">Xem thêm</a>
  </div>
</div>
  `
  for (let i = 0; i < PostUpload.length; i++) {
    blogContainer.innerHTML += `
    <div class="blog">
    <div class="blog__img">
      <img
        src="${PostUpload[i].imgSrc}" width="390px" height="220px">
    </div>
    <div class="blog__text">
      <h3>${PostUpload[i].Title}</h3>
      <p>${PostUpload[i].Content}</p>
      <a class="xemthem" href="#">Xem thêm</a>
    </div>
  </div>
 `
  }
}












//Đăng ảnh//
let imageFile = document.getElementById("imageFile")
imageFile.onchange =
  function chooseFile() {
    let file = document.getElementById("imageFile").files[0]

 
    var reader = new FileReader();
    reader.onload = function () {

      $('#image').attr('src', reader.result);
    };
    reader.readAsDataURL(file);
  }











  //Tìm Kiếm//
const search_item = document.getElementById('search-item');
const blog = document.querySelectorAll('.blog');
search_item.addEventListener('keyup', seachItem);

function seachItem() {
  let valueItem = search_item.value.toLowerCase();
  Array.from(blog).forEach(function (ele) {
    let nameItem = ele.querySelector('.blog__text').firstElementChild.textContent;
    if (nameItem.toLowerCase().indexOf(valueItem) !== -1) {
      ele.style.display = 'flex';
    }
    else {
      ele.style.display = 'none';
    }
  })

}

