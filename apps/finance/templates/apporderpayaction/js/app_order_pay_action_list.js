//分页
function app_order_pay_action_search_page(url) {
    util.page(url);
}

//匿名回调
$import(["public/js/bootstrap-datepicker/js/bootstrap-datepicker.js",
    "public/js/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js", "public/js/select2/select2.min.js"], function() {
    util.setItem('orl', 'index.php?mod=finance&con=AppOrderPayAction&act=search');//设定刷新的初始url
    util.setItem('formID', 'app_order_pay_action_search_form_zf');//设定搜索表单id
    util.setItem('listDIV', 'app_order_pay_action_search_list_zf');//设定列表数据容器id

    //匿名函数+闭包
    var obj = function() {

        var initElements = function() {

            //下拉组件
            $('#app_order_pay_action_search_form_zf select[name="order_department"]').select2({
                placeholder: "请选择",
                allowClear: true,
            }).change(function(e) {
                $(this).valid();
            });

            $('#app_order_pay_action_search_form_zf select[name="order_status"]').select2({
                placeholder: "请选择",
                allowClear: true,
            }).change(function(e) {
                $(this).valid();
            });

            $('#app_order_pay_action_search_form_zf select[name="order_pay_status"]').select2({
                placeholder: "请选择",
                allowClear: true,
            }).change(function(e) {
                $(this).valid();
            });

            //时间控件
            if ($.datepicker) {
                $('.date-picker').datepicker({
                    format: 'yyyy-mm-dd',
                    rtl: App.isRTL(),
                    autoclose: true,
                    clearBtn: true
                });
                $('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
            }

            //重置
            $('#app_order_pay_action_search_form_zf :reset').on('click', function() {
                //下拉重置
                $('#app_order_pay_action_search_form_zf select[name="order_department"]').select2("val", '').change();
                $('#app_order_pay_action_search_form_zf select[name="order_status"]').select2("val", '').change();
                $('#app_order_pay_action_search_form_zf select[name="order_pay_status"]').select2("val", '').change();
            });
        };

        var handleForm = function() {
            util.search();
        };

        var initData = function() {
            util.closeForm(util.getItem("formID"));
            app_order_pay_action_search_page(util.getItem("orl"));
        }
        return {
            init: function() {
                initElements();//处理搜索表单元素和重置
                handleForm();//处理表单验证和提交
                initData();//处理默认数据
            }
        }
    }();

    obj.init();
});



function print_order_xh(obj) {

    var tObj = $(obj).parent().parent().next().find('table>tbody>.tab_click');
    if (!tObj.length)
    {
        $('.modal-scrollable').trigger('click');
        util.xalert("很抱歉，您当前未选中任何一行！");
        return false;
    }
    var order_id = tObj[0].getAttribute("data-id").split('_').pop();
    $.post("index.php?mod=finance&con=AppOrderPayAction&act=printorder", {id: order_id}, function(res) {
        if (res.error) {
            util.xalert(res.error);
            return false;
        } else {

            var id = tObj[0].getAttribute("data-id").split('_').pop();

            var url = $(obj).attr('data-url');
            var _name = $(obj).attr('data-title');

            var son = window.open(
                    $(obj).attr('data-url') + '&id=' + id, _name, 'fullscreen:true,menubar:false,resizable:false,titlebar:false,toolbar:false,scrollbars=yes'
                    );
            son.onUnload = function() {
                util.sync(obj);
            };



        }
    });


}


function print_order_dz(obj) {

    var tObj = $(obj).parent().parent().next().find('table>tbody>.tab_click');
    if (!tObj.length)
    {
        $('.modal-scrollable').trigger('click');
        util.xalert("很抱歉，您当前未选中任何一行！");
        return false;
    }
    var order_id = tObj[0].getAttribute("data-id").split('_').pop();
    $.post("index.php?mod=finance&con=AppOrderPayAction&act=printorder_dz", {id: order_id}, function(res) {
        if (res.error) {
            util.xalert(res.error);
            return false;
        } else {

            var id = tObj[0].getAttribute("data-id").split('_').pop();

            var url = $(obj).attr('data-url');
            var _name = $(obj).attr('data-title');

            var son = window.open(
                    $(obj).attr('data-url') + '&id=' + id, _name, 'fullscreen:true,menubar:false,resizable:false,titlebar:false,toolbar:false,scrollbars=yes'
                    );
            son.onUnload = function() {
                util.sync(obj);
            };



        }
    });


}