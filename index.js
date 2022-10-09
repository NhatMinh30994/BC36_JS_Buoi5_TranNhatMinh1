// ==========Bài 1===========
/**
 * INPUT: điểm chuẩn , điểm 3 môn, khu vực (A,B,C,X), đối tượng (1,2,3,0)
 * PROCESS:
 *    1. lấy input
 *    2.  tính tổng điểm
 *        2.1 tính điểm ưu tiên theo khu vực
 *        2.2 tính điểm ưu tiên theo đối tượng
 *        2.3 cộng hết lại => tổng điểm
 *    3. kiểm tra đậu rớt
 * OUTPUT: tính tổng điểm , kết quả đậu hay rớt
 */

// input : khu vực , output: điểm
function calcAreaGrade(area) {
  switch (area) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;

    default:
      return 0;
  }
}
// input: loại , output:điểm
function calcTypeGrade(type) {
  if (type === 1) {
    return 2.5;
  }
  if (type === 2) {
    return 1.5;
  }
  if (type === 3) {
    return 1;
  }
  return 0;
}

function ex1() {
  var standard = 22;
  var sub1 = 10;
  var sub2 = 3;
  var sub3 = 5;
  var area = "A";
  var type = 1;
  var areaGrade = 0;
  var typeGrade = 0;
  var totalGrade = 0;

  // tính điểm khu vực
  areaGrade = calcAreaGrade(area);
  //tính điểm đối tượng
  typeGrade = calcTypeGrade(type);

  totalGrade = sub1 + sub2 + sub3 + areaGrade + typeGrade;

  if (sub1 === 0 || sub2 === 0 || sub3 === 0 || totalGrade < standard) {
    console.log("Rớt");
  } else {
    console.log("Đậu");
  }
}



// ==========Bài 2===========
/**
 * INPUT: số kw điện sử dụng , tên, tiền phải trả
 * PROCESS:
 *    1. lấy input
 *    2. số kw theo quy tắc
 *    3. tính tổng tiền trả
 * OUTPUT: số tiền phải trả của khách hàng
 */
function ex2() {
  var kw = 400;
  var name = "Hàn Lập";
  var total = 0;

  if (kw <= 50) {
    total = kw * 500;
  } else if (kw <= 100) {
    total = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    total = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    total = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }

  console.log(name, 'phải trả', total, 'tiền điện');
}