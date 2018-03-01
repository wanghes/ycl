//窗口自适应事件
(function(win,doc){
    function change(){
          doc.documentElement.style.fontSize=doc.documentElement.clientWidth/750*100+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);

//动态异步加载脚本
function loadScript(url, callback) {
    var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement,
    script,
    options,
    s;
    if (typeof url === 'object') {
        options = url;
        url = undefined;
    }
    s = options || {};
    url = url || s.url;
    callback = callback || s.success;
    script = document.createElement('script');
    script.async = s.async || false;
    script.type = 'text/javascript';
    if (s.charset) {
        script.charset = s.charset;
    }
    if (s.cache === false) {
        url = url + (/\?/.test(url) ? '&': '?') + '_=' + (new Date()).getTime();
    }
    script.src = url;
    head.insertBefore(script, head.firstChild);
    if (callback) {
        document.addEventListener ? script.addEventListener('load', callback, false) : script.onreadystatechange = function() {
            if (/loaded|complete/.test(script.readyState)) {
                script.onreadystatechange = callback()
            }
        }
    }
}
	

//	判断是否登录
function isLogin(data){
	if(data.code==1001){
		$.myAlert({
			title:'<img src="images/2-1xdlu.png" alt="" />',
			message:'请您先登录再发布线索',
			button:['立即登录'],
			callback:function(){
				window.location.href='login.html'
			}
		});
		return false;
	}else if(data.code==1){
		return true;
	}else{
		$.toastTip({
			img:'images/4-3gxfkui.png',
			imgW:'1.56rem',
			imgH:'1.5rem',
			text:[data.msg]
		})
		return false;
	}
}

function isTel(tel){
	if(tel==''|| tel.length!=11){
		$.toastTip({
			img:'images/4-3gxfkui.png',
			imgW:'1.56rem',
			imgH:'1.5rem',
			text:['手机号不正确']
		});
	}
}

//下拉底部显示
(function() {
    $.extend({
    	removesheet: function() {
    		$('body').css('overflow-y', 'scroll')
            $('.actionsheet').fadeOut(200);
            setTimeout(function() {
                $('.actionsheet').remove()
            }, 300)
        },

        shareAction:function(){
        	var link = window.location.href;
			var protocol = window.location.protocol;
			var host = window.location.host;
			var uid = localStorage.getItem("uid");
        	wx.ready(function(){

        		//分享朋友圈
		        wx.onMenuShareTimeline({
		            title: '易创链-链接IT商务线索',
		            link: protocol+'//'+host+'/h5/share.html?uid='+uid,
		            imgUrl: protocol+'//'+host+'/h5/images/logo.png',// 自定义图标
		            success: function (res) {
		                $.toastTip({
							img:'/h5/images/4-3gxfkui.png',
							imgW:'1.56rem',
							imgH:'1.5rem',
							text:['分享成功']
						});
		            },
		            cancel: function (res) {
		            },
		            fail: function (res) {
		            }
		        });
 				wx.onMenuShareAppMessage({
		            title: '易创链', // 分享标题
		            desc: '链接IT商务线索', // 分享描述
		            link: protocol+'//'+host+'/h5/share.html?uid='+uid, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		            imgUrl: protocol+'//'+host+'/h5/images/logo.png', // 自定义图标
		            type: 'link', // 分享类型,music、video或link，不填默认为link
		            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		            success: function () {
		                $.toastTip({
							img:'/h5/images/4-3gxfkui.png',
							imgW:'1.56rem',
							imgH:'1.5rem',
							text:['分享成功']
						});
		            },
		            cancel: function () {
		            }
		        });
		        wx.onMenuShareQQ({
					title: '易创链', // 分享标题
					desc: '链接IT商务线索', // 分享描述
					link: protocol+'//'+host+'/h5/share.html?uid='+uid, // 分享链接
					imgUrl: protocol+'//'+host+'/h5/images/logo.png', // 分享图标
					success: function () {
						$.toastTip({
							img:'/h5/images/4-3gxfkui.png',
							imgW:'1.56rem',
							imgH:'1.5rem',
							text:['分享成功']
						});
					},
					cancel: function () {
					}
				});
				wx.onMenuShareQZone({
					title: '易创链', // 分享标题
					desc: '链接IT商务线索', // 分享描述
					link: protocol+'//'+host+'/h5/share.html?uid='+uid, // 分享链接
					imgUrl: protocol+'//'+host+'/h5/images/logo.png', // 分享图标
					success: function () {
						$.toastTip({
							img:'/h5/images/4-3gxfkui.png',
							imgW:'1.56rem',
							imgH:'1.5rem',
							text:['分享成功']
						});
					},
					cancel: function () {
					}
				});
				wx.onMenuShareWeibo({
					title: '易创链', // 分享标题
					desc: '链接IT商务线索', // 分享描述
					link: protocol+'//'+host+'/h5/share.html?uid='+uid, // 分享链接
					imgUrl: protocol+'//'+host+'/h5/images/logo.png', // 分享图标
					success: function () {
						$.toastTip({
							img:'/h5/images/4-3gxfkui.png',
							imgW:'1.56rem',
							imgH:'1.5rem',
							text:['分享成功']
						});
					},
					cancel: function () {
					// 用户取消分享后执行的回调函数
					}
				});
 			});
        },
        developSecondSales:function(){ //发展二级分销
        	loadScript('http://res.wx.qq.com/open/js/jweixin-1.0.0.js',function(){
        		$.ajax({
			        url: 'http://yichuanglian.huimor.com/index/development',
			        type:'get',
			        dataType:'json',
			        data:{
			        	url: window.location.href
			        },
			        xhrFields:{  
						withCredentials:true  
					},  
			        success:function(data){
			        	var appId  = data.data.appId;
			        	var nonceStr  = data.data.nonceStr;
			        	var timestamp  = data.data.timestamp;
			        	var signature  = data.data.signature;
			        	var uid = data.data.userid;

	        			localStorage.setItem("uid",uid);

			    		wx.config({
						    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						    appId: appId, // 必填，公众号的唯一标识     
						　　timestamp: timestamp, // 必填，生成签名的时间戳
						    nonceStr: nonceStr, // 必填，生成签名的随机串
						    signature: signature,// 必填，签名，见附录1
						    jsApiList: [
						    	'onMenuShareTimeline',
						    	'onMenuShareAppMessage',
						    	'onMenuShareQQ',
						    	'onMenuShareWeibo',
						    	'onMenuShareQZone'
					    	] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
						});
			    		$.shareAction();
			        }
			    });
        	})
        },
        showShareBox:function(){
        	var html = [
     			'<div class="share_bg">',
     			'<img id="arrow" src="./images/sharearrows.png" />',
     			'</div>'
     		].join('');
     		var box = $(html);
        	$('body').append(box);
        	$('.share_bg').click(function(){
        		$(this).remove();
        	})
        	/*
        	var defalut = {
        		title:"分享至",
        		images:[
        			{des:"QQ好友",img:'/h5/images/1-5qq.png'},
        			{des:"QQ空间",img:'/h5/images/1-5qqkj.png'},
        			{des:"微信好友",img:'/h5/images/1-5wx.png'},
        			{des:"朋友圈",img:'/h5/images/1-5pyq.png'},
        			{des:"微博",img:'/h5/images/1-5wb.png'}
				],
        	}
        	var config = defalut;
        	if(options){
        		$.extend(config,defalut,options);
        	}
     		var link = window.location.href;
			var protocol = window.location.protocol;
			var host = window.location.host;
     		var html = [
     			'<div class="share_bg">',
     			'<div class="share_box" id="shareBox">',
     				'<div class="title"><h3>'+config.title+'</h3><span class="share_closer"></span></div>',
     				'<div class="list">',
	     				'<div class="item"><img src="'+config.images[0].img+'" ><span>'+config.images[0].des+'</span></div>',
	     				'<div class="item"><img src="'+config.images[1].img+'" ><span>'+config.images[1].des+'</span></div>',
	     				'<div class="item"><img src="'+config.images[2].img+'" ><span>'+config.images[2].des+'</span></div>',
	     				'<div class="item"><img src="'+config.images[3].img+'" ><span>'+config.images[3].des+'</span></div>',
	     				'<div class="item"><img src="'+config.images[4].img+'" ><span>'+config.images[4].des+'</span></div>',
     				'</div>',
     			'</div>',
     			'</div>'
     		].join('');
     		var box = $(html);

     		$('body').append(box);
     		$('.share_closer').click(function(){
     			$('.share_bg').remove();
     		})
     		$('#shareBox .item').eq(0).click(function(){
     			
     		})
     		$('#shareBox .item').eq(1).click(function(){
     			
     		})
     		$('#shareBox .item').eq(2).click(function(){
     		})
     		$('#shareBox .item').eq(3).click(function(){
     		})
     		$('#shareBox .item').eq(4).click(function(){
     			
     		})
     		*/
        },
		actionsheet:function(options){
			var lists_str='';
			var lists=options.lists;
			var listsId=options.listsId;
			$.each(lists, function(i,v){
				if(options.active==v){
					lists_str+='<p class="active" data-id='+listsId[i]+'>'+v+'</p>';
				}else{
					lists_str+='<p data-id='+listsId[i]+'>'+v+'</p>';
				}
			});
			var actionsheetStr=$('<div class="actionsheet"><div class="actionsheetBox"><h3><span>'+options.title+'</span></h3><div class="actionsheetContent">'+lists_str+'</div></div></div>');
			$('body').append(actionsheetStr).css('overflow-y', 'hidden');
            $('.actionsheetContent p').click(function() {
                $.removesheet();
                var text=$(this).text();
                var id=$(this).attr('data-id');
                options.callback(text,id)
            });
            $('.actionsheet').click(function() {
                $.removesheet();
            });
            $('.actionsheetContent,.actionsheet h3').click(function(e) {
                e.stopPropagation()
            });
		},
		toastTip:function(options){
			var imgSrc=options.img;
			var text=options.text;
			var text_str='';
			options.delay = options.delay ? options.delay : 1500;

			$.each(text, function(i,v){
				text_str+='<p>'+v+'</p>';
			});
			var toastTipStr=$('<div class="toastTip"><div class="toastContent"><img src="'+imgSrc+'" />'+text_str+'</div></div>');
			toastTipStr.find('img').css({"width":options.imgW,"height":options.imgH});
			$('body').append(toastTipStr).css('overflow-y', 'hidden');
			var tipTop=($(window).height()-$(".toastContent").height())/2.5;
			$(".toastContent").css('top',tipTop);
			setTimeout(function(){$('.toastTip').fadeOut(300);$('body').css('overflow-y', 'scroll');$('.toastTip').remove();},options.delay)
		}
	})
})(jQuery);


function GetQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return (r[2]); return null; 
}


$(function(){
	var isAuth = localStorage.getItem('isauth');
	if(!isAuth){
		if(!GetQueryString('isauth')){
			var href = window.location.href
			//location.href="http://yichuanglian.huimor.com/index?fromurl="+href;
		}else{
			localStorage.setItem('isauth',1);
		}
	}
	$(document).on('click','#shareBtn , .shareBtn',function(){
		$.showShareBox();
	});
	//	发布线索 输入框点击
	$('.releaseInfo input').focus(function(){
		$(this).parents('dd').addClass('cur');
	});
	$('.releaseInfo input').blur(function(){
		$(this).parents('dd').removeClass('cur');
	});
	
	//	完善个人信息 是否同意阅读线上合同
	$('.agreeContract i').click(function(){
		$(this).toggleClass('active');
	})
	
	//	发布线索  行业选择弹出
	$('.industryAdd a').click(function(){
		$('.industryTanchu').show();
	});

	$('.industryTanchu').click(function(e){
		if(e.target==$('.industryTanchu')[0]){
			$(this).hide();
		}
	});
	$('.industryContent').delegate('span','click',function(){
		$('.industryBtn').removeClass('industryBtnOk');
		$(this).find('i').toggleClass('active');
		$('.industryContent i').each(function(){
			if($(this).hasClass('active')){
				$('.industryBtn').addClass('industryBtnOk');
			}
		})
	})
	//	发布线索 行业选择确定
	$('.industryBox').delegate('.industryBtnOk','click',function(){
		var industryArr=[],industryStr='',industryIdArr=[];
		$('.industryContent i').each(function(){
			if($(this).hasClass('active')){
				industryArr.push($(this).parent().text())
				industryIdArr.push($(this).parent().attr('data-id'))
			}
		});
		if(industryArr.length>5){
			$.myToast('最多可以选5个行业');
			return false;
		}
		$('.industryAdd ul,.industryAdd p').text('');
		if(industryArr.length==1){
			$('.industryAdd p').append('<em data-id='+industryIdArr[0]+'>'+industryArr[0]+'<i></i></em>');
		}else{
			$.each(industryArr, function(i,v) {
				industryStr+='<li><em data-id='+industryIdArr[i]+'>'+v+'<i></i></em></li>'
			});
			var industryUl='<ul>'+industryStr+'</ul>';
			$('.industryAdd').append(industryUl);
		}
		$('.industryTanchu').hide();
	})
	
	//	删除选择的行业
	$('.industryAdd').delegate('em i','click',function(){
		var this_em=$(this).parent('em');
		if($(this).parents('p').length>0){
			this_em.remove();
		}
		$('.industryContent i').each(function(){
			if($(this).parent('span').text()==this_em.text()){
				$(this).parent('span').find('i').removeClass('active');
			}
		})
		$(this).parents('li').remove();
		if($('.industryAdd em').length<1){
			$('.industryContent i').removeClass('active');
			$('.industryBtn').removeClass('industryBtnOk');
			$('.industryAdd ul').remove();
		}
	})
	
	//	发布线索  项目预算
	$('.selectBudget div').click(function(){
		var this_text=$(this).find('p').text();
		var lists=[],listsId=[];
		$.ajax({
	        url: 'http://yichuanglian.huimor.com/index/getBudget',
	        type:'get',
	        dataType:'json',
	        xhrFields:{  
				withCredentials:true  
			},  
	        success:function(data){
	        	if(isLogin){
		        	var data=data.data;
		        	for(var i=0;i<data.length;i++){
		        		lists.push(data[i].name)
		        		listsId.push(data[i].id)
		        	}
		        	$.actionsheet({
						title:'请选择项目预算',
						active:this_text,
						lists:lists,
						listsId:listsId,
						callback:function(text,id){
							$('.selectBudget div p').text(text)
							$('.selectBudget div p').attr('data-id',id)
						}
					});
		        }
	        }
		});
	})
	// 发布线索  业务类型 
	$('.selectBusiness div').click(function(){
		var this_text=$(this).find('p').text();
		var lists=[],listsId=[];
		$.ajax({
	        url: 'http://yichuanglian.huimor.com/index/getBusiness',
	        type:'get',
	        dataType:'json',
	        xhrFields:{  
				withCredentials:true  
			},  
	        success:function(data){
	        	if(isLogin(data)){
        			var data=data.data;
		        	for(var i=0;i<data.length;i++){
		        		lists.push(data[i].name)
		        		listsId.push(data[i].id)
		        	}
		        	$.actionsheet({
						title:'请选择业务类型',
						active:this_text,
						lists:lists,
						listsId:listsId,
						callback:function(text,id){
							$('.selectBusiness div p').text(text)
							$('.selectBusiness div p').attr('data-id',id)
						}
					});
	        	}
	        }
		});
	});
	
	// 发布线索提交
	$('.release-btn button').click(function(){
		var projectName=$('input[name="projectName"]').val();
		var bus_id=$('.selectBusiness p').attr('data-id');
		var cate_id=[];
		var budget_id=$('.selectBudget p').attr('data-id');
		var proportion=$('input[name="proportion"]').val();
		var describes=$('textarea').val();

		if($('.industryAdd p em').length && $('.industryAdd p em').length<2){
			cate_id.push($('.industryAdd p em').attr('data-id'));
		}else{
			$('dd.industryAdd ul em').each(function(){
				cate_id.push($(this).attr('data-id'))
			})
		}

		if($('dd.industryAdd p').text()=='' && !$('dd.industryAdd ul li').length){
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['请选择行业']
			});
		} else if(parseFloat(proportion)<0){
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['期望提成比例不能为负数']
			});
		}else if (parseFloat(proportion)>=100){
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['期望提成比例不能大于等于100的数据']
			});
		}else{	
			$.ajax({
		        url: 'http://yichuanglian.huimor.com/index/release',
		        type:'post',
		        data:{
		        	projectname:projectName,
		        	bus_id:bus_id,
		        	cate_id:cate_id,
		        	budget_id:budget_id,
		        	proportion:proportion,
		        	describes:describes,
		        },
		        dataType:'json',
		        xhrFields:{  
					withCredentials:true  
				},  
		        success:function(data){
		        	if(isLogin(data)){
		        		window.location.href='successRelease.html?adminId='+data.data;
		        	}
		        }
			});
		}
	})


	//	意见反馈提示
	/*
	$.toastTip({
		img:'images/4-3gxfkui.png',
		imgW:'1.56rem',
		imgH:'1.5rem',
		text:['感谢您的反馈！','我们会尽快安排专人与您联系~']
	});

		保存分销信息
	$.toastTip({
		img:'images/3-12bccg.png',
		imgW:'1.52rem',
		imgH:'1.34rem',
		text:['保存成功']
	});

		密码修改成功
	$.toastTip({
		img:'images/4-2xgcgong.png',
		imgW:'1.68rem',
		imgH:'1.49rem',
		text:['修改成功']
	});
	*/

    
    //完善个人信息 选择职业类型
	$('.selectProfession div').click(function(){
		var this_text=$(this).find('p').text();
		var lists=[],listsId=[];
		$.ajax({
	        url: 'http://yichuanglian.huimor.com/index/occategory',
	        type:'get',
	        dataType:'json',
	        xhrFields:{  
				withCredentials:true  
			},  
	        success:function(data){
	        	if(isLogin(data)){
        			var data=data.data;
		        	for(var i=0;i<data.length;i++){
		        		lists.push(data[i].name)
		        		listsId.push(data[i].id)
		        	}
		        	$.actionsheet({
						title:'请选择职业类型',
						active:this_text,
						lists:lists,
						listsId:listsId,
						callback:function(text,id){
							$('.selectProfession div p').text(text)
							$('.selectProfession div p').attr('data-id',id)
						}
					});
	           	}
	        }
		});
	})
			
	//完善资料
	$('.perfect-btn button').click(function(){
		var name=$('input[name="name"]').val();
		var company=$('input[name="company"]').val();
		var occupation=$('.selectProfession p').attr('data-id');
		var agreement=0;
		if($('.selectProfession p').text()=='请选择职业类型'){
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['请选择职业类型']
			});
			return false;
		}
		if($('.agreeContract i').hasClass('active')){
			agreement=1;
		}else{
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['请阅读并同意签约《线上合同》']
			});
			return false;
		}
		$.ajax({
	        url: 'http://yichuanglian.huimor.com/index/perfectPerson',
	        type:'post',
	        data:{
	            username:name,
	            company:company,
	            occupationtype:occupation,
	            agreement:agreement
	        },
	        dataType:'json',
	        xhrFields:{  
				withCredentials:true  
			},  
	        success:function(data){
	            if(isLogin(data)){
	            	window.location.href='successEnter.html'
	            }
	        }
	    });
    });
    
});
