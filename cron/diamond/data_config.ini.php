<?php
$FACTORY_QC = array(
	"1" => "其他",
	"2" => "表面返电",
	"3" => "表面划痕",
	"4" => "加刻字",
	"5" => "刻错字，抹字重刻",
	"6" => "指圈做错，需返厂改圈",
	"7" => "镶口大小做错",
	"8" => "副石黄 ，需换石",
	"9" => "表面工艺做错",
	"10" => "货品有砂眼",
	"11" => "爪和钻石没镶到",
	"12" => "爪上缺口",
	"13" => "爪上有毛絮",
	"14" => "爪型做错",
	"15" => "爪型不对称",
	"16" => "货不对图",
	"17" => "金重不符",
	"18" => "需返厂镶嵌",
	"19" => "戒壁薄，变形",
	"20" =>"刻字不清晰，重刻",
);

/* 裸钻属性描述 */
$DIA_ATT_INFO = array(
  "color" => array(
			"D"=>"您选的这颗钻石的色级是完全无色的，属于最高色级，极其稀有。",
			"E"=>"您选的这颗钻石的色级是无色的，仅含有微量的颜色，只有宝石鉴定专家才能够检测到，是非常稀有的钻石。",
			"F"=>"您选的这颗钻石的色级是无色的，只含有少量的颜色，只有珠宝专家可以检测到，属于高品质的钻石。",
			"G"=>"您选的这颗钻石的色级是接近无色的，当和较高色级钻石比较时，有轻微的颜色，但是这种色级的钻石仍然拥有很高的价值。",
			"H"=>"您选的这颗钻石的色级是接近无色的，当和较高色级钻石比较时，有轻微的颜色，但是这种色级的钻石仍然拥有很高的价值。",
			"I"=>"您选的这颗钻石的色级是接近无色的，可检测到轻微的颜色，价值较高。",
			"J"=>"您选的这颗钻石的色级是接近无色的，可检测到轻微的颜色，价值较高。",
			"K"=>"",
			"L"=>"",
			"M"=>""
			),
   "clear"=>array(
            "FL"=>"您选择的这颗钻石，在10倍放大镜下观察，没有任何内含物或缺隙，是极其罕见的钻石。",
			"IF"=>"您选择的这颗钻石，在10倍放大镜下观察，无内含物，只有小的缺隙，是极其少见的钻石。",
			"SI1"=> "您选择的这颗钻石，含有明显的内含物，10倍放大镜下SI1(Small Inclusions)容易观察，属于品质一般的钻石。",
			"SI2"=> "您选择的这颗钻石，含有明显的内含物，10倍放大镜下SI1(Small Inclusions)很容易观察，属于品质一般的钻石。",
			"VS1"=>"您选择的这颗钻石，含有细小的内含物，10倍放大镜下难以观察，属于高品质的钻石。",
			"VS2"=>"您选择的这颗钻石，含有细小的内含物，10倍放大镜下比较容易观察，属于较高品质的钻石。",
			"VVS1"=>"您选择的这颗钻石，含有极微小的内含物，10倍放大镜下极难观察，属于极其珍贵的钻石。 ",
			"VVS2"=>"您选择的这颗钻石，含有极微小的内含物，10倍放大镜下很难观察，属于很珍贵的钻石。"
            ),
	"cut" => array(
			"EX" => "您选择的这颗钻石的切工属于完美切工（Excellent）级别，只有3%的一流高质量钻石才能达到的这样的切工标准。这种切工使钻石几乎反射了所有进入钻石的光线，是一种高雅且杰出的切工。",
			"VG" => "您选择的这颗钻石的切工属于很好切工（Very Good）级别，大约15%的钻石可以达到这样的切工标准。这种切工使钻石反射出和标准等级切工相同的光芒，但是价格稍低。",
			"GD" => "您选择的这颗钻石的切工属于好切工（Good）级别，大约25%的钻石可以达到这样的标准。这种切工使钻石反射了大部分进入钻使内部的光。比VG级便宜的多。",
			"P" => "您选择的这颗钻石的切工属于差切工（Poor）：这包含所有没有符合一般切工标准的钻石，这些钻石的切工要么深而窄要么浅而宽易于让光线从边部或底部逸出。BDD不提供这种劣质切工的钻石。"
			)

);
//金料
// 布产相关数据
$goods_gold=array('默认' ,'无', '9k','14k','18k','24k','PT950','PT900','S925');
$luozuan_color = array('默认' ,'无', 'D', 'E', 'F', 'G', 'H', 'I', 'I-J', 'J', 'K', 'K-L' ,"M",'白色');
$luozuan_clarity = array('默认' ,'无',  'FL', 'IF','VVS', 'VVS1', 'VVS2','VS', 'VS1', 'VS2', 'SI', 'SI1', 'SI2', 'I1', 'I2');
$gold_color = array('默认' ,'无',  '按图做', '玫瑰金', '白', '黄', '黄白', '彩金', '分色');
$gold_face_work = array('无','磨砂','光面','特殊','拉沙', '亚光', '混合');
$luozuan_fushi = array('按原版','无','有');
$goods_chengpin = array('工厂配钻，工厂镶嵌','不需工厂镶嵌','需工厂镶嵌','客户先看钻再返厂镶嵌','成品','半成品');
//$goods_chengpin = array('工厂配钻，工厂镶嵌','不需工厂镶嵌','需工厂镶嵌','客户先看钻再返厂镶嵌');


$goods_attach_type = array(
		"1"=>array("id"=>"1","word"=>"加钱","method"=>"0","method_word"=>"+"),
		"2"=>array("id"=>"2","word"=>"减钱","method"=>"1","method_word"=>"-"),
		);

$order_attach_type = array(
		"1"=>array("id"=>"1","word"=>"加工费","method"=>"0","method_word"=>"+"),
		"2"=>array("id"=>"2","word"=>"起版费","method"=>"0","method_word"=>"+"),
		"3"=>array("id"=>"3","word"=>"打车费","method"=>"1","method_word"=>"-"),
		"4"=>array("id"=>"4","word"=>"免零","method"=>"1","method_word"=>"-"),
		"5"=>array("id"=>"5","word"=>"其他加钱","method"=>"0","method_word"=>"+"),
		"6"=>array("id"=>"6","word"=>"其他减钱","method"=>"1","method_word"=>"-"),
		"7"=>array("id"=>"7","word"=>"以旧换新","method"=>"1","method_word"=>"-"),
		);

//展厅到货状态
$arrival_status_arr = array("0"=>"未到货","2"=>"发货中","3"=>"已收货","4"=>"已确认","5"=>"返厂");
$goods_status_arr = array("0"=>"未开始生产","1"=>"未开始生产","2"=>"正在生产","3"=>"已出厂","4"=>"不需布产");

$BEST_TIME = array(
	'0'=>'工作日，节假日均可送货',
	'1'=>'只工作日送货（双休日，假日不用送）',
	'2'=>'只双休日，假日送货（工作日不用送）'
);


// 彩钻产品
$COLOR_GOODS_LIST = array("KLPW014165","KLPW014167","KLRW014168","KLRW014170","KLRW014174","KLNW014175","KLRW014177","KLRW014182","KLRW014185","KLPW014186","KLPW014187","KLRW014197","KLRW014190","KLRW014193","KLRW014189","KLRW014188","KLRW014196","KLRW014199","KLRW014201","KLRW014203","KLRW014204","KLRW014205","KLRW014206","KLRW014207","KLRW014208","KLRW014209","KLPW014210","KLRW014211","KLPW014212","KLPW014213","KLPW014214","KLPW014176","KLRW014183","KLRW014184","KLRW014198","KLRW014200","KLRW014202");


$fac_action    = array(
					   "0" => array("act_name" => "未操作"),
					   "1"=>array("act_name" => "起版"),
					   "2"=>array("act_name" => "倒模", "act_time" => "5"),
					   "3"=>array("act_name" => "执模", "act_time" => "1"),
					   "4"=>array("act_name" => "镶石", "act_time" => "1"),
					   "5"=>array("act_name" => "电金", "act_time" => "1"),
					   "6"=>array("act_name" => "抛光", "act_time" => "1"),
					   "7"=>array("act_name" => "修版", "act_time" => "0"),
					   "8"=>array("act_name" => "等钻", "act_time" => "20"),
					   "9"=>array("act_name" => "送钻", "act_time" => "2"),
					   "10"=>array("act_name" => "OQC未过", "act_time" => "2"),
					   "11"=>array("act_name" => "待质检", "act_time" => "0"),
					   "99"=>array("act_name" => "OQC"),
					   "101"=>array("act_name" => "停产"),
					   "102"=>array("act_name" => "时间不确定"),
					   "103"=>array("act_name" => "7-15个工作日"),
					   "104"=>array("act_name" => "7个工作日内"),
					   "105"=>array("act_name" => "3个工作日内"));
// key是动作id,val是动作排序
$fac_action_index = array("0" => "0","1"=> "1", "2"=> "3","3"=> "4" ,"4"=> "7", "5"=>"8", "6"=>"9","7"=>"2","8"=>"5","9"=>"6","10" => "11","11" => "10","99"=>"12");
asort($fac_action_index);
// 成品女戒加价率 类型
$lvjie_jiajialv = array(

	"1" => array("name" => "成品女戒30以下","canshu" => "2.2"),
	"2" => array("name" => "成品女戒30-50","canshu" => "2.2"),
	"3" => array("name" => "成品女戒50以上","canshu" => "2")
);


// 3D 黄金饰品数组
$D3_HUANGJIN_SHIPIN = array("KLPX022789","KLPX022788","KLPX022787","KLPX022786","KLPW022707","KLPW022705","KLPW022703","KLPW022702","KLPW022701","KLPX022301","KLPW022042","KLPW022041","KLPW022039","KLPW022038","KLPW022037","KLPW022036","KLPW022035","KLPW022034","KLPW022033","KLPW022032","KLPW022031","KLPW022030","KLPW022029","KLPW022028","KLPW022027","KLPW022026","KLPW022025","KLPW022024","KLPW022023","KLPW022022","KLPW022021","KLPW022020","KLPW022019","KLPW021980","KLPW021979","KLPW021903","KLPW021902","KLPW021901","KLPW021900","KLPW021899","KLPW021898","KLPW021897","KLPW021345","KLPW021344","KLPW021343","KLPW021342","KLPW021341","KLPW021340","KLPW021339","KLPW021338","KLPW021337","KLPW021336","KLPW021335","KLPW021334","KLPW019751","KLPW019750","KLPW019749","KLPW019748","KLPW019747","KLPW019746","KLPW019745","KLPW019744","KLPW019743","KLPW019742","KLPW019741","KLPW019740","KLPW019739","KLPW019738","KLPW019737","KLPW019736","KLPW019735","KLPW019734","KLPW019733","KLPW019732","KLPW019731","KLPW019730","KLPW019729","KLPW019727","KLPW019726","KLPW019725","KLPW019724","KLPW019723","KLPW018597","KLPW018596","KLPW018595","KLPW018594","KLPW018593","KLPW018592","KLPW018591","KLPW018590","KLPW018589","KLPW018588","KLPW018587","KLPW018586","KLPW018585","KLPW018584","KLPW018583","KLPW018582","KLPW018581","KLPW018580","KLPW018579","KLPW018577","KLPW018576","KLPW018575","KLPW018574","KLPW018573","KLPW018572");