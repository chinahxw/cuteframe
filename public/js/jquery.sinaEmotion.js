//自定义hashtable
function Hashtable() {
    this._hash = new Object();
    this.put = function(key, value) {
        if (typeof (key) != "undefined") {
            if (this.containsKey(key) == false) {
                this._hash[key] = typeof (value) == "undefined" ? null : value;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    this.remove = function(key) { delete this._hash[key]; }
    this.size = function() { var i = 0; for (var k in this._hash) { i++; } return i; }
    this.get = function(key) { return this._hash[key]; }
    this.containsKey = function(key) { return typeof (this._hash[key]) != "undefined"; }
    this.clear = function() { for (var k in this._hash) { delete this._hash[k]; } }
}

var emotions = new Array();
var categorys = new Array();// 分组
var uSinaEmotionsHt = new Hashtable();


/*
// 初始化缓存，页面仅仅加载一次就可以了
$(function () {
    $.ajax({
        dataType: 'jsonp',
        //url : 'https://api.weibo.com/2/emotions.json?source=' + app_id,
        //url: 'http://s.kela.cn/test/test.php',
        url: '/index.php?mod=sales&con=AppOrderDetails&act=getKeziInfo',
        //jsonp:"jsonpcallback",
        jsonpCallback: "jsonpcallback",
        success: function (response) {
			
            var data = response.data;
            for (var i in data) {
                if (data[i].category == '') {
                    data[i].category = '默认';
                }
                if (emotions[data[i].category] == undefined) {
                    emotions[data[i].category] = new Array();
                    categorys.push(data[i].category);
                }
                emotions[data[i].category].push({
                    name: data[i].phrase,
                    icon: data[i].icon
                });
                uSinaEmotionsHt.put(data[i].phrase, data[i].icon);
            }
        }
    });
});
*/


//替换
function AnalyticEmotion(s) {
	if(typeof (s) != "undefined") {
		var sArr = s.match(/\[.*?\]/g);
		if(sArr){
			for(var i = 0; i < sArr.length; i++){
				if(uSinaEmotionsHt.containsKey(sArr[i])) {
					var reStr = "<img src=\"" + uSinaEmotionsHt.get(sArr[i]) + "\" height=\"22\" width=\"22\" />";
					s = s.replace(sArr[i], reStr);
				}
			}
		}
	}
	return s;
}

(function($){
	$.fn.SinaEmotion = function(target){
		var cat_current;
		var cat_page;
		$(this).click(function(event){

			event.stopPropagation();
			var eTop = target.offset().top + target.height() + 50;
			var eLeft = target.offset().left - 1;
			$('body').append('<div id="emotions"></div>');
			$('#emotions').css({top: eTop, left: eLeft});
			$('#emotions').html('<div>正在加载，请稍候...</div>');
			$('#emotions').click(function(event){
				event.stopPropagation();
			});
			$('#emotions').html('<div class="container"></div>');

			var style_sn = $('#app_order_detail_style_goods_form input[name="goods_sn"]').val();
            if(style_sn== "" || style_sn == undefined){

                style_sn = $('#app_order_details_goods_edit_info input[name="goods_sn"]').val();
            }
		    $.ajax({
		        dataType: 'jsonp',
		        //url : 'https://api.weibo.com/2/emotions.json?source=' + app_id,
		        //url: 'http://s.kela.cn/test/test.php',
		        url: '/index.php?mod=sales&con=AppOrderDetails&act=getKeziInfo&style_sn='+style_sn,
		        //jsonp:"jsonpcallback",
		        jsonpCallback: "jsonpcallback",
		        success: function (response) {
				    emotions = new Array();
				    categorys = new Array();					
		            var data = response.data;
		            for (var i in data) {
		                if (data[i].category == '') {
		                    data[i].category = '默认';
		                }
		                if (emotions[data[i].category] == undefined) {
		                    emotions[data[i].category] = new Array();
		                    categorys.push(data[i].category);
		                }
		                emotions[data[i].category].push({
		                    name: data[i].phrase,
		                    icon: data[i].icon
		                });
		                
		                uSinaEmotionsHt.put(data[i].phrase, data[i].icon);
		            }
		            showEmotions();
		        }
		    });

			//showEmotions();
		});
		$('body').click(function(){
			$('#emotions').remove();
		});
		$.fn.insertText = function(text){
			this.each(function() {
				if(this.tagName !== 'INPUT' && this.tagName !== 'TEXTAREA') {return;}
				if (document.selection) {
					this.focus();
					var cr = document.selection.createRange();
					cr.text = text;
					cr.collapse();
					cr.select();
				}else if (this.selectionStart || this.selectionStart == '0') {
					var 
					start = this.selectionStart,
					end = this.selectionEnd;
					this.value = this.value.substring(0, start)+ text+ this.value.substring(end, this.value.length);
					this.selectionStart = this.selectionEnd = start+text.length;
				}else {
					this.value += text;
				}
			});        
			return this;
		}

		function showEmotions(){
			var category = arguments[0]?arguments[0]:'默认';
			var page = arguments[1]?arguments[1] - 1:0;
			$('#emotions .container').html('');
			cat_current = category;
			for(var i = page * 72; i < (page + 1) * 72 && i < emotions[category].length; ++i){
				$('#emotions .container').append($('<a href="javascript:void(0);" title="' + emotions[category][i].name + '"><img src="' + emotions[category][i].icon + '" alt="' + emotions[category][i].name + '" width="22" height="22" /></a>'));
			}
			$('#emotions .container a').click(function(){
				target.insertText($(this).attr('title'));
				$('#emotions').remove();
			});
			for(var i = 1; i < emotions[category].length / 72 + 1; ++i){
				$('#emotions .page').append($('<a href="javascript:void(0);"' + (i == page + 1?' class="current"':'') + '>' + i + '</a>'));
			}
			$('#emotions .page a').click(function(){
				showEmotions(category, $(this).text());
			});
			$('#emotions .categorys a.current').removeClass('current');
			$('#emotions .categorys a').each(function(){
				if($(this).text() == category){
					$(this).addClass('current');
				}
			});
		}
	}
})(jQuery);