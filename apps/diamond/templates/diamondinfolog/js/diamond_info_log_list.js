//分页
function diamond_info_log_search_page(url){
	util.page(url);
}

//匿名回调
$import(["public/js/bootstrap-datepicker/js/bootstrap-datepicker.js",
    "public/js/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js","public/js/select2/select2.min.js"],function(){
	util.setItem('orl','index.php?mod=diamond&con=DiamondInfoLog&act=search');//设定刷新的初始url
	util.setItem('formID','diamond_info_log_search_form');//设定搜索表单id
	util.setItem('listDIV','diamond_info_log_search_list');//设定列表数据容器id

	//匿名函数+闭包
	var obj = function(){
		
		var initElements = function(){
			//下拉列表美化
            $('#diamond_info_log_search_form select[name="operation_type"]').select2({
                placeholder: "全部",
                allowClear: true,
            }).change(function(e) {
                $(this).valid();
            });//validator与select2冲突的解决方案是加change事件

            $('#diamond_info_log_search_form select[name="from_ad"]').select2({
                placeholder: "全部",
                allowClear: true,
            }).change(function(e) {
                $(this).valid();
            });//validator与select2冲突的解决方案是加change事件
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
            
            
            $('#diamond_info_log_search_form :reset').on('click',function(){
                $('#diamond_info_log_search_form select[name="operation_type"]').select2('val','').change();
                $('#diamond_info_log_search_form select[name="from_ad"]').select2('val','').change();
            });

		};
		
		var handleForm = function(){
			util.search();
		};
		
		var initData = function(){
			util.closeForm(util.getItem("formID"));
			diamond_info_log_search_page(util.getItem("orl"));
		}
		return {
			init:function(){
				initElements();//处理搜索表单元素和重置
				handleForm();//处理表单验证和提交
				initData();//处理默认数据
			}
		}	
	}();

	obj.init();
});