(()=>{"use strict";var a={3037:function(a,i,n){var s=n("5893"),o=n("7294"),l=n("745"),e=n("9655"),t=n("9250");let r="section_1-H4ILi2",d="section_03-fSeibE",h="section_1_row_1-F4cROn",u="section_1_row_2-L1yOAW",m="section_1_row_3-aiiulY";var g=n("4326"),c=n("4976");let p="wrapper-HX7RU_",v="wrapper-rSHloO",b="image-UgsBUO",j="postTheme-ARglz8",y="description-UY_xO_";var k=n("7265");function x(a){let{post:i,index:n}=a,o=(0,t.s0)(),l="../../../public"+i.image;return(0,s.jsxs)(k.E.div,{initial:"initial",whileHover:"after",className:`${v} box_shadow`,onClick:()=>o(`/post/${n}`),children:[(0,s.jsx)("img",{src:i.image,alt:"error image",className:b,style:{image:l}}),(0,s.jsx)("div",{className:j,children:i.title}),(0,s.jsx)("div",{className:y,children:i.description})]})}var f=n("1722");function q(){let a=(0,f.v9)(a=>a.post.allPosts);return(0,s.jsx)("div",{className:p,children:null!==a&&(0,s.jsx)(s.Fragment,{children:a.map((a,i)=>(0,s.jsx)(s.Fragment,{children:i>6&&(0,s.jsx)(x,{index:i,post:a},i)}))})})}let A={wrapper:"wrapper-W2IjMg",tempWrapper:"tempWrapper-Bu_G4a",box:"box-HTjZEb",barWrapper:"barWrapper-ZxF10X",bar:"bar-YzBL2r",barElem:"barElem-N3g5YK",button:"button-nc6Xcl"};function I(){let{t:a}=(0,c.$G)(),i=(0,f.v9)(a=>a.post.allPosts),n=(0,t.s0)();return(0,s.jsx)("div",{className:A.wrapper,children:(0,s.jsxs)("div",{className:A.tempWrapper,children:[(0,s.jsx)("div",{className:A.box}),(0,s.jsx)("div",{className:A.barWrapper,children:(0,s.jsx)("div",{className:A.bar,children:i?i.map((i,o)=>(0,s.jsx)(s.Fragment,{children:o<7&&(0,s.jsxs)("div",{className:A.barElem,style:{backgroundImage:i.img},children:[i.title,(0,s.jsx)("button",{className:A.button,size:"small",variant:"contained",color:"error",onClick:()=>n(`post/${o}`),children:a("btnPodrobnee")})]},i)})):(0,s.jsx)(s.Fragment,{})})})]})})}let N="container-tMx5qx",z={wrapper:"wrapper-TWkx3a",logo:"logo-fW_mTH",navList:"navList-hq7Usf",container:"container-eLqXYg",link:"link-GcSCq9",navItem:"navItem-SK5KPo"};var O=n("2655"),S=n("16"),L=n("3310"),w=n("9058"),T=n("7208"),M=n("326"),R=n("3357");function E(){let{t:a,i18n:i}=(0,c.$G)(),n=(0,t.TH)().pathname.split("/"),l=["","posts","contacts"],e=window.localStorage.getItem("selectedLanguage"),[r,d]=(0,o.useState)(l.includes(n[1])?l.indexOf(n[1]):0),[h,u]=(0,o.useState)(window.innerWidth),[m,g]=(0,o.useState)(null!==e?e:"ru"),p=[{name:a("linkHome"),path:"/",link:"/"},{name:a("linkPosts"),path:"/posts",link:"/posts"},{name:a("linkAbout"),path:"/about",link:"/about"},{name:a("linkContacts"),path:"contacts"}],v=(0,t.s0)(),[b,j]=o.useState(null),[y]=o.useState(null),k=()=>{j(null)},x=a=>{v(p[a].path),d(a)},f=a=>{let n=a.target.value;e=n,window.localStorage.setItem("selectedLanguage",n),g(n),i.changeLanguage(n),window.location.reload()};return(0,o.useEffect)(()=>{window.addEventListener("resize",()=>u(window.innerWidth))},[]),(0,s.jsx)("div",{className:z.wrapper,children:(0,s.jsx)("div",{className:`${z.container} box_shadow`,children:h>670?(0,s.jsxs)(R.M,{children:[(0,s.jsx)("img",{src:"/public/main_logo.png",alt:"",className:z.logo,onClick:()=>v("/")}),(0,s.jsxs)("div",{className:z.navList,children:[p.map((a,i)=>(0,s.jsx)(P,{item:a,isSelected:r===i,handleClick:()=>x(i)},a.name)),(0,s.jsx)("button",{className:"btn",children:a("btnHeader")}),(0,s.jsx)("span",{children:(0,s.jsxs)("select",{onChange:f,value:m,children:[(0,s.jsx)("option",{value:"ru",children:"ru"}),(0,s.jsx)("option",{value:"en",children:"en"}),(0,s.jsx)("option",{value:"uz",children:"uz"}),(0,s.jsx)("option",{value:"kz",children:"kz"})]})})]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(L.Z,{sx:{flexGrow:1,display:{xs:"flex",md:"none"},color:"text.primary"},className:"",children:[(0,s.jsx)(w.Z,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:a=>{j(a.currentTarget)},color:"red",children:(0,s.jsx)(M.default,{})}),(0,s.jsx)(O.Z,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:!!b,onClose:k,sx:{display:{xs:"block",md:"none"}},children:p.map((a,i)=>(0,s.jsx)(S.Z,{onClick:()=>{k(),v(0===i?"/":`/${a.path}`)},children:(0,s.jsx)(T.Z,{textAlign:"center",children:a.name.toUpperCase()})},a))})]}),(0,s.jsx)("span",{className:z.lang,children:(0,s.jsxs)("select",{onChange:f,value:m,children:[(0,s.jsx)("option",{value:"ru",children:"ru"}),(0,s.jsx)("option",{value:"en",children:"en"}),(0,s.jsx)("option",{value:"uz",children:"uz"}),(0,s.jsx)("option",{value:"kz",children:"kz"})]})})]})})})}function P(a){let{item:i,isSelected:n,handleClick:o}=a;return(0,s.jsxs)(k.E.div,{onClick:o,className:z.navItem,initial:{color:"#000"},animate:{color:n?"#0056D6":"#000"},children:[n&&(0,s.jsx)(H,{}),i.name.toUpperCase()]})}function H(){return(0,s.jsx)(k.E.div,{layoutId:"activeItem",style:{width:"25px",height:"2px",position:"absolute",bottom:"8px",backgroundColor:"#0056D6"}})}let C="wrapper-CmFWEQ";function D(){return(0,s.jsx)("div",{className:`${C} box_shadow`})}let _="wrapper-q0B15X",U="header-p4jvGg",G="avatar-c4noaq",B="postInfo-pKNXDH",F="postInfo_col-RfgyEM",Q="postInfo_font-Swlu8A",Z="main-ETsJIO";function V(a){let{post:i,index:n}=a,{t:o}=(0,c.$G)(),l=(0,t.s0)();return(0,s.jsxs)("div",{className:`${_} box_shadow`,onClick:()=>l(`/post/${n}`),children:[(0,s.jsxs)("div",{className:U,children:[(0,s.jsx)("img",{src:"/user.png",alt:"",className:G}),(0,s.jsxs)("div",{className:B,children:[(0,s.jsx)("div",{className:F,children:(0,s.jsx)("div",{className:Q,children:o("postAvtor")+":"})}),(0,s.jsx)("div",{className:F,children:i.author.map((a,n)=>(0,s.jsxs)("div",{className:Q,children:[a,n+1!==i.author.length&&","]}))})]})]}),(0,s.jsxs)("div",{className:Z,children:[(0,s.jsx)("img",{style:{marginTop:5},src:i.image,alt:""}),(0,s.jsx)("p",{children:i.description})]})]})}let K="wrapper-fj1JDf",W="wrapper-aibHVA",Y="title-S4xnHg",X="lines-wwEiPq",J="line-TLf8Yk",$="lines2-TUNT_G",aa="line2-K1DVar",ai="footer-MC8qc2",an="lines3-wb7ggO",as="line3-kkdfNV";n("3811");let ao={container:"container-rPcAFT",header:"header-HqjiJ9",avatar:"avatar-Lebmvt",section_1:"section_1-sMQuBt",section1:"section_1-sMQuBt",postImage:"postImage-HovY3T"},al=(0,e.aj)((0,t.i7)((0,s.jsx)(t.AW,{children:(0,s.jsxs)(t.AW,{path:"/",element:(0,s.jsx)(function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(E,{}),(0,s.jsx)("div",{className:N,children:(0,s.jsx)(t.j3,{})}),(0,s.jsx)(D,{})]})},{}),children:[(0,s.jsx)(t.AW,{index:!0,element:(0,s.jsx)(function(){let{t:a}=(0,c.$G)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:`${r} box_shadow`,children:(0,s.jsxs)(g.Z,{maxWidth:"xl",children:[(0,s.jsx)(k.E.div,{initial:"hidden",whileInView:"visible",className:h}),(0,s.jsx)(k.E.p,{initial:"hidden",whileInView:"visible",custom:1,variants:{hidden:{x:-100,opacity:0},visible:a=>({x:0,opacity:1,transition:{delay:.2*a}})},className:u,children:"THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE"}),(0,s.jsx)(k.E.p,{initial:"hidden",whileInView:"visible",custom:2,variants:{hidden:{x:100,opacity:0},visible:a=>({x:0,opacity:1,transition:{delay:.2*a}})},className:`${m}`,children:a("mainH2")}),(0,s.jsx)(I,{})]})}),(0,s.jsx)("div",{className:d,children:(0,s.jsx)(q,{})})]})},{})}),(0,s.jsx)(t.AW,{path:"posts",element:(0,s.jsx)(function(){let a=(0,f.v9)(a=>a.post.allPosts);return(0,s.jsx)("div",{className:K,children:a&&a.map((a,i)=>(0,s.jsx)(V,{index:i,post:a}))})},{})}),(0,s.jsx)(t.AW,{path:"post/:id",element:(0,s.jsx)(function(){let{id:a}=(0,t.UO)(),i=(0,f.v9)(a=>a.post.allPosts);return console.log(`public${i[a].image}`),(0,o.useEffect)(()=>{document.documentElement.scrollTop=0}),(0,s.jsxs)("div",{className:ao.container,children:[(0,s.jsxs)("div",{className:`${ao.header} box_shadow`,children:[(0,s.jsx)("img",{src:"/user.png",alt:"erroruser",className:ao.avatar}),(0,s.jsx)("div",{children:i[a].author.length>1?(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:["Авторы :",i[a].author.map(a=>(0,s.jsxs)("div",{children:[a+",","\xa0\xa0\xa0"]}))]}):(0,s.jsx)("div",{className:"",children:i[a].author})})]}),(0,s.jsxs)("div",{className:ao.section_1,children:[(0,s.jsx)("img",{src:i[a].image,alt:"errorimage",className:ao.postImage}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("strong",{children:i[a].title}),(0,s.jsx)("p",{children:i[a].description})]})]}),(0,s.jsx)("a",{href:i[a].linkPdf,target:"_blank",className:ao.btn,children:"Открыть PDF файл"})]})},{})}),(0,s.jsx)(t.AW,{path:"about",element:(0,s.jsx)(function(){return(0,s.jsxs)("div",{className:W,children:[(0,s.jsx)("p",{className:`${Y}`,children:"THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE jurnali O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi axborot va ommaviy kommunikatsiyalar agentligi tomonidan 2024-yil 5-dekabr kuni taqdim etilgan № 516376 GUVOHNOMA asosida o‘z faoliyatini boshlad"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{className:Y,children:"THE ROLE OF AGRICULTURE AND MEDICINE IN SCIENCE jurnali Toshkent davlat agrar universiteti huzurida o‘z faoliyatini olib bor"}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{className:Y,children:["Jurnal ushbu ixtisosliklarda maqolalarni nashr"," "]}),(0,s.jsxs)("div",{className:X,children:[(0,s.jsxs)("div",{className:J,children:[(0,s.jsx)("span",{children:"06.00.00"}),(0,s.jsx)("span",{children:"Qishloq xo‘jaligi yo‘nalish sohalari."})]}),(0,s.jsxs)("div",{className:J,children:[(0,s.jsx)("span",{children:"08.00.04"}),(0,s.jsx)("span",{children:"Qishloq xo‘jaligi iqtisodiyoti yo‘nalishi."})]}),(0,s.jsxs)("div",{className:J,children:[(0,s.jsx)("span",{children:"14.00.00"}),(0,s.jsx)("span",{children:"Meditsina sohasi yo‘nalishlari."})]}),(0,s.jsxs)("div",{className:J,children:[(0,s.jsx)("span",{children:"16.00.00"}),(0,s.jsx)("span",{children:"Veterinariya sohasi yo‘nalishlari."})]})]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:$,children:[(0,s.jsxs)("div",{className:aa,children:["Tarqatilish xududi - ",(0,s.jsx)("strong",{children:" Respublika miqiyosida"})]}),(0,s.jsx)("div",{className:aa,children:"OAV tili - O‘zbek, rus, ingiliz, qoraqalpoq va qozoq tillarida"}),(0,s.jsx)("div",{className:aa,children:"Jurnal rahbari: Turg‘unov Azizbek Normat o‘g‘li"})]}),(0,s.jsx)("div",{className:ai,children:"Manzil: Toshkent viloyati, Qibray tumani Universitet ko‘chasi 2-uy"})]})},{})}),(0,s.jsx)(t.AW,{path:"contacts",element:(0,s.jsx)(function(){return(0,s.jsxs)("div",{className:W,children:[(0,s.jsx)("div",{className:ai,children:"Manzil: Toshkent viloyati, Qibray tumani Universitet ko‘chasi 2-uy"}),(0,s.jsxs)("div",{className:an,children:[(0,s.jsx)("div",{className:as,children:"Toshkent davlat agrar universiteti Bosh bino Ilmiy bo‘lim"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:as,children:"Telegram: @Azizbek_1711"}),(0,s.jsxs)("div",{className:as,children:["Email:",(0,s.jsx)("a",{href:"mailto:agriculture.medicine.journal@gmail.com",children:"agriculture.medicine.journal@gmail.com"})]})]})]})},{})}),(0,s.jsx)(t.AW,{path:"*",element:(0,s.jsx)(function(){return(0,s.jsx)("div",{children:"NotFound 404"})},{})})]})})));var ae=n("994"),at=n("8278"),ar=n("4537");ae.ZP.use(at.Z).use(ar.Z).use(c.Db).init({fallbackLng:"ru",debug:!0});var ad=n("3672");let ah=(0,ad.oM)({name:"post",initialState:{allPosts:[{title:"ГЛОБАЛ ИҚЛИМ ЎЗГАРИШИ ШАРОИТИДА АМАРАНT ЎСИМЛИГИНИ ЕТИШТИРИШ ВА ҚАЙТА ИШЛАШ САМАРАДОРЛИГИ",linkPdf:"https://drive.google.com/file/d/1JUAS9OKh4zQC5sjHmeczrNcILDQnaOux/view?usp=sharing",img:"url(./post/amarant.jpg)",image:"/post/amarant.jpg",author:["Халилова Саида Усмонжановна","Турғунов Азизибек Нормат уғли"],description:`Аннотация. Ушбу мақолада сув танқислиги, тупроқ структурасини
                ўзгариб бориши ва қишлоқ хўжалиги ўртасидаги ўзаро боғлиқлик уларнинг
                бир-бирига қандай таъсир қилишини таҳлил қилиш, ушбу муаммоларни ҳал
                қилишнинг янги стратегияларини ишлаб чиқиш билан биргаликда географик
                жиҳатдан мақбул ўсимликларни танлаб экишга асосланади. Қолаверса
                ресурстежамкор технологиялардан фойдаланиш, суғориш ва ўғитлашда мақбул
                меъёрни аниқлаш, инновацион ёндашув билан глобал қурғоқчилик ва тупроқ
                унумдорлигига таъсир этувчи омилларни бартараф этиш, махаллий ва доривор
                ўсимликлардан хавфсиз озиқ-овқат хом-ашёларини олиш мақсади илгари
                сурилди.`},{title:"УЗУМНИНГ ТОВАРБОПЛИГИ, ВАЗН ЙЎҚОТИШИ ВА САҚЛАШ МУДДАТИНИ АНИҚЛАШ УСУЛИ",linkPdf:"https://drive.google.com/file/d/1LyAdvKWZxdg9YfYz8dpFUlwB4_39rPm7/view?usp=sharing",img:"url(./post/grapes.jpg)",image:"/post/grapes.jpg",author:["Юсупов Нурали Шералиевич","Бозарова Гулноза Каримжон кизи","Юсупова Навруза Равшанбек қизи","Қурбонов Улуғбек Фарход ўғли"],description:`Аннотация: Мақола Фарғона вилоятида етиштирилган узумнинг
                товарбоплиги, вазн йўқотиши ва сақлаш муддатини аниқлаш ва сақлашга
                яроқлий узум навларини аниқлаш усулларини ўрганишдан иборат.`},{title:"МАЙМУНЖОН ВА МАЛИНА КЎЧАТЛАРИНИ ЯРИМ ЁГОЧЛАНГАН ҚАЛАМЧАЛАРНИНГ ИЛДИЗ ОТИШИГА СТИМУЛИЯТОРЛАРНИ ТАЪСИРИ",linkPdf:"https://drive.google.com/file/d/15QOMGDQYgOjfLMpbxFFi2e61us7JRExE/view?usp=sharing",img:"url(./post/raspberry.jpg)",image:"/post/raspberry.jpg",author:["Валиева Шоира Абдивосиовна"],description:`Ушбу маколадa республикамизга кириб келаётган ва
                иқлимлаштиришдан ўтган резавор мевалар кўчатларини тайёрлашда стимулятор
                ва субстратларнинг ахамияти бир нечта усуллари, уларнинг афзаллик томонлари
                келтириб ўтилган.
                Хар бир усулнинг ижобий ва камчилик томонлари кенг ёритилиб ўтилган.
                Шу билан бирга бугунги кунда мевачилик сохасининг иқтисодий
                самарадорлигини ошириш ва мевали ўсимликлар турлари ассортиментини
                кенгайтириш асосида аҳоли озиқ-овқат хавфсизлигини таъминлаш ва
                витаминларга бой бўлган сифатли меваларга бўлган таълабни қондириш бўйича
                қатор илмий ва амалий ишлар олиб борилмоқда. Республикамиз ва дунё
                хамжамияти томонидан озиқ-овқат хавфсизлиги ва ахолини сифатли озиқ-
                овкатларига бўлган таълабини қондиришда, аввалом бор боғлар ва
                плантацияларни яратилиши шартлиги ва ушбу плантациялар учун соглом
                сифатли кўчат етиштириш кераклиги таъкидлаб ўтилган.
                Резавор мева бўлган маймунжон ва малина навларини ярим ёғочланган
                қаламчалари корневинда (назорат), Янтарная (Бурштиновая) кислотасининг
                ишчи эритмасида, Radifarm стимуляторнинг ишчи эритмасида, Giren Belt
                стимуляторнинг ишчи эритмасида маймунжон ва малина қаламчаларда илдиз
                отиш кўрсаткичлари аникланган.`},{title:"ФОРМИРОВАНИЕ СТИМУЛ-ЧУВСТВИТЕЛЬНЫХ НАНОКОНТЕЙНЕРОВ МИКРОГЕЛЬ-ЛИПОСОМЫ И ИЗУЧЕНИЕ ИХ СВОЙСТВ.",linkPdf:"https://drive.google.com/file/d/1sQXxNj_Y0gw3BPmcG7FegFLPZObISiUk/view?usp=sharing",img:"url(./post/formmik.jpg)",image:"/post/formmik.jpg",author:["Бозарова Гулноза Каримжон кизи","Юсупов Нурали Шералиевич"],description:`Аннотация: в этой статье проводится исследование по формированию
                стимул-чувствительных наноконтейнеров микрогель-липосомы и изучение их
                свойств. Прежде всего проводится исследование по влиянию поверхностной
                плотности заряда и размера липосом на свойства комплексов микрогель-
                липосомы. Для достижения цели исследуется агрегация в системе микрогель-
                липосомы; высвобождение веществ из липосом, адсорбированных на микрогеле
                при 25 и 50 С; также устойчивость в водно-солевых средах.`},{title:"СПОСОБЫ ХРАНЕНИЯ РАЗНЫХ СТОЛОВЫХ СОРТОВ ВИНОГРАДА ОТ МИКРОБИОЛОГИЧЕСКОГО ВОЗДЕЙСТВИЯ ПРИ ДЛИТЕЛЬНОМ ХРАНЕНИИ.",linkPdf:"https://drive.google.com/file/d/1E7d9l7mKibX1yHmINnDsH3Cuvd5_Ohtj/view?usp=sharing",img:"url(./post/vinog.jpg)",image:"/post/vinog.jpg",author:["Юсупов Нурали Шералиевич","Бозарова Гулноза Каримжон кизи","Юсупова Навруза Равшанбек қизи"],description:`Аннотация. В этой статье рассматривается воздействие влажности и
                температуры воздуха на микробиологические изменения, происходящие в
                процессе транспортирвоки, а также при длительном классическим и
                современном способами хранения. Подбирается оптимальная температура,
                влажность воздуха и применяется защитная бумага, пропитанная
                метабисульфатом натрия для удлинения срока хранения разных столовых сортов
                винограда широко распространённых в Ферганской области республики
                Узбекистан.`},{title:"РАЗРАБОТКА УСЛОВИЙ СТАБИЛИЗАЦИИ ИММУНОГЛОБУЛИНОВ В СИСТЕМЕ RPR-ТЕСТОВ НА СИФИЛИС",linkPdf:"https://drive.google.com/file/d/180L-zVDaWzAc1S2RiASAR9ZbPh4yWuWa/view?usp=sharing",img:"url(./post/molek.jpg)",image:"/post/molek.jpg",author:["Юсупов Нурали Шералиевич","Бозарова Гулноза Каримжон кизи","Юсупова Навруза Равшанбек қизи"],description:`Аннотация: в статье рассмотрены вопросы изучения условий
                стабилизации иммуноглобулинов в системе RPR-теста на сифилис. Проведены
                экспериментальные исследования по стабилизации иммуноглобулинов в
                исследуемых образцах.`},{title:"ВЛИЯНИЕ ТЯЖЕЛЫХ МЕТАЛЛОВ (Ni, Zn и Cd) НА РОСТОВЫЕ ПРОЦЕССЫ КАРТОФЕЛЯ СОРТА ДЕЗИРЕ",linkPdf:"https://drive.google.com/file/d/19b3v3TAbBNauVOJPSwkLDsnet3-rR-Bm/view?usp=sharing",img:"url(./post/potata.jpg)",image:"/post/potata.jpg",author:["Юсупов Нурали Шералиевич","Бозарова Гулноза Каримжон кизи","Юсупова Навруза Равшанбек қизи"],description:`Аннотация: в статье рассматривается влияние тяжёлых металлов Ni, Zn и
                Cd на ростовые процессы и физиологические развития картофеля Дезире с
                применением микрочеренкового метода в питательной среде Мурасиге и Скуга,
                с разными концентрациями солей цинка, никеля и кадмия в культуре in vitro.`},{title:"ҚУРИТИШБОП ОЛХЎРИ НАВЛАРИНИНГ ТЕХНОЛОГИК ХУСУСИЯТЛАРИ ВА БИОКИМЁВИЙ ТАРКИБИНИ ТАҲЛИЛ ҚИЛИШ",linkPdf:"https://drive.google.com/file/d/1Nh6wLIJ5iEl-RKj66tzyllTI1-cuREu-/view?usp=sharing",img:"url(./post/plum.jpg)",image:"/post/plum.jpg",author:["Исламов Соҳиб Яхшибекович","Эрмакова Жамилахон Мухаммадовна"],description:`Аннотация. Мазкур мақолада қуритишбоп олхўри навларинининг
                технологик хусусиятлари ва биокимёвий таркибини ўрганиш бўйича
                тадқиқотлар натижалари берилган. Бу мақолада, тажрибалар учун танлаб
                олинган қуритишбоп олхўри навларининг асосий кўрсаткичлари таҳлил
                қилинган ҳамда тадқиот натижасида илмий асосланган хулосалар берилган.`},{title:"ҚУРИТИШБОП ОЛХЎРИ НАВЛАРИНИ АГРОБИОЛОГИК ХУСУСИЯТЛАРИНИНГ ТАҲЛИЛИ",linkPdf:"https://drive.google.com/file/d/17ao8kSXw-fN_ZKpUfk1vM3qiS4SMMmqD/view?usp=sharing",img:"url(./post/driedplum.jpg)",image:"/post/driedplum.jpg",author:["Исламов Соҳиб Яхшибекович","Эрмакова Жамилахон Мухаммадовна"],description:`Аннотация. Мазкур мақолада қуритишбоп олхўри навларинининг
                технологик хусусиятлари ва биокимёвий таркибини ўрганиш бўйича
                тадқиқотлар натижалари берилган. Бу мақолада, тажрибалар учун танлаб
                олинган қуритишбоп олхўри навларининг асосий кўрсаткичлари таҳлил
                қилинган ҳамда тадқиот натижасида илмий асосланган хулосалар берилган.`},{title:"ҚУРИТИШБОП ЎРИК НАВЛАРИНИ ҚУРИТИШДА ДАСТЛАБКИ ИШЛОВ БЕРИШНИ ТАКОМИЛЛАШТИРИШ",linkPdf:"https://drive.google.com/file/d/16xj61O97cXoDxem3KtQiGjWMRjC95dka/view?usp=sharing",img:"url(./post/abrocos.jpg)",image:"/post/abrocos.jpg",author:["Эрмакова Жамилахон Мухаммадовна"],description:`Аннотация. Бу мақолада қуритишбоп ўрик навлари ҳосилини штабел
                усулида қуритганда ишқор билан ишлов беришнинг маҳсулот сифати ва
                жараённинг жаддаллигига таъсирини ўрганиш бўйича тажрибалар
                натижалари таҳлил қилиб чиқилган. Тажрибалар натижасида қуритишбоп
                ўрик навларини штабел усулида қуритилгандан кейин унинг органолептик
                хусусиятларини баҳолаш учун муҳим бўлган кўрсаткичларнинг мезонлари
                ўрганилган. Тадқиқот натижасида илмий асосланган хулосалар баён қилинган.`},{title:"1-MCP ETILEN INGIBITORI BILAN ISHLOV BERILGAN BEHI MEVASINI SAQLASHDA SIFAT O‘ZGARISHLARI",linkPdf:"https://drive.google.com/file/d/1QujkrMko8IX8jcajw73SPrIUeuoCcCVG/view?usp=sharing",img:"url(./post/quince.jpg)",image:"/post/quince.jpg",author:["Uzoqov Islom Toshpulat o‘g‘li","Turg‘unov Azizbek Normat o‘g‘li"],description:`Annotatsiya. Meva-sabzavotchilik xo‘jaligining muvaffaqiyati nafaqat yuqori
                hosil, balki ularni asrab-avaylash qobiliyati bilan ham belgilanadi. Yaroqlilik
                muddatini yaxshilash saqlash va tashish paytida yo‘qotishlarni kamaytiradi. 35% gacha
                vazn yo‘qotish nafas olish paytida suv yo‘qotilishi tufayli sodir bo‘ladi. Har bir meva
                va sabzavot turi uchun ruxsat etilgan namlikni yo‘qotish normasi mavjud. Agar
                me’yordan oshib ketgan bo‘lsa, mahsulot iste’mol sifatini yo‘qotadi va uni sotish
                mumkin emas. Kasallik tufayli yo‘qotishlar 100% ga yetishi mumkin. Mikozlar va
                bakterial infektsiyalar chirishga va mog‘orga olib keladi. Mexanik shikastlanish ham
                yo‘qotishlarning sabablaridan biridir. Ayniqsa, saqlash oxirida va tashish paytida.
                Sabzavotlar va mevalar yumshoqroq bo‘lib, kuchini yo‘qotadi. Ushbu maqolada behi
                mevasini 1-MCP etilen ingibitori bilan saqlashning samodorligi aniqlashga oid
                tadqiqot natijalari keltirilgan.`},{title:"XORAZM VILOYATI SHAROITIDA NOK KO‘CHATLARINI YETISHTIRISH TEXNOLOGIYASI TAKOMILLASHTIRISH",linkPdf:"https://drive.google.com/file/d/1bYJp6AvBtZ0Ot3FzCPihZv1PAQ3WvId-/view?usp=sharing",img:"url(./post/pear.jpg)",image:"/post/pear.jpg",author:["Botirov Alisher Erkinovich q.x.f.f.d(phD)","Saporbayev Ko‘palboy","Ro‘zmetov Anvarbek"],description:`Annotatsiya: Nok ko‘chatlarini urug’idan ekib ko‘paytiriladi ammo uni bir
                qancha ularlari mavjud ko‘paytirish uchun ularni eng asosiysi bu vegetativ o‘rganlari
                yordamida ko‘paytirish bo‘lib chunki bu ona organizmni o‘zi hisoblanadi. Vegetativ
                ko‘paytirish generativ usulga qaraganda tez bo‘ladi generativ ko‘paytirishda faqat
                yangi nav yaratish uchun ishlatiladi lekin buning uchun bir necha o‘n yil vaqt sarflanadi
                vegetativda esa faqat ona belgilarini nomoyon etadi. Generativda ham otani ham onani
                yaxshi belgilarini o‘zida mujassam etgan yangi organizm vujudga keledi bu organizm
                ota-onaga qaraganda kuchli hayotchan bo‘ladi. O‘simlikning o‘sib rivojlanishiga ekish
                sxemasi va payvandtaglarni ta’sirini o‘rganiladi.`},{title:"RESPUBLIKAMIZ SHAROITIDA QOVUN DALALARIDA ZAMBURUG‘LAR QO‘ZG‘ATADIGAN KASALLIKLARNING O‘RGANILGANLIK DARAJASI VA HOZIRGI HOLATI",linkPdf:"https://drive.google.com/file/d/1IpI_DsIJKKFAKmg6mCSsu3vbeyy7hQkd/view?usp=sharing",img:"url(./post/melon.jpg)",image:"/post/melon.jpg",author:["Shomirzoyev Asliddin Avazovich","Raxmonov Ubaydullo Normamadovich2","Turg‘unov Azizbek Normat o‘g‘li"],description:`Annotatsiya. Qovun dalalarida o‘simliklarning vegetatsiya davrida qovunlarni
                yig‘ib olgungacha kuzatish ishlari olib borildi. Shu vaqt ichida yig‘ilgan gerbariy
                namunalarini mikologiya va fitopatologiyada qabul qilingan uslublar asosida gerbariy
                namunalari tayyorlab borildi. Tayyorlab borilgan namunalardan kaslliklar ajratib
                olindi`},{title:"ORGANIK USULDA YETISHTIRILGAN QULUPNAY MEVASINI SAQLASH VA QAYTA ISHLASHNI TAKOMILLASHTIRISH",linkPdf:"https://drive.google.com/file/d/1bYJp6AvBtZ0Ot3FzCPihZv1PAQ3WvId-/view?usp=sharing",image:"/post/strawberry.jpg",author:["Turg‘unov Azizbek Normat o‘g‘li","Bo‘riyeva Sojida Eshmurod qizi"],description:`Annotatsiya. Qulupnay - qisqa muddatli hosilga ega meva. Qulupnay o‘ziga xos
                ta’mi, ozuqaviy qiymati va nozikligi bilan butun dunyoda mashhur. Boshqa tomondan,
                qulupnayni saqlash muddatini uzaytirish ularning tez buziladigan tabiati tufayli katta
                qiyinchilik tug‘dirdi. Mavjud oziq-ovqat mahsulotlarini qayta ishlash va saqlash
                texnologiyasidan samarali va barqaror foydalanish uchun vaqt kerak. Mevalarni
                uzoqroq muddatga saqlash uchun tadqiqotchilar sovuqxona, o‘zgartirilgan atmosfera
                qadoqlash (MAP), salqin do‘kon, boshqariladigan atmosfera ombori (CA), turli
                qadoqlash usullari va turli fizik-kimyoviy ishlov berish kabi ilg‘or usullardan
                foydalanish texnologiyalarini ishlab chiqmoqda. Saqlash usullaridan tashqari,
                polisaxaridga asoslangan iste’mol qilish mumkin bo‘lgan ba’zi qoplamalar mavjud
                bo‘lib, ular mevaning yumshatilishini, mevalarning parchalanishini kechiktirish,
                askorbin kislotasi va fenollarning yuqori darajasini saqlab turish, antioksidant
                fermentlarning faolligini oshirish va membrana shikastlanishini kamaytirishda hal
                qiluvchi rol o‘ynaydi. Meva yig‘ishtirib olingandan keyingi bosqichlarda
                qulupnayning xavfsizligi va sifati bilan bog‘liq ko‘plab tahdidlar mavjud. Ushbu
                maqolada biz turli xil saqlash texnologiyalarining afzalliklari va kamchiliklarini,
                shuningdek, yangi hosil qilingan qulupnayni uzoq muddat saqlash uchun ularni qayta
                ishlashning zamonaviy texnologiyalarini muhokama qilamiz.`},{title:"PROSPECTS FOR IMPROVING THE RISK MANAGEMENT SYSTEM IN FOOD PRODUCTION",linkPdf:"https://drive.google.com/file/d/1DAYndZJt5xcSZV6s1UdL5glDmpVIsFRY/view?usp=sharing",img:"url(./post/food.jpg)",image:"/post/food.jpg",author:["D.V.Khakimov","Kh.J.Roziokhunova","D.B.Rajabov"],description:`Abstract: In this article, the general issues and hypotheses of improving the
                quality system based on risk management in food enterprises are considered. To
                improve risk management, develop a risk assessment plan taking into account all
                possible risks associated with food production, a systematic approach to identify and
                control potential risks during the production process, and throughout the production
                process it is necessary to develop and implement a comprehensive food safety training
                program for employees to ensure effective risk reduction.`},{title:"SAQLASHDAN OLDIN ANTIMIKROBIAL MODDALAR BILAN LIMON MEVASIGA ISHLOV BERISH",linkPdf:"https://drive.google.com/file/d/14ELZ3UQPJ4D7CtN2rHeuyrNCCXjzCGEZ/view?usp=sharing",img:"url(./post/lemon.jpg)",image:"/post/lemon.jpg",author:["Raximova Dilfuza"],description:`Annotatsiya. Muammo mevalarni yig‘ib olingandan keyin xavfsiz va samarali
                qayta ishlash texnologiyalarini aniqlashdir. Maqsadga erishish uchun limon mevalari
                kesilib, har bir bo‘lak Miramistin va Dekasanning 0,1 %, 0,3 %, va 0,5 %
                konsentratsiyalardagi eritmalari bilan ishlov berildi. Namunalari patogenlarning sof
                madaniyatlari bo‘lgan agar bloklariga joylashtirilib, nam Petri idishlariga solindi va
                termostatda 25 \xb0C haroratda 6-10 kun davomida saqlandi, tajriba uch marta takrorlandi.
                Tadqiqot limonlarni qayta ishlash uchun antimikrob preparatlarning konsentratsiyasini
                aniqlash, saqlash haroratiga qarab limon mevalarining massa yo‘qotilishini aniqlashga
                qaratilgan. Limon mevalarini saqlash vaqtida ko‘k va yashil mog‘or rivojlanishini
                to‘xtatish maqsadida ularni 0,3 % va 0,5 % konsentratsiyalarda Miramistin va Dekasan
                bilan ishlov berish taklif etiladi. Saqlash harorati 10 \xb0C bo‘lganda mevalar 40–45 kun
                saqlanadi. Shu bilan birga, kunlik yo‘qotishlar 0,49 % ni tashkil etadi. Saqlash
                haroratini 4 \xb0C ga tushirish saqlash muddatini 90-100 kungacha uzaytiradi, kunlik
                massa yo‘qotilishi esa 0,08 % ni tashkil etadi. Antiseptiklar bilan ishlov berish
                kimyoviy sintez qilingan fungitsidlarni chiqarib tashlash va hosil yig‘ib olingandan
                keyin yangi sitrus mevalarining tabiiy xususiyatlarini saqlab qolish, shuningdek
                ularning saqlash muddatini uzaytirish imkonini beradigan ekologik toza echimlarni
                amalga oshirish imkonini beradi. Yangi, arzon, ekologik toza va qulay texnologiyalarni
                ishlab chiqishda bu muhim usul hisoblanadi.`},{title:"O‘RIK MEVALARINI SOVUTIB SAQLASh JARAYoNIDA SIFATINI BAHOLASh USULLARI",linkPdf:"https://drive.google.com/file/d/1OOmcNnrz1HiMFoB-LSrFI7rjOE2HxdK_/view?usp=sharing",img:"url(./post/apricot.jpg)",image:"/post/apricot.jpg",author:["Odinaev Mirzahmad Isaevich","Turg‘unov Azizbek Normat o‘g‘li"],description:`Аnnоtatsiya: Ushbu maqolada Respublikamizda yetishtirilayotgan saqlashga
                mo‘ljallangan o‘rik mevalarini orgonaliptik ko‘rsatkichlari to‘g‘risida ilmiy
                mulohazalar, amaliyotga asoslangan va sinalgan amaliy takliflar va tavsiyalar
                keltirilgan. Maqola eksportga yo‘naltirilgan danakli mahsulotlardan biri bo‘lgan o‘rik
                turini amaliy tadqiqotlaridan kelib chiqan natijalarga asoslangan.`},{title:"POMIDORGA QOʻYILGAN STANDART TALABLARINI QIYOSIY TAHLILI",linkPdf:"https://drive.google.com/file/d/18gqMWId4b4ZBEOZwnSED3SLba0gVaFkl/view?usp=sharing",img:"url(./post/tomato.jpg)",image:"/post/tomato.jpg",author:["Xakimov Dilmurod Valijon oʻgʻli","Abdurahmanov Obidjon Xamidovich","Rajabov Doniyorbek Bahtiyorovich"],description:`Annotatsiya: Ushbu maqolada yurtimizda yetishtirilib eksportga tayyorlangan
                yangi uzulgan pomidorlarga qo’yilgan milliy, davlatlararo va xalqaro standartlarning
                qiyosiy tahlili keltirilgan bo’lib, bu orqali savdodagi texnik to’siqlarni oldini olish
                hamda mahsulotni eksport qilishda import qilib olayotgan davlatning talablari asosida
                tayyorlash masalalari ko’rib chiqilgan.`},{title:"MAXSAR NAVLARINING POYA BALANDLIGIGA EKISH SXEMASI VA MUDDATINING TA’SIRI",linkPdf:"https://drive.google.com/file/d/1MofZw0dzMr0fa3a2OmTxhUUwF1fEvPzs/view?usp=sharing",img:"url(./background/post_background_5.jpg)",image:"/post/post_background_5.jpg",author:["Saporbayev Ko‘palboy","Ro‘zmetov Anvarbek"],description:`Anatatsiya: Maxsar o’simligi urug’ida moy bo’lib asason bu o’simlikning o’sib
                rivojlanishiga ekish sxemasi va muddatining ta’sirini Jizzax-1 va Milyutinskiy-114
                navlarida olib borildi va olib borilgan fenologik kuzatuvlar natijasiga ko’ra ekish
                sxemasidan 60x15 va ekish muddatidan 10.-03 muddatda ekilgan urug’larning
                biometerik ko’rsatgichlari yuqori bo’lganligi isbotlandi.`},{title:"AHOLINI SIFATLI OZIQ –OVQAT MAXSULOTLARI BILAN TA’MINLASHNI TAKOMILLASHTIRISH",linkPdf:"https://drive.google.com/file/d/1UiDoo5pxwRFkZozeo-XxHbbkucJmnenc/view?usp=sharing",img:"url(./post/food3.jpg)",image:"/post/food3.jpg",author:["Mo‘ydinov Boburjon Muzzafar o‘g‘li","Anarbayev Muhammad Pardaboy o‘g‘li","Aminov In’omjon Sobir o‘g‘li"],description:`Annotatsiya: Maqolada aholining oziq-ovqat mahsulotlari bilan
                ta'minlanishidagi muammolar va ularni hal qilish yo'llari ko‘rib chiqilgan. Maqolada
                aholi sonining o‘sishi, iqlim o‘zgarishlari va iqtisodiy tangliklar natijasida oziq-ovqat
                mahsulotlariga talab oshayotgani ta’kidlanadi. BMT va Butunjahon sog‘liqni saqlash
                tashkilotlari ma'lumotlariga ko‘ra, dunyoda 840 milliondan ortiq odam to‘yib
                ovqatlanmayapti, bu esa jiddiy global muammolarga sabab bo‘lmoqda. Maqolada
                O‘zbekiston Respublikasida oziq-ovqat xavfsizligini ta’minlash bo‘yicha olib
                borilayotgan islohotlar va amalga oshirilgan chora-tadbirlar ham keng yoritilgan.
                Shuningdek, meva-sabzavot mahsulotlarini saqlash va qayta ishlash sohasida
                modernizatsiya jarayonlari va innovatsion yondashuvlarning ahamiyati ham ko‘rsatib
                o‘tilgan`},{title:"INNOVATSION TEXNOLOGIYALARNI QO’LLAGAN HOLDA URUG‘LI MEVALARNI QURITISH",linkPdf:"https://drive.google.com/file/d/1Ef1yXC1Jn_5v95hhjMLhvHDHqdbCpJB_/view?usp=sharing",img:"url(./post/fruits22.jpg)",image:"/post/fruits22.jpg",author:["Safarov Asqar Asadullayevich","Mo‘ydinov Boburjon Muzzafar o‘g‘li","Anarbayev Muhammad Pardaboy o‘g‘li"],description:`Annotatsiya: Ushbu maqolada urug‘li mevalarni innovatsion texnologiyalar
                asosida quritish jarayonlari o‘rganilgan. Tadqiqotda yuqori chastotali nur beruvchi
                uskunalar yordamida mevalarni qayta ishlash usullari va mahsulot sifatini yaxshilash
                imkoniyatlari ko‘rib chiqilgan. Quritish jarayonining mahsulot sifatiga, uning saqlash
                muddatiga va tayyor mahsulot chiqishiga ta’siri tadqiq qilingan. Natijalar shuni
                ko‘rsatadiki, yuqori chastotali nurlar bilan ishlov berish mahsulotning namligini
                pasaytiradi va saqlash muddatini uzaytiradi. Ushbu texnologiya mevalarni isrof
                qilmasdan qayta ishlashda samarali hisoblanadi va oziq-ovqat mahsulotlarining
                eksport salohiyatini oshirishga yordam beradi.`}]}}).reducer,au=(0,ad.xC)({reducer:{post:ah}});l.createRoot(document.getElementById("root")).render((0,s.jsx)(o.StrictMode,{children:(0,s.jsx)(f.zt,{store:au,children:(0,s.jsxs)(e.pG,{router:al,children:[(0,s.jsx)(o.Suspense,{fallback:(0,s.jsx)("div",{className:"",children:"Loading..."})}),(0,s.jsx)(function(){return(0,s.jsx)(s.Fragment,{})},{})]})})}))}},i={};function n(s){var o=i[s];if(void 0!==o)return o.exports;var l=i[s]={exports:{}};return a[s](l,l.exports,n),l.exports}n.m=a,n.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(i,{a:i}),i},(()=>{var a,i=Object.getPrototypeOf?function(a){return Object.getPrototypeOf(a)}:function(a){return a.__proto__};n.t=function(s,o){if(1&o&&(s=this(s)),8&o||"object"==typeof s&&s&&(4&o&&s.__esModule||16&o&&"function"==typeof s.then))return s;var l=Object.create(null);n.r(l);var e={};a=a||[null,i({}),i([]),i(i)];for(var t=2&o&&s;"object"==typeof t&&!~a.indexOf(t);t=i(t))Object.getOwnPropertyNames(t).forEach(function(a){e[a]=function(){return s[a]}});return e.default=function(){return s},n.d(l,e),l}})(),n.d=function(a,i){for(var s in i)n.o(i,s)&&!n.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:i[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(a){if("object"==typeof window)return window}}(),n.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},n.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},(()=>{var a=[];n.O=function(i,s,o,l){if(s){l=l||0;for(var e=a.length;e>0&&a[e-1][2]>l;e--)a[e]=a[e-1];a[e]=[s,o,l];return}for(var t=1/0,e=0;e<a.length;e++){for(var s=a[e][0],o=a[e][1],l=a[e][2],r=!0,d=0;d<s.length;d++)(!1&l||t>=l)&&Object.keys(n.O).every(function(a){return n.O[a](s[d])})?s.splice(d--,1):(r=!1,l<t&&(t=l));if(r){a.splice(e--,1);var h=o();void 0!==h&&(i=h)}}return i}})(),n.rv=function(){return"1.1.8"},(()=>{var a={980:0};n.O.j=function(i){return 0===a[i]};var i=function(i,s){var o=s[0],l=s[1],e=s[2],t,r,d=0;if(o.some(function(i){return 0!==a[i]})){for(t in l)n.o(l,t)&&(n.m[t]=l[t]);if(e)var h=e(n)}for(i&&i(s);d<o.length;d++)r=o[d],n.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return n.O(h)},s=self.webpackChunkvite_project=self.webpackChunkvite_project||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))})(),n.ruid="bundler=rspack@1.1.8";var s=n.O(void 0,["361","118","468"],function(){return n("3037")});s=n.O(s)})();