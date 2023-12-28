/* *************************************************************************** */
/* 美佳タイプ もぐらたたき編 JAVASCRIPT版ソースコード Ver2.05.01   2023/8/28   */
/*                                          		  Ver2.05.02   2024/1/3    */
/*                                              Copy right 今村二朗            */
/*                                                                             */
/* このソースコードは 改変、転載、他ソフトの使用など自由にお使いください       */
/*                                                                             */
/* 注意事項                                                                    */
/*                                                                             */
/* グラフィック表示は640x400ドットの仮想画面に行い実座標に変換して表示してい   */
/* ます。                                                                      */
/*                                                                             */
/* JAVASCRIPTでは横軸がX座標、縦軸がY座標ですがこのソースコードでは横軸がY座標 */
/* 縦軸がX座標です。                                                           */
/*                                                                             */
/* *************************************************************************** */
MIKA_cookie=0; /* クッキー 読み込み変数 */
MIKA_code='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; /* クッキー書き込み用62進数文字列テーブル */
MIKA_cookie_array0=new Array(100); /* クッキー読み込み配列 */
MIKA_cookie_array1=new Object(); /* クッキー読み込み連想配列 */
MIKA_Procptimer=0; /* 中級 上級 練習ガイドキー文字位置表示用タイマー */
MIKA_type_date=0; /* 最高速度達成日 一時保存エリア */
MIKA_rt_t=0; /* 成績表示用合計累積練習時間  秒 */
	MIKA_r_date1= /* 初級 最高速度達成日付 */
	[
		"        ",
		"        ",
		"        ",
		"        ",
		"        ",
		"        "
	];
	MIKA_r_date2= /* 中級 最高速度達成日付 */
	[
		"        ",
		"        ",
		"        ",
		"        ",
		"        ",
		"        "
	];
	MIKA_r_date3= /* 上級 最高速度達成日付 */
	[
		"        ",
		"        ",
		"        ",
		"        ",
		"        ",
		"        "
	];
	MIKA_r_speed1= /* 初級 最高速度記録 */
	[
		0.0,0.0,0.0,0.0,0.0,0.0
	];
	MIKA_r_speed2= /* 中級 最高速度記録 */
	[
		0.0,0.0,0.0,0.0,0.0,0.0
	];
	MIKA_r_speed3= /* 上級 最高速度記録 */
	[
		0.0,0.0,0.0,0.0,0.0,0.0
	];
	MIKA_r_time1= /* 初級 累積練習時間 秒 */
	[
		0,0,0,0,0,0
	];
	MIKA_r_time2= /* 中級 累積練習時間 秒 */
	[
		0,0,0,0,0,0
	];
	MIKA_r_time3= /* 上級 累積練習時間 秒 */
	[
		0,0,0,0,0,0
	];
MIKA_a_pos1="1234567890"; /* キーボード最上段 数字 文字列 */
MIKA_c_pos1=MIKA_a_pos1; /* キーボード 最上段 刻印文字列 */;
MIKA_c_pos2=MIKA_a_pos2; /* キーボード 上一段 刻印文字列 */
MIKA_c_pos3=MIKA_a_pos3+";"; /* キーボード ホームポジション 刻印文字列 */
MIKA_c_pos4=MIKA_a_pos4+",."; /* キーボード 下一段刻文字列印 */
MIKA_c_post = [ MIKA_c_pos1,MIKA_c_pos2,MIKA_c_pos3,MIKA_c_pos4 ]; /* キーボード刻印文字列テーブル */
MIKA_h_pos1=MIKA_a_pos3; /* ホームポジション 練習文字列 */
MIKA_h_pos2=MIKA_a_pos2; /* 上一段 練習文字列 */
MIKA_h_pos3=MIKA_a_pos3+MIKA_a_pos2; /* ホームポジション＋上一段 練習文字列 */
MIKA_h_pos4=MIKA_a_pos4; /* 下一段 練習文字列 */
MIKA_h_pos5=MIKA_a_pos3+MIKA_a_pos4; /* ホームポジション＋下一段 練習文字列 */
MIKA_h_pos6=MIKA_a_pos3+MIKA_a_pos2+MIKA_a_pos4; /* ホームポジション＋上一段＋下一段 練習文字列 */
MIKA_h_pos = [ MIKA_h_pos1,MIKA_h_pos2,MIKA_h_pos3,MIKA_h_pos4,MIKA_h_pos5,MIKA_h_pos6]; /* ポジション練習 ランダム練習 練習文字列テーブル */
MIKA_p_count=null; /* 練習回数配列 アドレス */
MIKA_p_count_position1=[0,0,0,0,0,0]; /* 初級 練習回数 */
MIKA_p_count_position2=[0,0,0,0,0,0]; /* 中級 練習回数 */
MIKA_p_count_position3=[0,0,0,0,0,0]; /* 上級 練習回数 */
MIKA_char_table=0;/* 練習文字列テーブル アドレス */
MIKA_magenta='RGB(128,32,128)'; /* 濃いめのマゼンタ */
MIKA_green='RGB(0,128,0)'; /* 濃いめのグリーン */
MIKA_blue='RGB(0,0,128)'; /* 濃いめの青 */
MIKA_cyan='RGB(0,128,128)'; /* 濃いめのシアン */
MIKA_orange='RGB(128,32,0)'; /* 濃いめのオレンジ */
MIKA_red='RGB(128,0,0)'; /* 濃いめの赤 */
MIKA_color_position_err='RGB(192,0,0)' /* ポジション練習のエラー文字の赤 */
MIKA_bk_color='RGB(255,255,255)'; /* 背景の色 */
MIKA_finger_color='RGB(255,191,63)'; /* 指の色 */
// MIKA_finger_color='RGB(255,0,0)';
MIKA_nail_color='RGB(255,255,191)'; /* 指の爪の色 */
MIKA_key_black='RGB(0,0,0)'; /* 黒色 */
MIKA_key_gray='RGB(127,127,127)'; /* グレー */
MIKA_key_magenta='RGB(255,0,255)'; /* マゼンタ */
MIKA_key_blue='RGB(0,0,255)'; /* ブルー */
MIKA_key_red='RGB(255,0,0)'; /* 赤色 */
MIKA_type_kind_mes=0; /* 練習項目名 */
MIKA_type_speed_record=0; /* 最高速度記録配列アドレス */
MIKA_type_date_record=0; /* 最高速度達成日配列アドレス */
MIKA_type_time_record=0; /* 累積練習時間配列 アドレス */
MIKA_type_start_time = 0; /* 初級 中級 上級 練習 練習開始時間 ミリ秒 */
MIKA_type_end_time = 0; /* 初級 中級 上級 練習終了時間 ミリ秒 */
MIKA_type_speed_time = 0.0; /* 練習経過時間 秒 */
MIKA_position_limit=60; /* ポジション練習 練習文字数 */
MIKA_type_syuryou_flag=0; /* 練習終了時の記録更新フラグ =0 更新せず =1 前回の入力速度が0.0の時の記録更新 =2 前回の記録が0.0より大きい時の記録更新 */
MIKA_char_position=0; /* 練習文字番号 初級 中級 上級 練習にてランダムに文字を選択する時のポインター */
MIKA_key_char='A'; /* 練習文字 */
MIKA_guide_char='A'; /* ガイドキー文字 */
MIKA_err_char=0; /* エラー文字 */
MIKA_type_count=0; /* 入力文字数カウンター */
MIKA_type_err_count=0; /* エラー入力文字数カウンター */
MIKA_time_start_flag=0; /* 時間計測開始フラグ =0 開始前 =1 測定中 */
MIKA_max_x_flag = 0;/* 画面表示 縦行数モード =0 25行 =1 20行 */
MIKA_max_y_flag = 0;/* 画面表示 横文半角カラム数モード =0 80カラム =1 64カラム */
MIKA_width_x=16; /* 全角文字 半角文字 縦方向ドット数 */
MIKA_width_y=8; /* 半角文字 横方向ドット数 */
MIKA_practice_end_flag=0; /* 練習実行中フラグ =0 練習中 =1 終了中 ESCによる終了も含む */
MIKA_key_guide_flag=0; /* キーガイドメッセージ表示フラグ =0 表示なし =1 次回はキーガイドを表示を消して練習 =2次回はキーガイドを表示を消して練習 */
MIKA_menu_kind_flag=0; /* =1 キーガイド表示あり =3 キーガイド表示無し */
MIKA_key_guide_on=1; /* 定数 キーガイド表示あり */
MIKA_key_guide_half=2; /* 定数 文字刻印あり、キーガイド表示無し */
MIKA_key_guide_off=3; /* 定数 キーガイド表示無し */
MIKA_type_end_flag = 0; /* 練習終了フラグ =0 ESCによる終了 =1 60文字入力による終了 */
MIKA_mes0="(^_^) 美佳のタイプトレーナ もぐらたたき編 Ver2.05.02 (^_^)/~~";
MIKA_mes0a="(^_^) 美佳のタイプトレーナ もぐらたたき 初級 (^_^)/~~";
MIKA_mes0b="(^_^) 美佳のタイプトレーナ もぐらたたき 中級 (^_^)/~~";
MIKA_mes0c="(^_^) 美佳のタイプトレーナ もぐらたたき 上級 (^_^)/~~";
MIKA_mesta="(^_^) もぐらたたき 初級 %s (^_^)/~~";
MIKA_mestb="(^_^) もぐらたたき 中級 %s (^_^)/~~";
MIKA_mestc="(^_^) もぐらたたき 上級 %s (^_^)/~~";
MIKA_mest2a="初級                        入力時間 秒       達成日       累積練習時間";
MIKA_mest2b="中級                        入力時間 秒       達成日       累積練習時間";
MIKA_mest2c="上級                        入力時間 秒       達成日       累積練習時間";
MIKA_mesi1="もう一度練習するときはリターンキーまたは、Enterキーを押してください";
MIKA_mesi2="メニューに戻るときはESCキーを押してください";
MIKA_mesi3="＼(^O^)／ おめでとう，記録を更新しました ＼(^O^)／";
MIKA_abort_mes="ESCキーを押すと中断します";
MIKA_return_mes="ESCキーを押すとメニューに戻ります";
MIKA_key_type_mes="のキーを打ちましょうね．．";
MIKA_mest2="練習項目           タイプ速度　文字／分       達成日       累積練習時間";
MIKA_menu_mes_s=[ /* 初期メニュー メニュー項目 */
		"もぐらたたき　初級",
		"もぐらたたき　中級",
		"もぐらたたき　上級",
		"成績表示",
		"成績消去",
	];
MIKA_menu_cord_s=[ /* 初期 メニュー項目表示位置 x座標 y座標 */
		[3*16,20*8],
		[5*16,20*8],
		[7*16,20*8],
		[9*16,20*8],
		[12*16,20*8],
	];
MIKA_menu_s_sel_flag=[ /* 初期メニュー メニュー項目選択フラグ */
		0,0,0,0,0];
MIKA_menu_s_function=[ /* 初期メニュー 機能番号 */
		11,12,13,19,20];
MIKA_menu_mes=[ /* 初級 中級 上級 メニュー項目 */
		"ホームポジション",
		"上一段",
		"ホームポジション＋上一段",
		"下一段",
		"ホームポジション＋下一段",
		"全段",
		"メニューに戻る"
	];
	MIKA_menu_cord=[ /* 初級 中級 上級 メニュー項目表示位置 x座標 y座標 */
		[3*16,20*8],
		[5*16,20*8],
		[7*16,20*8],
		[9*16,20*8],
		[11*16,20*8],
		[13*16,20*8],
		[15*16,20*8],
	];
	MIKA_position1_menu_function=[ /* 初級 機能番号 */
		101,102,103,104,105,106,9001];
	MIKA_position2_menu_function=[ /* 中級 機能番号 */
		201,202,203,204,205,206,9001];
	MIKA_position3_menu_function=[ /* 上級 機能番号 */
		301,302,303,304,305,306,9001];
	MIKA_position1_sel_flag=[ /* 初級 メニュー項目選択フラグ */
		0,0,0,0,0,0,0];
	MIKA_position2_sel_flag=[ /* 中級 メニュー項目選択フラグ */
		0,0,0,0,0,0,0];
	MIKA_position3_sel_flag=[ /* 上級 メニュー項目選択フラグ */
		0,0,0,0,0,0,0];
MIKA_fngpoint=[ /* 指表示位置 x 座標 y 座標 表示幅 */
[21*16+8,10*8+6,3*8+2], /* 左手小指 */
[20*16+2,15*8,4*8], /* 左手薬指 */
[20*16-3,20*8,4*8], /* 左手中指 */
[20*16+2,25*8,4*8], /* 左手人指し指 */
[22*16,31*8-4,5*8], /* 左手親指 */
[22*16,39*8+4,5*8], /* 右手親指 */
[20*16+2,46*8,4*8], /* 右手人指し指 */
[20*16-3,51*8,4*8], /* 右手中指 */
[20*16+2,56*8,4*8], /* 右手薬指 */
[21*16+8,61*8,3*8+2] /* 右手小指 */
];
MIKA_exec_func_no=1; /* メニューの機能番号 */
MIKA_type_kind_no=0; /* 練習項目番号 */
MIKA_menu_function_table=0; /* メニューの機能番号テーブルアドレス */
MIKA_sel_flag=0; /* 前回選択メニュー項目選択フラグアドレス */
MIKA_cookie_kind=0; /* クッキー種別 ='P1' 初級 ='P2' 中級 ='P3' 上級 */
MIKA_mes_del_flag=0; /* 文字表示消去フラグ =1 色指定を背景色にしたとき =0 色指定を背景色以外にしたとき */
MIKA_win_size_width=960; /* ウィンドーサイズ横 */
MIKA_win_size_height=600; /* ウィンドーサイズ縦 */
addEventListener( "keydown", keydownfunction ); /* キーダウン処理追加 */
window.onload = function() {
 const MIKAMOGU = document.getElementById("MIKAMOGU"); /* MIKAMOGU キャンバス取得 */
    if (MIKAMOGU.getContext) { /* MIKAMOGU キャンバスが存在した場合 */
      const g = MIKAMOGU.getContext("2d");//2次元描画
		MIKA_win_size_width=MIKAMOGU.width; /* 表示ウィンドー横サイズ取得 */
		MIKA_win_size_height=MIKAMOGU.height; /* 表示ウィンド縦サイズ取得 */
		readcookie(); /* クッキー読み込み */
		convkookie(); /* クッキーを練習成績に変換 */
		MIKA_rt_t=seisekiruiseki(); /* 累積練習時間の合計を取得 */
		dispmen(g); /* 初期メニュー表示 */
		}
}
function keydownfunction(event) /* キーダウン処理 */
{
	var nChar;
	const MIKAMOGU = document.getElementById("MIKAMOGU"); /* MIKAMUGU キャンバス取得 */
 	if (MIKAMOGU.getContext) { /* MIKAMOGUのキャンバスが存在した場合 */
    	const g = MIKAMOGU.getContext("2d"); /* 2次元描画 */
		nChar=event.key; /* キーを取得 */
		if(nChar=='Enter') nChar=0x0d; /* Enterキーが押されたときは文字記号を 0x0d に設定 */
		else if(nChar=='Escape') nChar=0x1b; /* Ecsapeキーが押されたときは文字記号を 0x1b に設定 */
		if(nChar==0x0d||nChar==0x1b||nChar.length==1) /* 入力された文字がEnter かEscape か一文字の時に処理を実行 */
		{
			exec_func(g,nChar);	/* 入力文字に対応した処理を実行 */
		}
	}
}
function tconv(time) /* 練習時間秒を文字列に変換 */
	{
		var a;
		a=t0conv(time,0); /* 練習時間秒を "%5d時間%2d分%2d秒"のフォーマットで文字列に変換 */
		return a;
	}
function t0conv(time,flag) /* 練習時間秒をフォーマットを指定して文字列に変換 */
	{
		var a;
		var t1,t2,t3;
		t3=time%60; /* 秒を計算 */
		t3=formatd(t3,2);
		time=Math.floor(time/60);
		t2=time%60; /* 分を計算 */
		t2=formatd(t2,2);
		t1=Math.floor(time/60); /* 時間を計算 */
		t1=formatd(t1,5);
		a=t1+"時間"+t2+"分"+t3+"秒";
		return a;
	}
function cfind(a,line) /* 文字列から指定の文字の位置を検索する */
{
	var ii,jj;
	jj = line.length; /* 文字列長取得 */
	for (ii = 0;ii < 1000 && ii < jj;ii++)
	{
		if (a == line[ii]) /* 文字列から指定の文字と一致する文字が見つかった場合 */
		{
			return(ii + 1);
		}
	}
	return(0); /* 一致する文字が見つからない場合 */
}
function keyposit_x(x,y)/* ポジション練習でキーの位置に対応したキートップの表示x位置を仮想座標で求める */
{
	var x_pos;
	x_pos=4*MIKA_width_x+(x-1)*4*MIKA_width_x; /* キートップ左上 x 座標算出 */
	return x_pos;
}
function keyposit_y(x,y)/* ポジション練習でキーの位置に対応したキートップの表示y位置を仮想座標で求める */
{
	var y_pos;
	y_pos=4*MIKA_width_y+(y-1)*6*MIKA_width_y+(x-1)*2*MIKA_width_y;/* キートップ左上 y 座標算出 */
	return y_pos;
}
function stringlength(a) /* 文字列長を半角文字=1 全角文字 =2 で計算する */
	{
		var i,ii,length;
		length=a.length; /* 文字列長取得 */
		ii=0;
		for(i=0;i<length;i++)
		{
			ii=ii+charlength(a.charAt(i)); /* i番目の文字長を加算 */
		}
		return ii;
	}	
function charlength(a) /* 文字が半角文字か全角文字かの判定を行う リターン値 半角=1 全角 =2 */
	{
		var i;
		var aa;
//		System.out.printf("a=%1c code=%d\n",a,(int)a);
		aa=a.charCodeAt(0);
		if(aa<255) i=1; /* 半角英数の場合 */
		else if(0xff61<=aa&&aa<=0xff9f) i=1; /* 半角カナ文字の場合 */
		else i=2; /* 半角英数 半角カナ文字以外の場合 */
		return i;
	}
function cslclr(g) /* 画面クリア */
{
	g.fillStyle=MIKA_bk_color; /* 表示色に背景色を設定 */
	g.fillRect(0,0,MIKA_win_size_width,MIKA_win_size_height); /* 背景色で画面クリア */
}
function cslcolor(g,color) /* 表示色を設定 */
{
	if(color==MIKA_bk_color) MIKA_mes_del_flag=1; /* 表示色が背景色の時は文字表示消去フラグを=1に設定 */
	else MIKA_mes_del_flag=0; /* 表示色が背景色以外の時は文字表示消去フラグを=0に設定 */
	g.fillStyle=color; /* 塗りつぶし色指定 */
	g.strokeStyle=color; /* 線描画色指定 */
}
function cslputscale(g,x1,y1,mes,scale) /* 仮想座標から実座標に変換して文字列を指定の倍率で表示 */
{
 	var font_size,font_width,font_height;
	var xx1,yy1;
	var xx,yy;
	var ffont_size;
	var measrure;
	var textwidth;
	var text_color;
	var h1,h2;
	font_size=cslfontsize(scale); /* 文字フォントサイズ取得 */
	ffont_size=font_size/1.33; /* フォントサイズ補正 */
	font_height=cslfonthight(1.0); /* 文字表示エリア幅取得 */
	font_width=cslfontwidth(1.0); /* 文字表示エリア高さ取得 */
	xx1=xcord(x1+MIKA_width_x); /* 表示位置x座標を仮想座標から実座標に変換 */
	yy1=ycord(y1); /* 表示位置 y座標を仮想座標から実座標に変換 */
	g.font=font_size.toFixed()+'px monospace'; /* 文字フォント指定 */
	xx=Math.floor(xx1+ (ffont_size-font_height)/2); /* 表示位置の中央の実x座標を計算 */
	yy=Math.floor(yy1+ (font_width - font_size)/2); /* 表示位置の中央の実y座標を計算 */
	if(MIKA_mes_del_flag==1) /* 表示消去の場合は文字表示エリアを背景色で塗りつぶし */
	{
		measure=g.measureText(mes); /* 文字表示エリア取得 */
		textwidth=measure.width; /* 文字表示エリア横幅を取得 */
		h1=measure.actualBoundingBoxAscent; /* 基準線より上のドット数取得 */
		h2=measure.actualBoundingBoxDescent; /*基準線より下のドット数取得 */
		g.fillRect(yy,xx-h1-1,textwidth,h1+h2+2); /* 背景色で文字表示エリアを塗りつぶし */
	}
	else
	{
		g.fillText(mes,yy,xx); /* 文字表示 */
	}
}		
function cslputzscale(g,x,y,a,scale) /* 半角英数を全角文字に変換して指定の倍率で表示 */
{
		var aa;
		if('0'<=a&&a<='9') { /* 数字を半角から全角に変換 */
			aa=String.fromCharCode(a.charCodeAt(0)+0xfee0);
		}
		else if('A'<=a&&a<='Z')
		{ /* 英大文字を半角から全角に変換 */
			aa=String.fromCharCode(a.charCodeAt(0)+0xfee0);
		}
		else if('a'<=a&&a<='z') { /* 英小文字を半角から全角に変換 */
			aa=String.fromCharCode(a.charCodeAt(0)+0xfee0);
		}
		else if(a==',') /* カンマを半角から全角に変換 */
		{
			aa='，';
		}
		else if(a=='.') /* ピリオドを半角から全角に変換 */
		{
			aa='．';
		}
		else if(a==' ') /* スペースを半角から全角に変換 */
		{
			aa='　';
		}
		else if(a==';') /* セミコロンを半角から全角に変換 */
		{
			aa='；';
		}
		else {
			aa=a;
		}
		cslputscale(g,x,y,aa,scale); /* 文字列を指定で倍率で仮想座標で表示 */
}
function cslput(g,x,y,mes)/* 文字列を仮想座標で表示 */
{
	var i,j,length;
	length=mes.length; /* 文字列の長さを取得 */
	j=0;
	for(i=0;i<length;i++) 
	{
		cslputscale(g,x,y+j,mes[i],1.0); /* 指定位置に一文字表示 */
		j=j+8*charlength(mes[i]); /* 表示文字位置更新 半角文字は y座標を 1 加算 全角文字は 2加算 */
	}
}
function cslputu(g,x,y,mes,yy,color1) /* 文字列の下に下線を表示 */
// x 文字列表示左上仮想x座標
// y 文字列表示左上仮想y座標 
// mes アンダーラインを引く文字列
// yy 文字列下端から下線までのドット数間隔の補正値
// color1 表示色 
	{
		var char_length;
		var x1,x2,xx,y1,y2;
		var font_size,ffont_size;
		var font_hight;
		char_length=stringlength(mes); /* 文字列長取得 半角文字は長さ=1 全角文字は長さ=2で計算*/
		font_size=cslfontsize(1.0); /* 等倍のフォントサイズ取得 */
		ffont_size=font_size; /* フォントサイズ補正 */
		font_hight=cslfonthight(1.0); /* 表示エリア高さを取得 */
		x1=xcord(x+MIKA_width_x)+yy+(ffont_size-font_hight)/2+2; /* アンダーラインのx座標設定 */
		x2=xcord(1)-xcord(0); /* アンダーラインの太さを設定 */
		if(x2>0) x2--; /* 太さが一以上の時は太さを一減らす */
		y1=ycord(y); /* アンダーラインの開始y座標設定 */
		y2=ycord(y+char_length*8); /* アンダーラインの終了y座標設定 */
		cslcolor(g,color1); /* アンダーラインの色を設定 */
		if(color1==MIKA_bk_color) g.lineWidth=3; /* 線を消去の時は太さ3で描画 */
		else
		{
			g.lineWidth=2; /* 線を表示の場合は太さ2で描画 */
		}
		g.beginPath(); /* 直線描画開始 */
		for(xx=x1;xx<=x1+x2;xx++) /* 指定の太さのアンダーラインを描画 */
		{
			g.moveTo(y1,xx); /* 描画開始位置にペン移動 */
			g.lineTo(y2,xx); /* 描画終了位置まで直線を描画 */
		}
		g.stroke(); /* 直線描画実行 */
	}
function cslmencenter(g,x,mes) /* 中央にメッセージ文字列を表示 */
// x 文字列表示仮想座標
	{
		var y;
		var k;
		var kk;
		if(MIKA_max_y_flag==0) kk=80; /* 横幅半角80文字モード */
		else kk=64; /* 横幅半角64文字モード */
		k=stringlength(mes); /* 文字列長取得  半角文字は長さ=1 全角文字は長さ=2で計算*/
		y=((kk-k)*MIKA_width_y)/2; /* 表示開始位置計算 */
		cslput(g,x,y,mes); /* 文字列表示 */
}
function cslrectb(g,x1,y1,x2,y2,color1,color2,b) /* ポジション練習のキーを一個表示 */
{
	cslrectt(g,x1,y1,x2,y2,color1); /* キーの外枠を表示 */
	cslrecttt(g,x1,y1,x2,y2,color2,b); /* キーの内側を塗りつぶし */
}
function cslrectt(g,x1,y1,x2,y2,color1) /* 四角を表示 */
{
	cslrecttt(g,x1,y1,x2,y2,color1,0); /* 境界なしで四角を表示 */
}
function cslrecttt(g,x1,y1,x2,y2,color,b) /* 四角の内側を境界幅bで塗りつぶす */
{
	var xx1,xx2,yy1,yy2;
	var bx,by,bb;
	if(b!=0) /* 境界幅が0で無い場合 */
	{
		bx=xcord(b)-xcord(0); /* 縦方向の境界幅を仮想座標から実座標に変換 */
		by=ycord(b)-ycord(0); /* 横方向の境界幅を仮想座標から実座標に変換 */
		bb=Math.min(bx,by); /* 縦方向の境界幅と横方向の境界幅の小さい方の値を設定 */
		if(bb<=0) bb=1; /* 境界幅がゼロ以下の場合は境界幅を位置に設定 */
	}
	else bb=0;
	xx1=xcord(x1)+bb;	/* 左上 x 座標を 仮想座標から実座標に変換 */
	xx2=xcord(x2)-bb;	/* 右下 x 座標を 仮想座標から実座標に変換 */
	yy1=ycord(y1)+bb;	/* 左上 y 座標を 仮想座標から実座標に変換 */
	yy2=ycord(y2)-bb;	 /* 右下 y 座標を 仮想座標から実座標に変換 */
	g.fillStyle=color;  /* 表示色を設定 */
	if(xx1<=xx2&&yy1<=yy2)	g.fillRect(yy1,xx1,yy2-yy1,xx2-xx1);	/*四角を描画 */
}
function cslellipse(g,x1,y1,x2,y2,color) /* 指の丸みを楕円で表示 */
{
	var xx1,xx2,yy1,yy2,x,y,rx,ry;
	g.fillStyle=color; /* 塗りつぶし色指定 */
	xx1=xcord(x1); /* 左上 x 座標を 仮想座標から実座標に変換 */
	xx2=xcord(x2); /* 右下 x 座標を 仮想座標から実座標に変換 */
	yy1=ycord(y1); /* 左上 y 座標を 仮想座標から実座標に変換 */
	yy2=ycord(y2); /* 右下 y 座標を 仮想座標から実座標に変換 */
	x=(xx1+xx2)/2; /* 楕円の中心x座標を算出 */
	y=(yy1+yy2)/2; /* 楕円の中心のy座標を算出 */
	rx=x-xx1-1; /* 楕円のx方向の半径算出 */
	ry=y-yy1-1; /* 楕円のy方向の半径算出 */
	g.beginPath(); /* 描画開始 */
	g.ellipse(y,x,ry,rx,0,0,Math.PI*2); /* 楕円描画 */
	g.fill(); /* 楕円内を塗りつぶし */
	}	
function cslkeyback(g,x_pos,y_pos,color) /* ポジション練習にてエラー文字とキーガイド文字の背景を塗りつぶす */
{
	var dx,dy;
	dx=10;
	dy=7;
	cslrectt(g,x_pos+MIKA_width_x-dx,y_pos+MIKA_width_y-dy,x_pos+2*MIKA_width_x+dx,y_pos+3*MIKA_width_y+dy,color);
}
function cslfonthight(scale) /* 指定倍率で全角文字の表示エリア高さを取得 */
{
	var font_hight;
	var font_size;
	font_size=MIKA_width_x*scale; /* 表示エリア高さを仮想座標で計算 */
	font_hight=xcord(font_size)-xcord(0);  /* 表示エリア高さを実座標に変換 */
	return font_hight;
}
function cslfontwidth(scale) /* 指定倍率で全角文字の表示エリア幅を取得 */
{
	var font_width;
	var font_size;
	font_size=(MIKA_width_y*2*scale); /* 表示エリア幅を仮想座標で計算 */
	font_width=ycord(font_size)-ycord(0); /* 表示エリア幅を実座標に変換 */
	return font_width;
}
function cslfontsize(scale) /* 指定倍率でフォントサイズを取得 */
	{
		var font_hight;
		var font_width;
		var font_size;
		font_hight=cslfonthight(scale); /* 指定倍率で表示エリア高さを取得 */
		font_width=cslfontwidth(scale); /* 指定倍率で表示エリア幅を取得 */
		font_size=Math.min(font_hight,font_width); /* 表示エリア高さと表示エリア幅の小さい方の値をフォントサイズに指定 */
		return font_size;
	}
function xcord(x1) /* 仮想x座標を 実x座標に変換 */
{
	var max_x_cord1;
	var x,xx;
	if(MIKA_max_x_flag==0) /* 縦25行モードの設定 */
	{
		max_x_cord1=25*16;
	}
	else /* 縦20行モードの設定 */
	{
		max_x_cord1=20*16;
	}
	x=MIKA_win_size_height;
	xx=Math.floor((x*x1)/max_x_cord1); /* 仮想座標を実座標に変換 */
	return(xx);
}
function ycord(y1) /* 仮想y座標を 実y座標に変換 */
{
    var max_y_cord1;
    var y, yy;
 	if(MIKA_max_y_flag==0) /* 一行横 80カラムモードの設定 */
	{
		max_y_cord1=80*8;
	}
	else /* 一行横 64カラムモードの設定 */
	{
		max_y_cord1=64*8;
	}
    y = MIKA_win_size_width;
    yy = Math.floor((y * y1) / max_y_cord1); /* 仮想座標を実座標に変換 */
    return(yy);
}
function homeposi(x,y) /* キーの位置がホームポジションかの判定 */
	{ 
		if(x==3&&((1<=y&&y<=4)||(7<=y&&y<=10))) return(1); /* ホームポジションの場合は 1 でリターン */
		else return(0); /* ホームポジション以外は 0でリターン */
	}
function poofinger(g,x_finger,y_finger,width_finger,color) /* 指の爪を表示 */
	{
		var x1,x2,y1,y2;
		x1=x_finger+4; /* 爪のイラストの左上の x座標取得 */
		y1=y_finger+4; /* 爪のイラストの左上の y座標取得 */
		x2=x_finger+24; /* 爪のイラストの左下の x座標取得 */
		y2=y_finger+width_finger-4; /* 爪のイラストの右上の y座標取得 */
		cslellipse(g,x1-7,y1,x1+7,y2,color); /* 爪の丸みを楕円で表示 */
		cslrectt(g,x1,y1,x2,y2,color); /* 爪の本体の四角を表示 */
	}
function pofinger(g,x_pos,y_pos,yubi_haba,flag)	/* 指を一本表示 */
//	flag=0 指のイラストを描画 
//	flag=1 指のイラストを消去
{
	var x1,x2,y1,y2;
	var color
	x1=x_pos; /* 指の左上のx座標取得 */
	x2=400;  /* 指の下端のx座標取得 */
	y1=y_pos;/* 指の左上の y座標取得 */
	y2=y_pos+yubi_haba; /* 指の右上の y座標取得 */
	if (flag==0)
	{
		 color=MIKA_finger_color; /* 指のイラストを表示する色指定 */
	}
	else
	{
		 color=MIKA_bk_color; /* 指のイラストを消去する色指定 */
		x1=x1-1; /* 消去の場合は一ドット上に描画 */
	}
	cslellipse(g,x1-8,y1,x1+8,y2,color); /* 指の丸みを楕円で表示 */
	cslrectt(g,x1,y1,x2,y2,color); /* 指の本体を四角で表示 */
	if (flag==0) /* 指のイラストを表示する時には爪のイラストも表示 */
	{
		poofinger(g,x_pos,y_pos,yubi_haba,MIKA_nail_color); /* 爪のイラスト表示 */
	}
}
function pfinger(g,flag) /* 指のイラスト 10本表示  flag=0 表示 flag=1 消去 */
//	flag=0 指のイラストを描画 
//	flag=1 指のイラストを消去
{
	var i;
	for(i=0;i<10;i++) /* 指を10本描く */
	{
		pofinger(g,MIKA_fngpoint[i][0],MIKA_fngpoint[i][1],MIKA_fngpoint[i][2],flag); /* 指を一本づつ表示 */
	}
}
function fngposit(finger)
{
		if(finger==5) finger=4; /* 指を左手人指し指に指定 */
		if(finger==6) finger=7; /* 指を右手人指し指に指定 */
		if(finger==11) finger=10; /* 指を右手小指に指定 */
		if(finger==12) finger=10; /* 指を右手小指に指定 */
		if(finger==13) finger=10; /* 指を右手小指に指定 */
		return finger;
}
function difposit(g,a,flag) /* 文字に対応したキーを打つ指の爪を表示 */
// flag=0 爪を黒で表示
// flag=1 爪を元の色に戻して表示
	{
		var pos1;
		var x,y;
		var	yy;
		var x_finger,y_finger,yubi_haba;
		var color1;
		var color2;
		if(a===0) return;
		pos1=keycord(a); /* 文字に対応したキーの位置を取得 */
		x=pos1[0]; /* キーの行位置番号を取得 */
		y=pos1[1]; /* キーの列位置番号を取得 */
		if(x==0||y==0) return; /* 対応するキーが無い場合は無処理でリターン */
		yy=fngposit(y); /* キー位置に対応した指番号取得 */
		x_finger=MIKA_fngpoint[yy-1][0]; /* 指番号に対応した指の左上 x座標取得 */ 
		y_finger=MIKA_fngpoint[yy-1][1]; /* 指番号に対応した指の左上 y座標取得 */
		yubi_haba=MIKA_fngpoint[yy-1][2]; /* 指番号に対応した指の指幅取得 */
//		System.out.printf("finger x=%d y=%d x_finger=%d y_finger=%d yubi_haba=%d\n",x,y,x_finger,y_finger,yubi_haba);
		if(flag==0) /* フラグが=0の時は指の爪を黒で表示 */
		{
			color1=MIKA_key_black;
		}
		else /* フラグが=1の時は指の爪を元の色に戻して表示 */
		{
			color1=MIKA_nail_color;
			poofinger(g,x_finger-1,y_finger,yubi_haba,MIKA_finger_color); /* x座標を-1して指の爪を指色で表示 */			
		}
		poofinger(g,x_finger,y_finger,yubi_haba,color1); /* 指の爪を表示 */
	}
function dispguidechar(g,key_char,flag) /* ポジション練習で練習文字を表示 */
// flag=0 練習文字を黒色で表示
// flag=1 練習文字を消去
{
		var	color;
		var x,y;
		var scale=2.4;
		if(key_char!==0) /* 練習文字がゼロでない場合 */
		{
				x=2*MIKA_width_x-2; /* 表示位置 x座標算出 */
				y=34*MIKA_width_y-1; /* 表示位置 y座標算出 */
				if(flag==0)
				{
					color=MIKA_key_blue; /* フラグが=0の時は青色で表示 */
				}
				else
				{
					color=MIKA_bk_color; /* フラグが=1の時は表示を消去 */
				}
				cslcolor(g,color); /* 表示色を設定 */
				cslputzscale(g,x,y,key_char,scale); /* 指定位置に 2.4倍の大きさで練習文字を表示 */
		}
}
function dipline(g,x,line,flag) /* キーボード一列表示*/
// x 表示行位置番号 
// line キートップ文字列 
// flag=0 キートップとキーの刻印文字を表示 
// flag=1 キートップのみ表示してキーの刻印は表示しない
// flag=2 キーの刻印のみを表示
// flag=3 キーの刻印を消去
{
		var x_pos,y_pos;
		var i,ii;
		var x1,y1,x2,y2,x3,y3;
		var color1,color2,color3;
		var a;
		ii=line.length; /* キートップ文字列長取得 */
		for(i=0;i<ii;i++)
		{	
			x_pos=keyposit_x(x+1,i+1); /* キーの表示位置の仮想x座標を取得 */
			y_pos=keyposit_y(x+1,i+1); /* キーの表示位置の仮想y座標を取得 */
			x1=x_pos; /* 表示開始 x 座標取得 */
			y1=y_pos-4; /* 表示開始 y座標取得 */
			x2=x_pos+3*MIKA_width_x; /* 表示終了 x 座標取得 */
			y2=y_pos+4*MIKA_width_y+4; /* 表示終了 y 座標取得 */
			x3=x_pos+MIKA_width_x; /* 表示 文字位置 x 座標取得 */
			y3=y_pos+MIKA_width_y; /* 表示 文字位置 y 座標取得 */
			if(homeposi(x+1,i+1)==1) /* ホームポジションはマゼンタで表示 */
			{
				color1=MIKA_key_black; /* ホームポジションはマゼンタで表示 */
				color2=MIKA_key_magenta; /* キー外枠は黒色 */
				color3=MIKA_key_black; /* 文字は黒色 */
			}
			else
			{
				color1=MIKA_key_black; /* キー外枠は黒色 */
				color2=MIKA_key_gray; /* キー内側はグレー */
				color3=MIKA_key_black; /* 文字は黒色 */
			}
			if(flag==0||flag==1) /* キーの背景を表示 */
			{
				cslrectb(g,x1,y1,x2,y2,color1,color2,1); /* 外枠付きでキーを表示 */
			}
			if(flag==0||flag==2) /* キーの刻印文字を表示 */
			{
				cslcolor(g,color3); /* キー刻印の表示色を指定 */
				cslputzscale(g,x3,y3,line.charAt(i),1.8); /* キーの刻印を 1.8倍で表示 */
			}
			else if(flag==3) cslkeyback(g,x_pos,y_pos,color2); /* キーの刻印を消去 */
		}
}
function dikposit(g,a,flag) /* ポジション練習でエラー文字とガイドキー文字の表示及び復帰を行う */
//	a ガイドキーの文字
//	flag=0 ガイドキー文字を黒い背景で表示
//	flag=1 ガイドキー文字の表示をキーの刻印ありで復帰
//	flag=2 ガイドキー文字の表示をキーの刻印なしで復帰
//	flag=3 エラーキー文字の表示は赤い背景で表示
{
	var pos1,x,y,x_posit,y_posit;
	var BkColor,TextColor;
	if(a===0) return;
	pos1=keycord(a); /* 文字からキーの位置を算出 */
	x=pos1[0]; /* キー位置の行番号を取得 */
	y=pos1[1]; /* キー位置の列番号を取得 */
	if(x==0||y==0) return;
	x_posit=keyposit_x(x,y); /* キー位置に対応した仮想x座標を取得 */
	y_posit=keyposit_y(x,y); /* キー位置に対応した仮想y座標を取得 */
//	if(x_posit==0||y_posit==0) return;
	if(flag==0) /* ガイドキー文字表示の場合 */
	{
		if (homeposi(x,y)==1) /* ガイドキー文字がホームポジョションの場合 */
		{
			BkColor=MIKA_key_black; /* 背景は黒で表示 */
			TextColor=MIKA_key_magenta; /* 文字はマゼンタで表示 */
		}
		else /* ホームポジションではない場合 */
		{
			BkColor=MIKA_key_black; /* 背景は黒で表示 */
			TextColor=MIKA_key_gray; /* 文字はグレーで表示 */
		}
	}
	else if(flag==1||flag==2) /* 表示復帰の場合 */
	{
		if (homeposi(x,y)==1) /* ガイドキー文字がホームポジションの場合 */
		{
			BkColor=MIKA_key_magenta; /* 背景はマゼンタで表示 */
			TextColor=MIKA_key_black; /* 文字は黒で表示 */
		}
		else
		{
			BkColor=MIKA_key_gray; /* 背景はグレーで表示 */
			TextColor=MIKA_key_black; /* 文字は黒で表示 */
		}
	}
	else /* flag==3 エラーキー表示の場合 */
	{
		BkColor=MIKA_color_position_err; /* 背景は赤で表示 */
		TextColor=MIKA_key_black; /* 文字は黒で表示 */
	}
	cslkeyback(g,x_posit,y_posit,BkColor); /* 背景を表示 */
	cslcolor(g,TextColor); /* 表示色を文字色に設定 */
	if(flag==0||flag==1||flag==3)
	{
		cslputzscale(g,x_posit+MIKA_width_x,y_posit+MIKA_width_y,a,1.8); /* 文字を1.8倍の倍率で表示 */
	}
}
function diposit(g,flag)
// flag=0 キートップとキーの刻印文字を表示 
// flag=1 キートップのみ表示してキーの刻印は表示しない
// flag=2 キーの刻印のみを表示
// flag=3 キーの刻印を消去 
{
		dipline(g,0,MIKA_c_pos1,flag); /* 最上段 キーボード表示 */
		dipline(g,1,MIKA_c_pos2,flag); /* 上一段 キーボード表示 */
		dipline(g,2,MIKA_c_pos3,flag); /* ホームポジション キーボード表示 */
		dipline(g,3,MIKA_c_pos4,flag); /* 下一段 キーボード表示 */
}
function disperrorcount(g,flag,i,j) /* エラー入力回数表示 */
// flag=0 表示 flag=1 数値のみ消去 flag=2 メッセージと共に数値を消去
// i 表示位置縦行番号
// j 表示位置横列番号
	{
//		type_mes=String.format("ミスタッチ%3d回",MIKA_type_err_count); /* エラーカウントメッセージ作成 */
		var type_mes;
		type_mes='ミスタッチ'+formatd(MIKA_type_err_count,3)+'回'; /* エラーカウントメッセージ作成 */
		if(flag==0)
		{
 			cslcolor(g,MIKA_red); /* フラグが=0の時は表示色を赤色に設定 */
		}
		else if(flag==1)
		{
			cslcolor(g,MIKA_bk_color); /* フラグが=1の時は数値のみ表示を消去 */
		}
		else
		{
			cslcolor(g,MIKA_bk_color); /* フラグが=2の時はメッセージを含めて表示を消去 */
		}
		//		System.out.printf("i=%d j=%d",i,j);
		cslput(g,i*16,j*8,type_mes); /* 指定位置にエラーカウント表示 */
	}
function disperror(g,flag) /* ポジション練習エラー回数表示 */
// flag=0 表示 flag=1 数値のみ消去  flag=2 メッセージと共に数値を消去
	{
		disperrorcount(g,flag,3,64); /* 表示位置を指定してエラー回数表示 */
	}
function dispseikai(g,flag) /* 正解数表示 */
// flag=0 表示 flag=1 数値のみ消去 flag=2 メッセージと共に数値を消去
{
		var type_mes;
		if(MIKA_type_count==0) return;
		type_mes='正解'+formatd(MIKA_type_count,3)+'回'; /* 正解数メッセージ作成 */
		if(flag==0)
		{
			cslcolor(g,MIKA_cyan); /* フラグが=0の時は表示色をシアンに設定 */
		}
		else if(flag==1)
		{
			cslcolor(g,MIKA_bk_color); /* フラグが=1の時は数値のみ表示を消去 */
		}
		else
		{
			cslcolor(g,MIKA_bk_color);  /* フラグが=2の時はメッセージを含めて表示を消去 */
		}
		cslput(g,2*16,64*8,type_mes); /* 正解数メッセージ表示 */
}
function disptitle(g,mes,submes) /* 練習項目を画面上部に表示 */
// mes 練習種別メッセージ
// submes 練習項目メッセージ
	{
		var mes0;
		var a='%s';
		mes0=mes.replace(a,submes); /* 記号'%s'をsubmesで置換 */
		cslcolor(g,MIKA_magenta); /* 表示色をマゼンタに設定 */
		cslmencenter(g,1,mes0); /* 画面上部中央にメッセージを表示 */
//		System.out.printf(mes0);
	}
function dispkaisumes(g,flag,i,j) /* 練習回数表示 */
// flag=0 表示 flag=1 消去 
// i 表示位置縦行番号
// j 表示位置横列番号
	{
		var type_mes;
		var count;
		if(MIKA_p_count==null) return; /* 練習回数配列アドレスが空の時はリターン */
		count=MIKA_p_count[MIKA_type_kind_no]; /* 練習項目に対応する練習回数取り出し */
//		System.out.printf("count=%d  MIKA_type_kind_no=%d\n",count,MIKA_type_kind_no);
		if(count==0) return; /* 練習回数がゼロの時はリターン */
		if(flag==0) cslcolor(g,MIKA_green); /* フラグが=0の時は表示色を緑色に設定 */
		else cslcolor(g,MIKA_bk_color); /* フラグが=1の時は表示を消去 */
		type_mes="練習回数"+formatd(count,4)+"回"; /* 練習回数メッセージ作成 */
		cslput(g,i*16,j*8,type_mes); /* 練習回数メッセージ表示 */
	}
function dispkaisu(g,flag) /* ポジション練習 練習回数表示 */
// flag=0 表示 flag=1 消去 
	{
		dispkaisumes(g,flag,1,64);
	}
function dispabortmessage(g,flag,i,j) /* 「ESCキーを押すと中断します」のメッセージを表示 */
// flag=0 表示 flag=1 消去 
// i 表示位置縦行番号
// j 表示位置横列番号
	{
		var ii,jj;
		if(flag==0) cslcolor(g,MIKA_cyan);  /* フラグが=0の時は表示色をシアンに設定 */
		else cslcolor(g,MIKA_bk_color); /* フラグが=1の時は表示を消去 */
		ii=i*16;
		jj=j*8;
		if(jj<=0) jj=1;
		cslput(g,ii,jj,MIKA_abort_mes);	/* 「ESCキーを押すと中断します」のメッセージを表示 */
	}
function dispabortmes(g,flag) /* ランダム練習 英単語練習で 「ESCキーを押すと中断します」のメッセージを表示 */
// flag=0 表示 flag=1 消去 
	{
		dispabortmessage(g,flag,2,0);
	}
function dispsecond(g,flag) /* ポジション練習で練習時間秒を表示 */
// flag=0 表示 flag=1 消去 
	{
		var	type_mes;
		if(flag==0) cslcolor(g,MIKA_blue);  /* フラグが=0の時は表示色を青に設定 */
		else cslcolor(g,MIKA_bk_color); /* フラグが=1の時は表示を消去 */
		type_mes="今回は  "+formatd(MIKA_type_speed_time,4)+"秒かかりました"; /* 表示メッセージ作成 */
		cslput(g,2*16,1,type_mes); /* 練習時間秒のメッセージを表示 */
	}
function dispmaxspeed(g,flag) /* 初級 中級 上級 の最高入力速度と 達成日を表示 */
	{
			var a,b;
			if(flag==0) cslcolor(g,MIKA_green); /* 表示色を緑に設定 */
			else cslcolor(g,MIKA_bk_color); /* フラグが=1の時は表示を消去 */
			a="最高記録"+formatd(MIKA_type_speed_record[MIKA_type_kind_no],4)+"秒";/* 最高速度メッセージ作成 */
			cslput(g,1*16,1,a); /* 最高速度メッセージ表示 */
			b="達成日"+MIKA_type_date_record[MIKA_type_kind_no]; /* 達成日メッセージ作成 */
			cslput(g,1*16,15*8,b); /* 達成日メッセージ表示 */
	}
function dispptrain(g,mestb) /* 初級 中級 上級 練習実行画面を表示 */
{
		cslclr(g); /* 画面クリア */
		disptitle(g,mestb,MIKA_type_kind_mes); /* 練習項目を表示 */
		if (MIKA_p_count[MIKA_type_kind_no]!=0) /* 練習回数がゼロでない場合 */
		{
			dispkaisu(g,0); /* 練習回数を表示 */
		}
		if(MIKA_type_speed_record[MIKA_type_kind_no]!=0.0) /* 最高入力速度がゼロでない場合 */
		{
			dispmaxspeed(g,0); /* 最高入力速度を表示 */
		}
		if(MIKA_practice_end_flag==0) /* 練習実行中の場合 */
		{
			dispabortmes(g,0); /* エスケープキーを押すと中断しますのメッセージを表示 */
		}
		cslcolor(g,MIKA_cyan); /* 表示色をシアンに設定 */
		cslput(g,2*16,38*8,MIKA_key_type_mes); /* のキーを打ちましょうねのメッセージを表示 */
		dispguidechar(g,MIKA_key_char,0);	/* 練習文字を表示 */
		if(MIKA_menu_kind_flag!=MIKA_key_guide_off)	diposit(g,0); /* キーガイドが表示ありの場合はキーとキーの文字の刻印を表示 */
		else diposit(g,1); /* キーガイドが表示無しの場合はキーの表示だけでキーの文字の刻印を表示しない */
		dikposit(g,MIKA_guide_char,0); /* キーボードのガイドキーを表示 */
		pfinger(g,0); /* 指のイラストを表示 */
		difposit(g,MIKA_guide_char,0); /* ガイドキーの使用する指の指示を表示 */
}
function ppseiseki(g,i,j,menu_mes,r_speed,r_date,r_time) /* 成績表示 初級 中級 上級 */
/* i 表示位置 j 表示個数 menu_mes 練習項目 r_speed 最高速度 r_date 達成日 r_time 累積練習時間 */
	{
		var ii;
		var a,b;
		for(ii=0;ii<j;ii++)
		{
			cslput(g,(i+ii)*16,1,menu_mes[ii]); /* 練習項目を表示 */
			if(r_speed[ii]!=0.0) /*最高入力速度が 0.0 でない場合 */
			{
				a=formatd(r_speed[ii],6); /* 最高入力速度を文字列に変換 */
				cslput(g,(i+ii)*16,33*8,a); /* 最高入力速度を表示 */
				cslput(g,(i+ii)*16,44*8,r_date[ii]); /* 達成日を表示 */
			}
			b=tconv(r_time[ii]); /* 累積練習時間を文字列に変換 */
			cslput(g,(i+ii)*16,54*8,b); /* 累積練習時間を表示 */
		}
}
function dispseiseki(g) /* 成績表示 */
	{
		var i;
		var time_i;
		var a,aa,b;
		cslclr(g); /* 画面クリア */
		a=tconv(MIKA_rt_t); /* 前回までの合計練習時間を文字列に変換 */
		aa="前回までの練習時間　"+a; /* 前回までの合計練習時間のメッセージ作成 */
		cslcolor(g,MIKA_green); /* 表示色を緑色に設定 */
		cslput(g,1,1,aa); /* 前回までの合計練習時間を表示 */
		cslcolor(g,MIKA_blue); /* 表示色を青色に設定 */
		cslput(g,1,43*8,MIKA_return_mes); /* エスケープキーを押すとメニューに戻りますのメッセージを表示 */
		time_i=seisekiruiseki()-MIKA_rt_t; /* 今回の練習時間を秒で算出 */
		a=tconv(time_i); /* 今回練習時間を文字列に変換 */
		aa="今回の練習時間　　　"+a; /* 今回練習時間のメッセージを作成 */
		cslcolor(g,MIKA_green); /* 表示色を緑色に設定 */
		cslput(g,16,1,aa); /* 今回練習時間を表示 */
		cslcolor(g,MIKA_blue); /* 表示色を青色に設定 */
		cslput(g,3*16,1,MIKA_mest2a); /* 初級成績メッセージ表示 */
		cslcolor(g,MIKA_orange); /* 表示色をオレンジに設定 */
		ppseiseki(g,4,6,MIKA_menu_mes,MIKA_r_speed1,MIKA_r_date1,MIKA_r_time1); /* 初級の成績を表示 */
		cslcolor(g,MIKA_blue); /* 表示色を青色に設定 */
		cslput(g,10*16,1,MIKA_mest2b); /* 中級成績メッセージ表示 */
		cslcolor(g,MIKA_orange); /* 表示色をオレンジに設定 */
		ppseiseki(g,11,6,MIKA_menu_mes,MIKA_r_speed2,MIKA_r_date2,MIKA_r_time2); /* 中級の成績を表示 */
		cslcolor(g,MIKA_blue); /* 表示色を青色に設定 */
		cslput(g,17*16,1,MIKA_mest2c); /* 上級成績メッセージ表示 */
		cslcolor(g,MIKA_orange); /* 表示色をオレンジに設定 */
		ppseiseki(g,18,6,MIKA_menu_mes,MIKA_r_speed3,MIKA_r_date3,MIKA_r_time3); /* 上級の成績を表示 */
	}
function dispmen(g) /* メニュー及び練習画面表示 */
{
	if (MIKA_exec_func_no==1) menexe(g,MIKA_menu_mes_s,MIKA_menu_cord_s,MIKA_menu_s_function,MIKA_menu_s_sel_flag,MIKA_mes0); /* 初期メニュー表示 */
	else if (MIKA_exec_func_no==11) menexe(g,MIKA_menu_mes,MIKA_menu_cord,MIKA_position1_menu_function,MIKA_position1_sel_flag,MIKA_mes0a); /* 初級メニュー表示 */
	else if (MIKA_exec_func_no==12) menexe(g,MIKA_menu_mes,MIKA_menu_cord,MIKA_position2_menu_function,MIKA_position2_sel_flag,MIKA_mes0b); /* 中級メニュー表示 */
	else if (MIKA_exec_func_no==13) menexe(g,MIKA_menu_mes,MIKA_menu_cord,MIKA_position3_menu_function,MIKA_position3_sel_flag,MIKA_mes0c); /* 上級メニュー表示 */
	else if (MIKA_exec_func_no==19) dispseiseki(g); /* 成績表示 */
	else if(MIKA_exec_func_no>100&&MIKA_exec_func_no<200) dispptrain(g,MIKA_mesta); /* 初級の各項目の実行画面表示 */
	else if(MIKA_exec_func_no>200&&MIKA_exec_func_no<300) dispptrain(g,MIKA_mestb); /* 中級の各項目の実行画面表示 */
	else if(MIKA_exec_func_no>300&&MIKA_exec_func_no<400) dispptrain(g,MIKA_mestc); /* 上級の各項目の実行画面表示 */
}
function menexe(g,menu_mes,menu_cord,menu_function,sel_flag,menut)
	{
		var i,j;
		var x;
		var y;
		mesi5="番号キーを押して下さい";
		MIKA_max_x_flag=0; /* 縦 25行モードに設定 */
		MIKA_max_y_flag=0; /* 横 80カラムモードに設定 */
		cslclr(g); /* 画面クリア */
		cslcolor(g,MIKA_magenta); /* 表示色をマゼンタに設定 */
		cslmencenter(g,1,menut); /* メニュータイトルを上端の中央に表示 */
		MIKA_max_x_flag=1; /* 縦 20行モードに設定 */
		MIKA_max_y_flag=1; /* 横 64カラムモードに設定 */
		cslcolor(g,MIKA_cyan);
		cslput(g,18*16,29*8,mesi5); /* 番号キーを押して下さいのメッセージを表示 */
		j=menu_mes.length;
		for(i=0;i<j;i++)
		{
			x=menu_cord[i][0]; /* メニュー表示位置 x座標取得 */
			y=menu_cord[i][1]; /* メニュー表示位置 y座標取得 */
			if(sel_flag[i]==1)	cslcolor(g,MIKA_green); /*前回選択メニュー項目は緑色で表示 */
			else 	cslcolor(g,MIKA_blue); /* その他のメニューは青色で表示 */
			cslput(g,x,y,menu_mes[i]); /* メニュー項目表示 */
			if(sel_flag[i]==1) cslputu(g,x,y,menu_mes[i],1,MIKA_green); /* 前回選択メニュー項目に下線を表示 */
			cslputzscale(g,x,y-4*MIKA_width_y,String.fromCharCode('1'.charCodeAt()+i),1.0); /* メニュー番号を表示 */
		}
		MIKA_menu_function_table=menu_function; /* 機能番号テーブル設定 */
		MIKA_sel_flag=sel_flag; /* 前回選択メニュー項目選択フラグアドレス設定 */
		MIKA_max_x_flag=0; /* 縦 25行モードに戻す */
		MIKA_max_y_flag=0; /* 横 80カラムモードに戻す */
}
function mencom(menu_function_table,sel_flag,nChar) /* 選択されたメニューの項目に対応する機能番号を取得 */
	{
		var func_no=0;
		var i,ii,iii;
		var sel_flag1=0;
		if(menu_function_table==0) return(0);
		ii=menu_function_table.length;
		if(nChar==0x1b){ /* 入力文字がエスケープの場合 */
			for(i=0;i<ii;i++) /* メニューに戻りますのメニュー項目をサーチ */
			{
				if(menu_function_table[i]>9000&&menu_function_table[i]<9999) /* メニューに戻りますのメニュー項目があった場合 */  
				{
					func_no=menu_function_table[i];
				}
			}
			return(func_no);
		}
		else if(nChar<='0'||nChar>'9') return(0); /* 入力文字が1～9の数字以外は処理をしないでリターン */
		else
		{
			iii=nChar.charCodeAt()-0x31; /* 文字を数字に変換 */
			if(iii<ii) /* 入力された数字に対応するメニューがある場合 */
			{
				func_no=menu_function_table[iii]; /* 対応する機能番号を取り出す */
				for(i=0;i<ii;i++)
				{
						if(sel_flag[i]!=0) sel_flag1=i+1; /* 前回選択メニュー項目番号をサーチ */
				}
				if(0<func_no&&func_no<9000) /* 今回選択メニューがメニューに戻るで無い場合 */
				{
					if(sel_flag1!=0) sel_flag[sel_flag1-1]=0; /*前回選択メニュー番号をクリア */
					sel_flag[iii]=1; /* 今回の選択メニュー番号を前回選択メニュー番号に設定 */
				}
				return(func_no);
			}
			else
			return(0);
		}	
	}	
function exec_func(g,nChar) /* 一文字入力に対応した処理を行う */
	{
		var func_no;
		func_no=mencom(MIKA_menu_function_table,MIKA_sel_flag,nChar); /* 選択されたメニューの項目に対応する機能番号を取得 */
		if(func_no!=0) /* メニュー表示中に数字キーが押されて対応する機能番号がゼロでない場合 */
		{
			MIKA_menu_function_table=0;
			MIKA_exec_func_no=func_no;
//			if(MIKA_exec_func_no==9999) procexit(); /* 機能番号が 9999の時は終了 */
			if(MIKA_exec_func_no==20)
			{
					if(window.confirm("成績を消去してもいいいですか")) /* 成績を消去してもいいですかのダイアログを表示 */
					{
						seisekiclear(); /* 成績をクリア */
					}
					MIKA_exec_func_no=1; /* 初期メニューのメニュー番号設定 */
			}
			else
			{
				if (MIKA_exec_func_no>9000) MIKA_exec_func_no=MIKA_exec_func_no-9000; /* 機能番号がメニューに戻るの時は、メニュー番号を取得 */
			
				else
				if(MIKA_exec_func_no>100&&MIKA_exec_func_no<400) /* 機能番号が練習メニューの実行の場合は各練習の項目ごとに前処理を行う */
				{
					preptrain(g,MIKA_exec_func_no); /* 初級 中級 上級 練習の各項目ごとの前処理 */
				}
			}
			dispmen(g); /* メニュー、練習画面表示 */
			return(1);
		}
		else
		{
			if(nChar==0x1b&&MIKA_exec_func_no==19) /* 成績表示中にエスケープキーが押された場合 */
			{
				MIKA_exec_func_no=1; /* 初期メニューのメニュー番号設定 */
				dispmen(g); /* メニュー表示 */
				return(1);
			}
			else if(MIKA_exec_func_no>100&&MIKA_exec_func_no<400) /* 初級 中級 上級 */
			{
				procptrain(g,nChar); /* 初級 中級 上級 練習 文字入力処理 */
				return(1);
			}
		}
		return (0);
	}
function preptrain(g,func_no) /* 練習の前処理 */
{
			if(MIKA_exec_func_no>100&&MIKA_exec_func_no<400) /* 初級 中級 上級 練習の前処理 */
			{
				if(MIKA_exec_func_no>100&&MIKA_exec_func_no<200) /* 初級の前処理 */
				{
					MIKA_type_kind_no=func_no-101; /* 練習項目番号を取得 */
					MIKA_cookie_kind='P1'; /* 練習成績クッキー保存用タグ種別 */
					MIKA_menu_kind_flag=MIKA_key_guide_on; /* キーガイドを表示するモードに指定 */
					MIKA_type_speed_record=MIKA_r_speed1; /* 最高速度記録配列アドレスに 初級 最高速度記録 を設定 */
					MIKA_type_date_record=MIKA_r_date1; /* 最高速度達成日配列アドレスに 初級 最高速度達成日付 を設定 */
					MIKA_type_time_record=MIKA_r_time1; /* 累積練習時間配列アドレスに 初級 累積練習時間 を設定 */
					MIKA_p_count=MIKA_p_count_position1; /* 練習回数配列アドレスに初級 練習回数 を設定 */
				}
				else if(MIKA_exec_func_no>200&&MIKA_exec_func_no<300) /* 中級の前処理 */
				{
					MIKA_type_kind_no=func_no-201; /* 練習項目番号を取得 */
					MIKA_cookie_kind='P2'; /* 練習成績クッキー保存用タグ種別 */
					MIKA_menu_kind_flag=MIKA_key_guide_half; /* キーの刻印を表示してキーガイド文字を表示しない設定 */
					MIKA_type_speed_record=MIKA_r_speed2; /* 最高速度記録配列アドレスに 中級 最高速度記録 を設定 */
					MIKA_type_date_record=MIKA_r_date2; /* 最高速度達成日配列アドレスに 中級 最高速度達成日付 を設定 */
					MIKA_type_time_record=MIKA_r_time2; /* 累積練習時間配列アドレスに 中級 累積練習時間 を設定 */
					MIKA_p_count=MIKA_p_count_position2; /* 練習回数配列アドレスに中級 練習回数 を設定 */
				}
				else /* 上級の前処理 */
				{
					MIKA_type_kind_no=func_no-301; /* 練習項目番号を取得 */
					MIKA_cookie_kind='P3'; /* 練習成績クッキー保存用タグ種別 */
					MIKA_menu_kind_flag=MIKA_key_guide_off; /* キーガイドを表示しないモードに指定 */
					MIKA_type_speed_record=MIKA_r_speed3; /* 最高速度記録配列アドレスに 上級 最高速度記録 を設定 */
					MIKA_type_date_record=MIKA_r_date3; /* 最高速度達成日配列アドレスに 上級 最高速度達成日付 を設定 */
					MIKA_type_time_record=MIKA_r_time3; /* 累積練習時間配列アドレスに 上級 累積練習時間 を設定 */
					MIKA_p_count=MIKA_p_count_position3; /* 練習回数配列アドレスに上級 練習回数 を設定 */
				}
				MIKA_practice_end_flag=0; /* 練習実行中フラグクリア */	
				MIKA_type_syuryou_flag=0; /* 練習終了時の記録更新フラグ クリア */
				MIKA_type_end_flag=0; /* 練習終了フラグをクリア */
				MIKA_time_start_flag=0; /* 時間計測開始フラグをクリア */
				MIKA_type_kind_mes=MIKA_menu_mes[MIKA_type_kind_no]; /* 練習項目名を設定 */
				MIKA_char_table=MIKA_h_pos[MIKA_type_kind_no]; /* 練習文字列テーブルアドレスに ポジション練習 ランダム練習 練習文字列テーブルの指定項目を設定 */
				MIKA_char_position=randomchar(MIKA_char_table,-1); /* 最初の練習文字の練習文字テーブル内番号をランダムに取得 */
				MIKA_key_char=MIKA_char_table.charAt(MIKA_char_position); /* 練習文字テーブル内番号に対応する練習文字を取得 */
				MIKA_err_char=0; /* エラー文字にゼロを指定 */
				MIKA_type_err_count=0; /* エラー文字カウンターをゼロクリア */
				MIKA_type_count=0; /* 練習文字カウンターをゼロクリア */
				if(MIKA_menu_kind_flag==MIKA_key_guide_on)
				{
					MIKA_guide_char=MIKA_key_char; /* ガイドキー文字に練習文字を設定 */
				}
				else
				{
					MIKA_guide_char=0;
					MIKA_Procptimer=setTimeout(Procptimer,3000,g);  /* 最初の文字はタイマーを三秒に設定 */
				}
			}
}
function dispretrymessage(g,flag) /* リトライメッセージ表示 flag=0 表示を行う flag=1 表示を消去 */
{
	if(flag==0) cslcolor(g,MIKA_cyan); /* 表示色をシアンに設定 */
	else cslcolor(g,MIKA_bk_color); /* 表示色を背景色に設定 */
	cslput(g,22*16,10*8,MIKA_mesi1); /* 「もう一度練習するときはリターンキーまたは、Enterキーを押してください」のメッセージを表示 */
	cslput(g,23*16,10*8,MIKA_mesi2); /* 「メニューに戻るときはESCキーを押してください」のメッセージを表示 */
}
function funcbackmenu(func_no) /* メニューの階層を一段上に戻る */
	{
		var ffun_no=0;
		if(func_no>100&&func_no<200) /* 初級の各項目の場合 */
		{
			ffun_no=11; /* 初級のメニューに戻る */
		}
		else if(func_no>200&&func_no<300) /* 中級の各項目の場合 */
		{
			ffun_no=12; /* 中級のメニューに戻る */
		}
		else if(func_no>300&&func_no<400) /* 上級の各項目の場合 */
		{
			ffun_no=13; /* 上級のメニューに戻る */
		}
		else
		{
			ffun_no=1; /* 初期メニューに戻る */
		}
		return ffun_no;
	}
function procpabort(g) /*エスケープで終了しますの表示消去  指表示消去 リトライメッセージ表示 */
{
	dispabortmes(g,1); /* エスケープで終了しますの表示消去 */
	pfinger(g,1); /* 指のイラストを消去 */
	dispretrymessage(g,0); /* リトライメッセージ表示 */
	}
function procpnextchar(g) /* 初級 中級 上級 練習での次回の練習文字の表示処理 */
{
	if(MIKA_menu_kind_flag==MIKA_key_guide_off) /* キーガイド表示がオフの場合 */
	{
		dikposit(g,MIKA_err_char,2); /* エラー文字表示をキーの刻印なしで消去 */
		dikposit(g,MIKA_guide_char,2); /* ガイドキー文字表示をキーの刻印なしで消去 */
		if(MIKA_guide_char!=0) /* ガイドキー文字表示中の場合 */
		difposit(g,MIKA_guide_char,1); /* 指の位置表示を消去 */
	}
	else
	{
		dikposit(g,MIKA_err_char,1); /* エラー文字表示をキーの刻印ありで消去 */
		dikposit(g,MIKA_guide_char,1); /* ガイドキー文字表示をキーの刻印ありで消去 */
		difposit(g,MIKA_guide_char,1); /* 指の位置表示を消去 */
	}
	MIKA_err_char=0; /* エラー文字にゼロを指定 */		
	dispguidechar(g,MIKA_key_char,1); /* 練習文字表示を消去 */
	MIKA_char_position=randomchar(MIKA_char_table,MIKA_char_position); /* 最初の練習文字の練習文字テーブル内番号をランダムに取得 */
	MIKA_key_char=MIKA_char_table[MIKA_char_position]; /* 練習文字テーブル内番号に対応する練習文字を取得 */
	if(MIKA_menu_kind_flag==MIKA_key_guide_on) MIKA_guide_char=MIKA_key_char; /* キーガイド表示中の場合はガイドキー文字に練習文字を代入 */
	else MIKA_guide_char=0; /* キーガイド表示なしの場合はガイドキー文字にゼロを代入 */
	dispguidechar(g,MIKA_key_char,0); /* 次回練習文字を表示 */
	dikposit(g,MIKA_guide_char,0); /* ガイドキー文字の位置を表示 */
	difposit(g,MIKA_guide_char,0); /* ガイドキー文字の指位置を表示 */
}
function convertupperlower(a,b) /* b の文字の種別をa の文字種別に揃える */
{
	var char1='A';
	var char2='a';
	if('A'<=a&&a<='Z'&&'a'<=b&&b<='z') b=String.fromCharCode(b.charCodeAt(0)-char2.charCodeAt(0)+char1.charCodeAt(0)); /* aが大文字でbが小文字の場合はbを大文字に変換 */
	else	if('a'<=a&&a<='z'&&'A'<=b&&b<='Z') b=String.fromCharCode(b.charCodeAt(0)-char1.charCodeAt(0)+char2.charCodeAt(0)); /* aが小文字でbが大文字の場合はbを小文字に変換 */
	return b;
}
function procptrain(g,nChar) /*  初級 中級 上級 練習の文字入力処理 */
{
	if(nChar==0x1b){ /* エスケープキー入力の場合 */
		if(MIKA_practice_end_flag==0) /* 入力練習実行中の場合 */
		{
			MIKA_practice_end_flag=1; /* 練習実行中フラグを終了にセット */
			if(MIKA_menu_kind_flag!=MIKA_key_guide_on&&MIKA_guide_char==0) /* キーガイド表示無しでガイドキー文字文位置未表示の場合 */
			{
				clearTimeout(MIKA_Procptimer); /* ガイドキー文字位置表示用タイマーキャンセル */
			}
			if(MIKA_time_start_flag!=0) /* 最初の正解を入力済の場合 */
			{
				MIKA_type_end_time=getmillisecond();
				MIKA_type_speed_time=roundtime((MIKA_type_end_time-MIKA_type_start_time)/1000.0);/* 練習経過時間 秒を計算 */
				MIKA_type_time_record[MIKA_type_kind_no]=MIKA_type_time_record[MIKA_type_kind_no]+MIKA_type_speed_time; /* 累積練習時間の記録を加算 */
				writecookier(MIKA_cookie_kind,MIKA_type_kind_no,MIKA_type_speed_record[MIKA_type_kind_no],MIKA_type_date_record[MIKA_type_kind_no],MIKA_type_time_record[MIKA_type_kind_no]); /* クッキーに累積練習時間を保存 */
			}
			procpabort(g);
		}
		else if(MIKA_practice_end_flag==1) /* 練習終了の場合 */
		{
			if(MIKA_type_syuryou_flag==1||MIKA_type_syuryou_flag==2)	 /* 練習記録を更新した場合 */
			{
				MIKA_type_speed_record[MIKA_type_kind_no]=MIKA_type_speed_time; /* 練習記録 最高入力速度を更新 */
				MIKA_type_date_record[MIKA_type_kind_no]=MIKA_type_date; /* 練習記録 達成日を更新 */
				MIKA_type_syuryou_flag=0; /* 練習終了時の記録更新フラグ クリア */
			}
			MIKA_exec_func_no=funcbackmenu(MIKA_exec_func_no); /* メニューを一階層戻る */
			dispmen(g); /* メニュー表示 */
		}
	}
	else if((nChar==0x0d||nChar==0x0a)&&MIKA_practice_end_flag==1)	 /* 練習の終了時に改行が入力された場合 */
	{
		MIKA_practice_end_flag=0; /* 練習実行中フラグをクリア */
		if(MIKA_type_syuryou_flag==1||MIKA_type_syuryou_flag==2)	 /* 練習記録を更新した場合 */
		{
			dispmaxspeed(g,1); /* 前回 最高入力速度 達成日を消去 */
			MIKA_type_speed_record[MIKA_type_kind_no]=MIKA_type_speed_time; /* 練習記録 最高入力速度を更新 */
			MIKA_type_date_record[MIKA_type_kind_no]=MIKA_type_date; /* 練習記録 達成日を更新 */
			dispmaxspeed(g,0); /* 今回 最高入力速度 達成日を表示 */
		}
		if(MIKA_type_syuryou_flag==2) /* 記録更新時 */
		{
			dispupmes(g,1); /* 記録を更新しましたの表示を消去 */
		}
		MIKA_type_syuryou_flag=0; /* 練習終了時の記録更新フラグ クリア */
		MIKA_type_end_flag=0; /* 練習終了フラグをクリア */
	 	dispretrymessage(g,1); /* リトライメッセージ消去 */
		dispsecond(g,1); /* 前回練習時間表示消去 */
		dispabortmes(g,0); /* エスケープキーを押すと中断しますのメッセージを表示 */
		pfinger(g,0); /* 指のイラストを表示 */
		dispseikai(g,2); /* メッセージと共に前回正解数消去 */
		MIKA_key_guide_flag=0; /* キーガイドメッセージ表示フラグ クリア */
		MIKA_type_count=0; /* 入力文字数カウンタークリア */
		disperror(g,2); /* メッセージと共に前回エラー回数を消去 */
		MIKA_type_err_count=0; /* エラー入力文字数数クリア */
		MIKA_time_start_flag=0; /* 時間計測開始フラグクリア */
		procpnextchar(g); /* 次回の練習文字を表示 */
		if(MIKA_menu_kind_flag!=MIKA_key_guide_on) /* キーガイド非表示の場合 */
		{
			MIKA_Procptimer=setTimeout(Procptimer,3000,g);  /* 最初の文字はタイマーを三秒に設定 */
		}
	}
	else if(MIKA_practice_end_flag==0) /* 練習実行中の場合 */
	{
		if(uppertolower(nChar)==uppertolower(MIKA_key_char)) /* 練習文字と入力文字を小文字に変換して比較 */
		{
			if(MIKA_menu_kind_flag!=MIKA_key_guide_on&&MIKA_guide_char==0) /* キーガイド非表示ガイドキー文字位置未表示の場合 */
			{
				clearTimeout(MIKA_Procptimer); /* タイマーキャンセル */
			}
			dispseikai(g,1); /* 前回正解数表示消去 */
			if(MIKA_time_start_flag==0) /* 最初の正解文字入力の場合 */
			{
				MIKA_type_start_time=getmillisecond();  /* 練習開始時間をミリ秒で取得取得 */
				MIKA_time_start_flag=1; /* 練習時間計測フラグセット */
			}
			MIKA_type_count++; /* 正解数を加算 */
			dispseikai(g,0); /* 正解数を表示 */
			if(MIKA_type_count>=MIKA_position_limit) /* 60文字入力した場合は練習を終了 */
			{
				MIKA_type_end_time=getmillisecond(); /* 練習終了時間をミリ秒で取得取得 */
				MIKA_type_speed_time=roundtime((MIKA_type_end_time-MIKA_type_start_time)/1000.0); /* 練習経過時間を計算 */
				MIKA_type_time_record[MIKA_type_kind_no]=MIKA_type_time_record[MIKA_type_kind_no]+MIKA_type_speed_time; /* 累積練習時間の記録を加算 */
				if(MIKA_menu_kind_flag==MIKA_key_guide_off) /* キーガイド表示がオフの場合 */
				{
					dikposit(g,MIKA_err_char,2); /* エラー文字表示をキーの刻印なしで消去 */
				}
				else
				{
					dikposit(g,MIKA_err_char,1); /* エラー文字表示をキーの刻印ありで消去 */
				}
				MIKA_err_char=0; /* エラー文字にゼロを指定 */		
				procpabort(g);
				prockiroku(g); /* 記録を更新時の処理 */
				MIKA_practice_end_flag=1; /* 練習実行中フラグを終了にセット */
				MIKA_type_end_flag=1; /* 練習終了フラグを60文字入力による終了にセット */
				dispkaisu(g,1); /* 前回練習回数表示クリア */
				MIKA_p_count[MIKA_type_kind_no]++; /* 練習回数加算 */
				dispsecond(g,0); /* 今回練習時間表示 */
				dispkaisu(g,0); /* 今回練習回数表示 */
			}
			else
			{
				procpnextchar(g); /* 次練習文字を取得して表示 */
				if(MIKA_menu_kind_flag!=MIKA_key_guide_on) /* キーガイド表示なしの場合 */
				{
					MIKA_Procptimer=setTimeout(Procptimer,2000,g);  /* 二秒タイマー設定 */

				}
			}
		}
		else /* 入力エラーの場合 */
		{
			disperror(g,1); /* 前回エラー入力文数表示を消去 */
			MIKA_type_err_count++; /* エラー入力文字数カウンターを加算 */
			disperror(g,0); /* 今回エラー入力文字数を表示 */
			if(MIKA_menu_kind_flag==MIKA_key_guide_off) dikposit(g,MIKA_err_char,2); /* キーガイド表示なしの時は前回エラー入力文字を消去 */
			else dikposit(g,MIKA_err_char,1); /* キーガイド表示中は 前回エラー入力文字の赤色エラー表示を元に戻す */
			MIKA_err_char=convertupperlower(MIKA_key_char,nChar); /* エラー文字の文字種 大文字小文字 を練習文字と合せる。 */
			dikposit(g,MIKA_err_char,3); /* エラー入力文字位置を背景赤で表示 */
		}
	}
}
function dispupmes(g,flag) /* タイプ速度を更新したときのメッセージを表示 */
	{
		if(flag==0) cslcolor(g,MIKA_green); /* 表示色を緑色に設定 */
		else cslcolor(g,MIKA_bk_color); /* 表示色を背景色に設定 */
		cslput(g,20*16,11*8,MIKA_mesi3); /* 指定位置に「おめでとう、記録を更新しました」のメッセージを表示 */
	}
function prockiroku(g) /* 初級 中級 上級 練習にてタイプ入力速度が前回までの最高速度を更新したかの比較を行う */
	{
		if((MIKA_type_speed_record[MIKA_type_kind_no]==0)||(MIKA_type_speed_time<MIKA_type_speed_record[MIKA_type_kind_no])) /* 前回までの最高入力速度を更新した場合 */
		{
			if(MIKA_type_speed_record[MIKA_type_kind_no]>0.0) /* 前回の最高入力速度がゼロより大きい場合 */
			{
				dispupmes(g,0); /* 練習記録を更新しましたのメッセージを表示 */
				MIKA_type_syuryou_flag=2; /* 練習記録更新フラグを2にセット */
			}
			else /* 前回の最高入力速度がゼロの場合 */
			{
				MIKA_type_syuryou_flag=1; /* 練習記録更新フラグを1にセット */
			}
			MIKA_type_date=getdate(); /* 最高記録達成日時文字列を指定フォーマットに従って作成 */
			writecookier(MIKA_cookie_kind,MIKA_type_kind_no,MIKA_type_speed_time,MIKA_type_date,MIKA_type_time_record[MIKA_type_kind_no]); /* クッキーに最高速度と達成日 累積練習時間を保存 */
		}
		else
		{
			writecookier(MIKA_cookie_kind,MIKA_type_kind_no,MIKA_type_speed_record[MIKA_type_kind_no],MIKA_type_date_record[MIKA_type_kind_no],MIKA_type_time_record[MIKA_type_kind_no]); /* クッキーに累積練習時間を保存 */
		}
	}
function roundtime(time) /* 小数点以下 切り捨て */
	{
		time=Math.floor(time);
		return time;
	}
function uppertolower(nChar) /* 英大文字を英小文字に変換 */
{
	var char1='A';
	var char2='a';
	if('A'<=nChar&&nChar<='Z') nChar=String.fromCharCode(nChar.charCodeAt(0)-char1.charCodeAt(0)+char2.charCodeAt(0)); /* 英大文字の場合は小文字に変換 */
		return nChar;
}
function getmillisecond() /* プログラム開始からの経過時間をミリセコンドで取得 */
{
	var millisecond;
	millisecond=Math.floor(performance.now());
	return(millisecond);
}	
function keycord(a) /* 練習文字に対応した キーの位置 列と行を取得 */
{
	var i,j;
	var pos1=[2];
	var xx_pos,yy_pos;
	xx_pos = 0;
	yy_pos= 0;
	for(j=0;j<4;j++)
	{
		i=cfind(a,MIKA_c_post[j]); /* 行ごとに一致する文字をサーチ */
		if(i!=0) /* 文字が一致する場合 */
		{
			xx_pos=j+1; /* 行の番号を設定 */
			yy_pos=i; /* 列の番号を設定 */
			break; 
		}
	}			
	pos1[0]=xx_pos;
	pos1[1]=yy_pos;
	return pos1;
}	
function randomchar(char_table0,char_position0) /* 前回と重複せずにランダムに文字位置を取得 */
// charposition =-1 初回の取得の場合
// charposition >=0 前回のランダム文字位置
	{
		var char_length,ii;
		char_length=char_table0.length; /* 文字テーブルの長さ取得 */
		if(char_length==0) return(0);
		if(char_position0==-1) /* 初回の乱数取得の場合 */
		{
			ii=randomint(char_length); /* 文字テーブルの長さを元に乱数を取得 */
			return(ii);
		}
		else /* 前回乱数取得の場合 */
		{
			ii=randomint(char_length-1); /* 文字テーブルの長さ－１を元に乱数を取得 */
			ii=ii+char_position0+1; /* 取得した乱数に前回の文字位置＋１を加算 */
			if(ii>=char_length) ii=ii-char_length; /* 文字位置が文字テーブル長を超えた場合の補正 */
			return(ii);	
		}
	}
function randomint(i) /* 整数 i より小さい乱数を生成 */
{
	var ii;
	if(i<=0) return(0);
	ii= Math.floor(Math.random() * i)
	return(ii);
}
function formatmes(x,i,flag,p) /* 数値を指定文字数の文字列に変換 */
// x 変換元の数値
// i 出力文字数
// flag 小数点以下の桁数
// p パディング文字
{
	var a;
	var j;
	a=x.toFixed(flag); /* 数値を固定小数点文字列に変換 */
	j=a.length;
	if(j>=i) return(a);
	else
	return a.padStart(i,p); /* 文字pでパディング*/
}
function formatd(x,i) /* 実数を小数点以下0桁の整数文字列に変換してスペースでパディングする */
{
	return formatmes(x,i,0,' ');
}
function formatzd(x,i) /* 実数を小数点以下0桁の整数文字列に変換してゼロでパディングする */
{
	return formatmes(x,i,0,'0');
}
function getdate() /* yy/mm/dd の書式で日付を取得 */
{
	var x,y,m,d;
	x=new Date(); /* 日付を取得 */
	y=x.getFullYear(); /* 年を取得 */
	y=y.toString(); /* 年を文字列に変換 */
	y=y.substring(2,4); /* 年の下二桁を取得 */
	m=x.getMonth()+1; /* 月を取得 */
	d=x.getDate(); /* 日を取得 */
	return y+'/'+formatzd(m,2)+'/'+formatzd(d,2); /* yy/mm/dd の形式に日付を変換 */
}
function seisekiruiseki() /* 個別の累積練習時間の合計を計算 */
{
	var i;
	var total;
	total=0;
	for(i=0;i<6;i++)
	{
		total=total+MIKA_r_time1[i]; /* 初級の累積練習時間を加算 */
	}
	for(i=0;i<6;i++)
	{
		total=total+MIKA_r_time2[i]; /* 中級の累積練習時間を加算 */
	}
	for(i=0;i<6;i++)
	{
		total=total+MIKA_r_time3[i]; /* 上級の累積練習時間を加算 */
	}
	return total;
}	
function seisekiclear() /* 練習成績を消去 */
{
	var i;
	var date0='00/00/00'; 
	MIKA_rt_t=0; /* 合計累積練習時間をクリア */
	for(i=0;i<6;i++) /* 初級の成績をクリア */
	{
		MIKA_r_speed1[i]=0; /* 初級の最高入力速度をクリア */
		MIKA_r_date1[i]=date0; /* 初級の達成日付をクリア */
		MIKA_r_time1[i]=0; /* 初級の累積練習時間をクリア */
	}	
	for(i=0;i<6;i++) /* 中級の成績をクリア */
	{
		MIKA_r_speed2[i]=0; /* 中級の最高入力速度をクリア */
		MIKA_r_date2[i]=date0; /* 中級の達成日付をクリア */
		MIKA_r_time2[i]=0; /* 中級の累積練習時間をクリア */
	}	
	for(i=0;i<6;i++) /* 上級の成績をクリア */
	{
		MIKA_r_speed3[i]=0; /* 上級の最高入力速度をクリア */
		MIKA_r_date3[i]=date0; /* 上級の習達成日付をクリア */
		MIKA_r_time3[i]=0; /* 上級の累積練習時間をクリア */
	}	
	writecookier('',0,0,'',0); /* cookie 書き込み */
}
function writecookier(kind,ii,speed,date,time) /* cookie に指定された記録とともに全成績を書き込み */
{
	var cookie_data="MIKAMOGU=";
	var speed0;
	var date0;
	var time0;
	var i;
	for(i=0;i<6;i++) /* 上級の練習記録の作成 */
	{
		if(kind=='P1'&&i==ii) /* 指定された記録と一致した場合 */
		{
			speed0=speed;
			date0=date;
			time0=time;
		}
		else
		{
			speed0=MIKA_r_speed1[i];
			date0=MIKA_r_date1[i];
			time0=MIKA_r_time1[i];
		}
		cookie_data=cookie_data+convcoded(speed0,3)+convcodedate(date0,3)+convcoded(time0,4); /* 練習成績を圧縮して作成 */
	}	
	for(i=0;i<6;i++) /* 中級の練習記録の作成 */
	{
		if(kind=='P2'&&i==ii) /* 指定された記録と一致した場合 */
		{
			speed0=speed;
			date0=date;
			time0=time;
		}
		else
		{
			speed0=MIKA_r_speed2[i];
			date0=MIKA_r_date2[i];
			time0=MIKA_r_time2[i];
		}
		cookie_data=cookie_data+convcoded(speed0,3)+convcodedate(date0,3)+convcoded(time0,4); /* 練習成績を圧縮して作成 */
	}	
	for(i=0;i<6;i++) /* 上級の練習記録の作成 */
	{
		if(kind=='P3'&&i==ii) /* 指定された記録と一致した場合 */
		{
			speed0=speed;
			date0=date;
			time0=time;
		}
		else
		{
			speed0=MIKA_r_speed3[i];
			date0=MIKA_r_date3[i];
			time0=MIKA_r_time3[i]
		}	
		cookie_data=cookie_data+convcoded(speed0,3)+convcodedate(date0,3)+convcoded(time0,4); /* 練習成績を圧縮して作成 */
	}	
	document.cookie=cookie_data+';expires='+cookiedate(); /* cookie を有効期限一年で書き込み */
}
function cookiedate() /* cookie の有効期限一年の作成 */
{
	var date1,date2;
	date1=new Date(); /* 当日の日付時刻を取得 */
	date1.setTime(date1.getTime()+365*24*60*60*1000); /* 一年先の時刻を計算 */
	date2=date1.toUTCString(); /* UTC標準時に変換 */
	return date2;
}
function readcookie() /* cookie を読み込みんで連想配列に格納 */
{
		var i;
		var cookie0;
		MIKA_cookie=document.cookie; /* cookie 読み込み */
		if(MIKA_cookie!='') /* cookie が空でない場合 */
		{
			MIKA_cookie_array0=MIKA_cookie.split('; '); /* cookie を各項目ごとに分離して配列に格納 */
			for(i=0;i<MIKA_cookie_array0.length;i++) 
			{
				cookie0=MIKA_cookie_array0[i]; /* cookieの配列の個別データを取得 */
				cookie1=cookie0.split('='); /* cookie の個別データーを '=' 文字で分離 */
				MIKA_cookie_array1[cookie1[0].trim()]=cookie1[1].trim(); /* cookie の各項目を連想配列に格納 */
			}	
		}

}
function convcodedate(a,i) /* 最高速度達成日の日付を圧縮 */
{
	var yy,mm,dd,b;
	var x;
	yy=a.substring(0,2); /* 日付の年を取得 */
	mm=a.substring(3,3+2); /* 日付の月を取得 */
	dd=a.substring(6,6+2); /* 日付の日を取得 */
	x=Number(yy)*32*13+Number(mm)*32+Number(dd); /* 年月日を日数に変換 */
	b=convcoded(x,i); /* 日数を圧縮して変換 */
	return(b);
}
function convcoded(i,j) /* 10進数を62進数に圧縮して変換 */
// i 10進数
// j 62進数の桁数
{
	var k,l,m;
	var a;
	k=MIKA_code.length; /* 62進数テーブルの文字列長を取得 */
	a=''; 
	i=Math.floor(i); /* 変換する数値を整数にする */
	for(l=0;l<j;l++)
	{	m=i%k; /* 各桁の数値を計算 */
		i=(i-m)/k;
		a=a+MIKA_code[m]; /* 対応する62進数文字を設定 */
	}
	return a;
}
function convkookie() /* cookie の連想配列データーを成績に変換して格納 */
{
	var time;
	var speed0,date0,time0;
	var i,ii;
	var a;
	if('MIKAMOGU' in MIKA_cookie_array1) /* 連想配列に 'MIKAMOGU'があった場合 */
	{
		a=MIKA_cookie_array1['MIKAMOGU']
		ii=0;
		for(i=0;i<6;i++) /* 初級の成績を変換 */
		{
			speed0=a.substring(ii,ii+3); /* 最高入力速度を取得 */
			MIKA_r_speed1[i]=convdecoded(speed0); /* 最高入力速度を62進数から10進数に変換 */
			ii=ii+3;
			date0=a.substring(ii,ii+3); /* 達成日付を取得 */
			MIKA_r_date1[i]=convdecodedate(date0); /* 達成日付を62進数から10進数に変換 */
			ii=ii+3;
			time0=a.substring(ii,ii+4); /* 累積練習時間を取得 */
			ii=ii+4;
			MIKA_r_time1[i]=convdecoded(time0); /* 累積練習時間を62進数から10進数に変換 */
		}
		for(i=0;i<6;i++) /* 中級の成績を変換 */
		{
			speed0=a.substring(ii,ii+3); /* 最高入力速度を取得 */
			MIKA_r_speed2[i]=convdecoded(speed0); /* 最高入力速度を62進数から10進数に変換 */
			ii=ii+3;
			date0=a.substring(ii,ii+3); /* 達成日付を取得 */
			MIKA_r_date2[i]=convdecodedate(date0); /* 達成日付を62進数から10進数に変換 */
			ii=ii+3;
			time0=a.substring(ii,ii+4); /* 累積練習時間を取得 */
			ii=ii+4;
			MIKA_r_time2[i]=convdecoded(time0); /* 累積練習時間を62進数から10進数に変換 */
		}
		for(i=0;i<6;i++) /* 上級の成績を変換 */
		{
			speed0=a.substring(ii,ii+3); /* 最高入力速度を取得 */
			MIKA_r_speed3[i]=convdecoded(speed0); /* 最高入力速度を62進数から10進数に変換 */
			ii=ii+3;
			date0=a.substring(ii,ii+3); /* 達成日付を取得 */
			MIKA_r_date3[i]=convdecodedate(date0); /* 達成日付を62進数から10進数に変換 */
			ii=ii+3;
			time0=a.substring(ii,ii+4); /* 累積練習時間を取得 */
			ii=ii+4;
			MIKA_r_time3[i]=convdecoded(time0); /* 累積練習時間を62進数から10進数に変換 */
		}
	}
}
function convdecoded(a) /* 62進数文字列を10進数に変換 */
{
	var i,ii,j,k,l,m;
	var b;
	i=a.length; /* 62進数文字列の長さを取得 */
	ii=MIKA_code.length; /* 62進数テーブルの文字列長を取得 */
	j=0;
	m=1;
	for(k=0;k<i;k++)
	{
		b=a[k]; /* 62進数の一桁を取得 */
		l=cfind(b,MIKA_code); /* 62進数に対応する10進数を取得 */
		if(l>0) l=l-1;
		j=j+l*m; /* 62進数を10進数に変換 */
		m=m*ii;
	}
	return (j);
}
function convdecodedate(a) /* 62進数文字列を年月日に変換 */
{
	var yy,mm,dd;
	var b;
	var c;
	b=convdecoded(a);  /* 62進数文字列を10進数に変換 */
	dd=b%32; /* 日付を計算 */
	b=(b-dd)/32;
	mm=b%13; /* 月を計算 */
	yy=(b-mm)/13; /* 年を計算 */
	c=formatzd(yy,2)+'/'+formatzd(mm,2)+'/'+formatzd(dd,2); /* 年月日をYY/MM/DDの文字列に変換 */
	return(c);
}
function Procptimer(g) /* 中級 上級 練習用タイマー */
{
	if(MIKA_practice_end_flag==0) /* 練習実行中の場合 */
	{
		MIKA_guide_char=MIKA_key_char; /* ガイドキー文字に練習文字を設定 */
		dikposit(g,MIKA_guide_char,0); /* ガイドキー文字のキー位置を表示 */
		difposit(g,MIKA_guide_char,0); /* ガイドキー文字の指位置を表示 */
	}
//				System.out.printf("Timer task\n");
}
