const countries = [
    {
        "name": "대한민국",
        "english_name": "South Korea",
        "capital": "서울",
        "english_capital": "Seoul",
        "major_cities": ["서울", "부산", "인천", "대구", "대전", "광주", "울산", "수원"],
        "english_major_cities": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Suwon"],
        "unesco_sites": [
            { "name": "석굴암과 불국사", "english_name": "Seokguram Grotto and Bulguksa Temple", "image_url": "https://i.namu.wiki/i/SM2Wse6Bq6SuWMcvEYMxZVpPHkuuL5rizXMrS4-jbDcjuZIQqKFt4IrrLNgu4g7GC27xXAkTYPsfTylDH3uIdff2fmtIwvKBpzyz65jABcoeb5dLtCr4o42SBfmmjNDqOQEeEW1xbdJz82FSFWgOaQ.webp" },
            { "name": "해인사 장경판전", "english_name": "Haeinsa Temple Janggyeong Panjeon, the Depositories for the Tripitaka Koreana Woodblocks", "image_url": "https://i.namu.wiki/i/Y3W9yY47iBUNjfh5ylv-GO_W7fjFSbyi2X21CXdQeVuIJlBThWt4YzATxrzmnNlhPTWoMPf8dXYRLZbUbqbB4uThO8rCh5MQgeZ33qi-n5z0YFF-cK5ZD4_EKhYNZrqcpX21rbnYlOP0sQcK-ovw3Q.webp" },
            { "name": "종묘", "english_name": "Jongmyo Shrine", "image_url": "https://cdn.jbnews.com/news/photo/201811/1223339_1024149_4337.jpg" },
            { "name": "창덕궁", "english_name": "Changdeokgung Palace Complex", "image_url": "https://img.seoul.co.kr/img/upload/2022/04/20/SSI_20220420172707_O2.jpg" },
            { "name": "화성", "english_name": "Hwaseong Fortress", "image_url": "https://www.telltrip.com/wp-content/uploads/2025/06/Suwon-National-Heritage-Night-Tour-4.jpg" },
            { "name": "고창, 화순, 강화 고인돌 유적", "english_name": "Gochang, Hwasun, and Ganghwa Dolmen Sites", "image_url": "https://i.namu.wiki/i/HQpvkjh8J5Y-Bg75YI6n8c2MVq1dNiY3-3CkuV6QoNAR6oU6iaYh37pTFceBqeON_-4twgPm9jln8u8x6CHhP5QgCojTUEunHB7AF1LuBc_pg0hNMR5uHaiYEQHMRvQXQe5rbf3KsGaVWDiQh0zmcw.webp" }
        ]
    },
    {
        "name": "일본",
        "english_name": "Japan",
        "capital": "도쿄",
        "english_capital": "Tokyo",
        "major_cities": ["도쿄", "오사카", "나고야", "삿포로", "후쿠오카", "고베"],
        "english_major_cities": ["Tokyo", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe"],
        "unesco_sites": [
            { "name": "히메지 성", "english_name": "Himeji-jo", "image_url": "https://i.namu.wiki/i/etCOer_VN1wly4Foo4HDHCLniaO5AjmWjODhgA8i7aLbvHIFucmB2Ms8Fo90Ae1d2ruhIB89UyVfevzH70-MMx4hyuC4HoHJBx0wDfNMigfedmoBllvSiAXRVFhDdcEd6qJ8y7PPhhPvHRIiA0pQrg.webp" },
            { "name": "고도 교토의 문화재", "english_name": "Historic Monuments of Ancient Kyoto (Kyoto, Uji and Otsu Cities)", "image_url": "https://www.agoda.com/wp-content/uploads/2024/09/Shitennoji-Temple-pagoda-Osaka-Japan-featured-1244x700.jpg" },
            { "name": "시라카와고와 고카야마의 역사 마을", "english_name": "Historic Villages of Shirakawa-go and Gokayama", "image_url": "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=535,height=400,dpr=2/tour_img/81e213a43401c24bf210a1616ce142e0319631024d9443952015262b126d66de.jpg" },
            { "name": "히로시마 평화기념관 (원폭 돔)", "english_name": "Hiroshima Peace Memorial (Genbaku Dome)", "image_url": "https://image.dive-hiroshima.com/wp-content/uploads/2022/01/HB118-B-1024x787.jpg" }
        ]
    },
    {
        "name": "중국",
        "english_name": "China",
        "capital": "베이징",
        "english_capital": "Beijing",
        "major_cities": ["베이징", "상하이", "충칭", "톈진", "광저우", "선전"],
        "english_major_cities": ["Beijing", "Shanghai", "Chongqing", "Tianjin", "Guangzhou", "Shenzhen"],
        "unesco_sites": [
            { "name": "만리장성", "english_name": "Great Wall", "image_url": "https://i.namu.wiki/i/AjJRkTF6X8gy7rMfpsX2SA0az6fuRo0-MSXfnbBgwUemwT9GrVCKI7I2kz-nE3ryeML85j9rcri09RsKNLqcPo4NGw0Axv40nXNBA24BD31aNI7CYHzHsqEnwMP4A9FBFNV48omzPHFLLASP8eJ7kw.webp" },
            { "name": "명청 시대의 황궁 (자금성)", "english_name": "Imperial Palaces of the Ming and Qing Dynasties in Beijing and Shenyang", "image_url": "https://i.namu.wiki/i/vk9GduGypge1XyyYVEP53g0-UbuO7KSwnlpJ_wV6P9hcnyfOD0qDiZpkL8DDvi2osufTlF_neRTuqcoN3zVHJgZ0ORb1GMTFB6p5Im7EGergf1d3Qjy7k1Ca7gWbxkRX2cGyp7ozg3hqg3CSLsmHzA.webp" },
            { "name": "진시황릉과 병마용", "english_name": "Mausoleum of the First Qin Emperor", "image_url": "https://news.kbs.co.kr/data/news/2019/09/15/4282939_EP3.jpg" },
            { "name": "모가오 석굴", "english_name": "Mogao Grottoes", "image_url": "https://wimg.munhwa.com/news/cms/2026/01/15/news-p.v1.20260115.3caba467275c4169921f5799dc61eedd_P1.png" },
            { "name": "황산", "english_name": "Mount Huangshan", "image_url": "https://img9.yna.co.kr/photo/yna/YH/2010/03/30/PYH2010033005030001300_P4.jpg" }
        ]
    },
    {
        "name": "미국",
        "english_name": "United States",
        "capital": "워싱턴 D.C.",
        "english_capital": "Washington D.C.",
        "major_cities": ["워싱턴 D.C.", "뉴욕", "로스앤젤레스", "시카고", "휴스턴", "피닉스"],
        "english_major_cities": ["Washington D.C.", "New York City", "Los Angeles", "Chicago", "Houston", "Phoenix"],
        "unesco_sites": [
            { "name": "그랜드 캐니언 국립공원", "english_name": "Grand Canyon National Park", "image_url": "https://i.namu.wiki/i/9Lm9qVwvriAf8g2udDqIpUgFeYcgyHqMLcAVq63crPd2wyj1M0oiFt8AOnnGIQJ3W8Mk51GC9CrcOl7iiu8xnt8E3hXfQ46WAno1yMDXbrR1pzhRq1jpfV1X5kiuwr0Lzwaht4suiagj8VCk6WWXYg.webp" },
            { "name": "요세미티 국립공원", "english_name": "Yosemite National Park", "image_url": "https://i.namu.wiki/i/0gw4ObsXgIbrybDGusVol0qwqfWrSc7uOAHIx881X0u2zIeNTREo7NgRDROnpYAjEuv31R9cMD9iF38R9GLMKvnzJjhKkitWlfIp3zXpiKQ8k8T0of4s41wB-ad4vxXA3EhgPLJ1Ye6JzXf-2L0u5w.webp" },
            { "name": "옐로스톤 국립공원", "english_name": "Yellowstone National Park", "image_url": "https://i.namu.wiki/i/07u-N4Im_YbnsB8ZUemxZXosNEiiZdXRmkRarJSd0wTdOyUvMz6W80ZgUMXY5j87bKUaGPsYVLhIkrCHecBUeq3F1MkM2Fjm0mA4ew2hSxrUSHbZVFX_wXAohapVSJlt7OFJjv8AmCezO3ntiuIrZg.webp" },
            { "name": "자유의 여신상", "english_name": "Statue of Liberty", "image_url": "https://image.kkday.com/v2/image/get/c_fill%2Ch_800%2Cq_55%2Ct_jpg%2Cw_1240/s1.kkday.com/product_176978/20240520033005_nfP4N/jpg" },
            { "name": "독립기념관", "english_name": "Independence Hall", "image_url": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/543000/543320-center-city-philly.jpg" }
        ]
    },
    {
        "name": "캐나다",
        "english_name": "Canada",
        "capital": "오타와",
        "english_capital": "Ottawa",
        "major_cities": ["오타와", "토론토", "몬트리올", "밴쿠버", "캘거리", "에드먼턴"],
        "english_major_cities": ["Ottawa", "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton"],
        "unesco_sites": [
            { "name": "캐나다 로키 산맥 공원", "english_name": "Canadian Rocky Mountain Parks", "image_url": "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/e58e1b21-dd7a-44a5-aeed-c795a242ffb1.jpeg" },
            { "name": "퀘벡 역사 지구", "english_name": "Historic District of Old Québec", "image_url": "https://www.travelnbike.com/news/photo/201704/36806_33553_367.jpg" },
            { "name": "나하니 국립공원", "english_name": "Nahanni National Park", "image_url": "http://www.rabkorea.co.kr/wp-content/uploads/2017/09/IMG_1434-960x640.jpg" },
            { "name": "루넌버그 옛 시가지", "english_name": "Old Town Lunenburg", "image_url": "https://cdn.sommeliertimes.com/news/photo/202311/126087_59667_2221.jpg" }
        ]
    },
    {
        "name": "브라질",
        "english_name": "Brazil",
        "capital": "브라질리아",
        "english_capital": "Brasília",
        "major_cities": ["브라질리아", "상파울루", "리우데자네이루", "사우바도르", "포르탈레자", "벨루오리존치"],
        "english_major_cities": ["Brasília", "São Paulo", "Rio de Janeiro", "Salvador", "Fortaleza", "Belo Horizonte"],
        "unesco_sites": [
            { "name": "오루 프레투 역사 도시", "english_name": "Historic Town of Ouro Preto", "image_url": "https://turismo.b-cdn.net/wp-content/uploads/2023/08/Ouro-Preto-MG.jpg" },
            { "name": "살바도르 역사 지구", "english_name": "Historic Centre of Salvador de Bahia", "image_url": "https://www.tripsavvy.com/thmb/VmmP0BeJRfJR7ee6Fj29_BXOP2k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-127674813-57a36b3f3df78cf4590bb491.jpg" },
            { "name": "이과수 국립공원", "english_name": "Iguazu National Park", "image_url": "https://res.cloudinary.com/enchanting/f_auto,q_70,w_900,h_490,c_fill/et-web/2018/08/Enchanting-Travels-Brazil-Tours-National-park-of-Iguazu-Falls.jpg" },
            { "name": "브라질리아", "english_name": "Brasília", "image_url": "https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/article/brz_clt_wh_brasilia_congress_blue_unesco-edsonfogaca.jpg.webp?itok=-YLHF-uv" }
        ]
    },
    {
        "name": "아르헨티나",
        "english_name": "Argentina",
        "capital": "부에노스아이레스",
        "english_capital": "Buenos Aires",
        "major_cities": ["부에노스아이레스", "코르도바", "로사리오", "멘도사", "라플라타"],
        "english_major_cities": ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "La Plata"],
        "unesco_sites": [
            { "name": "로스 글라시아레스 국립공원", "english_name": "Los Glaciares National Park", "image_url": "https://www.tripsavvy.com/thmb/HuTfSy2KqBFbhc5dJlWu1__MH0I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/perito-moreno-glacier-los-glaciares-national-park--argentina-948695436-1d6cd29eb1d34a20903cc5367c51b48e.jpg" },
            { "name": "이과수 국립공원", "english_name": "Iguazu National Park", "image_url": "https://res.cloudinary.com/enchanting/f_auto,q_70,w_900,h_490,c_fill/et-web/2018/08/Enchanting-Travels-Iguazu-Falls-Argentina-Tours-1.jpg" },
            { "name": "케브라다 데 우마우아카", "english_name": "Quebrada de Humahuaca", "image_url": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/77/fc/d8.jpg" },
            { "name": "코르도바의 예수회 유적", "english_name": "Jesuit Block and Estancias of Córdoba", "image_url": "https://whc.unesco.org/uploads/thumbs/site_0995_0001-750-750-20130206164854.webp" }
        ]
    },
    {
        "name": "멕시코",
        "english_name": "Mexico",
        "capital": "멕시코시티",
        "english_capital": "Mexico City",
        "major_cities": ["멕시코시티", "과달라하라", "몬테레이", "푸에블라", "티후아나"],
        "english_major_cities": ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana"],
        "unesco_sites": [
            { "name": "멕시코시티 역사 지구와 소치밀코", "english_name": "Historic Centre of Mexico City and Xochimilco", "image_url": "https://www.worldtribune.org/wp-content/uploads/sites/2/2023/09/MexicoCity_GettyImages-1222229296.jpeg" },
            { "name": "고대 마야 도시 팔렌케", "english_name": "Ancient Maya City of Palenque", "image_url": "https://images.squarespace-cdn.com/content/v1/5a87961cbe42d637c54cab93/1561133547725-4CA95R9OIPYN79VYDA3R/palenque-ruins-guide-in-mexico.jpg?format=2500w" },
            { "name": "테오티우아칸의 고대 도시", "english_name": "Pre-Hispanic City of Teotihuacan", "image_url": "https://www.thehistoryhub.com/wp-content/uploads/2015/02/Pre-Hispanic-City-of-Teotihuacan.jpg" },
            { "name": "치첸 이차", "english_name": "Pre-Hispanic City of Chichen-Itza", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/2560px-Chichen_Itza_3.jpg" }
        ]
    },
    {
        "name": "영국",
        "english_name": "United Kingdom",
        "capital": "런던",
        "english_capital": "London",
        "major_cities": ["런던", "버밍엄", "맨체스터", "글래스고", "리버풀", "브리스톨"],
        "english_major_cities": ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Bristol"],
        "unesco_sites": [
            { "name": "웨스트민스터 궁전, 웨스트민스터 사원과 세인트 마가렛 교회", "english_name": "Palace of Westminster and Westminster Abbey including Saint Margaret’s Church", "image_url": "https://unesco.org.uk/site/assets/files/1769/palace_of_westminster_2_-_aerial.jpeg" },
            { "name": "런던탑", "english_name": "Tower of London", "image_url": "https://cardiff.imgix.net/__data/assets/image/0004/2930206/GettyImages-2191932808.jpg?w=873&h=491&fit=crop&q=60&auto=format" },
            { "name": "스톤헨지", "english_name": "Stonehenge, Avebury and Associated Sites", "image_url": "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_1920,h_960,g_auto/dpr_auto/f_auto/q_auto:eco/v1/d8785430-77ae-45e9-9d4c-daa3b42f79b2?_a=BAVAZGID0" },
            { "name": "에든버러 옛 시가지와 새 시가지", "english_name": "Old and New Towns of Edinburgh", "image_url": "https://www.authenticvacations.com/wp-content/uploads/2019/04/Old-Edinburgh-850x450-1.jpg" }
        ]
    },
    {
        "name": "프랑스",
        "english_name": "France",
        "capital": "파리",
        "english_capital": "Paris",
        "major_cities": ["파리", "마르세유", "리옹", "툴루즈", "니스", "낭트"],
        "english_major_cities": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes"],
        "unesco_sites": [
            { "name": "파리 센 강변", "english_name": "Paris, Banks of the Seine", "image_url": "https://www.drycreekvalley.org/wp-content/uploads/2025/02/a9570050-f9f6-4515-be29-907a22459a2b-sunset-view-of-eiffel-tower-and-seine-river-in-paris-france.-architecture-and-landmarks-of-paris-catarina-belova-shutterstock_713556034-2000.jpg" },
            { "name": "베르사유 궁전과 공원", "english_name": "Palace and Park of Versailles", "image_url": "https://www.nyhabitat.com/blog/wp-content/uploads/2013/04/hall-mirrors-palace-versailles-paris.jpg" },
            { "name": "샤르트르 대성당", "english_name": "Chartres Cathedral", "image_url": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyiSwrPnyhg3r77-kcIIevxeH0EFnJ31MCGPW7vyWxb5gt4QXdAFqq-5qPoZSorFao9KZTBap-imvpo87zsthStkVQY15SlQT003vu86ty5dfTtdEAqgWQFF5qpfhOmRBmQDHfC_VIR5Q/s1600/P1320416.jpg" },
            { "name": "몽생미셸과 그 만", "english_name": "Mont-Saint-Michel and its Bay", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Mont_St_Michel_at_sunrise.jpg/2560px-Mont_St_Michel_at_sunrise.jpg" }
        ]
    },
    {
        "name": "독일",
        "english_name": "Germany",
        "capital": "베를린",
        "english_capital": "Berlin",
        "major_cities": ["베를린", "함부르크", "뮌헨", "쾰른", "프랑크푸르트", "슈투트가르트"],
        "english_major_cities": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart"],
        "unesco_sites": [
            { "name": "쾰른 대성당", "english_name": "Cologne Cathedral", "image_url": "https://img.destination.one/remote/.webp?url=https%3A%2F%2Fdam.destination.one%2F1511504%2F37487a7a473e316f8f7c5ccfac6dbc6a3604dd9919f6d78827024af6abe0086c%2Fcologne-cathedral.jpg&scale=both&mode=crop&quality=90&width=2560&height=1707&focuspoint=-0.05,0.34" },
            { "name": "무제움스인젤 (베를린)", "english_name": "Museum Island, Berlin", "image_url": "https://www.frasershospitality.com/content/dam/frasers-hospitality/english/fraser-cachet/moments/2022/how-to-spend-24-hours-on-berlins-museum-island/Berlin_Article_Cover_1200x650.jpg" },
            { "name": "라인 계곡 중류", "english_name": "Upper Middle Rhine Valley", "image_url": "https://whc.unesco.org/uploads/thumbs/site_1066_0012-750-750-20151105101739.webp" },
            { "name": "아헨 대성당", "english_name": "Aachen Cathedral", "image_url": "https://loiclagarde.com/wp-content/uploads/2020/01/Allemagne-Germany-UNESCO-aachen-Aix-la-Chapelle-01-2.jpg" }
        ]
    },
    {
        "name": "이탈리아",
        "english_name": "Italy",
        "capital": "로마",
        "english_capital": "Rome",
        "major_cities": ["로마", "밀라노", "나폴리", "토리노", "팔레르모"],
        "english_major_cities": ["Rome", "Milan", "Naples", "Turin", "Palermo"],
        "unesco_sites": [
            { "name": "로마 역사 지구, 바티칸 시국의 특별 재산과 산 파올로 푸오리 레 무라 대성전", "english_name": "Historic Centre of Rome, the Properties of the Holy See in that City enjoying Extraterritorial Rights and San Paolo Fuori le Mura", "image_url": "https://govisity.com/wp-content/uploads/2019/12/Historic-Centre-of-Rome-the-Properties-of-the-Holy-See-in-that-City-Enjoying-Extraterritorial-Rights-and-San-Paolo-Fuori-le-Mura-UNESCO-Italy.jpg" },
            { "name": "피렌체 역사 지구", "english_name": "Historic Centre of Florence", "image_url": "https://www.zainoo.com/blog/en/files/2018/02/historic-centre-florence-768x541.jpg" },
            { "name": "베네치아와 그 석호", "english_name": "Venice and its Lagoon", "image_url": "https://lifeinitaly.com/wp-content/uploads/2018/10/Italy-best-e-life-in-Italy-19.png" },
            { "name": "폼페이, 헤르쿨라네움, 토레 아눈치아타 고고 유적", "english_name": "Archaeological Areas of Pompei, Herculaneum and Torre Annunziata", "image_url": "https://www.fondazionesantagata.it/wp-content/uploads/Pompei-sito-UNESCO-500x500.png" }
        ]
    },
    {
        "name": "스페인",
        "english_name": "Spain",
        "capital": "마드리드",
        "english_capital": "Madrid",
        "major_cities": ["마드리드", "바르셀로나", "발렌시아", "세비야", "사라고사"],
        "english_major_cities": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"],
        "unesco_sites": [
            { "name": "알함브라, 헤네랄리페, 알바이신 (그라나다)", "english_name": "Alhambra, Generalife and Albaicín, Granada", "image_url": "https://whc.unesco.org/uploads/thumbs/site_0314_0001-1000-750-20151105152955.jpg" },
            { "name": "바르셀로나의 안토니 가우디 건축", "english_name": "Works of Antoni Gaudí", "image_url": "https://media.soundoflife.com/articles/397/Sound_of_Life_-_God_s_Architect_-_Antoni_Gaudi_s_5_Most_Famous_Works.jpg" },
            { "name": "코르도바 역사 지구", "english_name": "Historic Centre of Cordoba", "image_url": "https://www.mustseespots.com/img/spain/historic-centre-of-cordoba.jpg" },
            { "name": "세비야 대성당, 알카사르, 인디아스 고문서관", "english_name": "Cathedral, Alcázar and Archivo de Indias in Seville", "image_url": "https://genuineandalusia.com/wp-content/uploads/2021/03/UNESCO-World-Heritage-Sites-Seville-Cathedral.jpg" }
        ]
    },
    {
        "name": "러시아",
        "english_name": "Russia",
        "capital": "모스크바",
        "english_capital": "Moscow",
        "major_cities": ["모스크바", "상트페테르부르크", "노보시비르스크", "예카테린부르크", "니즈니노브고로드"],
        "english_major_cities": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod"],
        "unesco_sites": [
            { "name": "모스크바 크렘린과 붉은 광장", "english_name": "Kremlin and Red Square, Moscow", "image_url": "https://www.historyhit.com/app/uploads/bis-images/5161720/The-Kremlin-1576x1074.jpg" },
            { "name": "상트페테르부르크 역사 지구와 관련 기념물군", "english_name": "Historic Centre of Saint Petersburg and Related Groups of Monuments", "image_url": "https://www.orangesmile.com/extreme/img/main/historic-centre-of-saint-petersburg_1.jpg" },
            { "name": "바이칼 호수", "english_name": "Lake Baikal", "image_url": "https://imcdn.cdnpic.net/720x368/BC_18c20d1ebb3cb47a7990e6e845f7881d100dc1127c56e7ef42d429b488125b4d.jpeg" }
        ]
    },
    {
        "name": "우크라이나",
        "english_name": "Ukraine",
        "capital": "키예프",
        "english_capital": "Kyiv",
        "major_cities": ["키예프", "하르키우", "오데사", "드니프로", "도네츠크"],
        "english_major_cities": ["Kyiv", "Kharkiv", "Odesa", "Dnipro", "Donetsk"],
        "unesco_sites": [
            { "name": "키예프 성 소피아 대성당과 관련 수도원 건물들, 키예프 페체르스크 라브라", "english_name": "Kyiv: Saint-Sophia Cathedral and Related Monastic Buildings, Kyiv-Pechersk Lavra", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/%D0%9B%D0%B0%D0%B2%D1%80%D0%B0.jpg/500px-%D0%9B%D0%B0%D0%B2%D1%80%D0%B0.jpg" }
        ]
    },
    {
        "name": "인도",
        "english_name": "India",
        "capital": "뉴델리",
        "english_capital": "New Delhi",
        "major_cities": ["뉴델리", "뭄바이", "델리", "벵갈루루", "하이데라바드", "아마다바드"],
        "english_major_cities": ["New Delhi", "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad"],
        "unesco_sites": [
            { "name": "타지마할", "english_name": "Taj Mahal", "image_url": "https://www.thoughtco.com/thmb/-4Et-8zwhMIMqh9Uo_na5ZN2am8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg" },
            { "name": "아그라 요새", "english_name": "Agra Fort", "image_url": "https://www.historyhit.com/app/uploads/bis-images/5150656/Agra-Fort-1576x1074.jpg" },
            { "name": "엘로라 동굴", "english_name": "Ellora Caves", "image_url": "https://www.indiaholidaymall.com/images/blog/Ellora-Caves-Unesco-World-Heritage-Site.jpg" },
            { "name": "함피 유적군", "english_name": "Group of Monuments at Hampi", "image_url": "roup of Monuments at Hampi" },
            { "name": "쿠트브 미나르와 그 기념물군", "english_name": "Qutb Minar and its Monuments, Delhi", "image_url": "https://akm-img-a-in.tosshub.com/sites/media2/indiatoday/images/stories/2017April/qutub1_042717100950.jpg" }
        ]
    },
    {
        "name": "태국",
        "english_name": "Thailand",
        "capital": "방콕",
        "english_capital": "Bangkok",
        "major_cities": ["방콕", "논타부리", "나콘랏차시마", "치앙마이", "핫야이"],
        "english_major_cities": ["Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Hat Yai"],
        "unesco_sites": [
            { "name": "수코타이 역사 도시와 관련 역사 도시", "english_name": "Historic Town of Sukhothai and Associated Historic Towns", "image_url": "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/496943291_23914768821461045_5616072633325150056_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=lChLfvkpMtEQ7kNvwF72PdQ&_nc_oc=AdnSJbHX969SHpLJqs7nKJWwlmQxaB1CxeGBiNjNY87F7e0W7Ive2ZWb9n2_dQPbUv8&_nc_zt=23&_nc_ht=scontent-ssn1-1.xx&_nc_gid=c-gYcn-i9RkFGEMyT98O3w&oh=00_AfqoATBMCarMhgiw0_xcvv_IiFZyjy-M0OF-B9i9X1U8xA&oe=6976E525" },
            { "name": "아유타야 역사 도시", "english_name": "Historic City of Ayutthaya", "image_url": "https://www.renown-travel.com/images/ayutthaya-historical-park-l.webp" }
        ]
    },
    {
        "name": "베트남",
        "english_name": "Vietnam",
        "capital": "하노이",
        "english_capital": "Hanoi",
        "major_cities": ["하노이", "호찌민", "다낭", "하이퐁", "껀터"],
        "english_major_cities": ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hai Phong", "Can Tho"],
        "unesco_sites": [
            { "name": "하롱베이", "english_name": "Ha Long Bay", "image_url": "https://ambassadorcruise.com/wp-content/uploads/2022/04/Ban-sao-halong-bay-patkay-away-header-0125.webp" },
            { "name": "후에 기념물 복합 지구", "english_name": "Complex of Hué Monuments", "image_url": "https://imagevietnam.vnanet.vn//MediaUpload/Org/2022/08/15/03-cong-dat-15-10-8-56.jpg" },
            { "name": "호이안 고대 도시", "english_name": "Hoi An Ancient Town", "image_url": "https://cdn.tripspoint.com/uploads/photos/13510/hoi-an-ancient-town_xpbfu.jpeg" },
            { "name": "미선 유적", "english_name": "My Son Sanctuary", "image_url": "https://fvgtravel.com.vn/uploads/up/root/editor/2025/05/20/19/33/w1230/tha1747722808_5733.jpg" }
        ]
    },
    {
        "name": "인도네시아",
        "english_name": "Indonesia",
        "capital": "자카르타",
        "english_capital": "Jakarta",
        "major_cities": ["자카르타", "수라바야", "반둥", "메단", "세마랑"],
        "english_major_cities": ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang"],
        "unesco_sites": [
            { "name": "보로부두르 사원", "english_name": "Borobudur Temple Compounds", "image_url": "https://media.assettype.com/outlooktraveller%2F2024-05%2F3c27af62-847f-4050-ad33-4bf9b0e218a2%2Fborobudur_1.jpg?w=1200&auto=format%2Ccompress&fit=max" },
            { "name": "프람바난 사원", "english_name": "Prambanan Temple Compounds", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Candi_Prambanan%3B_candi_Hindu_terindah_di_Asia_Tenggara.jpg/2560px-Candi_Prambanan%3B_candi_Hindu_terindah_di_Asia_Tenggara.jpg" },
            { "name": "코모도 국립공원", "english_name": "Komodo National Park", "image_url": "https://peakvisor.com/photo/SD/Komodo-National-Park.jpg" },
            { "name": "수마트라 열대우림 유산", "english_name": "Tropical Rainforest Heritage of Sumatra", "image_url": "https://worldheritagesites.net/wp-content/uploads/2022/07/sumatran_orangutan_bukit_lawang.jpg" }
        ]
    },
    {
        "name": "호주",
        "english_name": "Australia",
        "capital": "캔버라",
        "english_capital": "Canberra",
        "major_cities": ["캔버라", "시드니", "멜버른", "브리즈번", "퍼스", "애들레이드"],
        "english_major_cities": ["Canberra", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
        "unesco_sites": [
            { "name": "그레이트 배리어 리프", "english_name": "Great Barrier Reef", "image_url": "https://www.montereyboats.com/zupload/library/832/-2424-1000x700-0.jpg?ztv=20160415123402" },
            { "name": "카카두 국립공원", "english_name": "Kakadu National Park", "image_url": "https://www.kakadutourism.com/images/blog/Gunlom-lower-falls-pool.jpg" },
            { "name": "시드니 오페라 하우스", "english_name": "Sydney Opera House", "image_url": "https://cdn-imgix.headout.com/tour/20072/TOUR-IMAGE/d85280d5-3c4f-4f54-bd7a-6fc5cc68597f-10732-sydney-sydney-and-bondi-tour-with-sydney-opera-house-tour-01.jpg?auto=format&w=1051.2&h=540&q=90&fit=fit" },
            { "name": "프레이저 아일랜드", "english_name": "K'gari (Fraser Island)", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/LakeMcKenzieNov112024.jpg/2560px-LakeMcKenzieNov112024.jpg" }
        ]
    },
    {
        "name": "뉴질랜드",
        "english_name": "New Zealand",
        "capital": "웰링턴",
        "english_capital": "Wellington",
        "major_cities": ["웰링턴", "오클랜드", "크라이스트처치", "해밀턴", "타우랑가"],
        "english_major_cities": ["Wellington", "Auckland", "Christchurch", "Hamilton", "Tauranga"],
        "unesco_sites": [
            { "name": "통가리로 국립공원", "english_name": "Tongariro National Park", "image_url": "https://res.cloudinary.com/odysseytraveller/image/fetch/f_auto,q_auto,dpr_auto,w_765,h_536,c_limit/https://cdn.odysseytraveller.com/app/uploads/2020/05/Emerald-Lakes-scaled.jpg" },
            { "name": "테 와히포우나무 (남서 뉴질랜드)", "english_name": "Te Wahipounamu – South West New Zealand", "image_url": "https://www.stravon.com/sites/default/files/styles/3x2/public/Lake%20Matheson.jpg?itok=SjU8FQUa" }
        ]
    },
    {
        "name": "이집트",
        "english_name": "Egypt",
        "capital": "카이로",
        "english_capital": "Cairo",
        "major_cities": ["카이로", "알렉산드리아", "기자", "슈브라엘케이마", "포트사이드"],
        "english_major_cities": ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said"],
        "unesco_sites": [
            { "name": "고대 테베와 네크로폴리스", "english_name": "Ancient Thebes with its Necropolis", "image_url": "https://www.hostelman.com/wp-content/uploads/2015/11/6234_Luxor-Temple.jpg" },
            { "name": "이집트 이슬람 카이로", "english_name": "Islamic Cairo", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flickr_-_archer10_%28Dennis%29_-_Egypt-13A-061.jpg/2560px-Flickr_-_archer10_%28Dennis%29_-_Egypt-13A-061.jpg" },
            { "name": "아부 심벨에서 필레까지의 누비아 기념물군", "english_name": "Nubian Monuments from Abu Simbel to Philae", "image_url": "https://whc.unesco.org/uploads/thumbs/site_0088_0001-750-750-20120820105715.webp" },
            { "name": "멤피스와 그 네크로폴리스", "english_name": "Memphis and its Necropolis – from the Pyramid Fields from Giza to Dahshur", "image_url": "https://www.godigit.com/content/dam/godigit/directportal/en/memphis-and-its-necropolis-pyramid.jpeg" }
        ]
    },
    {
        "name": "남아프리카공화국",
        "english_name": "South Africa",
        "capital": "프리토리아",
        "english_capital": "Pretoria",
        "major_cities": ["프리토리아", "요하네스버그", "케이프타운", "더반", "포트엘리자베스"],
        "english_major_cities": ["Pretoria", "Johannesburg", "Cape Town", "Durban", "Port Elizabeth"],
        "unesco_sites": [
            { "name": "이사망갈리소 습지 공원", "english_name": "iSimangaliso Wetland Park", "image_url": "https://stluciasouthafrica.com/wp-content/uploads/2024/07/IMG_1531-scaled.jpg" },
            { "name": "롭 벤 아일랜드", "english_name": "Robben Island", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Robben_Island_-_Cape_Town%2C_South_Africa_%283883849594%29.jpg/2560px-Robben_Island_-_Cape_Town%2C_South_Africa_%283883849594%29.jpg" },
            { "name": "드로켄벨트의 케이프 플로랄 지역", "english_name": "Cape Floral Region Protected Areas", "image_url": "https://thenewspaper.co.za/wp-content/uploads/2021/08/TNP0821_web27.jpg" },
            { "name": "마풀룽 석회암 동굴", "english_name": "Cradle of Humankind", "image_url": "https://www.getaway.co.za/wp-content/uploads/2025/04/66713B7B-7B88-4685-AF49-14AE56C4CFEA.jpeg" }
        ]
    },
    {
        "name": "나이지리아",
        "english_name": "Nigeria",
        "capital": "아부자",
        "english_capital": "Abuja",
        "major_cities": ["아부자", "라오스", "카노", "이바단", "카두나"],
        "english_major_cities": ["Abuja", "Lagos", "Kano", "Ibadan", "Kaduna"],
        "unesco_sites": [
            { "name": "수쿠르 문화 경관", "english_name": "Sukur Cultural Landscape", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sukur_Cultural_Landscape_%284%29.jpg/1920px-Sukur_Cultural_Landscape_%284%29.jpg?20190925141337" },
            { "name": "오순-오소그보 신성한 숲", "english_name": "Osun-Osogbo Sacred Grove", "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Wood_hut.jpg/2560px-Wood_hut.jpg" }
        ]
    },
    {
        "name": "사우디아라비아",
        "english_name": "Saudi Arabia",
        "capital": "리야드",
        "english_capital": "Riyadh",
        "major_cities": ["리야드", "지다", "메카", "메디나", "담맘"],
        "english_major_cities": ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam"],
        "unesco_sites": [
            { "name": "알-히즈르 고고 유적 (마다인 살레)", "english_name": "Hegra Archaeological Site (Al-Hijr)", "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/df/Hegra%2C_Al-Ula%2C_Saudi_Arabia.png" },
            { "name": "앗-투라이프 지구 (디리야)", "english_name": "At-Turaif District in ad-Dir'iyah", "image_url": "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/513706179_10163847715497125_673806558762276192_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_3-yt1vZ30oQ7kNvwETzR4U&_nc_oc=AdnmSs9NWao6jDq0F59G23nV6d-GNVOF89sfJFGYgFoTq3apQ9RyknOb5xCN47tw3sw&_nc_zt=23&_nc_ht=scontent-ssn1-1.xx&_nc_gid=dtucqNtzrVmwzK96n71LdA&oh=00_AfrpkrZ5PBQomA06CyNlMkygDixh0oH5-1sAwz1r8TIn6w&oe=6976E2B6" }
        ]
    },
    {
        "name": "아랍에미리트",
        "english_name": "United Arab Emirates",
        "capital": "아부다비",
        "english_capital": "Abu Dhabi",
        "major_cities": ["아부다비", "두바이", "샤르자", "알아인", "아지만"],
        "english_major_cities": ["Abu Dhabi", "Dubai", "Sharjah", "Al Ain", "Ajman"],
        "unesco_sites": [
            { "name": "알 아인 문화 유적 (하피트, 비다 빈트 사우드, 오아시스 지역)", "english_name": "Cultural Sites of Al Ain (Hafit, Hili, Bidaa Bint Saud and Oases Areas)", "image_url": "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=1920,dpr=1/tour_img/c2a9af9b6dab749f.jpeg" }
        ]
    },
    {
        "name": "터키",
        "english_name": "Turkey",
        "capital": "앙카라",
        "english_capital": "Ankara",
        "major_cities": ["앙카라", "이스탄불", "이즈미르", "부르사", "아다나"],
        "english_major_cities": ["Ankara", "Istanbul", "Izmir", "Bursa", "Adana"],
        "unesco_sites": [
            { "name": "이스탄불 역사 지구", "english_name": "Historic Areas of Istanbul", "image_url": "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg?v=1612536890" },
            { "name": "괴레메 국립공원과 카파도키아 바위 유적", "english_name": "Göreme National Park and the Rock Sites of Cappadocia", "image_url": "https://www.tripsavvy.com/thmb/B7OJqj5qH05g1SQO3_YlmBUamWM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/illuminated-goreme-vilage-1257203775-24f1e33358684bbfa4f711c7131a6489.jpg" },
            { "name": "파묵칼레-히에라폴리스", "english_name": "Hierapolis-Pamukkale", "image_url": "https://www.worldtribune.org/wp-content/uploads/sites/2/2023/06/Hierapolis-Pamukkale_GettyImages-1223155251.jpg" },
            { "name": "트로이 고고 유적", "english_name": "Archaeological Site of Troy", "image_url": "https://idsb.tmgrup.com.tr/ly/uploads/images/2024/07/29/thumbs/800x531/338974.jpg?v=1722245109" }
        ]
    },
    {
        "name": "그리스",
        "english_name": "Greece",
        "capital": "아테네",
        "english_capital": "Athens",
        "major_cities": ["아테네", "테살로니키", "파트라", "헤라클리온", "라리사"],
        "english_major_cities": ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa"],
        "unesco_sites": [
            { "name": "아테네 아크로폴리스", "english_name": "Acropolis of Athens", "image_url": "https://archaeologymag.com/wp-content/uploads/Caryatids-457.jpg" },
            { "name": "델피 고고 유적", "english_name": "Archaeological Site of Delphi", "image_url": "https://cdn-imgix.headout.com/media/images/87d7aa6adbd858996367bba7766c35bb-Athens-0004-AdobeStock-236666136.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop" },
            { "name": "메테오라", "english_name": "Meteora", "image_url": "https://idsb.tmgrup.com.tr/ly/uploads/images/2024/01/16/thumbs/800x531/310379.jpg?v=1705412200" },
            { "name": "로도스 중세 도시", "english_name": "Medieval City of Rhodes", "image_url": "https://explore-rhodes.com/wp-content/uploads/2021/04/grand-master-palace.jpg" }
        ]
    },
    {
        "name": "스웨덴",
        "english_name": "Sweden",
        "capital": "스톡홀름",
        "english_capital": "Stockholm",
        "major_cities": ["스톡홀름", "예테보리", "말뫼", "웁살라", "솔렌투나"],
        "english_major_cities": ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Sollentuna"],
        "unesco_sites": [
            { "name": "드로트닝홀름 왕궁", "english_name": "Royal Domain of Drottningholm", "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Suecia_1-077_%3B_Drottningholm_detail.jpg" },
            { "name": "비르카와 호브고르덴", "english_name": "Birka and Hovgården", "image_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/5e/1d/3b/birka-and-hovgarden.jpg?w=1400&h=800&s=1" },
            { "name": "엥겔스베르크 제철소", "english_name": "Engelsberg Ironworks", "image_url": "https://images.squarespace-cdn.com/content/v1/66cd84d761e1a1526902c1d4/a1ce85a7-1504-47c3-b8ff-651150297d31/P5160010-DxO_DeepPRIME+XD2s.jpg?format=2500w" }
        ]
    },
    {
        "name": "노르웨이",
        "english_name": "Norway",
        "capital": "오슬로",
        "english_capital": "Oslo",
        "major_cities": ["오슬로", "베르겐", "트론헤임", "스타방게르", "드라멘"],
        "english_major_cities": ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen"],
        "unesco_sites": [
            { "name": "브뤼겐", "english_name": "Bryggen", "image_url": "https://www.historyhit.com/app/uploads/bis-images/5164424/shutterstock_330395624-1-1576x1074.jpg" },
            { "name": "우르네스 목조 교회", "english_name": "Urnes Stave Church", "image_url": "https://www.visitnordic.com/cache/medium-Heddal_Stavechurch_-Vidar_Molkken__Visit_Norway-512x512.jpg" },
            { "name": "베가 제도", "english_name": "Vegaøyan – The Vega Archipelago", "image_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/5b/c5/30/bli-kjent-med-verdensarven.jpg?w=600&h=-1&s=1" }
        ]
    },
    {
        "name": "핀란드",
        "english_name": "Finland",
        "capital": "헬싱키",
        "english_capital": "Helsinki",
        "major_cities": ["헬싱키", "에스포", "탐페레", "반타", "오울루"],
        "english_major_cities": ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu"],
        "unesco_sites": [
            { "name": "수오멘린나 요새", "english_name": "Fortress of Suomenlinna", "image_url": "https://images.squarespace-cdn.com/content/v1/5db2c1c870cf53160ba6a917/39be2dc5-8c7c-4ac6-b2d1-636bf3300251/1+-+14.jpeg" },
            { "name": "올드 라우마", "english_name": "Old Rauma", "image_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/3f/08/eb/old-rauma.jpg?w=1200&h=-1&s=1" },
            { "name": "페테자베시의 옛 교회", "english_name": "Petäjävesi Old Church", "image_url": "https://cdn-datahub.visitfinland.com/images/03c733a0-e940-11ef-a1a5-c5de292a73ba.jpeg?s=1200" }
        ]
    },
    {
        "name": "폴란드",
        "english_name": "Poland",
        "capital": "바르샤바",
        "english_capital": "Warsaw",
        "major_cities": ["바르샤바", "크라쿠프", "우치", "브로츠와프", "포즈난"],
        "english_major_cities": ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań"],
        "unesco_sites": [
            { "name": "크라쿠프 역사 지구", "english_name": "Historic Centre of Kraków", "image_url": "https://sumfinity.com/wp-content/uploads/2014/02/Mary-Basilica-Krakow.jpg" },
            { "name": "비엘리치카와 보이니치 소금 광산", "english_name": "Wieliczka and Bochnia Royal Salt Mines", "image_url": "https://upload.wikimedia.org/wikipedia/commons/8/80/%CE%91%CE%BB%CE%B1%CF%84%CF%89%CF%81%CF%85%CF%87%CE%B5%CE%AF%CE%B1_%CE%92%CE%B9%CE%B5%CE%BB%CE%AF%CF%84%CF%83%CE%BA%CE%B1_5021.jpg" },
            { "name": "아우슈비츠 비르케나우 독일 나치 강제 수용소", "english_name": "Auschwitz Birkenau German Nazi Concentration and Extermination Camp (1940-1945)", "image_url": "https://api.multimedia.europarl.europa.eu/documents/20125/7244339/1642760976430_20220118_AUSCHWITZ_128_MOBILE.jpg" }
        ]
    },
    {
        "name": "체코",
        "english_name": "Czech Republic",
        "capital": "프라하",
        "english_capital": "Prague",
        "major_cities": ["프라하", "브르노", "오스트라바", "플젠", "리베레츠"],
        "english_major_cities": ["Prague", "Brno", "Ostrava", "Pilsen", "Liberec"],
        "unesco_sites": [
            { "name": "프라하 역사 지구", "english_name": "Historic Centre of Prague", "image_url": "https://res.cloudinary.com/tourhq/image/upload/fl_progressive,f_auto,h_507,w_900,g_auto,c_fill,q_auto/sadrfcxl3gsvdumyzrbf" },
            { "name": "체스키 크룸로프 역사 지구", "english_name": "Historic Centre of Český Krumlov", "image_url": "https://www.npu.cz/portal/o-nas/npu-a-pamatkova-pece/pamatky-a-pamatkova-pece/pamatkovy-fond/pamatky-s-mezinarodnim-statusem/fotografie%20pamatek%20UNESCO/Cesky%20Krumlov/002-cesky-krumlov-small.jpg" },
            { "name": "텔치 역사 지구", "english_name": "Historic Centre of Telč", "image_url": "https://thumbs.dreamstime.com/b/picturesque-aerial-view-old-buildings-telc-cityscape-ponds-czech-republic-aerial-view-telc-czech-republic-199754841.jpg?w=768" }
        ]
    },
    {
        "name": "칠레",
        "english_name": "Chile",
        "capital": "산티아고",
        "english_capital": "Santiago",
        "major_cities": ["산티아고", "푸엔테알토", "안토파가스타", "비냐델마르", "발파라이소"],
        "english_major_cities": ["Santiago", "Puente Alto", "Antofagasta", "Viña del Mar", "Valparaíso"],
        "unesco_sites": [
            { "name": "이키케의 산타 라우라와 우멜베르스톤 초석 공장", "english_name": "Humberstone and Santa Laura Saltpeter Works", "image_url": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/f5/ec/0c.jpg" },
            { "name": "라파누이 국립공원", "english_name": "Rapa Nui National Park", "image_url": "https://www.worldtribune.org/wp-content/uploads/sites/2/2023/03/Easter_island_GettyImages-534539131.jpg" }
        ]
    },
    {
        "name": "페루",
        "english_name": "Peru",
        "capital": "리마",
        "english_capital": "Lima",
        "major_cities": ["리마", "아레키파", "트루히요", "치클라요", "피우라"],
        "english_major_cities": ["Lima", "Arequipa", "Trujillo", "Chiclayo", "Piura"],
        "unesco_sites": [
            { "name": "쿠스코 시", "english_name": "City of Cuzco", "image_url": "https://www.worldtribune.org/wp-content/uploads/sites/2/2023/05/Cuzco_Peru_GettyImages-1164791506.jpg" },
            { "name": "마추픽추 역사 보호 지구", "english_name": "Historic Sanctuary of Machu Picchu", "image_url": "https://www.peru.travel/Contenido/Noticia/Imagen/en/2052/1.0/Principal/circuits_mapi_Desktop.jpg" },
            { "name": "리마 역사 지구", "english_name": "Historic Centre of Lima", "image_url": "https://wmf.imgix.net/images/f9_PER_Lima_Hist_JPEG_Hero_PER_Lima_Hist.jpg?auto=format,compress&fit=max&w=4040" }
        ]
    },
    {
        "name": "콜롬비아",
        "english_name": "Colombia",
        "capital": "보고타",
        "english_capital": "Bogotá",
        "major_cities": ["보고타", "메데인", "칼리", "바랑키야", "카르타헤나"],
        "english_major_cities": ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena"],
        "unesco_sites": [
            { "name": "카르타헤나 항구, 요새, 기념물", "english_name": "Port, Fortresses and Group of Monuments, Cartagena", "image_url": "https://media.istockphoto.com/id/2163251250/photo/photograph-archive-of-cartagena-colombia.jpg?s=612x612&w=0&k=20&c=8aJEeNRfyqtAKkXtnfhkMNr_opIYOqwlXrrfwxoaviw=" },
            { "name": "산타 크루즈 데 몸폭의 역사 지구", "english_name": "Historic Centre of Santa Cruz de Mompox", "image_url": "https://i.natgeofe.com/n/211cd9f7-5517-4c9a-8f88-fb5b1102d8df/28013.jpg" }
        ]
    },
    {
        "name": "말레이시아",
        "english_name": "Malaysia",
        "capital": "쿠알라룸푸르",
        "english_capital": "Kuala Lumpur",
        "major_cities": ["쿠알라룸푸르", "조호르바루", "페낭", "이포", "말라카"],
        "english_major_cities": ["Kuala Lumpur", "Johor Bahru", "Penang", "Ipoh", "Malacca City"],
        "unesco_sites": [
            { "name": "말로니안 문화 경관", "english_name": "Archaeological Heritage of the Lenggong Valley", "image_url": "https://mediaim.expedia.com/localexpert/2516072/13fa7201-d826-494d-9254-75a57bb706e3.jpg?impolicy=resizecrop&rw=1005&rh=565" },
            { "name": "말라카와 페낭의 역사 도시", "english_name": "Melaka and George Town, Historic Cities of the Straits of Malacca", "image_url": "https://media.assettype.com/outlooktraveller%2F2025-04-04%2Fi11147ma%2Friver-3748199.jpg?w=1200&auto=format%2Ccompress&fit=max" }
        ]
    },
    {
        "name": "필리핀",
        "english_name": "Philippines",
        "capital": "마닐라",
        "english_capital": "Manila",
        "major_cities": ["마닐라", "세부", "다바오", "카가얀데오로", "바기오"],
        "english_major_cities": ["Manila", "Cebu City", "Davao City", "Cagayan de Oro", "Baguio"],
        "unesco_sites": [
            { "name": "바로크 교회 (필리핀)", "english_name": "Baroque Churches of the Philippines", "image_url": "https://worldheritagesites.net/wp-content/uploads/2023/08/Miagao-church-drone-shot.jpg" },
            { "name": "필리핀 코르디예라스의 쌀 테라스", "english_name": "Rice Terraces of the Philippine Cordilleras", "image_url": "https://static.wixstatic.com/media/43ce38_1804dcace2bf4c5da9625ce3942a40f3~mv2.png/v1/fill/w_1000,h_560,al_c,q_90,usm_0.66_1.00_0.01/43ce38_1804dcace2bf4c5da9625ce3942a40f3~mv2.png" },
            { "name": "푸에르토 프린세사 지하강 국립공원", "english_name": "Puerto-Princesa Subterranean River National Park", "image_url": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3qInMb03YPIOjg2bPB07K8yW8dz-jM6zrNFcoxkrrDt6lGgpNClIQvLwZnq1X6DFIhZ0baGGVx_Xe1g0XK4qFdP94i2K0d0YAHNMU8VB3nQNbSTKNMN3fR8Kqih8FEjeafCzxkglEabSg/s640/P1410310.JPG" }
        ]
    },
    {
        "name": "싱가포르",
        "english_name": "Singapore",
        "capital": "싱가포르",
        "english_capital": "Singapore",
        "major_cities": ["싱가포르", "주롱", "우드랜즈", "탐피네스", "앙모키오"],
        "english_major_cities": ["Singapore", "Jurong East", "Woodlands", "Tampines", "Ang Mo Kio"],
        "unesco_sites": [
            { "name": "싱가포르 식물원", "english_name": "Singapore Botanic Gardens", "image_url": "https://image-tc.galaxy.tf/wijpeg-5kiccvq6s6po5vb6j0hh7lh3w/1556008524-5cbece4c0ff3a-thumb.jpg?width=1920" }
        ]
    },
    {
        "name": "덴마크",
        "english_name": "Denmark",
        "capital": "코펜하겐",
        "english_capital": "Copenhagen",
        "major_cities": ["코펜하겐", "오르후스", "오덴세", "올보르", "프레데릭스베르그"],
        "english_major_cities": ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Frederiksberg"],
        "unesco_sites": [
            { "name": "로스키레 대성당", "english_name": "Roskilde Cathedral", "image_url": "https://www.fireriskheritage.net/wp-content/uploads/Roskilde_Cathedral_aerial.jpg" },
            { "name": "크론보르 성", "english_name": "Kronborg Castle", "image_url": "https://hamlettours.com/wp-content/uploads/Kornborg-ikke-til-print-scaled.jpg" },
            { "name": "옐링 고분, 룬스톤 및 교회", "english_name": "Jelling Mounds, Runic Stones and Church", "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONnddy1o23ktQBvgCnwsEsazfPVIEhrZpAQ&s" }
        ]
    },
    {
        "name": "네덜란드",
        "english_name": "Netherlands",
        "capital": "암스테르담",
        "english_capital": "Amsterdam",
        "major_cities": ["암스테르담", "로테르담", "헤이그", "위트레흐트", "아인트호벤"],
        "english_major_cities": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"],
        "unesco_sites": [
            { "name": "킨더데이크-엘스하우트 풍차 지구", "english_name": "Mill Network at Kinderdijk-Elshout", "image_url": "https://worldheritage-mania.com/wp-content/uploads/2022/03/shutterstock_1436498840-scaled.jpg" },
            { "name": "바덴해", "english_name": "Wadden Sea", "image_url": "https://www.niedersachsen-tourism.com/fileadmin/_processed_/b/2/csm_Wattenmeer_ELS_6040020718.jpg_4fcaa0216f.jpg" },
            { "name": "암스테르담의 17세기 운하 고리", "english_name": "Seventeenth-Century Canal Ring Area of Amsterdam inside the Singelgracht", "image_url": "https://upload.wikimedia.org/wikipedia/commons/5/57/Imagen_de_los_canales_conc%C3%A9ntricos_en_%C3%81msterdam.png" }
        ]
    },
    {
        "name": "벨기에",
        "english_name": "Belgium",
        "capital": "브뤼셀",
        "english_capital": "Brussels",
        "major_cities": ["브뤼셀", "안트베르펜", "헨트", "샤를루아", "리에주"],
        "english_major_cities": ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège"],
        "unesco_sites": [
            { "name": "브뤼셀 그랑플라스", "english_name": "Grand-Place, Brussels", "image_url": "https://d3w13n53foase7.cloudfront.net/medium_fd3a2c1b_bccc_4273_845e_026f17130454_istock_cover_sorincolac_d7dcd223cc.jpg" },
            { "name": "플랑드르의 베긴회 건물", "english_name": "Flemish Béguinages", "image_url": "https://whc.unesco.org/uploads/thumbs/site_0855_0020-1200-630-20151104155240.jpg" },
            { "name": "벨기에와 프랑스의 종루", "english_name": "Belfries of Belgium and France", "image_url": "https://whc.unesco.org/uploads/thumbs/site_0943_0001-400-400-20251022172600.webp" }
        ]
    },
    {
        "name": "스위스",
        "english_name": "Switzerland",
        "capital": "베른",
        "english_capital": "Bern",
        "major_cities": ["취리히", "제네바", "바젤", "로잔", "베른"],
        "english_major_cities": ["Zürich", "Geneva", "Basel", "Lausanne", "Bern"],
        "unesco_sites": [
            { "name": "베른 구시가지", "english_name": "Old City of Bern", "image_url": "https://skyticket.com/guide/wp-content/uploads/2025/03/6ba7c0bb-shutterstock_2181102793-1200x675.jpg" },
            { "name": "융프라우-알레치", "english_name": "Jungfrau-Aletsch", "image_url": "https://cdn.tourcms.com/a/11676/2296/1/default.jpg" },
            { "name": "몬테 산 조르지오", "english_name": "Monte San Giorgio", "image_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/3f/14/be/la-vista-dalla-cima-del.jpg?w=900&h=500&s=1" }
        ]
    },
    {
        "name": "오스트리아",
        "english_name": "Austria",
        "capital": "빈",
        "english_capital": "Vienna",
        "major_cities": ["빈", "그라츠", "린츠", "잘츠부르크", "인스브루크"],
        "english_major_cities": ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck"],
        "unesco_sites": [
            { "name": "빈 역사 지구", "english_name": "Historic Centre of Vienna", "image_url": "https://whc.unesco.org/uploads/thumbs/site_1033_0026-1000-667-20151104154624.jpg" },
            { "name": "잘츠부르크 역사 지구", "english_name": "Historic Centre of the City of Salzburg", "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/da/SalzburgerAltstadt02b.jpg" },
            { "name": "쇤브룬 궁전과 정원", "english_name": "Schönbrunn Palace and Gardens", "image_url": "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=1920,dpr=1/tour_img/3f2e303652583274742a74d5ef71844129485a2285417da02e2b09e8ffd119ec.jpg" }
        ]
    },
    {
        "name": "헝가리",
        "english_name": "Hungary",
        "capital": "부다페스트",
        "english_capital": "Budapest",
        "major_cities": ["부다페스트", "데브레첸", "세게드", "미슈콜츠", "페치"],
        "english_major_cities": ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pécs"],
        "unesco_sites": [
            { "name": "부다페스트: 도나우 강변, 부다 성 지구, 안드라시 거리", "english_name": "Budapest, including the Banks of the Danube, the Buda Castle Quarter and Andrássy Avenue", "image_url": "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=400,height=265,dpr=2/tour_img/9bbf4e8cc6fd216941b4edcfe1be3ced9a273defb361eb30a13e53f9acf40c34.jpg" },
            { "name": "홀로쾨 옛 마을과 환경", "english_name": "Old Village of Hollókő and its Surroundings", "image_url": "https://d20jhx4r9t6zw8.cloudfront.net/2254282_large_dd8166c7.jpg" },
            { "name": "아그텔레크 카르스트 동굴과 슬로바키아 카르스트", "english_name": "Caves of Aggtelek Karst and Slovak Karst", "image_url": "https://national-parks.org/wp-content/uploads/2025/10/Aggtelek-National-Park.jpg" }
        ]
    }
]
