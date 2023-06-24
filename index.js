// -----------------------------BÀI TẬP 1 ----------------------------
/** input: cho người dùng nhập vào số ngày làm, 
 * xử lý : dom tới lấy giá trị ngày làm mà ngườui dùng nhập rồi nhân cho 10000
 * output: xuất ra kết quả tiền lương
 */
function tinhTienLuongNV() {
  var soNgayLam = document.getElementById("soNgayLam").value * 1;
  
  var tienLuong = soNgayLam * 100000;
  console.log(tienLuong);
  document.querySelector("#tenLuongNV").innerHTML = tienLuong;
}



// -----------------------------BÀI TẬP 2 ----------------------------
/** input: cho người dùng nhập vào 5 số 
 * xử lý: cộng 5 só lại rồi chia 5
 * output: xuất ra kết quả trung bình 
 */
function tinhTB() {
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var so3 = document.getElementById("so3").value * 1;
  var so4 = document.getElementById("so4").value * 1;
  var so5 = document.getElementById("so5").value * 1;
  var trungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
  console.log(trungBinh);
  document.querySelector("#tinhGiaTriTB").innerHTML = trungBinh;
}



// -----------------------------BÀI TẬP 3 ----------------------------
/** input" cho người dùng nhập vào số tiền USD muốn quy đổi
 *  xử lý: lấy số người dùng nhập vào nhân với 23500
 *  output:  xuất ra số tiền đã quy đổi
 */
function quyDoiTien() {
  var soTien = document.getElementById("nhapSoTien").value * 1;
  var quyDoi = soTien * 23500;
  console.log(quyDoi);
  document.querySelector("#doiTien").innerHTML = quyDoi + "VND";
}



// -----------------------------BÀI TẬP 4 ----------------------------
/** input :  cho người dùng nhập vào chiều dài và  chiều rộng
 *  xử lý: chu vi = ( chièu dài + chiều rộng)*2
 *         diện tích = chiều dài * chiều rộng
 * output: xuất ra kết quả chu vi và diện tích   
 */
function dienTichChuVi() {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var dienTich = chieuDai * chieuRong;
  console.log(dienTich);
  var chuVi = (chieuDai + chieuRong) * 2;
  console.log(chuVi);
  document.querySelector("#dienTich").innerHTML = "diện tích là : " + dienTich;
  document.querySelector("#chuVi").innerHTML = "chu vi là : " + chuVi;
}



// -----------------------------BÀI TẬP 5 ----------------------------
/** input cho người dùng nhập vào  số có 2 ký số
 * xử lý :  + lấy số hàng chục bằng cách /10 nhưng ở đây ra số thập phân nên ta dùng math.floor để lấy giá trị số chẵn
 *          + lấy số hàng đơn vị bằng cách %10
 *          + sau đó cộng số hàng chục và số hàng đơn vị
 * output: xuất ra kết quả
 */
function tinhTong2KySo() {
  var kySo = document.getElementById("nhapSo").value * 1;
  var soHangChuc = Math.floor(kySo / 10);
  var soHangDonVi = kySo % 10;
  console.log(soHangChuc);
  console.log(soHangDonVi);
  var tong2Kyso = soHangChuc + soHangDonVi;
  console.log(tong2Kyso);
  document.querySelector("#tong2KySo").innerHTML = tong2Kyso;
}
