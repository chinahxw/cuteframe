//导出csv
function wait_diamond_export_cxv_index(obj){
	var url=$(obj).attr('data-url');
	var param=new Array();
	param['start_time']=document.getElementById("start_time").value;
	param['end_time']=document.getElementById("end_time").value;
	param['style_sn']=document.getElementById("style_sn").value;
	param['prc_ids']=document.getElementById("prc_ids").value;
	param['opra_unames']=document.getElementById("opra_unames").value;
	param['from_type']=document.getElementById("from_type").value;
	for(index in param){
		if(index!='contains'){
			url+='&'+index+'='+param[index];
		}
	}
	window.open(url);
	return false;
}
function show_wait_diamond_list(obj){
	var tObj = $(obj).parent().parent().siblings().find('table>tbody>.tab_click');
	if (!tObj.length)
	{
		$('.modal-scrollable').trigger('click');
		util.xalert("很抱歉，您当前未选中任何一行！");
		return false;
	}
	var title=tObj[0].getAttribute("data-title");
	if(title=='all_count'){
			util.xalert("很抱歉，请选择具体的一个日期！");
			return ;
	}
	var url = $(obj).attr('data-url');
	var params = util.parseUrl(url);
	var start_time = tObj[0].getAttribute("start_time");
	var end_time = tObj[0].getAttribute("end_time");
	var from_type = tObj[0].getAttribute("from_type");
	var opra_uname_string = tObj[0].getAttribute("opra_uname_string");
	var prc_ids_string= tObj[0].getAttribute("prc_ids_string");
	var style_sn = tObj[0].getAttribute("style_sn");
	var con=params['con'].toLowerCase();
	var act=params['act'].toLowerCase();
	var prefix = con+'-'+act;
	var _id = tObj[0].getAttribute("data-id");
	var id =_id;
	url+="&start_time="+start_time+"&end_time="+end_time+"&from_type="+from_type+"&prc_ids_string="+prc_ids_string+"&style_sn="+style_sn+'&opra_uname_string='+opra_uname_string;
	//alert(url);return;
		//不能同时打开两个详情页
	var flag = false;
	$('#nva-tab li').each(function(){
		var href = $(this).children('a').attr('href');
		href = href.substr(1);
		if (href==prefix)
		{
			flag=true;
			var that = this;
			bootbox.confirm({  
				buttons: {  
					confirm: {  
						label: '确认' 
					},  
					cancel: {  
						label: '查看'  
					}  
				},
				closeButton:false,
				message: "发现同类数据的查看页已经打开。\r\n点确定将关闭同类查看页。\r\n点查看将激活同类查看页。",  
				callback: function(result) {  
					if (result == true) {
						setTimeout(function(){
							$(that).children('i').trigger('click');
							var title=tObj[0].getAttribute("data-title");
							if (title==null || $(obj).attr("use"))
							{
								title = $(obj).attr('data-title');
							}
							if ('undefined' == typeof title)
							{
								title = id;
							}
							new_tab(id,title,url);
						}, 0);
					}
					else if (result==false)
					{
						$(that).children('a').trigger("click");
					} 
				},  
				title: "提示信息", 
			});
			return false;
		}
	});
	
	if (!flag)
	{
		if (title==null || $(obj).attr("use"))
		{
			title = $(obj).attr('data-title');
		}
		if ('undefined' == typeof title)
		{
			title = '';
		}
		new_tab(id,title,url);
	}
}
//分页
function wait_diamond_search_page(url){
	util.page(url);
}
//匿名回调
$import(["public/js/bootstrap-datepicker/js/bootstrap-datepicker.js",
    "public/js/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js","public/js/select2/select2.min.js"],function(){

    var xx_url = '';
    var xx_url = 'index.php?mod=report&con=WaitDiamondReport&act=search';
	util.setItem('orl',xx_url);//设定刷新的初始url

	util.setItem('formID','wait_diamond_search_form');//设定搜索表单id
	util.setItem('listDIV','wait_diamond_search_list');//设定列表数据容器id
	//匿名函数+闭包
	var obj = function(){

		var initElements = function(){
                     //下拉列表美化
                            $('#wait_diamond_search_form select').select2({
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
                            $('#wait_diamond_search_form :reset').on('click',function(){
				$('#wait_diamond_search_form select').select2("val","");
			    });
				$('#wait_diamond_search_form input[name=checkAll]').click(function(){
					var status=$(this).attr('checked');
					var arr=new Array();
					if(status=='checked'||status==true)
					{

						$('#wait_diamond_search_form select[name="buchan_fac_opra[]"] option').each(function(key,v){
							arr[key]=$(this).val();
						})
						$('#wait_diamond_search_form select[name="buchan_fac_opra[]"]').select2("val",arr);
					}
					$('#wait_diamond_search_form select[name="buchan_fac_opra[]"]').select2("val",arr);

				});

                };
		var handleForm = function(){
			util.search();
		};

		var initData = function(){
			util.closeForm(util.getItem("formID"));
			wait_diamond_search_page(util.getItem("orl"));
		}
		return {
			init:function(){
				initElements();//处理搜索表单元素和重置
				handleForm();//处理表单验证和提交
				//initData();//处理默认数据
			}
		}
	}();

	obj.init();
});
