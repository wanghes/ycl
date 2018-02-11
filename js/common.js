//窗口自适应事件
(function(win,doc){
    function change(){
          doc.documentElement.style.fontSize=doc.documentElement.clientWidth/750*100+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);


	

//	判断是否登录
function isLogin(data){
	console.log(data)
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

//function isTel(tel){
//	if(tel==''|| tel.length!=11){
//		$.toastTip({
//			img:'images/4-3gxfkui.png',
//			imgW:'1.56rem',
//			imgH:'1.5rem',
//			text:['手机号不正确']
//		});
//	}
//}


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
			$.each(text, function(i,v){
				text_str+='<p>'+v+'</p>';
			});
			var toastTipStr=$('<div class="toastTip"><div class="toastContent"><img src="'+imgSrc+'" />'+text_str+'</div></div>');
			toastTipStr.find('img').css({"width":options.imgW,"height":options.imgH});
			$('body').append(toastTipStr).css('overflow-y', 'hidden');
			var tipTop=($(window).height()-$(".toastContent").height())/2.5;
			$(".toastContent").css('top',tipTop);
			setTimeout(function(){$('.toastTip').fadeOut(300);$('body').css('overflow-y', 'scroll');$('.toastTip').remove();},1500)
		}
	})
})(jQuery);




$(function(){
	
	//	发布线索 输入框点击
	$('.releaseInfo input').focus(function(){
		$(this).parents('dd').addClass('cur')
	});
	$('.releaseInfo input').blur(function(){
		$(this).parents('dd').removeClass('cur')
	});
	
	//	完善个人信息 是否同意阅读线上合同
	$('.agreeContract i').click(function(){
		$(this).toggleClass('active')
	})
	
	//	发布线索  行业选择弹出
	$('.industryAdd a').click(function(){
		$('.industryTanchu').show();
	})
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
	//	发布线索  业务类型
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
	
	//发布线索提交
	$('.release-btn button').click(function(){
		var projectName=$('input[name="projectName"]').val();
		var bus_id=$('.selectBusiness p').attr('data-id');
		var cate_id=[];
		var budget_id=$('.selectBudget p').attr('data-id');
		var proportion=$('input[name="proportion"]').val();
		var describes=$('textarea').val();
		if($('dd.industryAdd p').text()==''){
			$.toastTip({
				img:'images/4-3gxfkui.png',
				imgW:'1.56rem',
				imgH:'1.5rem',
				text:['请选择行业']
			});
			return false;
		}
		if($('.industryAdd p em').length<2){
			cate_id.push($('.industryAdd p em').attr('data-id'));
		}else{
			$('dd.industryAdd ul em').each(function(){
				cate_id.push($(this).attr('data-id'))
			})
		}
		
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
	})

	
	//	我发布的线索
	$('.tab_div div').click(function(){
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		
		$.ajax({
	        url: 'http://yichuanglian.huimor.com/index/release',
	        type:'post',
	        data:{
	        	status:index+1,
	        },
	        dataType:'json',
	        xhrFields:{  
				withCredentials:true  
			},  
	        success:function(data){
	        	if(isLogin(data)){
	        		var str='';
	        		var data=data.data;
	        		for (i=0;i<data.length();i++) {
        				str+='<div class="list">\
								<div><span>'+data[i].projectname+'</span><span class="fr">'+data[i].addtime+'</span></div>\
								<div><span>行业：</span>教育</div>\
								<div><span>项目预算：</span><strong>￥1000.00</strong></div>\
								<div><span>期望提成比例：</span><em>10%</em></div>\
							</div>';
        			}
	        	}
	        	$('.model').eq(index).append(str);
				$('.model').hide().eq(index).show();
	        }
		});
	})
	
	//	意见反馈提示
//	$.toastTip({
//		img:'images/4-3gxfkui.png',
//		imgW:'1.56rem',
//		imgH:'1.5rem',
//		text:['感谢您的反馈！','我们会尽快安排专人与您联系~']
//	})

	//	保存分销信息
//	$.toastTip({
//		img:'images/3-12bccg.png',
//		imgW:'1.52rem',
//		imgH:'1.34rem',
//		text:['保存成功']
//	})

	//	密码修改成功
//	$.toastTip({
//		img:'images/4-2xgcgong.png',
//		imgW:'1.68rem',
//		imgH:'1.49rem',
//		text:['修改成功']
//	})

    
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
    
})
