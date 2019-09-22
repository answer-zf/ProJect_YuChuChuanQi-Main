Vue.component("float-bot", {
  template:
    '<div class="bottom_float navbar-fixed-bottom">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-4 text-center col-xs-12">\n' +
    "                <i></i>\n" +
    "                <h5>\n" +
    "                    &nbsp;加盟热线：400-8528-908\n" +
    "                </h5>\n" +
    '                <a href="contact_us.html" class="bottom_float_hidden pull-right">\n' +
    "                <h5>立即预约</h5>\n" +
    "                </a>\n" +
    '                <i class="pull-right"></i>\n' +
    "            </div>\n" +
    '            <div class="col-md-8 hidden-xs">\n' +
    '            <form class="form-inline" id="navbar-fixed-bottom-form">\n' +
    '            <div class="form-group col-lg-5 index_md-3 align-self-center">\n' +
    '                <label for="bottom_float_name" class="pr-2">\n' +
    "                    姓名&nbsp;:&nbsp;&nbsp;\n" +
    "                </label>\n" +
    '                <input type="text" class="form-control" id="bottom_float_name" placeholder="您的姓名" />\n' +
    "            </div>\n" +
    '            <div class="form-group col-lg-5 index_md-3 align-self-center">\n' +
    '                <label for="bottom_float_phone" class="pr-2">手机&nbsp;:&nbsp;&nbsp;</label>\n' +
    '                <input type="text" class="form-control" id="bottom_float_phone" placeholder="您的手机号" />\n' +
    "            </div>\n" +
    '            <div class="col-lg-2 index_md-6 align-self-center">\n' +
    '                <button type="button" onclick="submitPhone()" class="btn btn-warning" >\n' +
    "                    在线预约\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </div>"
});
Vue.component("footer-copy", {
  template:
    "<footer>\n" +
    '  <div class="container">\n' +
    '    <div class="row">\n' +
    '      <div class="col-md-4">\n' +
    '        <div class="footerSubitem">\n' +
    "          <h4>公司名称</h4>\n" +
    "          <span><em>Shangyuan branch</em> <br>\n" +
    "            尚京集团尚元分公司\n" +
    "          </span>\n" +
    "          <!-- <span>乘坐2路.15路.106路.136路.137路.155路在百花井东下</span> -->\n" +
    '          <img src="img/index-footerName.png" alt="公司名称">\n' +
    "        </div>\n" +
    "      </div>\n" +
    '      <div class="col-md-4">\n' +
    '        <div class="footerSubitem">\n' +
    "          <h4>公司地址</h4>\n" +
    "          <span>安徽省合肥市庐阳区寿春路156号古井百花大厦B座</span>\n" +
    '          <img src="img/index-footerLocation.png" alt="公司地址">\n' +
    "        </div>\n" +
    "      </div>\n" +
    '      <div class="col-md-4">\n' +
    '        <div class="footerSubitem">\n' +
    "          <h4>公交路线</h4>\n" +
    "          <span>乘坐2路.15路.106路.136路.137路.155路在百花井东下</span>\n" +
    '          <img src="img/index-footerBus.png" alt="公交路线">\n' +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    '    <div class="row footerSlider">\n' +
    '      <div class="col-md-12 text-center">\n' +
    "        <p>安徽尚京品牌管理股份有限公司版权所有 皖ICP备18022821号-2</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</footer>"
});
new Vue({
  el: "#footer-zf"
});
