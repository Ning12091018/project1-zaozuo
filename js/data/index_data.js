//造作超值好物推荐  图片添加
var arr1 = [
	{
		proId:0,
		img : 'recom1',
		hre : '',
		a1 : '造作锦瑟撞色高支4件套',
		sp :'TM',
		a2: '-2020春夏特别版',
		hh: '让世界花园印象,氤氲悠远梦境,来自Zelect'
	},
	{
		proId:1,
		img : 'recom2',
		hre : '',
		a1 : 'My Deer小鹿衣帽架',
		sp :'',
		a2: '',
		hh: 'My Deer，欢迎回家,来自造作生活研究所'
	},
	{
		proId:2,
		img : 'recom3',
		hre : '',
		a1 : '甜点多用边桌',
		sp :'®',
		a2: '| 一物三用',
		hh: '马卡龙色的多变甜心,来自西班牙Studio Inma Bermúdez'
	},
	{
		proId:3,
		img : 'recom4',
		hre : '',
		a1 : '西竹躺椅',
		sp :'®',
		a2: '',
		hh: '让西班牙唤起你对旧时竹椅的深情,来自西班牙MUT'
	},
	{
		proId:4,
		img : 'recom5',
		hre : '',
		a1 : '造作星云置物系',
		sp :'®',
		a2: '-2020春夏特别版',
		hh: '蜂巢形单元设计,自由组配百变星空，来自意大利Luca Nichetto'
	},
	{
		proId:5,
		img : 'recom6',
		hre : '',
		a1 : '造作水母地灯',
		sp :'®',
		a2: '',
		hh: '暖化时光的空间少女之心，来自瑞典Note Design Studio'
	},
	{
		proId:6,
		img : 'recom7',
		hre : '',
		a1 : '新家照相馆特辑1:总有花香的浪漫之家',
		sp :'',
		a2: '',
		hh: 'PL的家,南宁,89m²三室两厅'
	},
	{
		proId:7,
		img : 'recom8',
		hre : '',
		a1 : '新家照相馆特辑2：温暖窝心的精致之家',
		sp :'',
		a2: '',
		hh: 'Eagle的家，成都，40m²Loft 一室一厅'
	},
	{
		proId:8,
		img : 'recom9',
		hre : '',
		a1 : '新家照相馆特辑3：通透明亮的日式小家',
		sp :'',
		a2: '',
		hh: 'Mia的家，上海，62m² 一室一厅'
	},
];

//热销单品
var rx = [
	{
		proId:0,
		img : 'rx1',
		text : '雁翎沙发',
		sp:'',
		text1 : '',
		pri1: '￥3240起',
		pri2:'￥3599起',
		sp1:'全场9折每满1000减150',
		sp2:'3色可选',
		ht:'长翎舒展，给紧凑客厅的优美曲线沙发',
		li1:'Jonas Wagell',
		li2:'Sweden | Stockholm',
	},
	{
		proId:1,
		img : 'rx2',
		text : '造作远山沙发',
		sp:'®',
		text1 : '',
		pri1: '￥3240起',
		pri2:'￥3599起',
		sp1:'全场9折每满1000减150',
		sp2:'3色可选',
		ht:'瑞典国宝大师中国首作，坐拥究极宽适坐感',
		li1:'Claesson Koivisto Rune',
		li2:'Sweden | Stockholm',
	},
	{
		proId:2,
		img : 'rx3',
		text : '气球沙发',
		sp:'',
		text1 : '',
		pri1: '￥2340起',
		pri2:'￥2599起',
		sp1:'全场9折每满1000减150',
		sp2:'3色可选',
		ht:'3色饱满气球，系住心中少年',
		li1:'Claesson Koivisto Rune',
		li2:'Sweden | Stockholm',
	},
	{
		proId:3,
		img : 'rx4',
		text : '云帛床',
		sp:'®',
		text1 : '',
		pri1: '￥3147起',
		pri2:'￥3496起',
		sp1:'全场9折每满1000减150',
		sp2:'',
		ht:'轻软不撞腿，优美与舒适的平衡',
		li1:'Z-Inhouse',
		li2:'中国 | 北京',
	},
	{
		proId:4,
		img : 'rx5',
		text : '远航床',
		sp:'',
		text1 : '',
		pri1: '￥8100起',
		pri2:'￥8999起',
		sp1:'全场9折每满1000减150',
		sp2:'2色可选',
		ht:'14条船舷线拔出海面，赠与梦的远方与自由心灵',
		li1:'Z-Inhouse',
		li2:'中国 | 北京',
	},
	{
		proId:5,
		img : 'rx6',
		text : '瓦雀伸缩桌',
		sp:'',
		text1 : '1.2-1.5米',
		pri1: '￥3600',
		pri2:'￥3999',
		sp1:'全场9折每满1000减150',
		sp2:'2色可选',
		ht:'如雀灵动，兼具颜值与功能的漂亮伸缩桌',
		li1:'Jonas Wagell',
		li2:'Sweden | Stockholm',
	},
	{
		proId:6,
		img : 'rx7',
		text : '随形桌',
		sp:'®',
		text1 : '',
		pri1: '￥2700起',
		pri2:'￥2999起',
		sp1:'全场9折每满1000减150',
		sp2:'2色可选',
		ht:'漂亮有机曲线，一款容积率翻倍的多功能桌',
		li1:'Max Gerthel',
		li2:'Sweden | China',
	},
	{
		proId:7,
		img : 'rx8',
		text : '美术馆梳妆台',
		sp:'',
		text1 : '',
		pri1: '￥4100起',
		pri2:'￥4599起',
		sp1:'全场9折每满1000减150',
		sp2:'2色可选',
		ht:'现代的丰饶，空间的画作',
		li1:'Note Design Studio',
		li2:'Sweden | Stockholm',
	},
	{
		proId:8,
		img : 'rx9',
		text : '鹭鸶躺椅',
		sp:'',
		text1 : '',
		pri1: '￥1440起',
		pri2:'￥1599起',
		sp1:'全场9折每满1000减150',
		sp2:'2色可选',
		ht:'轻扬而至，一只白鹭落闲庭',
		li1:'Palomba Serafini Associati',
		li2:'Italy｜Milan',
	},
	{
		proId:9,
		img : 'rx10',
		text : '造作洛城软椅',
		sp:'®',
		text1 : '',
		pri1: '￥540起',
		pri2:'￥599起',
		sp1:'全场9折每满1000减150',
		sp2:'2色可选',
		ht:'轻简舒适，兼顾餐用与工作的多功能椅',
		li1:'Z-Inhouse',
		li2:'Z-Inhouse',
	},
	{
		proId:10,
		img : 'rx11',
		text : '造作8点实木软椅职业版',
		sp:'®',
		text1 : '',
		pri1: '￥1170起',
		pri2:'￥1299起',
		sp1:'全场9折每满1000减150',
		sp2:'3色可选',
		ht:'专业级家用工作椅',
		li1:'Max Gerthel',
		li2:'Sweden | China',
	},
	{
		proId:11,
		img : 'rx12',
		text : '新深海沉睡床垫',
		sp:'',
		text1 : '',
		pri1: '￥2970起',
		pri2:'￥3299起',
		sp1:'全场9折每满1000减150',
		sp2:'',
		ht:'深海般睡眠，选择好床垫从此变简单',
		li1:'Z-Inhouse',
		li2:'中国 | 北京',
	},
	{
		proId:12,
		img : 'rx13',
		text : '匿 床垫',
		sp:'',
		text1 : '',
		pri1: '￥8640',
		pri2:'￥9599',
		sp1:'全场9折每满1000减150',
		sp2:'',
		ht:'五个减法， 匿入低奢睡眠',
		li1:'Z-Inhouse',
		li2:'中国 | 北京',
	},
	{
		proId:13,
		img : 'rx14',
		text : '铃兰吊灯',
		sp:'',
		text1 : '',
		pri1: '￥1440',
		pri2:'￥1599',
		sp1:'全场9折每满1000减150',
		sp2:'',
		ht:'养一束洁白光芒，让幸福归来',
		li1:'Constance Guisset',
		li2:'France | Paris',
	},
	{
		proId:14,
		img : 'rx19',
		text : '美术馆衣帽架',
		sp:'',
		text1 : '',
		pri1: '￥360起',
		pri2:'￥399起',
		sp1:'全场9折每满1000减150',
		sp2:'3色可选',
		ht:'现代的丰饶，空间的画作',
		li1:'Note Design Studio',
		li2:'Sweden | Stockholm',
	},
	{
		proId:15,
		img : 'rx16',
		text : '造作锦瑟撞色高支4件套床品',
		sp:'TM',
		text1 : '',
		pri1: '￥414起',
		pri2:'￥459起',
		sp1:'全场9折每满1000减150',
		sp2:'7色可选',
		ht:'高支高密贡缎，拥眠珠玉光华',
		li1:'Zelect',
		li2:'中国 | 北京',
	},
	{
		proId:16,
		img : 'rx17',
		text : '造作茶花套碗',
		sp:'TM',
		text1 : '',
		pri1: '￥180起',
		pri2:'￥199起',
		sp1:'全场9折每满1000减150',
		sp2:'2色可选',
		ht:'绽放无四季，叠彩落人间',
		li1:'Constance Guisset',
		li2:'France | Paris',
	},
	{
		proId:17,
		img : 'rx18',
		text : '云笼果盘',
		sp:'',
		text1 : '',
		pri1: '￥180起',
		pri2:'￥199起',
		sp1:'全场9折每满1000减150',
		sp2:'3色可选',
		ht:'Ins级装饰美，给每日鲜果的精彩仪式',
		li1:'Z-Inhouse',
		li2:'中国 | 北京',
	},
	{
		proId:18,
		img : 'rx15',
		text : '新云杉天丝高支4件套床品',
		sp:'TM',
		text1 : '-2020夏季特别版',
		pri1: '￥594起',
		pri2:'￥659起',
		sp1:'全场9折每满1000减150',
		sp2:'6色可选',
		ht:'6款森林新色，轻拥仲夏夜之梦',
		li1:'Zelect',
		li2:'中国 | 北京',
	},];
	
var sofa = [
	{
		proId:0,
		img : 'sofa1',
		text : '飞鸟沙发',
		sp:'',
		text1 : '',
		pri1: '￥4500起',
		pri2:'￥4999起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'3色可选',
		ht:'耸立实木，超大净坐宽，构建空间建筑轮廓',
		li1:'Keiji Ashizawa',
		li2:'Japan | Tokyo',
	},
	{
		proId:1,
		img : 'sofa2',
		text : '云团沙发',
		sp:'®',
		text1 : '',
		pri1: '￥3060起',
		pri2:'￥3399起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'3色可选',
		ht:'云朵软包，给你不愿起身的柔软依靠',
		li1:'Jonas Wagell',
		li2:'Sweden | Stockholm',
	},
	{
		proId:2,
		img : 'sofa3',
		text : 'Sofa T',
		sp:'®',
		text1 : '',
		pri1: '￥4500起',
		pri2:'￥4999起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'3色可选',
		ht:'T形雕塑，无限延伸模块，闪耀空间锋芒',
		li1:'Palomba Serafini Associati',
		li2:'Italy｜Milan',
	},
	{
		proId:3,
		img : 'sofa4',
		text : '造作星期天沙发',
		sp:'TM',
		text1 : '',
		pri1: '￥2700起',
		pri2:'￥2999起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'2色可选',
		ht:'超宽适，全拆洗，全家共享星期天',
		li1:'Zelect',
		li2:'中国 | 北京',
	},
	{
		proId:4,
		img : 'sofa5',
		text : '鹅卵石沙发',
		sp:'',
		text1 : '',
		pri1: '￥2340起',
		pri2:'￥2599起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'2色可选',
		ht:'从斯德哥尔摩到北京的温暖大拥抱',
		li1:'Form Us With Love',
		li2:'Sweden | Stockholm',
	},
	{
		proId:5,
		img : 'sofa6',
		text : '造作大先生沙发',
		sp:'®',
		text1 : '',
		pri1: '￥1620起',
		pri2:'￥1799起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'2色可选',
		ht:'超宽大，极舒适，可拆洗的全尺寸沙发',
		li1:'Zelect',
		li2:'中国 | 北京',
	},
	{
		proId:6,
		img : 'sofa7',
		text : '造作软糖沙发',
		sp:'®',
		text1 : '',
		pri1: '￥2160起',
		pri2:'￥2399起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'4色可选',
		ht:'抢眼形态与糖果色，空间的颜值担当',
		li1:'Yonoh Creative Studio',
		li2:'Spain | Valencia',
	},
	{
		proId:7,
		img : 'sofa8',
		text : '半月湾沙发',
		sp:'TM',
		text1 : '',
		pri1: '￥4500起',
		pri2:'￥4999起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'3色可选',
		ht:'坐入海的臂弯，拥抱片刻逃离的私密海景',
		li1:'Yonoh Creative Studio',
		li2:'Spain | Valencia',
	},
	{
		proId:8,
		img : 'sofa9',
		text : '竖琴沙发',
		sp:'®',
		text1 : '',
		pri1: '￥15300起',
		pri2:'￥16999起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'2色可选',
		ht:'琴形木作雕塑，大宅演奏的永恒乐章',
		li1:'Noé Duchaufour Lawrance',
		li2:'France｜Paris',
	},
	{
		proId:9,
		img : 'sofa10',
		text : 'COFA',
		sp:'®',
		text1 : '',
		pri1: '￥3600起',
		pri2:'￥3999起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'3色可选',
		ht:'一个沙发，宣告现代主义中国',
		li1:'Luca Nichetto',
		li2:'Italy | Sweden',
	},
	{
		proId:10,
		img : 'sofa11',
		text : '造作贝岛沙发',
		sp:'®',
		text1 : '',
		pri1: '￥4500起',
		pri2:'￥4999起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'',
		ht:'纯血法国曲线，勾勒当代摩登韵味',
		li1:'Noé Duchaufour Lawrance',
		li2:'France｜Paris',
	},
];

var frame = [
	{
		proId:0,
		img : 'frame1',
		text : '美术馆电视柜',
		sp:'',
		text1 : '',
		pri1: '￥2970起',
		pri2:'￥3299起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'',
		ht:'现代的丰饶，空间的画作',
		li1:'Note Design Studio',
		li2:'Sweden | Stockholm',
	},
	{
		proId:1,
		img : 'frame3',
		text : '美术馆餐边柜',
		sp:'®',
		text1 : '',
		pri1: '￥4500起',
		pri2:'￥4999起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'3色可选',
		ht:'现代的丰饶，空间的画作',
		li1:'Note Design Studio',
		li2:'Sweden | Stockholm',
	},
	{
		proId:2,
		img : 'frame4',
		text : '美术馆斗柜',
		sp:'®',
		text1 : '',
		pri1: '￥3300',
		pri2:'￥3699',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'',
		ht:'现代的丰饶，空间的画作',
		li1:'Note Design Studio',
		li2:'Sweden | Stockholm',
	},
	{
		proId:3,
		img : 'frame5',
		text : '山雪鞋柜',
		sp:'®',
		text1 : '',
		pri1: '￥1800',
		pri2:'￥1999',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'',
		ht:'进口实木皮，甄选环保基材，全屋清亮留白',
		li1:'Z-Inhouse',
		li2:'中国 | 北京',
	},
	{
		proId:4,
		img : 'frame6',
		text : '造作Yes衣帽架',
		sp:'TM',
		text1 : '',
		pri1: '￥1440',
		pri2:'￥1599',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'',
		ht:'1㎡玄关衣帽间，5分钟完美出门',
		li1:'Yonoh Creative Studio',
		li2:'Spain | Valencia',
	},
	{
		proId:5,
		img : 'frame7',
		text : 'My Deer小鹿衣帽架',
		sp:'®',
		text1 : '',
		pri1: '￥540',
		pri2:'￥599',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'2色可选',
		ht:'生动小鹿，守护你的穿搭爱物',
		li1:'Z-Inhouse',
		li2:'中国 | 北京',
	},
	{
		proId:6,
		img : 'frame8',
		text : '造作星云置屋系',
		sp:'®',
		text1 : '',
		pri1: '￥720起',
		pri2:'￥799起',
		sp1:'全场9折每满1000减150',
		sp0:'',
		sp2:'2色可选',
		ht:'蜂巢形单元设计，自由组配百变星空',
		li1:'Luca Nichetto',
		li2:'Italy | Sweden',
	}
	
];
