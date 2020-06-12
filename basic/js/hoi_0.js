		var divisionDateId;
		var divisionDateId2;

		var numTemp;

		var lands=document.getElementsByClassName("land");

		var landOn=0;

		var divisionBaseDate;
		var divisionBaseDateA=null;
		var divisionBaseDateB=null;

		var landDate=[-50,0,100,30,100,5,100,100,2,100,100,100,72,-20,0,0,0,0,20];
		var landDateA=null;
		var landDateB=null;

		var needResearch=document.getElementsByName("needResearch");

		var zc=document.getElementsByName("zc");

		function save(num){
			if(num==0){
				divisionBaseDateA=divisionBaseDate;
				landDateA=landDate;
				alert("保存方案A成功！");
			}else if(num==1){
				divisionBaseDateB=divisionBaseDate;
				landDateB=landDate;
				alert("保存方案B成功！");
			}
		}

		function getLandBaseDate2(){
			var landBaseDate2=document.getElementsByName("landBaseDate2");
			for(var i=0;i<landBaseDate2.length;i++){
				numTemp=landDateA[i]-landDateB[i];
				if(numTemp>=0){
					if(i==12){
						landBaseDate2[i].innerHTML="+"+numTemp+"小时";
					}else if(i==5||i==14){
						landBaseDate2[i].innerHTML="+"+numTemp;
					}else{
						landBaseDate2[i].innerHTML="+"+numTemp+"%";
					}
					if(numTemp>0){
						if(i==9||i==10||i==11||i==18){
							landBaseDate2[i].style.background="#ffcfcf";
						}else{
							landBaseDate2[i].style.background="#cfffcf";
						}
					}
				}else{
					if(i==12){
						landBaseDate2[i].innerHTML=numTemp+"小时";
					}else if(i==5||i==14){
						landBaseDate2[i].innerHTML=numTemp;
					}else{
						landBaseDate2[i].innerHTML=numTemp+"%";
					}
					if(i==9||i==10||i==11||i==18){
						landBaseDate2[i].style.background="#cfffcf";
					}else{
						landBaseDate2[i].style.background="#ffcfcf";
					}
				}
			}
		}

		function getDivisionBaseDate2(){
			for(var i=0;i<7;i++){
				for(var j=0;j<10;j++){
					divisionDateId2='TD'+i+j;
					if(i==2){
						numTemp=(divisionBaseDateA[i][j]-divisionBaseDateB[i][j]).toFixed(2);
					}else{
						numTemp=divisionBaseDateA[i][j]-divisionBaseDateB[i][j];
					}
					if(numTemp>=0){
						if(i==1||i==2){
							document.getElementById(divisionDateId2).innerHTML='+'+numTemp;
						}else{
							document.getElementById(divisionDateId2).innerHTML='+'+numTemp+'%';
						}
						if(numTemp>0){
							document.getElementById(divisionDateId2).style.background="#cfffcf";
						}
					}else{
						if(i==1||i==2){
							document.getElementById(divisionDateId2).innerHTML=numTemp;
						}else{
							document.getElementById(divisionDateId2).innerHTML=numTemp+'%';
						}
						document.getElementById(divisionDateId2).style.background="#ffcfcf";
					}
				}
			}
		}
		
		function getInitializeTactics(){
			for(var i=0;i<needResearch.length;i++){
				needResearch[i].style.background='#cfcfcf';
			}
		}
		function showLand(num){
			lands[landOn].style.display="none";
			lands[num].style.display="block";
			landOn=num;
		}

		function zcInitializeTactics(flag){
			if(flag==1){
				for(var i=0;i<zc.length;i++){
					zc[i].style.background='white';
				}
			}else if(flag==0){
				for(var i=0;i<zc.length;i++){
					zc[i].style.background='#cfcfcf';
				}
			}
			
		}

		function tacticsChange(num,flag){
			if(flag==1){
				needResearch[num].style.background='white';
				if(num==9){
					zcInitializeTactics(1)
				}
			}else if(flag==0){
				needResearch[num].style.background='#cfcfcf';
				if(num==9){
					zcInitializeTactics(0)
				}
			}
		}

		function getInitializeLandBase(){
			landDate=[-50,0,100,30,100,5,100,100,2,100,100,100,72,-20,0,0,0,0,20];
			getLandBase();
		}
		function getLandBase(){
			var land=document.getElementsByName("landBaseDate");
			for (var i=0;i<land.length ;i++ ){
				
				if(i==5){
					land[i].innerHTML=landDate[i];
				}else if(i==12){
					land[i].innerHTML=landDate[i]+"小时";
				}else if(i==14){
					land[i].innerHTML="+"+landDate[i];
				}else{
					land[i].innerHTML=landDate[i]+"%";
				}
			}
		}
		function getInitializeDivisionBase(){
			divisionBaseDate=[
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
			];
			getDivisionDate();
		}
		function getDivisionDate(){
			for(var i=0;i<7;i++){
				for(var j=0;j<10;j++){
					divisionDateId='D'+i+j;
					if(i==1||i==2){
						document.getElementById(divisionDateId).innerHTML='+'+divisionBaseDate[i][j];
					}else{
						document.getElementById(divisionDateId).innerHTML='+'+divisionBaseDate[i][j]+'%';
					}
				}
			}
		}
		function initializeCheckbox(){
			var ckn=document.getElementsByName("message");
			for(var i=0;i<ckn.length;i++){
				ckn[i].checked=false;
				ckn[i].disabled=true;
			}
			var ckf=document.getElementsByName("first");
			for(var i=0;i,ckf.length;i++){
				ckf[i].checked=false;
				ckf[i].disabled=false;
			}
		}
		function initializeShow(){
			getInitializeTactics();
			zcInitializeTactics(0);
			getInitializeLandBase();
			getInitializeDivisionBase();
			initializeCheckbox();
		}
		function select(num){
			showLand(num);
			initializeShow();
		}
		function Onj000(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j010").disabled=false;
				document.getElementById("text").innerHTML="坦克及变种车辆 突破+20%</br>战术【奇袭】</br>陆军师速度+10%</br>移动损失-10%</br>计划速度+50%";
				landDate[1]+=10;
				landDate[13]+=2;
				landDate[2]+=50;
				getLandBase();
				divisionBaseDate[6][0]+=20;
				divisionBaseDate[6][1]+=20;
				getDivisionDate();
				tacticsChange(6,1);
			}else if(checkbox.checked==false){
				document.getElementById("j010").disabled=true;
				document.getElementById("text").innerHTML="";
				landDate[1]-=10;
				landDate[13]-=2;
				landDate[2]-=50;
				getLandBase();
				divisionBaseDate[6][0]-=20;
				divisionBaseDate[6][1]-=20;
				getDivisionDate();
				tacticsChange(6,0);
			}
		}
		function Onj010(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j020").disabled=false;
				document.getElementById("j000").disabled=true;
				document.getElementById("text").innerHTML="步兵及摩托化机械化部队组织度+15</br>战术【迟滞】";
				divisionBaseDate[1][2]+=15;
				divisionBaseDate[1][3]+=15;
				divisionBaseDate[1][4]+=15;
				getDivisionDate();
				tacticsChange(8,1);
			}else if(checkbox.checked==false){
				document.getElementById("j020").disabled=true;
				document.getElementById("j000").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][2]-=15;
				divisionBaseDate[1][3]-=15;
				divisionBaseDate[1][4]-=15;
				getDivisionDate();
				tacticsChange(8,0);
			}
		}
		function Onj020(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j003").disabled=false;
				document.getElementById("j300").disabled=false;
				document.getElementById("j010").disabled=true;
				document.getElementById("text").innerHTML="装甲车组织度+2，坦克组织度+1</br>坦克及变种车辆最大速度+10%</br>增援率+2%</br>战术【弹性防御】";
				landDate[8]+=2;
				getLandBase();
				divisionBaseDate[1][0]+=1;
				divisionBaseDate[1][6]+=2;
				divisionBaseDate[0][0]+=10;
				divisionBaseDate[0][1]+=10;
				getDivisionDate();
				tacticsChange(10,1);
			}else if(checkbox.checked==false){
				document.getElementById("j003").disabled=true;
				document.getElementById("j300").disabled=true;
				document.getElementById("j010").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[8]-=2;
				getLandBase();
				divisionBaseDate[1][0]-=1;
				divisionBaseDate[1][6]-=2;
				divisionBaseDate[0][0]-=10;
				divisionBaseDate[0][1]-=10;
				getDivisionDate();
				tacticsChange(10,0);
			}
		}
		function Onj300(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j020").disabled=true;
				document.getElementById("j003").disabled=true;
				document.getElementById("j400").disabled=false;
				document.getElementById("text").innerHTML="摩托化步兵、装甲车、摩托化炮兵、摩托化反坦克、摩托化防空、机械化步兵、两栖机械化步兵恢复速度+0.20，最大速度+10%";
				divisionBaseDate[2][3]+=0.2;
				divisionBaseDate[2][4]+=0.2;
				divisionBaseDate[2][5]+=0.2;
				divisionBaseDate[2][6]+=0.2;
				divisionBaseDate[0][3]+=10;
				divisionBaseDate[0][4]+=10;
				divisionBaseDate[0][5]+=10;
				divisionBaseDate[0][6]+=10;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("j020").disabled=false;
				document.getElementById("j003").disabled=false;
				document.getElementById("j400").disabled=true;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[2][3]-=0.2;
				divisionBaseDate[2][4]-=0.2;
				divisionBaseDate[2][5]-=0.2;
				divisionBaseDate[2][6]-=0.2;
				divisionBaseDate[0][3]-=10;
				divisionBaseDate[0][4]-=10;
				divisionBaseDate[0][5]-=10;
				divisionBaseDate[0][6]-=10;
				getDivisionDate();
			}
		}
		function Onj003(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j020").disabled=true;
				document.getElementById("j300").disabled=true;
				document.getElementById("j004").disabled=false;
				document.getElementById("text").innerHTML="坦克组织度+3，突破+20%</br>战术【闪电战】";
				divisionBaseDate[1][0]+=3;
				divisionBaseDate[6][0]+=20;
				getDivisionDate();
				tacticsChange(1,1);
			}else if(checkbox.checked==false){
				document.getElementById("j020").disabled=false;
				document.getElementById("j300").disabled=false;
				document.getElementById("j004").disabled=true;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=3;
				divisionBaseDate[6][0]-=20;
				getDivisionDate();
				tacticsChange(1,0);
			}
		}
		function Onj400(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j500").disabled=false;
				document.getElementById("j300").disabled=true;
				document.getElementById("text").innerHTML="步兵、摩托化步兵、机械化步兵组织度+10";
				divisionBaseDate[1][3]+=10;
				divisionBaseDate[1][4]+=10;
				divisionBaseDate[1][2]+=10;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("j500").disabled=true;
				document.getElementById("j300").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][3]-=10;
				divisionBaseDate[1][4]-=10;
				divisionBaseDate[1][2]-=10;
				getDivisionDate();
			}
		}
		function Onj004(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j005").disabled=false;
				document.getElementById("j003").disabled=true;
				document.getElementById("text").innerHTML="坦克组织度+2</br>坦克及其变种车辆恢复速度+0.10";
				divisionBaseDate[1][0]+=2;
				divisionBaseDate[2][0]+=0.1;
				divisionBaseDate[2][1]+=0.1;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("j005").disabled=true;
				document.getElementById("j003").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=2;
				divisionBaseDate[2][0]-=0.1;
				divisionBaseDate[2][1]-=0.1;
				getDivisionDate();
			}
		}
		function Onj500(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j060").disabled=false;
				document.getElementById("j400").disabled=true;
				document.getElementById("text").innerHTML="摩托化步兵、机械化步兵、两栖机械化步兵组织度+15</br>装甲车、坦克组织度+3</br>战术【闪电战】";
				divisionBaseDate[1][0]+=3;
				divisionBaseDate[1][3]+=15;
				divisionBaseDate[1][4]+=15;
				divisionBaseDate[1][5]+=15;
				divisionBaseDate[1][6]+=3;
				getDivisionDate();
				tacticsChange(1,1);
			}else if(checkbox.checked==false){
				document.getElementById("j060").disabled=true;
				document.getElementById("j400").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=3;
				divisionBaseDate[1][3]-=15;
				divisionBaseDate[1][4]-=15;
				divisionBaseDate[1][5]-=15;
				divisionBaseDate[1][6]-=3;
				getDivisionDate();
				tacticsChange(1,0);
			}
		}
		function Onj005(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j060").disabled=false;
				document.getElementById("j004").disabled=true;
				document.getElementById("text").innerHTML="装甲车组织度+7，摩托化步兵、机械化步兵、两栖机械化步兵组织度+5，坦克组织度+1</br>装甲车、坦克及其变种车辆恢复速度+0.10<br>战术【突破】";
				divisionBaseDate[1][0]+=1;
				divisionBaseDate[1][3]+=5;
				divisionBaseDate[1][4]+=5;
				divisionBaseDate[1][5]+=5;
				divisionBaseDate[1][6]+=7;
				divisionBaseDate[2][0]+=0.1;
				divisionBaseDate[2][1]+=0.1;
				getDivisionDate();
				tacticsChange(0,1);
			}else if(checkbox.checked==false){
				document.getElementById("j060").disabled=true;
				document.getElementById("j004").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=1;
				divisionBaseDate[1][3]-=5;
				divisionBaseDate[1][4]-=5;
				divisionBaseDate[1][5]-=5;
				divisionBaseDate[1][6]-=7;
				divisionBaseDate[2][0]-=0.1;
				divisionBaseDate[2][1]-=0.1;
				getDivisionDate();
				tacticsChange(0,0);
			}
		}
		function Onj060(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j700").disabled=false;
				document.getElementById("j007").disabled=false;
				document.getElementById("j500").disabled=true;
				document.getElementById("j005").disabled=true;
				document.getElementById("text").innerHTML="步兵、摩托化步兵、机械化步兵恢复速度+0.20，组织度+10</br>计划速度+20%<br>战术【压倒性火力】";
				landDate[2]+=20;
				getLandBase();
				divisionBaseDate[1][2]+=10;
				divisionBaseDate[1][3]+=10;
				divisionBaseDate[1][4]+=10;
				divisionBaseDate[2][2]+=0.2;
				divisionBaseDate[2][3]+=0.2;
				divisionBaseDate[2][4]+=0.2;
				getDivisionDate();
				tacticsChange(13,1);
			}else if(checkbox.checked==false){
				document.getElementById("j700").disabled=true;
				document.getElementById("j007").disabled=true;
				if(document.getElementById("j500").checked==true){
					document.getElementById("j500").disabled=false;
				}else if(document.getElementById("j005").checked==true){
					document.getElementById("j005").disabled=false;
				}
				document.getElementById("text").innerHTML="";
				landDate[2]-=20;
				getLandBase();
				divisionBaseDate[1][2]-=10;
				divisionBaseDate[1][3]-=10;
				divisionBaseDate[1][4]-=10;
				divisionBaseDate[2][2]-=0.2;
				divisionBaseDate[2][3]-=0.2;
				divisionBaseDate[2][4]-=0.2;
				getDivisionDate();
				tacticsChange(13,0);
			}
		}
		function Onj700(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j060").disabled=true;
				document.getElementById("j007").disabled=true;
				document.getElementById("j800").disabled=false;
				document.getElementById("text").innerHTML="适役人口+2%";
				landDate[17]+=2;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("j060").disabled=false;
				document.getElementById("j007").disabled=false;
				document.getElementById("j800").disabled=true;
				document.getElementById("text").innerHTML="";
				landDate[17]-=2;
				getLandBase();
			}
		}
		function Onj007(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j060").disabled=true;
				document.getElementById("j700").disabled=true;
				document.getElementById("j008").disabled=false;
				document.getElementById("text").innerHTML="装甲车、坦克组织度+2</br>步兵、摩托化步兵、机械化步兵组织度+10";
				divisionBaseDate[1][0]+=2;
				divisionBaseDate[1][6]+=2;
				divisionBaseDate[1][2]+=10;
				divisionBaseDate[1][3]+=10;
				divisionBaseDate[1][4]+=10;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("j060").disabled=false;
				document.getElementById("j700").disabled=false;
				document.getElementById("j008").disabled=true;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=2;
				divisionBaseDate[1][6]-=2;
				divisionBaseDate[1][2]-=10;
				divisionBaseDate[1][3]-=10;
				divisionBaseDate[1][4]-=10;
				getDivisionDate();
			}
		}
		function Onj800(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j900").disabled=false;
				document.getElementById("j700").disabled=true;
				document.getElementById("text").innerHTML="适役人口+3%";
				landDate[17]+=3;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("j900").disabled=true;
				document.getElementById("j700").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[17]-=3;
				getLandBase();
			}
		}
		function Onj008(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j009").disabled=false;
				document.getElementById("j007").disabled=true;
				document.getElementById("text").innerHTML="战术【机动防御】";
				tacticsChange(11,1);
			}else if(checkbox.checked==false){
				document.getElementById("j009").disabled=true;
				document.getElementById("j007").disabled=false;
				document.getElementById("text").innerHTML="";
				tacticsChange(11,0);
			}
		}
		function Onj900(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j800").disabled=true;
				document.getElementById("text").innerHTML="被敌方占领地区，对敌方驻军伤害+10%<br>战术【游击战】";
				landDate[15]+=10;
				getLandBase();
				tacticsChange(12,1);
			}else if(checkbox.checked==false){
				document.getElementById("j800").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[15]-=10;
				getLandBase();
				tacticsChange(12,0);
			}
		}
		function Onj009(checkbox){
			if(checkbox.checked==true){
				document.getElementById("j008").disabled=true;
				document.getElementById("text").innerHTML="装甲车、坦克组织度+3，突破+20%</br>装甲车、坦克及其变种车辆恢复速度+0.20";
				divisionBaseDate[1][0]+=3;
				divisionBaseDate[1][6]+=3;
				divisionBaseDate[6][0]+=20;
				divisionBaseDate[6][6]+=20;
				divisionBaseDate[2][0]+=0.2;
				divisionBaseDate[2][1]+=0.2;
				divisionBaseDate[2][6]+=0.2;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("j008").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=3;
				divisionBaseDate[1][6]-=3;
				divisionBaseDate[6][0]-=20;
				divisionBaseDate[6][6]-=20;
				divisionBaseDate[2][0]-=0.2;
				divisionBaseDate[2][1]-=0.2;
				divisionBaseDate[2][6]-=0.2;
				getDivisionDate();
			}
		}
		function Ony000(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y010").disabled=false;
				document.getElementById("text").innerHTML="所有前线部队对人员杀伤+10%</br>战术【弹幕拦截】";
				divisionBaseDate[3][8]+=10;
				getDivisionDate();
				tacticsChange(7,1);
			}else if(checkbox.checked==false){
				document.getElementById("y010").disabled=true;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[3][8]-=10;
				getDivisionDate();
				tacticsChange(7,0);
			}
		}
		function Ony010(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y020").disabled=false;
				document.getElementById("y000").disabled=true;
				document.getElementById("text").innerHTML="步兵组织度+15</br>战术【迟滞】";
				divisionBaseDate[1][2]+=15;
				getDivisionDate();
				tacticsChange(8,1);
			}else if(checkbox.checked==false){
				document.getElementById("y020").disabled=true;
				document.getElementById("y000").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][2]-=15;
				getDivisionDate();
				tacticsChange(8,0);
			}
		}
		function Ony020(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y003").disabled=false;
				document.getElementById("y300").disabled=false;
				document.getElementById("y010").disabled=true;
				document.getElementById("text").innerHTML="步兵、摩托化步兵、机械化步兵防御+10%</br>战术【弹性防御】";
				divisionBaseDate[5][2]+=10;
				divisionBaseDate[5][3]+=10;
				divisionBaseDate[5][4]+=10;
				getDivisionDate();
				tacticsChange(10,1);
			}else if(checkbox.checked==false){
				document.getElementById("y003").disabled=true;
				document.getElementById("y300").disabled=true;
				document.getElementById("y010").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[5][2]-=10;
				divisionBaseDate[5][3]-=10;
				divisionBaseDate[5][4]-=10;
				getDivisionDate();
				tacticsChange(10,0);
			}
		}
		function Ony300(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y020").disabled=true;
				document.getElementById("y003").disabled=true;
				document.getElementById("y400").disabled=false;
				document.getElementById("text").innerHTML="牵引火炮恢复速度+0.20";
				divisionBaseDate[2][7]+=0.2;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("y020").disabled=false;
				document.getElementById("y003").disabled=false;
				document.getElementById("y400").disabled=true;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[2][7]-=0.2;
				getDivisionDate();
			}
		}
		function Ony003(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y020").disabled=true;
				document.getElementById("y300").disabled=true;
				document.getElementById("y004").disabled=false;
				document.getElementById("text").innerHTML="支援连对人员杀伤+25%，组织度+10";
				divisionBaseDate[3][9]+=25;
				divisionBaseDate[1][9]+=10;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("y020").disabled=false;
				document.getElementById("y300").disabled=false;
				document.getElementById("y004").disabled=true;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[3][9]-=25;
				divisionBaseDate[1][9]-=10;
			}
		}
		function Ony400(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y050").disabled=false;
				document.getElementById("y300").disabled=true;
				document.getElementById("text").innerHTML="牵引火炮对人员杀伤+10%</br>战术【压倒性火力】";
				divisionBaseDate[3][7]+=10;
				getDivisionDate();
				tacticsChange(13,1);
			}else if(checkbox.checked==false){
				document.getElementById("y050").disabled=true;
				document.getElementById("y300").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[3][7]-=10;
				getDivisionDate();
				tacticsChange(13,0);
			}
		}
		function Ony004(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y050").disabled=false;
				document.getElementById("y003").disabled=true;
				document.getElementById("text").innerHTML="支援连对人员杀伤+25%，组织度+10</br>战术【压倒性火力】";
				divisionBaseDate[3][9]+=25;
				divisionBaseDate[1][9]+=10;
				getDivisionDate();
				tacticsChange(13,1);
			}else if(checkbox.checked==false){
				document.getElementById("y050").disabled=true;
				document.getElementById("y003").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[3][9]-=25;
				divisionBaseDate[1][9]-=10;
				getDivisionDate();
				tacticsChange(13,0);
			}
		}
		function Ony050(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y600").disabled=false;
				document.getElementById("y006").disabled=false;
				document.getElementById("y400").disabled=true;
				document.getElementById("y004").disabled=true;
				document.getElementById("text").innerHTML="坦克及其变种车辆突破+10%</br>战术【闪电战】";
				divisionBaseDate[6][0]+=10;
				divisionBaseDate[6][1]+=10;
				getDivisionDate();
				tacticsChange(1,1);
			}else if(checkbox.checked==false){
				document.getElementById("y600").disabled=true;
				document.getElementById("y006").disabled=true;
				if(document.getElementById("y400").checked==true){
					document.getElementById("y400").disabled=false;
				}else if(document.getElementById("y004").checked==true){
					document.getElementById("y004").disabled=false;
				}
				document.getElementById("text").innerHTML="";
				divisionBaseDate[6][0]-=10;
				divisionBaseDate[6][1]-=10;
				getDivisionDate();
				tacticsChange(1,0);
			}
		}
		function Ony600(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y050").disabled=true;
				document.getElementById("y006").disabled=true;
				document.getElementById("y700").disabled=false;
				document.getElementById("text").innerHTML="陆军对装甲杀伤+10%";
				divisionBaseDate[4][8]+=10;
				divisionBaseDate[4][9]+=10;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("y050").disabled=false;
				document.getElementById("y006").disabled=false;
				document.getElementById("y700").disabled=true;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[4][8]-=10;
				divisionBaseDate[4][9]-=10;
				getDivisionDate();
			}
		}
		function Ony006(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y050").disabled=true;
				document.getElementById("y600").disabled=true;
				document.getElementById("y007").disabled=false;
				document.getElementById("text").innerHTML="步兵、摩托化步兵、机械化步兵、牵引火炮、轻型火炮对人员杀伤+5%";
				divisionBaseDate[3][2]+=10;
				divisionBaseDate[3][3]+=10;
				divisionBaseDate[3][4]+=10;
				divisionBaseDate[3][7]+=10;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("y050").disabled=false;
				document.getElementById("y600").disabled=false;
				document.getElementById("y007").disabled=true;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[3][2]-=10;
				divisionBaseDate[3][3]-=10;
				divisionBaseDate[3][4]-=10;
				divisionBaseDate[3][7]-=10;
				getDivisionDate();
			}
		}
		function Ony700(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y800").disabled=false;
				document.getElementById("y600").disabled=true;
				document.getElementById("text").innerHTML="坦克及其变种车辆对装甲杀伤+10%，对人员杀伤+10%</br>战术【突破】";
				divisionBaseDate[3][0]+=10;
				divisionBaseDate[3][1]+=10;
				divisionBaseDate[4][0]+=10;
				divisionBaseDate[4][1]+=10;
				getDivisionDate();
				tacticsChange(0,1);
			}else if(checkbox.checked==false){
				document.getElementById("y800").disabled=true;
				document.getElementById("y600").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[3][0]-=10;
				divisionBaseDate[3][1]-=10;
				divisionBaseDate[4][0]-=10;
				divisionBaseDate[4][1]-=10;
				getDivisionDate();
				tacticsChange(0,0);
			}
		}

		function Ony007(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y008").disabled=false;
				document.getElementById("y006").disabled=true;
				document.getElementById("text").innerHTML="侦察连：侦察+1</br>增援率+2%";
				landDate[14]+=1;
				landDate[8]+=2;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("y008").disabled=true;
				document.getElementById("y006").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[14]-=1;
				landDate[8]-=2;
				getLandBase();
			}
		}
		function Ony800(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y900").disabled=false;
				document.getElementById("y700").disabled=true;
				document.getElementById("text").innerHTML="增援率+2%</br>战术【战术撤退】";
				landDate[8]+=2;
				getLandBase();
				tacticsChange(9,1);
			}else if(checkbox.checked==false){
				document.getElementById("y900").disabled=true;
				document.getElementById("y700").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[8]-=2;
				getLandBase();
				tacticsChange(9,0);
			}
		}
		function Ony008(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y009").disabled=false;
				document.getElementById("y007").disabled=true;
				document.getElementById("text").innerHTML="装甲车、坦克组织度+2，步兵、摩托化步兵、机械化步兵组织度+10</br>装甲车、坦克及其变种车辆、步兵、摩托化步兵、机械化步兵恢复速度+0.05</br>战术【战术撤退】";
				divisionBaseDate[1][0]+=2;
				divisionBaseDate[1][6]+=2;
				divisionBaseDate[1][2]+=10;
				divisionBaseDate[1][3]+=10;
				divisionBaseDate[1][4]+=10;
				divisionBaseDate[2][6]+=0.05;
				divisionBaseDate[2][0]+=0.05;
				divisionBaseDate[2][1]+=0.05;
				divisionBaseDate[2][2]+=0.05;
				divisionBaseDate[2][3]+=0.05;
				divisionBaseDate[2][4]+=0.05;
				getDivisionDate();
				tacticsChange(9,1);
			}else if(checkbox.checked==false){
				document.getElementById("y009").disabled=true;
				document.getElementById("y007").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=2;
				divisionBaseDate[1][6]-=2;
				divisionBaseDate[1][2]-=10;
				divisionBaseDate[1][3]-=10;
				divisionBaseDate[1][4]-=10;
				divisionBaseDate[2][6]-=0.05;
				divisionBaseDate[2][0]-=0.05;
				divisionBaseDate[2][1]-=0.05;
				divisionBaseDate[2][2]-=0.05;
				divisionBaseDate[2][3]-=0.05;
				divisionBaseDate[2][4]-=0.05;
				getDivisionDate();
				tacticsChange(9,0);
			}
		}
		function Ony900(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y800").disabled=true;
				document.getElementById("text").innerHTML="所有前线部队组织度+5</br>空优+20%";
				landDate[7]+=20;
				getLandBase();
				divisionBaseDate[1][8]+=5;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("y800").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[7]-=20;
				getLandBase();
				divisionBaseDate[1][8]-=5;
				getDivisionDate();
			}
		}
		function Ony009(checkbox){
			if(checkbox.checked==true){
				document.getElementById("y008").disabled=true;
				document.getElementById("text").innerHTML="所有前线部队对人员杀伤+5%</br>步兵、摩托化步兵、机械化步兵、牵引火炮、轻型火炮对人员杀伤+5%，对装甲杀伤+5%</br>战术【突破】";
				divisionBaseDate[3][8]+=5;
				divisionBaseDate[3][3]+=5;
				divisionBaseDate[3][4]+=5;
				divisionBaseDate[3][2]+=5;
				divisionBaseDate[3][7]+=5;
				divisionBaseDate[4][2]+=5;
				divisionBaseDate[4][3]+=5;
				divisionBaseDate[4][4]+=5;
				divisionBaseDate[4][7]+=5;
				getDivisionDate();
				tacticsChange(0,1);
			}else if(checkbox.checked==false){
				document.getElementById("y008").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[3][8]-=5;
				divisionBaseDate[3][3]-=5;
				divisionBaseDate[3][4]-=5;
				divisionBaseDate[3][2]-=5;
				divisionBaseDate[3][7]-=5;
				divisionBaseDate[4][2]-=5;
				divisionBaseDate[4][3]-=5;
				divisionBaseDate[4][4]-=5;
				divisionBaseDate[4][7]-=5;
				getDivisionDate();
				tacticsChange(0,0);
			}
		}
		function Onq000(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q010").disabled=false;
				document.getElementById("text").innerHTML="堑壕速度+25%</br>堑壕上限+10";
				landDate[4]+=25;
				landDate[5]+=10;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("q010").disabled=true;
				document.getElementById("text").innerHTML="";
				landDate[4]-=25;
				landDate[5]-=10;
				getLandBase();
			}
		}
		function Onq010(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q020").disabled=false;
				document.getElementById("q000").disabled=true;
				document.getElementById("text").innerHTML="计划加成上限+10%";
				landDate[3]+=10;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("q020").disabled=true;
				document.getElementById("q000").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[3]-=10;
				getLandBase();
			}
		}
		function Onq020(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q030").disabled=false;
				document.getElementById("q010").disabled=true;
				document.getElementById("text").innerHTML="步兵、摩托化步兵、机械化步兵防御+10%，组织度+10";
				divisionBaseDate[1][2]+=10;
				divisionBaseDate[1][3]+=10;
				divisionBaseDate[1][4]+=10;
				divisionBaseDate[5][2]+=10;
				divisionBaseDate[5][3]+=10;
				divisionBaseDate[5][4]+=10;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("q030").disabled=true;
				document.getElementById("q010").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][2]-=10;
				divisionBaseDate[1][3]-=10;
				divisionBaseDate[1][4]-=10;
				divisionBaseDate[5][2]-=10;
				divisionBaseDate[5][3]-=10;
				divisionBaseDate[5][4]-=10;
				getDivisionDate();
			}
		}
		function Onq030(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q400").disabled=false;
				document.getElementById("q004").disabled=false;
				document.getElementById("q020").disabled=true;
				document.getElementById("text").innerHTML="陆军突破+10%，对人员杀伤+5%</br>战术【周密计划攻击】";
				divisionBaseDate[6][8]+=10;
				divisionBaseDate[6][9]+=10;
				divisionBaseDate[3][8]+=5;
				divisionBaseDate[3][9]+=5;
				getDivisionDate();
				tacticsChange(4,1);
			}else if(checkbox.checked==false){
				document.getElementById("q400").disabled=true;
				document.getElementById("q004").disabled=true;
				document.getElementById("q020").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[6][8]-=10;
				divisionBaseDate[6][9]-=10;
				divisionBaseDate[3][8]-=5;
				divisionBaseDate[3][9]-=5;
				getDivisionDate();
				tacticsChange(4,0);
			}
		}
		function Onq400(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q030").disabled=true;
				document.getElementById("q004").disabled=true;
				document.getElementById("q500").disabled=false;
				document.getElementById("text").innerHTML="摩托化步兵、机械化步兵、装甲车、两栖机械化步兵组织度+5</br>战术【闪电战】、【弹性防御】";
				divisionBaseDate[1][3]+=5;
				divisionBaseDate[1][4]+=5;
				divisionBaseDate[1][5]+=5;
				divisionBaseDate[1][6]+=5;
				getDivisionDate();
				tacticsChange(1,1);
				tacticsChange(10,1);
			}else if(checkbox.checked==false){
				document.getElementById("q030").disabled=false;
				document.getElementById("q004").disabled=false;
				document.getElementById("q500").disabled=true;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][3]-=5;
				divisionBaseDate[1][4]-=5;
				divisionBaseDate[1][5]-=5;
				divisionBaseDate[1][6]-=5;
				getDivisionDate();
				tacticsChange(1,0);
				tacticsChange(10,0);
			}
		}
		function Onq004(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q030").disabled=true;
				document.getElementById("q400").disabled=true;
				document.getElementById("q005").disabled=false;
				document.getElementById("text").innerHTML="步兵突破+10%，组织度+5</br>战术【渗透强袭】";
				divisionBaseDate[6][2]+=5;
				divisionBaseDate[1][2]+=5;
				getDivisionDate();
				tacticsChange(3,1);
			}else if(checkbox.checked==false){
				document.getElementById("q030").disabled=false;
				document.getElementById("q400").disabled=false;
				document.getElementById("q005").disabled=true;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[6][2]-=5;
				divisionBaseDate[1][2]-=5;
				getDivisionDate();
				tacticsChange(3,0);
			}
		}
		function Onq500(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q600").disabled=false;
				document.getElementById("q400").disabled=true;
				document.getElementById("text").innerHTML="计划加成上限+10%</br>战术【压倒性火力】";
				landDate[3]+=10;
				getLandBase();
				tacticsChange(13,1);
			}else if(checkbox.checked==false){
				document.getElementById("q600").disabled=true;
				document.getElementById("q400").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[3]-=10;
				getLandBase();
				tacticsChange(13,0);
			}
		}
		function Onq005(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q006").disabled=false;
				document.getElementById("q004").disabled=true;
				document.getElementById("text").innerHTML="装甲车、坦克组织度+2</br>装甲车、坦克及其变种车辆恢复速度+0.10</br>战术【闪电战】、【弹性防御】";
				divisionBaseDate[1][0]+=2;
				divisionBaseDate[1][6]+=2;
				divisionBaseDate[2][0]+=0.1;
				divisionBaseDate[2][1]+=0.1;
				divisionBaseDate[2][6]+=0.1;
				getDivisionDate();
				tacticsChange(1,1);
				tacticsChange(10,1);
			}else if(checkbox.checked==false){
				document.getElementById("q006").disabled=true;
				document.getElementById("q004").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=2;
				divisionBaseDate[1][6]-=2;
				divisionBaseDate[2][0]-=0.1;
				divisionBaseDate[2][1]-=0.1;
				divisionBaseDate[2][6]-=0.1;
				getDivisionDate();
				tacticsChange(1,0);
				tacticsChange(10,0);
			}
		}
		function Onq600(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q700").disabled=false;
				document.getElementById("q500").disabled=true;
				document.getElementById("text").innerHTML="装甲车、坦克组织度+1</br>步兵、摩托化步兵、机械化步兵组织度+5";
				divisionBaseDate[1][0]+=1;
				divisionBaseDate[1][6]+=1;
				divisionBaseDate[1][2]+=5;
				divisionBaseDate[1][3]+=5;
				divisionBaseDate[1][4]+=5;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("q700").disabled=true;
				document.getElementById("q500").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=1;
				divisionBaseDate[1][6]-=1;
				divisionBaseDate[1][2]-=5;
				divisionBaseDate[1][3]-=5;
				divisionBaseDate[1][4]-=5;
				getDivisionDate();
			}
		}
		function Onq006(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q007").disabled=false;
				document.getElementById("q005").disabled=true;
				document.getElementById("text").innerHTML="补给消耗-10%";
				landDate[9]-=10;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("q007").disabled=true;
				document.getElementById("q005").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[9]+=10;
				getLandBase();
			}
		}
		function Onq700(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q800").disabled=false;
				document.getElementById("q600").disabled=true;
				document.getElementById("text").innerHTML="陆军突破+10%</br>战术【突破】";
				divisionBaseDate[6][8]+=10;
				divisionBaseDate[6][9]+=10;
				getDivisionDate();
				tacticsChange(0,1);
			}else if(checkbox.checked==false){
				document.getElementById("q800").disabled=true;
				document.getElementById("q600").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[6][8]-=10;
				divisionBaseDate[6][9]-=10;
				getDivisionDate();
				tacticsChange(0,0);
			}
		}
		function Onq007(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q008").disabled=false;
				document.getElementById("q006").disabled=true;
				document.getElementById("text").innerHTML="陆战夜战攻击+25%";
				landDate[0]+=25;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("q008").disabled=true;
				document.getElementById("q006").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[0]-=25;
				getLandBase();
			}
		}
		function Onq800(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q900").disabled=false;
				document.getElementById("q700").disabled=true;
				document.getElementById("text").innerHTML="计划加成上限+10%";
				landDate[3]+=10;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("q900").disabled=true;
				document.getElementById("q700").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[3]-=10;
				getLandBase();
			}
		}
		function Onq008(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q009").disabled=false;
				document.getElementById("q007").disabled=true;
				document.getElementById("text").innerHTML="装甲车、坦克组织度+1</br>步兵、摩托化步兵、机械化步兵组织度+5";
				divisionBaseDate[1][0]+=1;
				divisionBaseDate[1][6]+=1;
				divisionBaseDate[1][2]+=5;
				divisionBaseDate[1][3]+=5;
				divisionBaseDate[1][4]+=5;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("q009").disabled=true;
				document.getElementById("q007").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=1;
				divisionBaseDate[1][6]-=1;
				divisionBaseDate[1][2]-=5;
				divisionBaseDate[1][3]-=5;
				divisionBaseDate[1][4]-=5;
				getDivisionDate();
			}
		}
		function Onq900(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q800").disabled=true;
				document.getElementById("text").innerHTML="装甲车组织度+2，坦克组织度+1，步兵、摩托化步兵、机械化步兵组织度+5</br>增援率+2%";
				landDate[8]+=2;
				getLandBase();
				divisionBaseDate[1][0]+=1;
				divisionBaseDate[1][6]+=2;
				divisionBaseDate[1][2]+=5;
				divisionBaseDate[1][3]+=5;
				divisionBaseDate[1][4]+=5;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("q800").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[8]-=2;
				getLandBase();
				divisionBaseDate[1][0]-=1;
				divisionBaseDate[1][6]-=2;
				divisionBaseDate[1][2]-=5;
				divisionBaseDate[1][3]-=5;
				divisionBaseDate[1][4]-=5;
				getDivisionDate();
			}
		}
		function Onq009(checkbox){
			if(checkbox.checked==true){
				document.getElementById("q008").disabled=true;
				document.getElementById("text").innerHTML="侦察连：侦察+1</br>增援率+2";
				landDate[14]+=1;
				landDate[8]+=2;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("q008").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[14]-=1;
				landDate[8]-=2;
				getLandBase();
			}
		}
		function Onr000(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r010").disabled=false;
				document.getElementById("text").innerHTML="增援率+2%</br>最小训练度-10%";
				landDate[18]-=10;
				landDate[8]+=2;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("r010").disabled=true;
				document.getElementById("text").innerHTML="";
				landDate[18]+=10;
				landDate[8]-=2;
				getLandBase();
			}
		}
		function Onr010(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r020").disabled=false;
				document.getElementById("r000").disabled=true;
				document.getElementById("text").innerHTML="补给耗尽-10%</br>携行补给+48小时";
				landDate[11]-=10;
				landDate[12]+=48;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("r020").disabled=true;
				document.getElementById("r000").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[11]+=10;
				landDate[12]-=48;
				getLandBase();
			}
		}
		function Onr020(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r300").disabled=false;
				document.getElementById("r003").disabled=false;
				document.getElementById("r010").disabled=true;
				document.getElementById("text").innerHTML="步兵组织度+5</br>堑壕上限+5";
				landDate[5]+=5;
				getLandBase();
				divisionBaseDate[1][2]+=5;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("r300").disabled=true;
				document.getElementById("r003").disabled=true;
				document.getElementById("r010").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[5]-=5;
				getLandBase();
				divisionBaseDate[1][2]-=5;
				getDivisionDate();
			}
		}
		function Onr300(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r020").disabled=true;
				document.getElementById("r003").disabled=true;
				document.getElementById("r400").disabled=false;
				document.getElementById("text").innerHTML="补给耗尽-10%</br>战术【持续强袭】";
				landDate[11]-=10;
				getLandBase();
				tacticsChange(5,1);
			}else if(checkbox.checked==false){
				document.getElementById("r020").disabled=false;
				document.getElementById("r003").disabled=false;
				document.getElementById("r400").disabled=true;
				document.getElementById("text").innerHTML="";
				landDate[11]+=10;
				getLandBase();
				tacticsChange(5,0);
			}
		}
		function Onr003(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r020").disabled=true;
				document.getElementById("r300").disabled=true;
				document.getElementById("r004").disabled=false;
				document.getElementById("text").innerHTML="陆军损耗-10%</br>被敌方占领地区，对敌方驻军伤害+10%</br>战术【人海冲锋】";
				landDate[15]+=10;
				landDate[10]-=10;
				getLandBase();
				tacticsChange(2,1);
			}else if(checkbox.checked==false){
				document.getElementById("r020").disabled=false;
				document.getElementById("r300").disabled=false;
				document.getElementById("r004").disabled=true;
				document.getElementById("text").innerHTML="";
				landDate[15]-=10;
				landDate[10]+=10;
				getLandBase();
				tacticsChange(2,0);
			}
		}
		function Onr400(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r500").disabled=false;
				document.getElementById("r300").disabled=true;
				document.getElementById("text").innerHTML="装甲车、坦克组织度+2</br>战术【闪电战】";
				divisionBaseDate[1][0]+=2;
				divisionBaseDate[1][6]+=2;
				getDivisionDate();
				tacticsChange(1,1);
			}else if(checkbox.checked==false){
				document.getElementById("r500").disabled=true;
				document.getElementById("r300").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=2;
				divisionBaseDate[1][6]-=2;
				getDivisionDate();
				tacticsChange(1,0);
			}
		}
		function Onr004(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r005").disabled=false;
				document.getElementById("r003").disabled=true;
				document.getElementById("text").innerHTML="步兵恢复速度+0.30</br>增援率+5%";
				landDate[8]+=5;
				getLandBase();
				divisionBaseDate[2][2]+=0.3;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("r005").disabled=true;
				document.getElementById("r003").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[8]-=5;
				getLandBase();
				divisionBaseDate[2][2]-=0.3;
				getDivisionDate();
			}
		}
		function Onr500(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r600").disabled=false;
				document.getElementById("r400").disabled=true;
				document.getElementById("text").innerHTML="增援率+5%</br>计划加成上限+10%</br>战术【弹性防御】";
				landDate[8]+=5;
				landDate[3]+=10;
				getLandBase();
				tacticsChange(10,1);
			}else if(checkbox.checked==false){
				document.getElementById("r600").disabled=true;
				document.getElementById("r400").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[8]-=5;
				landDate[3]-=10;
				getLandBase();
				tacticsChange(10,0);
			}
		}
		function Onr005(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r006").disabled=false;
				document.getElementById("r004").disabled=true;
				document.getElementById("text").innerHTML="装甲车、坦克组织度+2</br>步兵、摩托化步兵、机械化步兵组织度+10";
				divisionBaseDate[1][0]+=2;
				divisionBaseDate[1][6]+=2;
				divisionBaseDate[1][2]+=10;
				divisionBaseDate[1][3]+=10;
				divisionBaseDate[1][4]+=10;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("r006").disabled=true;
				document.getElementById("r004").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=2;
				divisionBaseDate[1][6]-=2;
				divisionBaseDate[1][2]-=10;
				divisionBaseDate[1][3]-=10;
				divisionBaseDate[1][4]-=10;
				getDivisionDate();
			}
		}
		function Onr600(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r700").disabled=false;
				document.getElementById("r500").disabled=true;
				document.getElementById("text").innerHTML="步兵战场宽度-0.4</br>补给消耗-10%</br>战术【压倒性火力】";
				landDate[9]-=10;
				getLandBase();
				tacticsChange(13,1);
			}else if(checkbox.checked==false){
				document.getElementById("r700").disabled=true;
				document.getElementById("r500").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[9]+=10;
				getLandBase();
				tacticsChange(13,0);
			}
		}
		function Onr006(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r007").disabled=false;
				document.getElementById("r005").disabled=true;
				document.getElementById("text").innerHTML="步兵战场宽度-0.4</br>适役人口+5%</br>增援率+15%";
				landDate[17]+=5;
				landDate[8]+=15;
				getLandBase();
			}else if(checkbox.checked==false){
				document.getElementById("r007").disabled=true;
				document.getElementById("r005").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[8]-=15;
				landDate[17]-=5;
				getLandBase();
			}
		}
		function Onr700(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r800").disabled=false;
				document.getElementById("r600").disabled=true;
				document.getElementById("text").innerHTML="装甲车、坦克组织度+1，步兵、摩托化步兵、机械化步兵组织度+5</br>装甲车、坦克、步兵、摩托化步兵、机械化步兵突破+10%";
				divisionBaseDate[1][0]+=1;
				divisionBaseDate[1][6]+=1;
				divisionBaseDate[1][2]+=5;
				divisionBaseDate[1][3]+=5;
				divisionBaseDate[1][4]+=5;
				divisionBaseDate[6][0]+=10;
				divisionBaseDate[6][6]+=10;
				divisionBaseDate[6][2]+=10;
				divisionBaseDate[6][3]+=10;
				divisionBaseDate[6][4]+=10;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("r800").disabled=true;
				document.getElementById("r600").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][0]-=1;
				divisionBaseDate[1][6]-=1;
				divisionBaseDate[1][2]-=5;
				divisionBaseDate[1][3]-=5;
				divisionBaseDate[1][4]-=5;
				divisionBaseDate[6][0]-=10;
				divisionBaseDate[6][6]-=10;
				divisionBaseDate[6][2]-=10;
				divisionBaseDate[6][3]-=10;
				divisionBaseDate[6][4]-=10;
				getDivisionDate();
			}
		}
		function Onr007(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r006").disabled=true;
				document.getElementById("text").innerHTML="陆军恢复速度+0.20</br>补给耗尽-30%</br>敌占区抵抗增长速度+25%</br>战术【游击战】";
				landDate[16]+=25;
				landDate[11]-=30;
				getLandBase();
				divisionBaseDate[2][8]+=0.2;
				divisionBaseDate[2][9]+=0.2;
				getDivisionDate();
				tacticsChange(12,1);
			}else if(checkbox.checked==false){
				document.getElementById("r006").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[16]-=25;
				landDate[11]+=30;
				getLandBase();
				divisionBaseDate[2][8]-=0.2;
				divisionBaseDate[2][9]-=0.2;
				getDivisionDate();
				tacticsChange(12,0);
			}
		}
		function Onr800(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r900").disabled=false;
				document.getElementById("r700").disabled=true;
				document.getElementById("text").innerHTML="摩托化步兵、机械化步兵、两栖机械化步兵组织度+10，装甲车组织度+3，坦克组织度+2</br>装甲车、坦克及其变种车辆、摩托化步兵、机械化步兵、两栖机械化步兵恢复速度+0.10";
				divisionBaseDate[1][3]+=10;
				divisionBaseDate[1][4]+=10;
				divisionBaseDate[1][5]+=10;
				divisionBaseDate[1][6]+=3;
				divisionBaseDate[1][0]+=2;
				divisionBaseDate[2][0]+=0.1;
				divisionBaseDate[2][6]+=0.1;
				divisionBaseDate[2][1]+=0.1;
				divisionBaseDate[2][3]+=0.1;
				divisionBaseDate[2][4]+=0.1;
				divisionBaseDate[2][5]+=0.1;
				getDivisionDate();
			}else if(checkbox.checked==false){
				document.getElementById("r900").disabled=true;
				document.getElementById("r700").disabled=false;
				document.getElementById("text").innerHTML="";
				divisionBaseDate[1][3]-=10;
				divisionBaseDate[1][4]-=10;
				divisionBaseDate[1][5]-=10;
				divisionBaseDate[1][6]-=3;
				divisionBaseDate[1][0]-=2;
				divisionBaseDate[2][0]-=0.1;
				divisionBaseDate[2][6]-=0.1;
				divisionBaseDate[2][1]-=0.1;
				divisionBaseDate[2][3]-=0.1;
				divisionBaseDate[2][4]-=0.1;
				divisionBaseDate[2][5]-=0.1;
				getDivisionDate();
			}
		}
		function Onr900(checkbox){
			if(checkbox.checked==true){
				document.getElementById("r800").disabled=true;
				document.getElementById("text").innerHTML="移动中组织度损失-25%</br>增援率+5%</br>战术【机动防御】";
				landDate[13]+=5;
				landDate[8]+=5;
				getLandBase();
				tacticsChange(11,1);
			}else if(checkbox.checked==false){
				document.getElementById("r800").disabled=false;
				document.getElementById("text").innerHTML="";
				landDate[13]-=5;
				landDate[8]-=5;
				getLandBase();
				tacticsChange(11,0);
			}
		}
