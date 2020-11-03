var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'BTCN03_18120297' });
});

router.post('/', (req, res) => {
  const firstnumber = req.body.firstnumber;
  const secondnumber = req.body.secondnumber;
  const radio = req.body.radio;
  var notification = "";
  var result = "";
  var color = "blue";
  var check = 1;
  var radioAddCheck = "";
  var radioSubCheck = "";
  var radioMulCheck = "";
  var radioDivCheck = "";
  if (radio != "add" && radio != "div" && radio != "mul" && radio != "sub")
  {
    notification = "Hãy chọn phép tính";
    color = "red";
    check = 0;
  }

  if (firstnumber == "" || secondnumber == "") {
    notification = "Hãy điền đủ hai số";
    color = "red";
    check = 0;
  }

  if (radio == "div" && secondnumber == 0) {
    notification = "Số thứ hai phải khác 0";
    color = "red";
    check = 0;
  }
  if (check == 1 && firstnumber != "" && secondnumber != "")
  {
    if (radio == "add") {
      result = parseInt(firstnumber) + parseInt(secondnumber);
      notification = "Đã tính ra kết quả";
      color = "green";
      radioAddCheck = "checked";

    }
    if (radio == "sub") {
      result = parseInt(firstnumber) - parseInt(secondnumber);
      notification = "Đã tính ra kết quả";
      color = "green";
      radioSubCheck = "checked";
    }
    if (radio == "mul") {
      result = parseInt(firstnumber) * parseInt(secondnumber);
      notification = "Đã tính ra kết quả";
      color = "green";
      radioMulCheck = "checked";
    }
    if (radio == "div") {
      result = parseInt(firstnumber) / parseInt(secondnumber);
      notification = "Đã tính ra kết quả";
      color = "green";
      radioDivCheck = "checked";
    }
  }
  res.render('index', { title: 'Express', firstnumber, secondnumber, radio,color, notification, result, radioAddCheck, radioSubCheck, radioMulCheck, radioDivCheck});
});
module.exports = router;
