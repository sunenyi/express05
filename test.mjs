// 錯誤訊息needs an import attribute of type "json" => assert{type: "json"}
// json格式 用commomjs去寫
import data from "./singer.json" assert{type: "json"};
console.log(data);