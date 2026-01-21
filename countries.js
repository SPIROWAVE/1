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
            { "name": "해인사 장경판전", "english_name": "Haeinsa Temple Janggyeong Panjeon, the Depositories for the Tripitaka Koreana Woodblocks", "image_url": "" },
            { "name": "종묘", "english_name": "Jongmyo Shrine", "image_url": "" },
            { "name": "창덕궁", "english_name": "Changdeokgung Palace Complex", "image_url": "" },
            { "name": "화성", "english_name": "Hwaseong Fortress", "image_url": "" },
            { "name": "고창, 화순, 강화 고인돌 유적", "english_name": "Gochang, Hwasun, and Ganghwa Dolmen Sites", "image_url": "" }
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
            { "name": "히메지 성", "english_name": "Himeji-jo", "image_url": "" },
            { "name": "고도 교토의 문화재", "english_name": "Historic Monuments of Ancient Kyoto (Kyoto, Uji and Otsu Cities)", "image_url": "" },
            { "name": "시라카와고와 고카야마의 역사 마을", "english_name": "Historic Villages of Shirakawa-go and Gokayama", "image_url": "" },
            { "name": "히로시마 평화기념관 (원폭 돔)", "english_name": "Hiroshima Peace Memorial (Genbaku Dome)", "image_url": "" }
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
            { "name": "만리장성", "english_name": "Great Wall", "image_url": "" },
            { "name": "명청 시대의 황궁 (자금성)", "english_name": "Imperial Palaces of the Ming and Qing Dynasties in Beijing and Shenyang", "image_url": "" },
            { "name": "진시황릉과 병마용", "english_name": "Mausoleum of the First Qin Emperor", "image_url": "" },
            { "name": "모가오 석굴", "english_name": "Mogao Grottoes", "image_url": "" },
            { "name": "황산", "english_name": "Mount Huangshan", "image_url": "" }
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
            { "name": "그랜드 캐니언 국립공원", "english_name": "Grand Canyon National Park", "image_url": "" },
            { "name": "요세미티 국립공원", "english_name": "Yosemite National Park", "image_url": "" },
            { "name": "옐로스톤 국립공원", "english_name": "Yellowstone National Park", "image_url": "" },
            { "name": "자유의 여신상", "english_name": "Statue of Liberty", "image_url": "" },
            { "name": "독립기념관", "english_name": "Independence Hall", "image_url": "" }
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
            { "name": "캐나다 로키 산맥 공원", "english_name": "Canadian Rocky Mountain Parks", "image_url": "" },
            { "name": "퀘벡 역사 지구", "english_name": "Historic District of Old Québec", "image_url": "" },
            { "name": "나하니 국립공원", "english_name": "Nahanni National Park", "image_url": "" },
            { "name": "루넌버그 옛 시가지", "english_name": "Old Town Lunenburg", "image_url": "" }
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
            { "name": "오루 프레투 역사 도시", "english_name": "Historic Town of Ouro Preto", "image_url": "" },
            { "name": "살바도르 역사 지구", "english_name": "Historic Centre of Salvador de Bahia", "image_url": "" },
            { "name": "이과수 국립공원", "english_name": "Iguazu National Park", "image_url": "" },
            { "name": "브라질리아", "english_name": "Brasília", "image_url": "" }
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
            { "name": "로스 글라시아레스 국립공원", "english_name": "Los Glaciares National Park", "image_url": "" },
            { "name": "이과수 국립공원", "english_name": "Iguazu National Park", "image_url": "" },
            { "name": "케브라다 데 우마우아카", "english_name": "Quebrada de Humahuaca", "image_url": "" },
            { "name": "코르도바의 예수회 유적", "english_name": "Jesuit Block and Estancias of Córdoba", "image_url": "" }
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
            { "name": "멕시코시티 역사 지구와 소치밀코", "english_name": "Historic Centre of Mexico City and Xochimilco", "image_url": "" },
            { "name": "고대 마야 도시 팔렌케", "english_name": "Ancient Maya City of Palenque", "image_url": "" },
            { "name": "테오티우아칸의 고대 도시", "english_name": "Pre-Hispanic City of Teotihuacan", "image_url": "" },
            { "name": "치첸 이차", "english_name": "Pre-Hispanic City of Chichen-Itza", "image_url": "" }
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
            { "name": "웨스트민스터 궁전, 웨스트민스터 사원과 세인트 마가렛 교회", "english_name": "Palace of Westminster and Westminster Abbey including Saint Margaret’s Church", "image_url": "" },
            { "name": "런던탑", "english_name": "Tower of London", "image_url": "" },
            { "name": "스톤헨지", "english_name": "Stonehenge, Avebury and Associated Sites", "image_url": "" },
            { "name": "에든버러 옛 시가지와 새 시가지", "english_name": "Old and New Towns of Edinburgh", "image_url": "" }
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
            { "name": "파리 센 강변", "english_name": "Paris, Banks of the Seine", "image_url": "" },
            { "name": "베르사유 궁전과 공원", "english_name": "Palace and Park of Versailles", "image_url": "" },
            { "name": "샤르트르 대성당", "english_name": "Chartres Cathedral", "image_url": "" },
            { "name": "몽생미셸과 그 만", "english_name": "Mont-Saint-Michel and its Bay", "image_url": "" }
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
            { "name": "쾰른 대성당", "english_name": "Cologne Cathedral", "image_url": "" },
            { "name": "무제움스인젤 (베를린)", "english_name": "Museum Island, Berlin", "image_url": "" },
            { "name": "라인 계곡 중류", "english_name": "Upper Middle Rhine Valley", "image_url": "" },
            { "name": "아헨 대성당", "english_name": "Aachen Cathedral", "image_url": "" }
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
            { "name": "로마 역사 지구, 바티칸 시국의 특별 재산과 산 파올로 푸오리 레 무라 대성전", "english_name": "Historic Centre of Rome, the Properties of the Holy See in that City enjoying Extraterritorial Rights and San Paolo Fuori le Mura", "image_url": "" },
            { "name": "피렌체 역사 지구", "english_name": "Historic Centre of Florence", "image_url": "" },
            { "name": "베네치아와 그 석호", "english_name": "Venice and its Lagoon", "image_url": "" },
            { "name": "폼페이, 헤르쿨라네움, 토레 아눈치아타 고고 유적", "english_name": "Archaeological Areas of Pompei, Herculaneum and Torre Annunziata", "image_url": "" }
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
            { "name": "알함브라, 헤네랄리페, 알바이신 (그라나다)", "english_name": "Alhambra, Generalife and Albaicín, Granada", "image_url": "" },
            { "name": "바르셀로나의 안토니 가우디 건축", "english_name": "Works of Antoni Gaudí", "image_url": "" },
            { "name": "코르도바 역사 지구", "english_name": "Historic Centre of Cordoba", "image_url": "" },
            { "name": "세비야 대성당, 알카사르, 인디아스 고문서관", "english_name": "Cathedral, Alcázar and Archivo de Indias in Seville", "image_url": "" }
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
            { "name": "모스크바 크렘린과 붉은 광장", "english_name": "Kremlin and Red Square, Moscow", "image_url": "" },
            { "name": "상트페테르부르크 역사 지구와 관련 기념물군", "english_name": "Historic Centre of Saint Petersburg and Related Groups of Monuments", "image_url": "" },
            { "name": "바이칼 호수", "english_name": "Lake Baikal", "image_url": "" }
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
            { "name": "키예프 성 소피아 대성당과 관련 수도원 건물들, 키예프 페체르스크 라브라", "english_name": "Kyiv: Saint-Sophia Cathedral and Related Monastic Buildings, Kyiv-Pechersk Lavra", "image_url": "" }
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
            { "name": "타지마할", "english_name": "Taj Mahal", "image_url": "" },
            { "name": "아그라 요새", "english_name": "Agra Fort", "image_url": "" },
            { "name": "엘로라 동굴", "english_name": "Ellora Caves", "image_url": "" },
            { "name": "함피 유적군", "english_name": "Group of Monuments at Hampi", "image_url": "" },
            { "name": "쿠트브 미나르와 그 기념물군", "english_name": "Qutb Minar and its Monuments, Delhi", "image_url": "" }
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
            { "name": "수코타이 역사 도시와 관련 역사 도시", "english_name": "Historic Town of Sukhothai and Associated Historic Towns", "image_url": "" },
            { "name": "아유타야 역사 도시", "english_name": "Historic City of Ayutthaya", "image_url": "" }
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
            { "name": "하롱베이", "english_name": "Ha Long Bay", "image_url": "" },
            { "name": "후에 기념물 복합 지구", "english_name": "Complex of Hué Monuments", "image_url": "" },
            { "name": "호이안 고대 도시", "english_name": "Hoi An Ancient Town", "image_url": "" },
            { "name": "미선 유적", "english_name": "My Son Sanctuary", "image_url": "" }
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
            { "name": "보로부두르 사원", "english_name": "Borobudur Temple Compounds", "image_url": "" },
            { "name": "프람바난 사원", "english_name": "Prambanan Temple Compounds", "image_url": "" },
            { "name": "코모도 국립공원", "english_name": "Komodo National Park", "image_url": "" },
            { "name": "수마트라 열대우림 유산", "english_name": "Tropical Rainforest Heritage of Sumatra", "image_url": "" }
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
            { "name": "그레이트 배리어 리프", "english_name": "Great Barrier Reef", "image_url": "" },
            { "name": "카카두 국립공원", "english_name": "Kakadu National Park", "image_url": "" },
            { "name": "시드니 오페라 하우스", "english_name": "Sydney Opera House", "image_url": "" },
            { "name": "프레이저 아일랜드", "english_name": "K'gari (Fraser Island)", "image_url": "" }
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
            { "name": "통가리로 국립공원", "english_name": "Tongariro National Park", "image_url": "" },
            { "name": "테 와히포우나무 (남서 뉴질랜드)", "english_name": "Te Wahipounamu – South West New Zealand", "image_url": "" }
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
            { "name": "고대 테베와 네크로폴리스", "english_name": "Ancient Thebes with its Necropolis", "image_url": "" },
            { "name": "이집트 이슬람 카이로", "english_name": "Islamic Cairo", "image_url": "" },
            { "name": "아부 심벨에서 필레까지의 누비아 기념물군", "english_name": "Nubian Monuments from Abu Simbel to Philae", "image_url": "" },
            { "name": "멤피스와 그 네크로폴리스", "english_name": "Memphis and its Necropolis – from the Pyramid Fields from Giza to Dahshur", "image_url": "" }
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
            { "name": "이사망갈리소 습지 공원", "english_name": "iSimangaliso Wetland Park", "image_url": "" },
            { "name": "롭 벤 아일랜드", "english_name": "Robben Island", "image_url": "" },
            { "name": "드로켄벨트의 케이프 플로랄 지역", "english_name": "Cape Floral Region Protected Areas", "image_url": "" },
            { "name": "마풀룽 석회암 동굴", "english_name": "Cradle of Humankind", "image_url": "" }
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
            { "name": "수쿠르 문화 경관", "english_name": "Sukur Cultural Landscape", "image_url": "" },
            { "name": "오순-오소그보 신성한 숲", "english_name": "Osun-Osogbo Sacred Grove", "image_url": "" }
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
            { "name": "알-히즈르 고고 유적 (마다인 살레)", "english_name": "Hegra Archaeological Site (Al-Hijr)", "image_url": "" },
            { "name": "앗-투라이프 지구 (디리야)", "english_name": "At-Turaif District in ad-Dir'iyah", "image_url": "" }
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
            { "name": "알 아인 문화 유적 (하피트, 비다 빈트 사우드, 오아시스 지역)", "english_name": "Cultural Sites of Al Ain (Hafit, Hili, Bidaa Bint Saud and Oases Areas)", "image_url": "" }
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
            { "name": "이스탄불 역사 지구", "english_name": "Historic Areas of Istanbul", "image_url": "" },
            { "name": "괴레메 국립공원과 카파도키아 바위 유적", "english_name": "Göreme National Park and the Rock Sites of Cappadocia", "image_url": "" },
            { "name": "파묵칼레-히에라폴리스", "english_name": "Hierapolis-Pamukkale", "image_url": "" },
            { "name": "트로이 고고 유적", "english_name": "Archaeological Site of Troy", "image_url": "" }
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
            { "name": "아테네 아크로폴리스", "english_name": "Acropolis of Athens", "image_url": "" },
            { "name": "델피 고고 유적", "english_name": "Archaeological Site of Delphi", "image_url": "" },
            { "name": "메테오라", "english_name": "Meteora", "image_url": "" },
            { "name": "로도스 중세 도시", "english_name": "Medieval City of Rhodes", "image_url": "" }
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
            { "name": "드로트닝홀름 왕궁", "english_name": "Royal Domain of Drottningholm", "image_url": "" },
            { "name": "비르카와 호브고르덴", "english_name": "Birka and Hovgården", "image_url": "" },
            { "name": "엥겔스베르크 제철소", "english_name": "Engelsberg Ironworks", "image_url": "" }
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
            { "name": "브뤼겐", "english_name": "Bryggen", "image_url": "" },
            { "name": "우르네스 목조 교회", "english_name": "Urnes Stave Church", "image_url": "" },
            { "name": "베가 제도", "english_name": "Vegaøyan – The Vega Archipelago", "image_url": "" }
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
            { "name": "수오멘린나 요새", "english_name": "Fortress of Suomenlinna", "image_url": "" },
            { "name": "올드 라우마", "english_name": "Old Rauma", "image_url": "" },
            { "name": "페테자베시의 옛 교회", "english_name": "Petäjävesi Old Church", "image_url": "" }
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
            { "name": "크라쿠프 역사 지구", "english_name": "Historic Centre of Kraków", "image_url": "" },
            { "name": "비엘리치카와 보이니치 소금 광산", "english_name": "Wieliczka and Bochnia Royal Salt Mines", "image_url": "" },
            { "name": "아우슈비츠 비르케나우 독일 나치 강제 수용소", "english_name": "Auschwitz Birkenau German Nazi Concentration and Extermination Camp (1940-1945)", "image_url": "" }
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
            { "name": "프라하 역사 지구", "english_name": "Historic Centre of Prague", "image_url": "" },
            { "name": "체스키 크룸로프 역사 지구", "english_name": "Historic Centre of Český Krumlov", "image_url": "" },
            { "name": "텔치 역사 지구", "english_name": "Historic Centre of Telč", "image_url": "" }
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
            { "name": "이키케의 산타 라우라와 우멜베르스톤 초석 공장", "english_name": "Humberstone and Santa Laura Saltpeter Works", "image_url": "" },
            { "name": "라파누이 국립공원", "english_name": "Rapa Nui National Park", "image_url": "" }
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
            { "name": "쿠스코 시", "english_name": "City of Cuzco", "image_url": "" },
            { "name": "마추픽추 역사 보호 지구", "english_name": "Historic Sanctuary of Machu Picchu", "image_url": "" },
            { "name": "리마 역사 지구", "english_name": "Historic Centre of Lima", "image_url": "" }
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
            { "name": "카르타헤나 항구, 요새, 기념물", "english_name": "Port, Fortresses and Group of Monuments, Cartagena", "image_url": "" },
            { "name": "산타 크루즈 데 몸폭의 역사 지구", "english_name": "Historic Centre of Santa Cruz de Mompox", "image_url": "" }
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
            { "name": "말로니안 문화 경관", "english_name": "Archaeological Heritage of the Lenggong Valley", "image_url": "" },
            { "name": "말라카와 페낭의 역사 도시", "english_name": "Melaka and George Town, Historic Cities of the Straits of Malacca", "image_url": "" }
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
            { "name": "바로크 교회 (필리핀)", "english_name": "Baroque Churches of the Philippines", "image_url": "" },
            { "name": "필리핀 코르디예라스의 쌀 테라스", "english_name": "Rice Terraces of the Philippine Cordilleras", "image_url": "" },
            { "name": "푸에르토 프린세사 지하강 국립공원", "english_name": "Puerto-Princesa Subterranean River National Park", "image_url": "" }
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
            { "name": "싱가포르 식물원", "english_name": "Singapore Botanic Gardens", "image_url": "" }
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
            { "name": "로스키레 대성당", "english_name": "Roskilde Cathedral", "image_url": "" },
            { "name": "크론보르 성", "english_name": "Kronborg Castle", "image_url": "" },
            { "name": "옐링 고분, 룬스톤 및 교회", "english_name": "Jelling Mounds, Runic Stones and Church", "image_url": "" }
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
            { "name": "킨더데이크-엘스하우트 풍차 지구", "english_name": "Mill Network at Kinderdijk-Elshout", "image_url": "" },
            { "name": "바덴해", "english_name": "Wadden Sea", "image_url": "" },
            { "name": "암스테르담의 17세기 운하 고리", "english_name": "Seventeenth-Century Canal Ring Area of Amsterdam inside the Singelgracht", "image_url": "" }
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
            { "name": "브뤼셀 그랑플라스", "english_name": "Grand-Place, Brussels", "image_url": "" },
            { "name": "플랑드르의 베긴회 건물", "english_name": "Flemish Béguinages", "image_url": "" },
            { "name": "벨기에와 프랑스의 종루", "english_name": "Belfries of Belgium and France", "image_url": "" }
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
            { "name": "베른 구시가지", "english_name": "Old City of Bern", "image_url": "" },
            { "name": "융프라우-알레치", "english_name": "Jungfrau-Aletsch", "image_url": "" },
            { "name": "몬테 산 조르지오", "english_name": "Monte San Giorgio", "image_url": "" }
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
            { "name": "빈 역사 지구", "english_name": "Historic Centre of Vienna", "image_url": "" },
            { "name": "잘츠부르크 역사 지구", "english_name": "Historic Centre of the City of Salzburg", "image_url": "" },
            { "name": "쇤브룬 궁전과 정원", "english_name": "Schönbrunn Palace and Gardens", "image_url": "" }
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
            { "name": "부다페스트: 도나우 강변, 부다 성 지구, 안드라시 거리", "english_name": "Budapest, including the Banks of the Danube, the Buda Castle Quarter and Andrássy Avenue", "image_url": "" },
            { "name": "홀로쾨 옛 마을과 환경", "english_name": "Old Village of Hollókő and its Surroundings", "image_url": "" },
            { "name": "아그텔레크 카르스트 동굴과 슬로바키아 카르스트", "english_name": "Caves of Aggtelek Karst and Slovak Karst", "image_url": "" }
        ]
    }
]
