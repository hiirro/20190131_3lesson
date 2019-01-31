let str = "";
for (let i = 1; i < 13; i++) {
    str += `<option>${i}月</option>`;
}
$("#exp_month").html(str);

let year = "";
for (let i = 2018; i < 2028; i++) {
    year += `<option>${i}年</option>`;
}
$("#exp_year").html(year);