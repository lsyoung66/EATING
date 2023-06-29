function init(){
	var like = document.getElementsByClassName("like");
	for(i=0;i<localStorage.length;i++){
		var on = localStorage.key(i);
		for(j=0;j<like.length;j++){
			if(like[j].name.match(on)){
				like[j].src="icon/like.png";
			}
		}
	}
}

function seoul_korean_like() {
    var like = document.getElementsByClassName("seoul_korean like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("명동교자","02-776-5348");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("명동교자");
    }
}

function seoul_chinese_like() {
    var like = document.getElementsByClassName("seoul_chinese like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("송죽장","02-2631-9184");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("송죽장");
    }
}

function seoul_japanese_like() {
    var like = document.getElementsByClassName("seoul_japanese like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("킷사서울","02-878-7444");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("킷사서울");
    }
}

function seoul_western_like() {
    var like = document.getElementsByClassName("seoul_western like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("윕성수","02-6951-1005");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("윕성수");
    }
}

function seoul_dessert_like() {
    var like = document.getElementsByClassName("seoul_dessert like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("플러피도넛","0507-1311-7065");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("플러피도넛");
    }
}

function daegu_korean_like() {
    var like = document.getElementsByClassName("daegu_korean like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("기린왕곱창","053-639-9249");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("기린왕곱창");
    }
}

function daegu_chinese_like() {
    var like = document.getElementsByClassName("daegu_chinese like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("양자강","0507-525-6760");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("양자강");
    }
}

function daegu_japanese_like() {
    var like = document.getElementsByClassName("daegu_japanese like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("도마29","0507-1306-1129");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("도마29");
    }
}

function daegu_western_like() {
    var like = document.getElementsByClassName("daegu_western like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("다이닝슬로우라이프","053-752-2014");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("다이닝슬로우라이프");
    }
}

function daegu_dessert_like() {
    var like = document.getElementsByClassName("daegu_dessert like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("게이블루프커피","0507-1324-0068");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("게이블루프커피");
    }
}

function busan_korean_like() {
	 var like = document.getElementsByClassName("busan_korean like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("토담바다장어","0051-208-1236");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("토담바다장어");
	 }
}

function busan_chinese_like() {
	 var like = document.getElementsByClassName("busan_chinese like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("복성반점","051-291-7834");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("복성반점");
	 }
}

function busan_japanese_like() {
	 var like = document.getElementsByClassName("busan_japanese like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("해목","051-746-3730");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("해목");
	 }
}

function busan_western_like() {
	 var like = document.getElementsByClassName("busan_western like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("매드독스","051-753-3600");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("매드독스");
	 }
}

function busan_dessert_like() {
	 var like = document.getElementsByClassName("busan_dessert like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("웨이브온커피","051-727-1660");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("웨이브온커피");
	 }
}

function jeonju_korean_like() {
    var like = document.getElementsByClassName("jeonju_korean like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("세진회관","063-213-5999");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("세진회관");
    }
}

function jeonju_chinese_like() {
    var like = document.getElementsByClassName("jeonju_chinese like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("아중각","063-246-4733");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("아중각");
    }
}

function jeonju_japanese_like() {
    var like = document.getElementsByClassName("jeonju_japanese like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("가츠연","0507-1309-2277");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("가츠연");
    }
}

function jeonju_western_like() {
    var like = document.getElementsByClassName("jeonju_western like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("가마","0507-1309-8521");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("가마");
    }
}

function jeonju_dessert_like() {
    var like = document.getElementsByClassName("jeonju_dessert like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("그날의온도","0507-1324-0068");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("그날의온도");
    }
}

function gangneung_korean_like() {
    var like = document.getElementsByClassName("gangneung_korean like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("정동진초당순두부","033-644-8853");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("정동진초당순두부");
    }
}

function gangneung_chinese_like() {
    var like = document.getElementsByClassName("gangneung_chinese like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("연곡반점","033-661-5559");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("연곡반점");
    }
}

function gangneung_japanese_like() {
    var like = document.getElementsByClassName("gangneung_japanese like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("대관령 다이닝스시","0507-1337-2732");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("대관령 다이닝스시");
    }
}

function gangneung_western_like() {
    var like = document.getElementsByClassName("gangneung_western like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("강릉수제버거","0507-1347-0092");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("강릉수제버거");
    }
}

function gangneung_dessert_like() {
    var like = document.getElementsByClassName("gangneung_dessert like");
    if(like[0].src.match("icon/b_like.png")){
       like[0].src="icon/like.png";
       localStorage.setItem("카페 툇마루","0507-1349-7175");
    }
    else{
       like[0].src="icon/b_like.png";
       localStorage.removeItem("카페 툇마루");
    }
}

function jeju_korean_like() {
	 var like = document.getElementsByClassName("jeju_korean like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("칠돈가","064-727-9092");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("칠돈가");
	 }
}

function jeju_chinese_like() {
	 var like = document.getElementsByClassName("jeju_chinese like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("섬소나이","064-784-2918");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("섬소나이");
	 }
}

function jeju_japanese_like() {
	 var like = document.getElementsByClassName("jeju_japanese like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("고쿠텐","0507-1495-1049");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("고쿠텐");
	 }
}

function jeju_western_like() {
	 var like = document.getElementsByClassName("jeju_western like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("목스키친","0507-1354-0828");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("목스키친");
	 }
}

function jeju_dessert_like() {
	 var like = document.getElementsByClassName("jeju_dessert like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("하이엔드제주","0507-1443-4433");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("하이엔드제주");
	 }
}

function m1_like() {
	 var like = document.getElementsByClassName("m1 like");
	 if(like[0].src.match("icon/b_like.png")){
	 	like[0].src="icon/like.png";
	 	localStorage.setItem("조개술찜","https://m.blog.naver.com/hee81hoo/222046562611");
	 }
	 else{
	 	like[0].src="icon/b_like.png";
	 	localStorage.removeItem("조개술찜");
	 }
}

function m2_like() {
    var like = document.getElementsByClassName("m2 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("갈릭 간장치킨","https://blog.naver.com/jh2y3/221851796960");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("갈릭 간장치킨");
    }
}

function m3_like() {
    var like = document.getElementsByClassName("m3 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("소고기 간장떡볶이","https://in.naver.com/eseses1213/challenge/269835007760864/269833920438784");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("소고기 간장떡볶이");
    }
}

function m4_like() {
    var like = document.getElementsByClassName("m4 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("차돌박이라면","https://blog.naver.com/hee81hoo/221612422320");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("차돌박이라면");
    }
}

function m5_like() {
    var like = document.getElementsByClassName("m5 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("매콤 순대볶음","https://in.naver.com/eseses1213/challenge/253592350496448/231278489350784");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("매콤 순대볶음");
    }
}

function s1_like() {
    var like = document.getElementsByClassName("s1 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("라면죽","https://in.naver.com/enregistrer/challenge/290639767575456/290595727404224");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("라면죽");
    }
}

function s2_like() {
    var like = document.getElementsByClassName("s2 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("김치볶음밥","https://blog.naver.com/enregistrer/222265143817");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("김치볶음밥");
    }
}

function s3_like() {
    var like = document.getElementsByClassName("s3 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("짜파구리","https://blog.naver.com/hee81hoo?Redirect=Log&logNo=221865080362&from=postView");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("짜파구리");
    }
}

function s4_like() {
    var like = document.getElementsByClassName("s4 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("뚝배기치즈밥","https://in.naver.com/enregistrer/challenge/289949208610848/289885278981440");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("뚝배기치즈밥");
    }
}

function s5_like() {
    var like = document.getElementsByClassName("s5 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("김치스팸마요 덮밥","https://blog.naver.com/firehouse79/221996688324");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("김치스팸마요 덮밥");
    }
}

function p1_like() {
    var like = document.getElementsByClassName("p1 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("쭈꾸미 샤브샤브","https://in.naver.com/jh2y3/challenge/295514080669760/295504053559424");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("쭈꾸미 샤브샤브");
    }
}

function p2_like() {
    var like = document.getElementsByClassName("p2 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("훈제오리 무쌈말이","https://in.naver.com/firehouse79/challenge/253623111734978/245113350887776");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("훈제오리 무쌈말이");
    }
}

function p3_like() {
    var like = document.getElementsByClassName("p3 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("밀푀유나베","https://in.naver.com/orange_black_box/challenge/254216538385344/234062742792672");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("밀푀유나베");
    }
}

function p4_like() {
    var like = document.getElementsByClassName("p4 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("돼지갈비찜","https://in.naver.com/leescook/challenge/272134640917504/272134465134976");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("돼지갈비찜");
    }
}

function p5_like() {
    var like = document.getElementsByClassName("p5 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("연어 크림치즈롤","https://blog.naver.com/ashleycjh/222154876406");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("연어 크림치즈롤");
    }
}

function l1_like() {
    var like = document.getElementsByClassName("l1 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("명란두부찌개","https://blog.naver.com/hee81hoo/222119742070");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("명란두부찌개");
    }
}

function l2_like() {
    var like = document.getElementsByClassName("l2 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("전찌개","https://blog.naver.com/hee81hoo?Redirect=Log&logNo=222102440304&from=postView");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("전찌개");
    }
}

function l3_like() {
    var like = document.getElementsByClassName("l3 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("진주땡초김밥","https://in.naver.com/enregistrer/challenge/276454618755104/276454398956320");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("진주땡초김밥");
    }
}

function l4_like() {
    var like = document.getElementsByClassName("l4 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("김치만두전골","https://blog.naver.com/enregistrer/222069304110");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("김치만두전골");
    }
}

function l5_like() {
    var like = document.getElementsByClassName("l5 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("당면계란만두","https://in.naver.com/enregistrer/challenge/266639966442368/266639055892032");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("당면계란만두");
    }
}

function d1_like() {
    var like = document.getElementsByClassName("d1 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("레몬드레싱 연어샐러드","https://blog.naver.com/lafleur7/222211667832");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("레몬드레싱 연어샐러드");
    }
}

function d2_like() {
    var like = document.getElementsByClassName("d2 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("단호박 에그슬럿","https://in.naver.com/firehouse79/challenge/253533647889537/234074683009504");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("단호박 에그슬럿");
    }
}

function d3_like() {
    var like = document.getElementsByClassName("d3 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("무화과 그래놀라 요거트","https://blog.naver.com/hee81hoo/221685038345");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("무화과 그래놀라 요거트");
    }
}

function d4_like() {
    var like = document.getElementsByClassName("d4 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("렌틸콩 수란 샐러드","https://in.naver.com/lenastable/contents/234156749760992?query=%EB%A0%8C%ED%8B%B8%EC%BD%A9+%EC%88%98%EB%9E%80+%EC%83%90%EB%9F%AC%EB%93%9C+%EB%A0%88%EC%8B%9C%ED%94%BC");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("렌틸콩 수란 샐러드");
    }
}

function d5_like() {
    var like = document.getElementsByClassName("d5 like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("월남쌈","https://in.naver.com/jlulu/challenge/297641718089217/297641058857312");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("월남쌈");
    }
}

function France_like() {
    var like = document.getElementsByClassName("France like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("라타투이","https://in.naver.com/mildek/contents/233942267324896?query=%EB%9D%BC%ED%83%80%ED%88%AC%EC%9D%B4+%EB%A0%88%EC%8B%9C%ED%94%B");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("라타투이");
    }
}

function Italy_like() {
    var like = document.getElementsByClassName("Italy like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("라자냐","https://in.naver.com/sunshine_table/contents/250894268685728?query=%EB%9D%BC%EC%9E%90%EB%83%90+%EB%A0%88%EC%8B%9C%ED%94%BC");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("라자냐");
    }
}

function Turkey_like() {
    var like = document.getElementsByClassName("Turkey like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("케밥","https://www.10000recipe.com/recipe/6891286");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("케밥");
    }
}

function India_like() {
    var like = document.getElementsByClassName("India like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("탄두리 치킨","https://www.10000recipe.com/recipe/6947875");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("탄두리 치킨");
    }
}

function China_like() {
    var like = document.getElementsByClassName("China like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("마라탕","https://blog.naver.com/yummycook/221795921151");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("마라탕");
    }
}

function Vietnam_like() {
    var like = document.getElementsByClassName("Vietnam like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("분짜","https://www.10000recipe.com/recipe/6889108");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("분짜");
    }
}

function Australia_like() {
    var like = document.getElementsByClassName("Australia like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("미트파이","https://www.10000recipe.com/recipe/6930286");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("미트파이");
    }
}

function Japan_like() {
    var like = document.getElementsByClassName("Japan like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("스키야키","https://www.10000recipe.com/recipe/6898386");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("스키야키");
    }
}

function USA_like() {
    var like = document.getElementsByClassName("USA like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("시카고피자","https://www.10000recipe.com/recipe/6951233");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("시카고피자");
    }
}

function Mexico_like() {
    var like = document.getElementsByClassName("Mexico like");
    if(like[0].src.match("icon/b_like.png")){
      like[0].src="icon/like.png";
      localStorage.setItem("파히타","https://www.10000recipe.com/recipe/6891531");
    }
    else{
      like[0].src="icon/b_like.png";
      localStorage.removeItem("파히타");
    }
}