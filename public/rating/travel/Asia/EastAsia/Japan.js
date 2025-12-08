// 仅数据：地区-城市-线路-景点
const travelTree = [
    {
      id: 'kanto',
      type: 'region',
      titleEn: 'Kantō Region',
      titleCn: '关东地区',
      descriptionEn:
        'The greater Tokyo area: dense trains, layered neighborhoods, and world-class museums squeezed between everyday city life.',
      descriptionCn:
        '以东京为核心的首都圈，电车密布、街区层次丰富，世界级博物馆与日常生活空间紧紧缠绕在一起。',
      notesEn: [
        'Excellent base for first or second trips to Japan: easy transport, tons of possible day trips.',
        'Museum density is very high – it is easy to over-schedule and get “museum fatigue”.'
      ],
      notesCn: [
        '非常适合作为初次或回锅日本旅行的落脚点，交通极其方便，可辐射周边一日游。',
        '博物馆密度很高，很容易一天排太多行程导致“博物馆疲劳”。'
      ],
      children: [
        {
          id: 'chiba-city',
          type: 'city',
          score: 4.4, // 你之后可以自己改分，这里先给一个合理值
          titleEn: 'Chiba City',
          titleCn: '千叶市',
          descriptionEn:
            'Administrative Chiba is a broad area east of Tokyo, but in practice most travelers only touch a small slice of it: Narita. This entry focuses on Narita as experienced through its airport – a remote but highly functional gateway into Japan.',
          descriptionCn:
            '广义上的千叶范围很大，但对大多数游客来说，最直接接触到的往往只是成田这一角。本条目聚焦于“千叶 · 成田”这一层级，以成田机场的使用体验为主。',
          highlightsEn: [
            'Narita functions more as “Tokyo’s front door” than a separate sightseeing base.',
            'The gap between “geographically remote” and “operationally very convenient” is especially obvious here.'
          ],
          highlightsCn: [
            '成田更多时候被当作“东京的门口”，而不是一个独立的观光据点。',
            '地理上的“偏僻”和机场内部的“极度便利”之间形成了很鲜明的反差。'
          ],
          children: [
            {
              id: 'narita-route',
              type: 'route',
              score: 4.5,
              routeNameEn: 'Narita',
              routeAreaEn: 'Narita (Chiba)',
              routeNameCn: '成田',
              routeAreaCn: '成田（千叶）',
              titleEn: 'Narita Route',
              titleCn: '成田路线',
              descriptionEn:
                'A minimal “route” focused entirely on Narita International Airport and its immediate facilities. This is not a sightseeing stroll, but a record of how it feels to arrive, eat, shop a little, and then head into Tokyo.',
              descriptionCn:
                '这条“路线”几乎完全由成田机场本身构成，并不是真正意义上的观光散步，而是对“抵达—缓冲—进城”这一整套机场体验的记录。',
              highlightsEn: [
                'Treats the airport itself as part of the trip instead of dead transit time.',
                'Captures the contrast between the airport’s high convenience and its very remote location.'
              ],
              highlightsCn: [
                '把机场本身视作旅程的一部分，而不是简单的中转空白区。',
                '一边感受设施与动线的顺滑，一边直面“位置真的很远”的客观现实。'
              ],
              children: [
                {
                  id: 'narita-airport',
                  type: 'spot',
                  score: 4.5,
                  titleEn: 'Narita International Airport (NRT)',
                  titleCn: '成田国际机场',
                  visitTimeEn: 'Visited on February 28, 2025 (late winter)',
                  visitTimeCn: '参观时间：2025年2月28日（冬末）',
        
                  // 忆照：按你说的，放在子标题前
                  memoryPhotoEn:
                    'Dragging your suitcase out into the arrivals hall, still a bit dazed from the flight, and suddenly seeing the bright Pokémon Center storefront glowing at the end of the corridor – an instant “yes, this is Japan” moment.',
                  memoryPhotoCn:
                    '拖着行李箱走进到达大厅，还没从飞机状态缓过来，就看到尽头那片亮到发光的宝可梦中心橱窗——“啊，真的到日本了”的感觉瞬间袭来。',
                  memoryPhotoUrl: '',
        
                  // 英文正文：整体 + 宝可梦中心副标题
                  descriptionEn:
                    'Narita is undeniably far from central Tokyo – remote enough that it feels out-of-the-way even within Chiba – but as an airport it works impressively well. The Keisei Skyliner and other rail options make the long distance manageable, and once you are inside the terminal the scale feels “just right”: big enough to have everything you need, small enough that you do not get lost or exhausted.\n\n' +
                    'Baggage claim runs fast, noticeably quicker than recent experiences at Shanghai Pudong. The information counter staff speak fluent English and are genuinely warm and patient, which takes a lot of mental load off when you have just landed. Convenience stores are everywhere and, importantly, do not feel overpriced, so even if you arrive absolutely starving you can fix that problem immediately. The whole layout gives off a sense of quiet competence – things are where you expect them to be, and the flows are intuitive.\n\n' +
        
                    '★★★ Pokémon Center Narita 4.8 ★★★\n\n' +
        
                    'A surprisingly high-spec Pokémon Center for something located inside an airport. The shop is not huge, but the lineup is rich, with exclusive pilot-and-flight-attendant themed items that are instant must-buys if you are even mildly into Pokémon. The fact that you run into such a store almost right after stepping off the plane creates a huge emotional spike – it feels like the airport is welcoming you personally. Limited items are abundant and rarely out of stock, which is another plus.\n\n' +
                    'The only unavoidable deduction is scale: an airside branch can never match the sheer size and variety of a flagship store in the city center. As a “Narita Airport Pokémon Center”, though, this is about as good as it gets.',
        
                  // 中文正文：内容完全按你给的，只把“正文子标题”换成真正的子标题＋样式更明显
                  descriptionCn:
                    '缺点在于离市中心太远了，优点是交通比较方便，通过天空快线可以快速到达东京市中心。总体来说机场大小正好，取行李也很快（体验下来比浦东机场快）。咨询中心的小姐姐英文也很流利，人也很热情，会很耐心的解答问题。便利店也很多，也没有溢价，就算到达时饥肠辘辘也能先垫垫肚子。而且总觉得设计得很便利。作为一个宝批，机场内有一个宝可梦中心大概占了0.3分的模型，但是去宝可梦中心的路途非常方便，感觉机场整体设计得很有水平，而且到达层的三楼购物资源也非常丰富，这些都是机场本身的加分了。（相比之下，浦东机场的到达只有折磨）。总体来说，扣分点就是……实在是太偏僻了，对于千叶来说都算偏僻的。\n\n' +
                    '★★ 成田机场宝可梦中心（4.8 分）★★\n\n' +
                    '其实作为一个机场的宝可梦中心，已经是顶配了，毕竟只是机场内的一个小店。品类其实也不少，而且有专属的机长空姐限定，这些都是毋庸置疑的加分项。从飞机上下来就能看到这么震撼的宝可梦中心，给人的冲击真的非常大，确实非常幸福。而且限定非常非常多，几乎不会断货，这也是一大加分项。唯一的0.2分是不可避免的扣除，因为实在没法做到规模大型和种类丰富的如同市中心的店面一样。',
        
                  tipsEn: [
                    'Always budget time for the long ride into central Tokyo – the airport itself is convenient, but the distance is real.',
                    'Use the abundance of convenience stores to reset: eat, drink, and regroup before dealing with trains and tickets.',
                    'If you care about Pokémon at all, plan a deliberate stop at the airport Pokémon Center rather than treating it as a random detour.',
                    'Narita makes a very gentle “first contact” with Japan thanks to its clear signage and helpful staff, especially compared to more chaotic mega-hubs.'
                  ],
                  tipsCn: [
                    '务必在行程里预留从成田进东京市区的通勤时间，机场再顺滑也改变不了“远”这个现实。',
                    '可以充分利用机场里遍布的便利店，先吃点东西、喝口热饮再去研究交通路线，会轻松很多。',
                    '如果喜欢宝可梦，建议把成田机场的宝可梦中心当成一个明确的打卡点，而不是顺路随便逛逛。',
                    '整体动线清晰、工作人员友好，对比很多大型枢纽机场，成田作为“日本第一站”的体验相当温柔。'
                  ]
                }
              ]
            }
          ]
        },
        
        {
          id: 'tokyo-city',
          type: 'city',
          score: 4.5,
          titleEn: 'Tokyo City',
          titleCn: '东京都市区',
          descriptionEn:
            'A huge but surprisingly navigable metropolis. Ueno, Asakusa, Sumida and other districts each feel like different layers of Tokyo stacked side by side.',
          descriptionCn:
            '庞大却出乎意料好走的城市。上野、浅草、墨田等各个区域，就像把不同气质的东京横向摞在了一起。',
          highlightsEn: [
            'Great base for chaining together museum days in Ueno with more casual wandering in nearby neighborhoods.',
            'Even a single “north route” in Ueno Park can easily fill a full day if you like to read exhibition texts.'
          ],
          highlightsCn: [
            '非常适合安排“上野公园一整天看博物馆+周边街区闲逛”的路线。',
            '如果习惯认真看展板，仅仅上野公园的一条“北线”就足够逛满一整天。'
          ],
          children: [
            {
              id: 'tokyo-north-taito-sumida',
              type: 'route',
              score: 5.0,
              routeNameEn: "North Route",
              routeAreaEn: "Ueno · Sumida",
              routeNameCn: "北线",
              routeAreaCn: "上野 · 墨田",
              titleEn: "Ueno – Asakusa – Skytree Route",
              titleCn: "上野–浅草–天空树线",
            
              // 👉 中文正文完全照你给的 overview，仅做换行拼接
              descriptionEn:
                'A compact but very dense day that weaves together Ueno Park and its museums, the hyper-touristic but unique energy of Sensō-ji in Asakusa, and the panoramic city views from Tokyo Skytree. ' +
                'It is an excellent “Tokyo in one day” option if you do not have much time in Japan, and also works well as a first-day route even on longer trips. ' +
                'Depending on your interests and pace, you can drop either the park or the museum portion, and still combine Asakusa with Skytree – or skip going up the tower and swap in an evening shopping stop instead.',
              descriptionCn:
                '个人认为这条线路非常值得去，类型非常丰富，将东京的公园及花卉（上野恩赐公园）、历史文化艺术（各式各样的博物馆）、寺庙（浅草寺）和城市的繁华缩影（天空树）融为一体，如果在日本或者东京待的时间不长的游客可以优先选择这条线路，如果玩很多天也确实建议第一天玩，并且根据自身喜好进行删减。\n\n' +
                '我们的行程里，因为樱花还没怎么开，所以上野公园走的很匆忙。并且因为后续天气不好，匆忙定的天空树门票，只能定到4点。博物馆又逛的太细致了，所以当天没时间去浅草寺就赶去天空树了。但是我个人认为，如果博物馆逛的快一点，公园/博物馆二选一+浅草寺+天空树应该是能玩好的，如果不上天空树晚上还能去一个逛街地点。\n\n' +
                '因为上野公园没怎么逛，也不是花季，就不评价了。浅草寺后面补去了，会进行评价。',
            
              // 路线层面的 highlights
              highlightsEn: [
                'Ideal as a “Tokyo sampler day”: park atmosphere, major museums, a classic temple, and a skyline view all in one route.',
                'Works especially well as Day 1 in Tokyo: you quickly build a mental map of the city while still feeling you have seen “something of everything”.',
                'Flexible pacing – you can choose park vs. museum focus in Ueno and still fit in Asakusa and Skytree if you move efficiently.',
                'If you skip going up Skytree, you can repurpose the evening for shopping around Asakusa or in another neighborhood.'
              ],
              highlightsCn: [
                '把公园、博物馆、寺庙和城市夜景压缩在同一天，作为“东京拼盘日”非常合适。',
                '很适合作为东京行程的第一天，一天之内就能大致摸清城市的气质和动线。',
                '上野部分可以在公园和博物馆之间自行取舍，节奏快一点的话，浅草寺和天空树也完全能接上。',
                '不上塔的话可以把晚上空出来去别的地方逛街，把整条线改成“地面版”东京一日游。'
              ],
            
              // （可选）路线整体时间
              visitTimeEn: 'Route taken in March 2025 (early spring, pre-sakura).',
              visitTimeCn: '线路游玩时间：2025年3月（早春，樱花未盛开）。',
            
              children: [
                // 1️⃣ 已有的：东京国立博物馆（原样保留）
                {
                  id: 'tokyo-national-museum',
                  type: 'spot',
                  score: 4.5,
                  titleEn: 'Tokyo National Museum',
                  titleCn: '东京国立博物馆',
                  visitTimeEn: 'Visited on March 1, 2025 (early spring)',
                  visitTimeCn: '参观时间：2025年3月1日（早春）',
                  descriptionEn:
                    'Japan’s oldest and largest museum, spread across multiple buildings in Ueno Park. The main Japanese Gallery alone provides a dense, well-curated overview of Japanese history and material culture – from swords and armor to Buddhist art and decorative crafts. The Toyokan showcases Asian art from outside Japan, including Chinese pieces that, while numerous, feel less overwhelming in impact than the Japanese National Treasure-class items. Temporary exhibitions in the Heiseikan can be spectacular; during this visit, the Daikaku-ji special exhibition delivered excellent visual staging, with imposing images of the Five Wisdom Kings and memorable named swords. The Hōryū-ji Treasure Gallery is conceptually impressive – hundreds of statues in a carefully lit space – but was visited at the end of an already long day, when “museum fatigue” had fully set in.',
                  descriptionCn:
                    '展的非常全面，附一张总地图，其中表庆馆平时不开门，平成馆我们去的时候有大觉寺的特展，要额外门票，不过挺值的。\n\n' +
                    '东洋馆展示的就是除日本外的亚洲各国展品，有一些我国的宝物，因为比较气派，就在一楼入口处。分数其实主要扣在这里，倒不是因为爱国，客观评价，展品不够震撼。不过这个馆仔细观察还是很有意思的，你会发现不同国家的佛像都极具当地的人物相貌特点，而且虽然不是很震撼，但是品种确实足够繁多。\n\n' +
                    '主馆展示的是日本历史文物，这个毋庸置疑是大饱眼福，各种类型、各种年代的展品应有尽有，还会介绍一些小知识，比如刀和太刀的区别；国宝厅则会轮流展示国宝，我们去的时候展示的是天皇装饰版法华经。在主馆入口处会有各种语言的介绍册，会详细介绍几个月的轮换展品，以及会重点标注高价值展品，门外汉也不会错过国宝珍品。\n\n' +
                    '平成馆当时展出的是大觉寺的特展，特展的规划非常优秀，给足了视觉效果，入门看到的五大明王印象非常深刻，两把切和丸字辈的名刀也记忆犵新，整体来说额外的票价非常值。还有一个考古展馆，聊胜于无。\n\n' +
                    '法隆寺宝物馆其实也相当震撼，上百尊佛像也很震撼，但是走到这里已经是强弩之末了，看不动博物馆了。不过场馆的设计非常有艺术感，值得拍照。\n\n' +
                    '总的来说，展品非常丰富，虽然说没有西方的，但也不能作为扣分项。主馆对当地的历史文化概括的非常到位；特展非常好看，值得额外购票；东洋馆样品丰富，但是并非特别关键，因为他离大门最近，切忌在其中花费过量的时间（说实话我们花的时间就有点多了）。主要扣分点还是缺乏那种震撼人心的展品。',
                  tipsEn: [
                    'Plan at least half a day; a full day is very easy to fill if you like reading exhibition texts.',
                    'Grab the multilingual pamphlet at the main Japanese Gallery entrance so you don’t miss the rotating National Treasure pieces.',
                    'The Toyokan (Asian art) is fun for comparison, but try not to spend all your energy there – the main Japanese Gallery and any special exhibitions are the real priority.',
                    'Special exhibitions in the Heiseikan can be worth the extra ticket; check what is on during your visit.',
                    'The Hōryū-ji Treasure Gallery is impressive but better visited before you are completely museum-tired.'
                  ],
                  tipsCn: [
                    '务必预留至少半天时间，如果习惯认真看展板，一天也能轻松排满。',
                    '进入主馆时记得在门口拿多语言介绍册，里面会标出近期轮换展品和国宝级重点，只看这些也很值回票价。',
                    '东洋馆适合用来对比各国佛像和亚洲艺术风格，但不要在这里耗费过多精力，把体力留给主馆和特展更划算。',
                    '提前查看平成馆当期是否有特展，如果像大觉寺这种等级，强烈建议额外购票参观。',
                    '法隆寺宝物馆非常震撼，适合在还有精力的时候去，不要放在整天行程的最后。'
                  ],
                  memoryPhotoEn:
                    'A slightly overcast afternoon in Ueno Park, looking up at the main Honkan building framed by bare early-spring trees, with people slowly trickling up the stone steps.',
                  memoryPhotoCn:
                    '早春阴天的上野公园，从台阶下往上看主馆本馆的那一眼：灰白色的建筑被几乎光秃的树枝框起来，台阶上三三两两的人慢慢往里走，整个人一下子进入“今天就是博物馆的一天”的状态。',
                  memoryPhotoUrl: '../../../../../picture/rating_sightseeing/Asia/Japan/Tokyo/Tokyomuseum.jpg'
                },
            
                // 2️⃣ 新增：浅草寺
                {
                  id: 'sensoji-temple',
                  type: 'spot',
                  score: 4.8,
                  titleEn: 'Sensō-ji Temple (Asakusa)',
                  titleCn: '浅草寺',
                  visitTimeEn: 'Visited on March 3, 2025 (rainy low season)',
                  visitTimeCn: '参观时间：2025年3月3日（淡季雨天）',
                  descriptionEn:
                    'Tokyo’s most famous temple and one of its most commercialized religious spaces. The approach from Kaminarimon through Nakamise-dori is lined with souvenir and snack shops, and the crowd is a striking mix of visitors from all over the world wearing rental kimono. It can feel more like a festival street than a quiet place of worship, but that hyper-touristic atmosphere is precisely what makes Sensō-ji unique among Japanese temples. ' +
                    'Behind the shops, the basic temple set—main hall, five-storied pagoda, and fortune/omamori counters—is all present, backed by a long history that many visitors may only half-notice. In low season and rainy weather the density of people drops just enough that the walk feels comfortable rather than suffocating. The surrounding Asakusa area also has plenty of shopping options, including a Sanrio store that is easy to detour into.',
                  // 中文正文：完全照你写的
                  descriptionCn:
                    '本来想打4⭐的，觉得浅草寺商业化严重，根本没有寺庙的氛围，但是转念一想，商业化严重也是特点之一啊，而且像浅草寺这样商业化这么重的也独此一家，别的寺庙看不到这种各国各肤色的人都穿和服的场景。本来可能觉得这样的寺庙有辱斯文，但是换个角度想想，这也是东京寺庙的特殊之处嘛。\n\n' +
                    '但是不管怎么说，如果只来东京，或者京阪，浅草寺都是必去的。\n\n' +
                    '浅草寺有个既是优点也是缺点的地方：免费。也是免费促使了这么多人流量。\n\n' +
                    '我们来的那天正是在下雨，司机将我们送到雷门。人还算不多，街道上空的地方比有人的地方还多些。形形色色的男女大多都身着和服，中韩都有，黑白人种也都着着。走过商铺林立的仲见世街到达主殿。基础的寺和五重塔都有，别的地方几乎都是商业的求御守、求签、求印章等等。\n\n' +
                    '其实浅草寺也有很深的历史底蕴，虽然游客可能大多并不在乎。其浓厚的商业氛围因其不可替代性并不能作为扣分项，总体来说，淡季的浅草寺是值这个4.8⭐的，我们的整体游览下来还是挺舒服的。\n\n' +
                    '浅草区域也有不少好逛的商场，三丽鸥的店也不容错过。',
                  tipsEn: [
                    'Expect a highly commercial, crowded atmosphere – go in knowing it is more “iconic Tokyo scene” than quiet temple experience.',
                    'If possible, visit in low season or on a rainy day; the experience can be noticeably more comfortable.',
                    'Spend some time people-watching at Kaminarimon and along Nakamise-dori – the mix of visitors and rental kimono is part of the charm.',
                    'Use Asakusa as a combined temple + shopping stop; there are plenty of nearby malls and character stores such as Sanrio.'
                  ],
                  tipsCn: [
                    '把它当作“东京名场面”而不是清净寺庙来期待，会更容易获得愉快体验。',
                    '淡季或雨天来访会舒服很多，人少一点时更能慢慢逛仲见世街。',
                    '雷门到仲见世街这一段很适合单纯地看人，租和服的游客本身就是风景的一部分。',
                    '可以把浅草寺和周边商场、三丽鸥等角色商店打包成一个半天的“浅草逛街+寺庙”行程。'
                  ],
                  memoryPhotoEn:
                    'Kaminarimon in light rain: the huge red lantern slightly glistening, umbrellas drifting under it as rental-kimono visitors and tour groups all funnel into Nakamise-dori.',
                  memoryPhotoCn:
                    '小雨里的浅草寺雷门：巨大的红灯笼被雨水打得有些发亮，撑伞的人从灯笼下鱼贯而入，五颜六色的和服混在各国游客之间。'
                  // memoryPhotoUrl 可以等你以后有合适的图再填
                  // memoryPhotoUrl: ''
                },
            
                // 3️⃣ 新增：东京天空树（晴空塔）
                {
                  id: 'tokyo-skytree',
                  type: 'spot',
                  score: 5.0,
                  titleEn: 'Tokyo Skytree (Skytree Observation Decks)',
                  titleCn: '东京天空树（晴空塔）',
                  visitTimeEn: 'Visited on March 1, 2025 (clear day, off-season, late afternoon to night).',
                  visitTimeCn: '参观时间：2025年3月1日（淡季晴天，傍晚至夜间）。',
                  descriptionEn:
                    'A high-cost, high-reward observation experience that shines under very specific conditions: off-season, clear weather, and a well-timed late-afternoon entry. From the 350m deck you get detailed explanations of what landmarks lie in each direction, and on a good day you can just make out Mount Fuji on the horizon. ' +
                    'The photography staff are disarmingly enthusiastic – the repeated “Skytree~” poses and free souvenir print turn a very standard tourist-photo routine into something genuinely charming. Paying for the large print is optional, but if you like the shot it doubles as a nice physical souvenir.\n\n' +
                    'Heading up to the 450m Tembo Galleria right as the sun sets lets you watch the transition from clear daytime views, to a sharply silhouetted Fuji at sunset, to afterglow and full night city lights. The descent elevator also doubles as a final night-view spot. The main practical downside is the price and the somewhat unintuitive entrance on the 4th floor – you need to find it and arrive early enough not to miss your time slot.',
                  // 中文正文：完全照你写的
                  descriptionCn:
                    '淡季且晴天的情况下，我非常推荐上塔，5⭐也是针对这种情况的，但凡有一个不满足估计连4⭐都到不了。晴空塔如果只是在下面看的话，不如东京塔有特色，但是上塔我猜测应该比东京塔好看（没上过东京塔所以是猜测）。虽然官方译名是晴空塔，但是一般我还是更喜欢叫天空树，因为整个过程里最印象深刻的是拍照小哥洋溢笑容的“sky tree~”。拍照的小哥用家妻的话说——“脸都笑僵了”，服务态度真的超级好。\n\n' +
                    '幸亏我们是淡季，不过4点以后的票也全都抢完了，可能这也是好事，让我们正好错峰错开了最多的人流。四点排队进来，差不多四点半到350米的展望台，这里有详细的介绍，对于不同方向所能看到的标志性建筑。我们那天天气不错，用力看可以看到富士山的轮廓。还有免费的拍照，免费拍出来的是一张背景，角落里有拍摄的小照片，花钱才能买大的照片和电子版。虽然说是中庸的老套路，但是免费送的，不要白不要。对于付钱的大照片，真的喜欢也值得买一下。拍照的小哥小姐姐都非常热情耐心。我们一共四个人，他给我们两人两人四人拍了三组，又挑了最好的生成送了我们三张小的，最后我们也买了四人照的大张，当纪念品也挺划算的。\n\n' +
                    '看乏了正好也天色渐晚，上到450的旋转回廊里看日落和晚霞。夕阳时分富士山的轮廓会更加明显，卡好角度可以同时拍到富士山和落日，挑准时机还能拍到飞机。落日非常迅速，转眼间只剩晚霞。等晚霞将近结束时排队下楼的电梯可以看到东京的夜景，也非常震撼。\n\n' +
                    '有一个雷点要注意，天空树的入口在四楼，并不好找，建议早点来，避免迟到。\n\n' +
                    '总体来说，俯瞰东京值得一来，晨昏夜三景物超所值。天气好的话算得上必来项目，门票其实已经算是限流了，人应该也不会太多，唯一的缺点应该就是门票有点贵。（说贵其实也比东方明珠便宜多了，差不多170rmb 350+450）\n\n' +
                    '门票也挺有意思的，四张票都不一样，总体来说比预期好很多，体验极佳。',
                  tipsEn: [
                    'Only truly worth it when both weather and timing line up: aim for a clear day and a slot that covers late afternoon through sunset and early night.',
                    'Plan extra time just to find the 4th-floor entrance; it is less intuitive than you might expect.',
                    'Use the free photo as a bonus keepsake, and only pay for the large print if you genuinely like it – but the staff are so enthusiastic that it often feels worth it.',
                    'At 350m, take time to read the landmark explanations; at 450m, focus on Fuji + sunset + planes and then watch the city lights come on.',
                    'Ticket price is high but also functions as crowd control; compared to similar towers elsewhere, it can still feel relatively good value if you hit perfect conditions.'
                  ],
                  tipsCn: [
                    '强烈建议挑选“淡季+晴天+傍晚入塔”的组合，踩中这三个要素体验会从4⭐直接升到5⭐。',
                    '提前留出找入口的时间，天空树的入口在四楼，不太好找，容易因为迷路而迟到。',
                    '350米展望台适合认真看各个方向的地标说明，450米旋转回廊则重点留给富士山、日落和晚霞。',
                    '免费合影不要白不要，真的很喜欢的话再考虑入手大张照片，当作一次性纪念品。',
                    '票价略贵但也起到了限流作用，在天气与时间都合适的情况下，性价比和记忆点都非常高。'
                  ],
                  memoryPhotoEn:
                    'In the 450m Tembo Galleria at dusk: the glass corridor curving away, Mount Fuji a dark silhouette under an orange sky, and a faint contrail of a plane cutting across the sunset.',
                  memoryPhotoCn:
                    '黄昏时分站在450米的旋转回廊里，玻璃长廊向前弯曲延伸，远处的富士山剪影嵌在橘红色的天边，偶尔有飞机从落日旁掠过——耳边还回荡着拍照小哥夸张又热情的“sky tree~”。'
                  // memoryPhotoUrl: '../../../../../picture/rating_sightseeing/Asia/Japan/Tokyo/Skytree.jpg'
                }
              ]
            },
            {
              id: 'tokyo-west-shinjuku-shibuya',
              type: 'route',
              score: 4.5,
            
              routeNameEn: 'West Route',
              routeAreaEn: 'Shinjuku · Shibuya',
              routeNameCn: '西线',
              routeAreaCn: '新宿 · 涩谷区',
              titleEn: 'West Route',
              titleCn: '新宿-观景台-新宿御苑-明治神宫-竹下通-涩谷',
            
              // ⚠️ 中文 overview 完全照你写的，只做换行拼接，不改字
              descriptionEn:
                'A “west Tokyo” walking route that loosely connects Meiji Jingū, Takeshita-dori in Harajuku, and the Shibuya area. On paper it can also include Shinjuku Gyoen, the Tokyo Metropolitan Government Building observatory, and Kabukicho – but in practice it is hard to fit everything into a single day. ' +
                'If you have not gone up Tokyo Skytree, the free observatory at the metropolitan government building is a possible substitute, but this trip skipped it in favor of shifting shopping earlier in the day. The final version of the route became Meiji Jingū → Takeshita-dori → Shibuya.\n\n' +
                'As a sightseeing route, this line feels less “representative” than the Ueno–Asakusa–Skytree route or even a hypothetical central route. The individual spots are pleasant but not must-see icons of Tokyo in the same way. However, if you drop the goal-driven mindset and simply treat it as a long, gentle city walk, the experience becomes very relaxing: the atmosphere is slow, the segments flow naturally into one another, and there is almost no sense of “walking just for the sake of getting somewhere”. It may not shine in hindsight when reviewed competitively against other routes, but in the moment it is quietly enjoyable.',
              descriptionCn:
                '这是整体路线，实际上当然没法走这么多，需要挑一下游览。如果没在天空树观景的话，东京都厅观景台也可以作为考虑，优点是免费，但是我没去也不好评价。本来的计划是竹下通-明治神宫-新宿御苑-观景台-新宿（歌舞伎町）。但是因为日本的商场关门特别早，本来计划的晚上购物并不现实，因此要提早购物时间，因此需要压缩行程。据说新宿逛街不好逛，观景台更是前一天刚去过天空树，新宿御苑人造花园大概率还不如国内好看，同时跟明治神宫类似还不如明治神宫有特点。最后我们改成了明治神宫-竹下通-涩谷的路线。\n\n' +
                '这条线路不管怎么挑，都感觉是不这么具有代表性的景点，作为旅游，分数不及北线甚至中线。但是如果放松下来当作散步的话体感是挺好的，整体氛围很慢很休闲，而且景点的连贯性很强，不存在为了走而走的路，非常顺滑。带有功利性的审视，或者回忆里都不占好；不过当下放松下来游览是非常惬意的。',
            
              visitTimeEn: 'Route walked on March 2, 2025 (early spring).',
              visitTimeCn: '线路游玩时间：2025年3月2日（早春）。',
            
              highlightsEn: [
                'Best treated as a relaxed walking day rather than a “must-see checklist” – the value is in atmosphere, not in ticking icons.',
                'Route flows very smoothly from quiet shrine forest to snack-packed alley to a gigantic shopping district, with almost no dead walking zones.',
                'Works well if you want to front-load shopping in Shibuya or Harajuku rather than leaving it to late evening, since many stores close earlier than expected.',
                'If you skipped Skytree’s observation decks, the Tokyo Metropolitan Government Building can be considered as a free-view alternative, though this trip did not test it.'
              ],
              highlightsCn: [
                '更适合当作“慢悠悠散步日”，而不是刷东京代表性景点的一天，氛围感大于打卡价值。',
                '从明治神宫的树林、到竹下通的小吃街、再到涩谷商圈，动线很顺，不太会有“纯走路”的空白段。',
                '考虑到东京商场关门时间偏早，这条线很适合把白天的购物提前到涩谷或原宿，而不是指望晚上再逛。',
                '如果没上过天空树，可以把东京都厅观景台当作免费备选方案，但本次行程实测路线是“明治神宫-竹下通-涩谷”。'
              ],
            
              children: [
                // 1️⃣ 明治神宫
                {
                  id: 'meiji-jingu-shrine',
                  type: 'spot',
                  score: 4.5,
                  titleEn: 'Meiji Jingū Shrine',
                  titleCn: '明治神宫',
                  visitTimeEn: 'Visited on March 2, 2025 (morning).',
                  visitTimeCn: '参观时间：2025年3月2日（上午）。',
                  descriptionEn:
                    'A large, forested Shintō shrine complex that feels more like a quiet natural park than a heavily commercialized tourist spot. The gravel paths of the northern approach are strikingly clean, and on this visit the grounds felt especially formal – possibly due to the number of weddings taking place that day. ' +
                    'Groups of men and women in kimono carrying bows were seen heading toward the kyūdō hall, and the soundscape was dominated by the crunch of gravel underfoot and the calls of crows rather than human chatter. In the central area between Kaguraden and the long hall, wedding processions formed double lines of relatives in black suits and elegant dresses. After a closed ceremony in Kaguraden, shrine staff with umbrellas led the couples toward the main hall in a solemn parade. ' +
                    'The visual language of a Japanese-style wedding—black as the main color, in contrast to Chinese red or Western white—can at first glance resemble a funeral, but also leaves a strong impression. Exiting via the grand torii and continuing toward the south approach makes it easy to connect onward to Takeshita-dori. Without the weddings, Meiji Jingū might blur together with other well-kept city forests, but witnessing the ceremonies significantly raises its sense of uniqueness.',
                  // ⚠️ 中文正文原样照抄
                  descriptionCn:
                    '总体来说跟公园很像，是那种很清幽的纯天然的公园，没有商业氛围的那种公园。明治神宫显然在东京人眼里的地位很高，十字路清扫的非常干净，不过也有可能是我们去的那天有贵客的原因。我们当天看到了当地的日式婚礼，很有特色，可以加0.5⭐。附一张地图。\n\n' +
                    '因为整体路线从北向南，而明治神宫作为第一站，我们自然是选择从北参道进。（如果是现在竹下通吃再进明治神宫的可以考虑从南参道进）在进入明治神宫之前就能看到很多背着弓箭的男男女女（女生居多），身穿和服，应该是去弓道场参加活动的。北参道干干净净，各国游客在道路两侧慢行，也并不喧哗，只有石子路石子弹起碰撞的声音。路两侧绿树成荫，只有乌鸦在肆无忌惮的叫，但听来却觉得鸟鸣山更幽。\n\n' +
                    '走到车祓舍拐入，看到有神社工作人员搀扶一位贵妇样的女性上车，看礼数本以为是国家级别贵客，但是现在回想起来应该只是上一位婚礼的新娘。我们车一天应当是日本的良辰吉日，举办婚礼的新人一对接着一对。在神乐殿和长殿中间的广场里，新人后面的亲友团全都身着肃穆的黑色西装，或是优雅的礼服，排成两列纵队。在神乐殿里举行了不让游客观看的仪式后，由阴阳师打伞，神乐带路，列队前往本殿。\n\n' +
                    '日式婚礼也是挺让人耳目一新的，跟中式西式婚礼都大不相同，中式婚礼是喜庆的红色，西式婚礼是洁净的白色，日式婚礼的主色调却是肃穆的黑色。说的难听点，看起来跟葬礼有点像。\n\n' +
                    '看遍些许气派的主殿，走正参道从大鸟居出来，转到南参道后就能从南口出来去竹下通了。大鸟居确实挺大的，似乎确是此趟旅行看到最大的鸟居。\n\n' +
                    '总体来说，算是挺有特点的公园，但是如果没有婚礼的话就泯然众景，日式婚礼还算挺长见识的，毕竟别的地方看不到嘛，大大增加不可替代性，可以加到4.5⭐。',
                  tipsEn: [
                    'Enter from the north approach if your overall route runs north-to-south; it sets up a nice flow toward Takeshita-dori afterward.',
                    'Slow down and pay attention to the soundscape – gravel underfoot and crows overhead do a lot of the atmospheric work here.',
                    'If you happen to encounter a wedding procession, be respectful and keep some distance; it is a rare chance to observe the aesthetics of a Japanese-style ceremony.',
                    'Without a wedding, Meiji Jingū is still a pleasant forest shrine, but if your schedule is tight and you are not into quiet walks, it may feel less essential.'
                  ],
                  tipsCn: [
                    '整体行程从北往南走的话，很推荐像本次一样从北参道进、再从大鸟居和南参道出去，动线非常顺。',
                    '可以刻意放慢脚步，把注意力放在石子路的脚步声和乌鸦的叫声上，会比单纯“看景”更有氛围。',
                    '如果遇到日式婚礼，一定要保持距离和安静旁观，这是在别的地方很难看到的场景，极大提升不可替代性。',
                    '在没有婚礼加成的情况下，明治神宫更像是一座安静的城市森林公园，喜欢散步的人会爱，不喜欢走路的人可能会觉得一般。'
                  ],
                  memoryPhotoEn:
                    'The north approach of Meiji Jingū: a straight gravel path framed by tall trees, almost no chatter, only footsteps on stones and distant crows calling in the canopy.',
                  memoryPhotoCn:
                    '北参道绿树成荫，灰白色的石子路笔直向前延伸，各国游客在两侧慢慢散步，不怎么交谈，只听得到脚下石子被踩起又落下的声音，以及头顶乌鸦肆无忌惮的叫声。',
                  // 以后有图再填
                  // memoryPhotoUrl: ''
                },
            
                // 2️⃣ 竹下通
                {
                  id: 'takeshita-street',
                  type: 'spot',
                  score: 4.2,
                  titleEn: 'Takeshita-dori (Harajuku)',
                  titleCn: '竹下通',
                  visitTimeEn: 'Visited on March 2, 2025 (midday).',
                  visitTimeCn: '参观时间：2025年3月2日（中午时段）。',
                  descriptionEn:
                    'A short but intensely packed commercial street in Harajuku, famous for its youth-oriented snacks and fashion. In essence it is “just another shopping street”, which caps its rating, but the density of food stalls and the overall liveliness make it stand out among similar alleys. The narrow street is full of people yet somehow does not feel suffocating, and the cleanliness is striking given the traffic. ' +
                    'The key memory moment is the turn: walking in from the main road and suddenly turning into Takeshita-dori, where a wall of shops, colors, and people bursts into view. Beyond that initial impact, much of what it offers overlaps with the general idea of a Japanese snack street, but for visitors from abroad it still feels novel.',
                  // ⚠️ 中文正文原样
                  descriptionCn:
                    '说到底也只是商业街，那在我这评分也就限定在了4.5以下，但是也还算是挺有特色的。小吃街的繁华程度也是独一档的，狭小的路上满是游客，但是却又不觉得挤，街道也非常干净。在主路拐到竹下通的时候，豁然开朗的热闹场面，这种能印入记忆的画面非常加分。\n\n' +
                    '不过除此之外也没啥特点了，其实说了半天也都大概率是日本小吃街的共性。只是对于我们这样的外国人来说比较新奇罢了。',
                  tipsEn: [
                    'Treat it as a focused snack-and-wander stop rather than a full shopping destination; it is short but intense.',
                    'The first turn-in from the main road is the most memorable moment – slow down and just take in the sudden explosion of signs and people.',
                    'Because the street is narrow, try to avoid peak weekend afternoon if you dislike crowds, even though crowd density is part of the charm.',
                    'Combine it with Meiji Jingū and Shibuya on the same day to make a smooth north-to-south walking route.'
                  ],
                  tipsCn: [
                    '更适合当作“买一点小吃、走一小段路就撤”的打卡点，而不是认真血拼的商圈。',
                    '从主路拐进竹下通的那一刻是记忆点最高的瞬间，可以刻意慢下来感受一下那种热闹感扑面而来的感觉。',
                    '街道狭窄、人又多，如果本身不太能接受人群，尽量避开周末下午这种高峰时段。',
                    '和明治神宫、涩谷串在同一天，会形成一条很顺畅的北到南散步路线。'
                  ],
                  memoryPhotoEn:
                    'Turning the corner into Takeshita-dori: the view suddenly fills with hanging signs, crepe stands, and a moving river of people packed into a narrow street.',
                  memoryPhotoCn:
                    '在主路上一拐弯，竹下通那块招牌和底下密密麻麻的人群一下子撞进视野——小小一条街被小吃摊、招牌和游客塞得满满当当，却又干净得出奇。',
                  // memoryPhotoUrl: ''
                },
            
                // 3️⃣ 涩谷
                {
                  id: 'shibuya-district',
                  type: 'spot',
                  score: 5.0,
                  titleEn: 'Shibuya District & Crossing',
                  titleCn: '涩谷',
                  visitTimeEn: 'Visited on March 2, 2025 (afternoon and evening).',
                  visitTimeCn: '参观时间：2025年3月2日（下午至傍晚）。',
                  descriptionEn:
                    'One of Tokyo’s most famous commercial districts, offering a huge range of shopping options from high-end to budget-friendly. Pokémon, Sanrio, Disney and many other character stores are all represented, and the sheer scale of the area means it is effectively impossible to “finish” in one visit. On its shopping merits alone, Shibuya would rate highly but not perfectly.\n\n' +
                    'What pushes it to a full 5★ is the legendary Shibuya Scramble Crossing. The volume of people spilling into the intersection at every light cycle is almost grotesque—in a fascinated, positive sense. It genuinely feels like one of the busiest crossings in the world, to the point that each green light becomes a small spectacle of human traffic. Standing there or viewing from above leaves a lasting, almost overwhelming impression, making it feel like a “once-in-a-lifetime” urban scene you are glad to have witnessed.\n\n' +
                    'Shibuya Sky was skipped on this trip due to time constraints and frequent rain, and expectations for such highly Instagrammed spots remain modest, but the ground-level experience of Shibuya itself was more than enough.',
                  // ⚠️ 中文正文原样
                  descriptionCn:
                    '非常繁华，应有尽有的商业街。高价的平价的商品都有，购物非常舒适，适合各种经济条件的顾客。而且非常大，根本逛不完。宝可梦，三丽鸥，迪士尼的店都有，非常全面。\n\n' +
                    '当然这些都不能支持一个商业购物区域到达5⭐。真正的加分项还是大名鼎鼎的涩谷十字路口，传说中世界上最繁华的十字路口真的名不虚传，人多到让人觉得不适，真的是多到让人犯恶心（褒义），其实很难理解为什么每个红绿灯都有这么多人在过马路。这个场面属实是震慑人心，作为人生必来的地点也不过分。\n\n' +
                    '涩谷sky我们没有去，我对于这种网红景点期望并不高，当然主要是因为没时间，而且下雨天比较多。',
                  tipsEn: [
                    'Plan Shibuya as both a shopping hub and a “city spectacle” stop – the crossing itself is as important as the stores.',
                    'Try to experience the scramble crossing from multiple angles: walking across within the crowd, watching from a street corner, and if possible from a higher vantage point.',
                    'Because the area is huge, accept that you will not finish it in one visit; pick a few key stores (e.g. Pokémon, Sanrio, Disney) and then leave room for wandering.',
                    'If your trip is short, Shibuya is a strong candidate for a “must-include” Tokyo urban experience, even if you skip Shibuya Sky.'
                  ],
                  tipsCn: [
                    '规划涩谷行程时，最好同时把它当成“购物中心”和“城市景观打卡点”，涩谷十字路口本身就值得专门留时间感受。',
                    '可以从不同角度体验十字路口：跟着人流一起走一两次、在路边看几轮红绿灯切换，如果有条件再找个高一点的视角俯瞰。',
                    '商圈太大了，别指望一次逛完，先挑好宝可梦、三丽鸥、迪士尼之类的重点店，再留一点时间随便乱逛就行。',
                    '行程紧张的话，涩谷本身就足够代表“东京繁华的一面”，即使不去涩谷sky也不算遗憾。'
                  ],
                  memoryPhotoEn:
                    'Shibuya Scramble Crossing at a full cycle: every diagonal and straight path overflowing with people, neon and billboards looming overhead, and the feeling that the whole city is briefly set in motion at once.',
                  memoryPhotoCn:
                    '红灯一转绿，涩谷十字路口四面八方的人群同时涌上街道，密密麻麻铺满整个路口，头顶是眼花缭乱的广告牌和霓虹——那一瞬间会真切地觉得“这可能就是世界上最繁忙的十字路口”。'
                  // memoryPhotoUrl: ''
                }
              ]
            },
            {
              id: 'tokyo-middle-central',
              type: 'route',
              score: 4.5,
            
              routeNameEn: 'Central Route',
              routeAreaEn: 'Tsukiji · Akihabara · Tokyo Tower',
              routeNameCn: '中线',
              routeAreaCn: '千代田 · 中央港区',
              titleEn: 'Central Route',
              titleCn: '筑地市场-东京塔-银座-皇居-秋叶原',
            
              // 中文 overview 原样，只做换行拼接
              descriptionEn:
                'A “central Tokyo” route whose content realistically stretches across about two days. Tsukiji Market works best as an early-morning visit: going early helps you avoid the worst crowds, but you must carefully check opening hours for each day of the week, as they vary. Between Tsukiji and Toyosu, this trip deliberately chose Tsukiji for the noisy, messy, tourist-oriented atmosphere rather than Toyosu’s cleaner, more local-shopping vibe.\n\n' +
                'Tokyo Tower, on the other hand, felt like one of the most skippable sights of the entire Tokyo trip. While its silhouette is iconic, the author does not recommend going up the tower. For city views, Akabanebashi / Shiba Park, Roppongi or Azabudai Hills in autumn are suggested alternatives. The Imperial Palace was skipped, but based on parents’ photos it looks underwhelming: locals do not seem to value it highly, the grounds are not kept to the same immaculate standard as Meiji Jingū, the flower beds are not especially refined, and the castle keep is gone, leaving only ruins – overall a “3★-ish” impression at best. Ginza was also skipped due to time and energy; as it is said to focus heavily on luxury brands, missing it does not feel like a serious loss.\n\n' +
                'Akihabara, by contrast, stands out as a highly characteristic area. Even with little personal interest in electronics or anime, the sheer presence of multi-floor adult stores and maid cafés makes it feel like a “once in a lifetime” experience—the visit may be awkward and mentally exhausting, but it is still one of those things that feels worth doing once in Japan.',
              descriptionCn:
                '总路线大概是两天的分量。筑地市场要早起去，这样不会太挤，但是要注意开门时间，一周七天的开门时间各不相同。东京塔没上过，但是我个人脑测是不建议登塔，观测点建议赤羽桥芝公园（我们去的是这个）、六本木、麻布台之秋。我个人没有很喜欢东京塔，虽然说外形很有特色，但是实在是很像那种装修用的吊车。皇居我们没去，但是看我爸妈发来的照片，实在是一般，本地人也并不是很重视，没有明治公园那样的高强度清理，花苑的部分也算不上精致，天守台也只剩遗址，感觉也就3⭐的水平。银座碍于时间限制以及体力，也没有逛，但是据说以奢侈品为主，没逛也不算太可惜。秋叶原还是很有特色的，女仆咖啡厅跟我原本想象的完全不一样，虽然整个过程很折磨很尴尬，但也确实算得上是人生必体验项目之一。',
            
              visitTimeEn: 'Route elements visited mainly on March 3–4, 2025 (early spring).',
              visitTimeCn: '线路游玩时间：主要为2025年3月3–4日（早春）。',
            
              highlightsEn: [
                'Tsukiji Market offers the “messy, noisy, touristy” side of Tokyo food culture that Toyosu has largely cleaned away.',
                'Akihabara is highly distinctive even if you are not deeply into electronics or anime, especially with adult stores and maid cafés in the mix.',
                'Tokyo Tower is treated more as an icon to view from the outside; alternative viewpoints like Shiba Park, Roppongi, or Azabudai can be better value.',
                'Imperial Palace and Ginza are easily skippable for this style of trip, which helps keep the route from becoming overloaded.'
              ],
              highlightsCn: [
                '筑地市场提供的是那种“脏乱差又热闹”的传统市场氛围，相比之下丰州虽然干净，却少了点味道。',
                '秋叶原的二次元、电器、十八禁商店和女仆咖啡厅组合在一起，哪怕本身不太懂这些文化也会觉得很有冲击力。',
                '东京塔更适合当作远观地标，从芝公园、六本木、麻布台等地看过去通常比登塔本身更划算。',
                '皇居和银座在这种路线下都属于“可有可无”的项目，不去也不会太可惜，可以把时间和体力留给更有特色的地方。'
              ],
            
              children: [
                // 1️⃣ 筑地市场
                {
                  id: 'tsukiji-market',
                  type: 'spot',
                  score: 4.5,
                  titleEn: 'Tsukiji Market',
                  titleCn: '筑地市场',
                  visitTimeEn: 'Visited on March 3, 2025 (rainy early morning).',
                  visitTimeCn: '参观时间：2025年3月3日（雨天清晨）。',
                  descriptionEn:
                    'Given a choice between Toyosu and Tsukiji, this trip deliberately chose Tsukiji. Much of the former inner market—including the famous tuna auctions—has moved to Toyosu, and locals now primarily shop there. Tsukiji, by contrast, has effectively become a tourist zone: noisy, messy, and a little chaotic. But that is exactly the point—if it were quiet and spotless, there would be little reason to come.\n\n' +
                    'On a drizzly morning around seven o’clock, walking under the covered lanes of the market feels atmospheric rather than unpleasant. Breakfast starts with some sushi to warm up, followed by a surprisingly cheap and tasty sakura mochi and a few grilled skewers. After wandering and snacking, the group ducks into a random seafood restaurant for a proper meal: a uni-only rice bowl, a mixed kaisendon, and a hot noodle soup for warmth. The uni bowl does not quite reach the imagined level of transcendence, mainly because expectations were sky-high, but it is still very good—so rich and salty that finishing it leaves you “over-satiated” to the point of not wanting more food for a while. The server, a friendly Northeastern Chinese lady, is nice enough, though arguably less enthusiastic than many Japanese staff.\n\n' +
                    'Later, a stall selling shrimp/crab senbei catches the eye: seafood pressed into a large cracker, tasting like upgraded shrimp chips but still preserving the shapes of the shrimp and crab. An octopus version is available but skipped. Once the inner market opens to tourists (reportedly closed before 10:00), it turns into something closer to a hardcore supermarket seafood section, full of ingredients that require real cooking skills. Vacuum-packed uni that could technically be eaten without further preparation remains tempting but ultimately unbought. The variety of unfamiliar fish and vegetables makes the whole visit feel educational as well as tasty.\n\n' +
                    'Overall, Tsukiji feels very worth visiting: you can eat extremely fresh seafood and see a side of Tokyo that is neither polished mall nor quiet temple. The main caveats are doing enough homework to avoid tourist traps, and timing your visit to match opening hours.',
                  // 中文正文原样
                  descriptionCn:
                    '在筑地市场和丰州市场之间，最后还是选择了筑地市场。按照网上的说法，筑地市场的内市场一大部分搬到丰州去了，包括著名的金枪鱼拍卖。现在的本地人买东西都去丰州市场了，筑地市场完全是景区，脏乱差，丰州市场现在安静整洁。问题是我就是来体验脏乱差的啊，不热闹我来干啥。\n\n' +
                    '这一天开始下雨了，我们七点多就到了筑地市场，在濛濛细雨中漫步在市场的雨棚下。先买点寿司充饥，又买了一个非常便宜好吃的樱饼和一些烤串。逛了一圈逛累了就找一家海鲜饭店吃海鲜。记得点了个纯海胆饭和一碗海鲜丼饭，我爸点了一碗热面驱寒。虽然是随便找的一家店，但是还是挺好吃的。海胆饭并没有想象中的那么惊艳，不过主要是因为预期太高，其实也非常好吃，回国吃不到了就还想吃，就是很鲜，太咸了。纯海胆盖饭吃完会鲜到有点犯恶心，很长一段时间都不想吃东西的程度，后面我妈吃生蚝的时候我就没吃，鲜的劲还没过去。服务员是一个东北的大姐，也还算热情吧，但是客观的说还不如日本本地人热情。\n\n' +
                    '兜兜转转还吃到了一个虾/蟹片，是把虾和蟹压在一个大面粉片里，吃起来跟虾片味道差不多，但是还能保留住虾和蟹的本来的形状，挺有创意的一个小吃，还有个章鱼的我们没点。\n\n' +
                    '转的差不多了筑地内市场开放了，内市场好像十点之前不对游客开放。内市场的东西都很硬核，就跟超市的海鲜摊一样，但是我们厨艺有限，也不太敢拿。虽然我事先看过有人买过那种袋装的真空海胆，理论上讲这个也不用加工就能直接吃，但是还是没敢买。一路逛下来也看到很多我们这里没有的鱼和菜，也挺长见识的。\n\n' +
                    '总的来说，我觉得筑地市场还是非常值得来的，能吃到非常正宗新鲜的海鲜，但是一定要提前做好功课防止被宰。筑地寿司请好像也挺好吃的，我妈评价里面的生鲜寿司入口即化，而且套餐价格也很公道，可惜我们到最后都没吃上（她是在涩谷吃的）。',
                  tipsEn: [
                    'Aim to arrive early in the morning, ideally around opening, both to avoid crowds and to catch the market at its most atmospheric.',
                    'Do some basic homework on reputable stalls and typical prices to reduce the risk of tourist traps.',
                    'Pace your eating—uni bowls can be so rich and salty that finishing one may temporarily kill your appetite for other seafood.',
                    'Remember that the inner market has limited tourist access before certain times; plan to explore the outer lanes first.',
                    'If you cook, consider buying something unique to take back; if you don’t, treat it more as a living museum of seafood.'
                  ],
                  tipsCn: [
                    '一定要早起来，尽量卡在刚开门不久的时间段，人少又有烟火气。',
                    '事先稍微做做功课，了解一下大致价格区间和好评店铺，能有效降低被当冤大头的风险。',
                    '海胆盖饭这类重口味食物建议几个人分着吃，避免一个人吃完鲜到“想吐”的那种饱和感。',
                    '可以先在外市场边走边吃，等到内市场对游客开放之后再进去看看，会更顺畅。',
                    '如果不会做饭，就把内市场当作“活体海鲜博物馆”看看长见识就好。'
                  ],
                  memoryPhotoEn:
                    'Under the rain-slick awnings of a Tsukiji alley: dim morning light, steaming food stalls, plastic stools, and people shuffling past with umbrellas while the smell of grilled seafood hangs in the air.',
                  memoryPhotoCn:
                    '市场小巷的雨棚下，细雨被挡在棚外，摊位里冒着热气的寿司、烤串和海鲜饭散着香气，路人举着伞从狭窄的过道里慢慢挪动——一切都显得有点脏乱，却又特别有生活气息。'
                  // memoryPhotoUrl: ''
                },
            
                // 2️⃣ 秋叶原
                {
                  id: 'akihabara-district',
                  type: 'spot',
                  score: 4.8,
                  titleEn: 'Akihabara',
                  titleCn: '秋叶原',
                  visitTimeEn: 'Visited on March 3, 2025 (afternoon).',
                  visitTimeCn: '参观时间：2025年3月3日（下午）。',
                  descriptionEn:
                    'A must-visit district that feels like the concentrated essence of electronics and otaku culture, even if you are not deeply into either. On this trip almost no electronics were bought and anime knowledge was limited to a few gacha spins, but the area still left a strong impression.\n\n' +
                    'Multi-story adult stores tower over the streets, offering an almost encyclopedic range of products—enough to shock anyone who does not usually engage with this side of Japanese media. The real core experience, however, is the maid café. Prior expectations were of something like a normal chain restaurant (e.g. Pizza Hut) with staff in maid outfits and perhaps some themed menu items. The reality turned out to be a dim, small, almost windowless room with a very specific staged atmosphere.\n\n' +
                    'Language becomes part of the challenge: with little Japanese and maids whose English is even more limited, ordering is awkward and slightly stressful, though in practice prices are clearly listed and there is no real risk of being scammed. Once you have paid the seat charge and drinks, all five maids on duty will drop by to chat whenever they are free. A set menu can include a small performance (dance) and a photo opportunity together with a maid. The experience is rich, embarrassing, and mentally exhausting all at once—but also feels like a “must-try once” item if you are already in Japan.\n\n' +
                    'Interestingly, the perceived average attractiveness of the maids felt lower than that of random people seen on the street, suggesting a noticeable gap between foreign expectations and local reality. Overall, Akihabara revolves around anime, games, and electronics; even for visitors who are not hardcore fans, it still feels very worth a visit, and true enthusiasts would probably rate it even higher.',
                  // 中文正文原样
                  descriptionCn:
                    '必去地点，电器其实倒是没买到什么，动漫我们也不是很懂，就扭了几个扭蛋。但是巨大的十八禁商店和女仆咖啡厅不得不体验一下。\n\n' +
                    '十八禁商店上下六层应有尽有，平时没这么了解过、不怎么变态的小伙伴应该能大开眼界。\n\n' +
                    '女仆咖啡厅跟我之前想象的完全不一样，我本来以为就是类似必胜客的那种门店，但是服务员都穿着女仆装，同时可能菜品有些特别罢了。没想到是一个昏暗的小黑屋。\n\n' +
                    '因为不会日语，女仆小姐姐的英语还不如我们，沟通非常费劲，连点菜都很尴尬搞不太清楚，就怕被宰。不过其实都明码标价，没被坑没踩雷。只要你点了座位费和饮料，全店一共五个女仆小姐姐有空的都会来找你聊天。我们点了个套餐，还附赠了一个表演（舞蹈）和一个合影的机会。体验是很丰富了，虽然整个过程都非常尴尬，但是来一趟日本是值得体验一次的，可以算是必来的项目。\n\n' +
                    '值得一提的是，似乎审美有挺大的差距，我们感觉女仆店的平均颜值还不如路上看到的平均颜值。\n\n' +
                    '言而总之，秋叶原主要就还是围绕二次元和电器。我们对这两个都不太感冒，也觉得秋叶原很值得走，对于发烧友来说这个评分应该还会更高。',
                  tipsEn: [
                    'Even if you are not into anime or electronics, treat Akihabara as a cultural experience rather than a shopping mission.',
                    'If you try a maid café, read the menu and system carefully at the entrance—most fees are clearly stated and you can avoid surprises.',
                    'Expect a high level of secondhand embarrassment; going in with that expectation makes the whole thing more tolerable and even fun.',
                    'Multi-floor adult stores are part of the landscape here; if you are curious but shy, you can treat them as a museum of pop culture rather than a place to buy things.'
                  ],
                  tipsCn: [
                    '就算对动漫和电器都不太感兴趣，也可以把秋叶原当作一种“文化观察”，而不是纯购物行程。',
                    '准备去女仆咖啡厅的话，建议在门口把菜单和收费规则看清楚，大部分项目都有明码标价，其实不用太担心被坑。',
                    '要提前接受“会非常尴尬”这一点，心态放平之后，反而能把这次体验当成一次好笑的回忆。',
                    '巨大的十八禁商店可以当作“流行文化博物馆”随便逛逛，不一定非要买东西。'
                  ],
                  memoryPhotoEn:
                    'Akihabara at night: tall buildings plastered with anime posters and neon signs, a maid in frilly uniform handing out flyers by the curb, and the glow of a multi-story adult store sign towering over the street.',
                  memoryPhotoCn:
                    '夜色里的秋叶原街道，两侧楼体上贴满了动漫立绘和霓虹招牌，路边有穿着女仆装发传单的小姐姐，远处是一整栋打着十八禁大招牌的高楼——视觉信息量爆炸。'
                  // memoryPhotoUrl: ''
                },
            
                // 3️⃣ 东京塔（打卡视角）
                {
                  id: 'tokyo-tower-view',
                  type: 'spot',
                  score: 4.0,
                  titleEn: 'Tokyo Tower (Viewed from Shiba Park / Akabanebashi)',
                  titleCn: '东京塔（远观打卡）',
                  visitTimeEn: 'Visited on March 4, 2025 (brief photo stop).',
                  visitTimeCn: '参观时间：2025年3月4日（短暂停留打卡）。',
                  descriptionEn:
                    'Among all the stops in this Tokyo trip, Tokyo Tower felt the most “optional”. Its outline is undeniably iconic and it firmly anchors the city’s visual identity, but on a personal level it did not resonate strongly. The steel structure calls to mind a construction crane used for building renovations more than a romantic landmark. Because of this, the recommendation here is not to go up the tower; for views, alternatives like Akabanebashi / Shiba Park, Roppongi, or Azabudai in autumn seem more appealing.\n\n' +
                    'This visit was only a quick detour: a short walk out of Akabanebashi Station to a nearby overpass, a single glance and a photo, and then back to the trains. Interestingly, the most vivid memory is not the postcard shot of Tokyo Tower itself, but the scene under the overpass while navigating to the viewpoint—possibly because the author was the one in charge of following the map. In that sense, Tokyo Tower here functions more as a mental checkmark and a piece of background scenery than as a full-fledged destination.',
                  // 中文正文原样
                  descriptionCn:
                    '东京的旅途里觉得最可有可无的景点，但是无可否认这是东京的地标性建筑，多少是要打个卡的。\n\n' +
                    '我们去的打卡点是赤羽站车站出口的一个立交桥附近，几乎就看了一眼，打了个卡就回去继续坐车了。\n\n' +
                    '怎么说呢，我对这个地方的记忆快照不是那个打卡照而是那个天桥下的画面。（可能是因为我看地图负责找这个位置吧）',
                  tipsEn: [
                    'If you mainly want the “I saw Tokyo Tower” feeling, a quick external viewpoint like Shiba Park is enough; you do not need to budget time or money to go up.',
                    'Consider pairing the tower with nearby neighborhoods (Roppongi, Azabudai, etc.) rather than treating it as a standalone attraction.',
                    'Use it as a flexible filler stop on a transit-heavy day rather than a centerpiece of the itinerary.',
                    'If you are more interested in city views than in the tower itself, prioritize Skytree or other high viewpoints instead.'
                  ],
                  tipsCn: [
                    '如果只是想完成“看过东京塔”这个成就，从合适的远观角度拍一张照片就够了，完全没必要特地花时间和门票上塔。',
                    '可以把东京塔当作顺路打卡点，顺便和六本木、麻布台等附近区域串在一起，而不是当成单独的大景点去安排。',
                    '更推荐在已经路过附近、或者当天需要频繁换乘的时候顺路来看一眼，而不是专门绕路。',
                    '如果主要追求的是观景视野，优先把时间和预算留给天空树或其他高层观景台会更合算。'
                  ],
                  memoryPhotoEn:
                    'Not the classic postcard angle, but the underpass near Akabanebashi: concrete beams overhead, traffic noise, and a glimpse of Tokyo Tower rising beyond the edge of the flyover while you double-check the map.',
                  memoryPhotoCn:
                    '记忆里的画面不是那张对着东京塔本体的合照，而是赤羽桥附近天桥下的场景：抬头是灰色的立交桥梁，耳边是车流声，远处塔身从桥的缝隙里探出一截——一边走一边看地图确认“是不是这里”。'
                  // memoryPhotoUrl: ''
                }
              ]
            },
            {
              id: 'tokyo-other-special',
              type: 'route',
              score: 2.5, // “其他”不是评分路线，因此设为 0 或留空也可以
            
              routeNameEn: 'Other Highlights',
              routeAreaEn: 'Special single-destination trips',
              routeNameCn: '其他',
              routeAreaCn: '需单独造访的地点',
              titleEn: "Others",
              titleCn: "其他不易安排进线路的地点",
            
              // 🆕 overview（按你要求我自由生成）
              descriptionEn:
                'A small collection of spots that do not form a coherent walking route but are notable enough to warrant special mention. These places generally require separate planning, longer transit, or dedicated time slots, and therefore do not fit naturally into the North/West/Central lines. Despite their scattered nature, each offers a distinctive experience that can strongly enrich a Tokyo trip when visited individually.',
              descriptionCn:
                '这一组并不构成一条连续路线，而是由几个“值得专门造访”的景点组成。它们通常需要单独安排时间、提前预约，或是交通上比较独立，因此很难与其他线路顺畅衔接。但每一个地点都有其独特性，如果行程允许，单拎出来去一次往往会是旅途中非常亮眼的体验。',
            
              highlightsEn: [
                'Strongly thematic or IP-heavy attractions that reward dedicated time.',
                'Locations that require advance booking or longer travel times.',
                'Individually memorable experiences that do not fit into a typical route structure.'
              ],
              highlightsCn: [
                '主题性或 IP 强烈的景点，单独安排时间体验会更沉浸。',
                '通常需要提前预约或独立前往，不适合塞进其他路线中。',
                '每个地点本身都足够“值得一去”，但组合成路线反而会削弱体验。'
              ],
            
              children: [
                // 1️⃣ 华纳兄弟哈利波特影城
                {
                  id: 'warner-bros-harry-potter-studio',
                  type: 'spot',
                  score: 4.8,
                  titleEn: 'Warner Bros. Studio Tour Tokyo – The Making of Harry Potter',
                  titleCn: '华纳兄弟哈利波特影城',
                  visitTimeEn: 'Visited on March 4, 2025',
                  visitTimeCn: '参观时间：2025年3月4日',
                  descriptionEn:
                    'A surprisingly immersive and meticulously crafted experience that far exceeded expectations. Despite being a British IP recreated in Japan—a factor that “mysteriously” deducts 0.2 points—the overall quality feels world-class. From the moment you enter, the attraction delivers a steady stream of iconic sets, interactive zones, and behind-the-scenes exhibits that rekindle the desire to rewatch the films or reread the books.\n\n' +
                    'The visit begins outside with a themed café and the main gift shop, where robes, wands, scarves, and accessories make for excellent photo props. Baggage storage is free. A brief introductory film sets the tone before guests enter the Great Hall, followed by shifting staircases, the Gryffindor dormitory and common room, Dumbledore’s office, and a Quidditch activity. Further areas include the Potions classroom, Defense Against the Dark Arts, the library, statues, Ministry of Magic elements, and Voldemort-related displays.\n\n' +
                    'A well-executed Forbidden Forest section transitions into an outdoor zone featuring the Knight Bus, Privet Drive, Hagrid’s Hut, and other iconic façades. The 9¾ platform includes an exclusive shop with items only sold onsite. The later sections focus on filmmaking craft: animatronics, creature design, sound, music, and model work—culminating in a breathtaking large-scale Hogwarts model that serves as the emotional finale.\n\n' +
                    'Even for those who are not hardcore fans, the tour is satisfying and memorable, with an attention to detail that fully justifies the visit.',
                  // 中文正文原样
                  descriptionCn:
                    '其实非常好看，本来我不抱什么期望的，觉得就是拍拍照的，但是到了以后颠覆认知了，物超所值，真的称得上是魔法之旅。看到最后意犹未尽，想要把电影再刷一遍，想要把原著再看一遍。只是我觉得在日本看一个英国ip影城太奇怪了，所以“莫名其妙”给它扣了0.2分。\n\n' +
                    '趁我还有记忆的时候把游览过程捋一下。\n' +
                    '在外面有一个餐厅，我们吃了一顿9|3/4的套餐，好吃且有特色。商店也在外面，先买了两件袍子和魔杖，围巾、小包以及几个挂件用于拍照。外面可以免费寄存行李，导览没什么必要，建议不租，不过不听就看看也不错，起码能知道大概场馆里是讲什么的。\n\n' +
                    '进门先看一段视频，带我们走进哈利波特的世界，然后进门是大礼堂，跟原著剧情类似。分院结束，大门一开，进入楼梯间，楼梯会切换方向，还能互动拍摄校友画的动态内容。接着是格兰芬多寝室和研讨室的造景，还有一些特别的模型和场景，比如校长室等等，还有一个魁地奇的互动节目。穿过一个可以做面具的服装厅，到达另一个大厅。这个大厅有魔药室，魔法防御课的互动，图书馆，以及伏地魔的介绍和雕像，以及魔法部的一些介绍。\n\n' +
                    '接下来穿过一片禁林，里面有摄魂怪、独角兽、陨落的飞车和巨型蜘蛛。穿过禁林有一片室外场景，有餐厅、黄油酒吧，学院外景，魔法国际象棋、巴士、哈利波特姨妈的家和海格小屋。再进入室内，到达9|3/4车站的造景，有一个商店里有一些里面才能买到的限定不要错过。\n\n' +
                    '后面的场馆就没这么震撼了，大概就是魔法部，银行，然后动植物之类的介绍。再往后是一些特效制作、音效制作、模型设计、音乐设计之类的。然后穿过对角巷，到达旅途的终点——一个巨大的霍格沃兹模型。\n\n' +
                    '客观上应该打满分，就算不是哈利波特铁粉，只是看过电影书籍的也能深深满足，很多的细节做的都很到位，值得一去。',
                  tipsEn: [
                    'Arrive early and budget several hours; the experience is longer and denser than expected.',
                    'The gift shop outside includes exclusive items—consider purchasing photo props (robes, scarves, wands) before entering.',
                    'Do not bother with the audio guide unless you strongly prefer structured explanations; most guests enjoy the free-flow format.',
                    'Save some emotional energy for the final Hogwarts model—the scale and lighting make it one of the most memorable moments.'
                  ],
                  tipsCn: [
                    '整体游览时间比想象得更长更丰富，务必预留充足时间。',
                    '外部商店有不少拍照道具和限定商品，建议在进场前先买好想要的搭配。',
                    '导览器不是必要，除非特别喜欢按“讲解顺序”走，不然自由逛体验更好。',
                    '最后的霍格沃兹模型千万记得留体力，绝对是全程最震撼的场景之一。'
                  ],
                  memoryPhotoEn:
                    'The final room: a softly lit, massive Hogwarts model stretching across the space, glowing with blues and golds—an emotional, cinematic finale to the tour.',
                  memoryPhotoCn:
                    '最终的霍格沃兹模型在柔光下闪着金蓝色的光，巨大而精致，整个旅程在这里达到情绪高潮。',
                  // memoryPhotoUrl: ''
                },
            
                // 2️⃣ 东京站宝可梦中心
                {
                  id: 'pokemon-center-tokyo-station',
                  type: 'spot',
                  score: 3.0,
                  titleEn: 'Pokémon Center Tokyo (Tokyo Station)',
                  titleCn: '东京站宝可梦中心',
                  visitTimeEn: 'Visited on March 4, 2025',
                  visitTimeCn: '参观时间：2025年3月4日',
                  descriptionEn:
                    'A smaller, more limited Pokémon Center compared to airport or major-district branches. The key disappointment was the unavailability of the stationmaster-themed exclusive merchandise, which had gone out of stock despite being the store’s signature item. Overall a quick, mildly fun stop, but not worth detouring for unless you are already passing through Tokyo Station.',
                  descriptionCn:
                    '哥们，你就一个列车长限定还能断货，这个补货效率真得给你个差评，跟机场的天壤之别。',
                  tipsEn: [
                    'Check online or ask staff about stock levels before making a special trip—exclusives sell out quickly.',
                    'If you want a fuller Pokémon Center experience, Shibuya, Ikebukuro, or the airport branches are more reliable.',
                    'Treat this location as a “bonus stop” rather than a destination.'
                  ],
                  tipsCn: [
                    '想买限定的话最好提前确认库存，断货情况比想象得更常见。',
                    '更推荐涩谷、池袋或机场的宝可梦中心，品类更全，也更不容易踩雷。',
                    '如果不是顺路，专门跑一趟意义不大。'
                  ],
                  memoryPhotoEn:
                    'A nearly empty shelf where the stationmaster Pikachu merchandise should have been—an anticlimactic moment in an otherwise cheerful store.',
                  memoryPhotoCn:
                    '原本应该摆着列车长皮卡丘限定的一整面货架空空如也，比整个商店都更让人在意的一幕。',
                  // memoryPhotoUrl: ''
                }
              ]
            }
            
          ]
        }
      ]
    },
    {
      id: 'kinki',
      type: 'region',
      titleEn: 'Kinki / Kansai Region',
      titleCn: '近畿地区（关西）',
      descriptionEn:
        'The historical heart of Japan: Kyoto, Nara, and surrounding cities packed with temples, shrines, and layers of pre-modern history.',
      descriptionCn:
        '日本的历史心脏地带，以京都、奈良为代表，神社与寺庙密集分布，前近代的历史层层堆叠。',
      notesEn: [
        'Temple fatigue is real here – pacing and route planning matter more than ticking off famous names.',
        'Many sights are individually spectacular but can blur together if you visit too many in a row.'
      ],
      notesCn: [
        '在关西地区，“寺庙疲劳”是个真问题，比起刷名单，更需要好好规划节奏和路线。',
        '很多景点单拎出来都很震撼，但如果一天看太多，很容易混成一团记不清。'
      ],
      children: [
        {
          id: 'kyoto-city',
          type: 'city',
          score: 4.6,
          titleEn: 'Kyoto City',
          titleCn: '京都市区',
          descriptionEn:
            'Former imperial capital with an overwhelming number of temples and shrines. Even a single day focused on one or two areas can feel dense and memorable.',
          descriptionCn:
            '昔日帝都，寺社数量多到有点“看不完”的绝望感。哪怕只专注一个小片区，一天的行程也能被塞得满满当当。',
          highlightsEn: [
            'Excellent for building themed routes (e.g. “eastern temple line” or “Fushimi inari + nearby spots”).',
            'First-time temple visits here strongly shape expectations for all later temple visits in Japan.'
          ],
          highlightsCn: [
            '非常适合按片区设计主题动线，比如“东线寺庙组队”或“伏见稻荷+附近景点”。',
            '第一次在京都看的寺庙，往往会直接抬高之后所有寺庙的心理预期。'
          ],
          children: [
            {
              id: 'kyoto-east-fushimi-higashiyama',
              type: 'route',
              score: 5.0,
              routeNameEn: "East Route",
              routeAreaEn: "Fushimi · Higashiyama",
              routeNameCn: "东线",
              routeAreaCn: "伏见 · 东山",
              titleEn: "Fushimi Inari - Sanjusangen-do - Kiyomizu-dera - Ninenzaka and Sannenzaka - Yasaka Shrine - Gion",
              titleCn: "伏见稻荷-三十三间堂-清水寺-二三年坂-八坂神社-祇园",

              descriptionEn:
                'A top-tier Kyoto route that, in theory, can be completed comfortably within a full day. The ideal flow starts with an early train to Fushimi Inari Taisha, followed by a taxi ride to Sanjūsangendō, another taxi to Kiyomizu-dera, and then a long stretch done entirely on foot. We personally finished the whole thing in two half-days, so completing it in a single day is entirely realistic. The route combines many of Kyoto’s most characteristic elements: the iconic shrine and endless vermilion torii gates of Fushimi Inari, the overwhelming thousand Kannon statues of Sanjūsangendō, the atmospheric Kiyomizu-dera temple area (including spots famous from Detective Conan), seasonal beauty especially in autumn, lively snack-and-souvenir stone-paved streets, and night-lit shrines that remain bustling into the evening. Much like Tokyo’s East Route, it captures a broad range of experiences while still focusing on high-quality, highly distinctive sights.\n\n' +
                'Originally this route was planned for our second day in Kyoto, but we arrived around noon; after checking in and eating lunch it was already 14:00. If we had gone to Arashiyama as scheduled, we would have reached it around 15:00—far too late. So we improvised, doing the latter half of this East Route on Day 1, and Fushimi Inari + Arashiyama on Day 2 instead.\n\n' +
                'For travelers with limited time in Kyoto, this route—whether done in one piece or split across two days—should be considered the absolute top priority.',
              descriptionCn:
                '顶级路线，理论上一天是能走完的，早上坐动车去伏见稻荷大社，然后打车去三十三间堂，打车去清水寺，后面全靠走，完全可以。我们两个小半天就完成了，所以应该是可行的。这条路线包含最壮丽的神社及大名鼎鼎的千本鸟居、壮观的一千观音像的三十三间堂、富有特色，包含柯南打卡点的清水寺（红叶季更好看）、热闹的小吃礼品石板路、亮着夜灯的神社，可能还算热闹的实际。跟东京的东线一样，囊括范围很广，景点也都是富有特色的精品，将京都的特色全都概括了。\n\n' +
                '本来这个线路是安排在京都的第二天的，但是我们到京都的时候已经是中午了，入住吃完中饭已经下午两点，这个时候如果走岚山线，到的时候都已经三点，根本来不及。因此我们随机应变以下，将这条线路的后半段放到第一天，第二天可以伏见稻荷+岚山。\n\n' +
                '如果京都安排的时间不多，这条线路不管拆不拆开都是优先级最高的，务必放在首位。',
              highlightsEn: [
                'Can be completed within a single well-paced day, yet remains flexible enough to split into two half-days without losing coherence.',
                'Covers the full spectrum of “Kyoto essentials”: iconic shrine culture (Fushimi Inari), overwhelming religious art (Sanjūsangendō), and atmospheric temple architecture (Kiyomizu-dera).',
                'Includes extremely memorable signature experiences such as the Thousand Torii gates and the thousand Kannon statues.',
                'Stone-paved shopping streets and night-lit shrines add a lively contrast to the more solemn spiritual sites.',
                'Highly efficient route when using short taxi hops between major temples, eliminating dead walking time.',
                'If your Kyoto schedule is tight, this is the highest-priority route—arguably the best single-day summary of Kyoto.'
              ],
              
              highlightsCn: [
                '整体路线在节奏控制得当的情况下完全可以一天走完，拆成两个小半天也同样顺畅。',
                '囊括京都最具代表性的三大要素：神社文化（伏见稻荷）、宗教艺术震撼（三十三间堂）、特色寺庙建筑（清水寺）。',
                '千本鸟居与一千观音像都属于“人生必看一次”的震撼级体验。',
                '石板路小吃街、夜间灯光神社等元素让肃穆与热闹并存，体验层次丰富。',
                '主要景点之间用出租车连接，极大提高效率，几乎没有无效步行。',
                '如果在京都停留时间有限，这条路线无论是否拆开，都是优先级最高的必走路线。'
              ],
              children: [
                {
                  id: 'sanjusangendo',
                  type: 'spot',
                  score: 4.5,
                  titleEn: 'Sanjūsangendō (Rengeō-in)',
                  titleCn: '三十三间堂',
                  visitTimeEn: 'Visited on March 5, 2025 (early spring)',
                  visitTimeCn: '参观时间：2025年3月5日（早春）',
                  descriptionEn:
                    'A must-see Kyoto temple famous for its long main hall lined with one thousand standing statues of Kannon, flanked by a massive central image and rows of guardian deities. The visual impact of the hall is enormous: the 28 guardian figures, thunder and wind gods, and the glass-eyed expressions that seem to follow you from every angle all work together to create a uniquely intense atmosphere. The experience outside the main hall, however, is much more modest. The surrounding garden loop is simple and not especially distinctive, and if your itinerary already includes many other temple gardens, walking the full circuit may not add much. As the first temple of this Kyoto trip, the visit also served as a “layout tutorial”: after one lap you more or less understand how many Japanese temples are organized internally.',
                  // 中文正文：完全按你提供的版本+保留换行
                  descriptionCn:
                    '必来景点，非常震撼。扣的0.5分在于景点的集中性太差，除了主堂以外啥也没有，花园的一圈很单调，也不是很有特点，如果旅途中要去的寺庙很多的话完全没必要走一圈。因为这是我们来京都逛的第一个寺庙，也不太清楚，就走了一圈，对于寺庙里的布局也有了大致的了解。\n\n' +
                    '其实就主殿的震撼程度完全可以打满分。一千座千手观音像，中间还有一个巨型主像，28尊夜叉、天王、明王在前一字排开，风雷二神大一号站两侧，眼睛都是琉璃装饰的，特别有神，走到什么方向都想在瞪着你看。日本的观音像是男身，仔细看还能看到胡子。有讲解说这些观音都是千手千眼，但是我们其实没看出来，导览上说是25*40，手确实有40只，但是为什么是*25，日文就看不太懂了。\n\n' +
                    '至于为什么叫三十三间堂，堂是一个门框的范围，算上侧面的两个一共有三十三间，其广度可见一斑。\n\n' +
                    '总体上特色和不可替代性都是一流，而且非常震撼，保证是不虚此行的。',
                  tipsEn: [
                    'If your trip includes many temple gardens, consider saving energy by focusing on the main hall; the outer garden loop is pleasant but not essential.',
                    'The main hall alone justifies the visit – give yourself enough time to slowly walk back and forth and look at the statues from different angles.',
                    'Audio guides or written explanations can enhance the experience, especially for the 28 guardian deities and the meaning behind the “33 bays”.',
                    'Going here early in your Kyoto stay sets a very high bar for later temples; manage your expectations for the rest of the trip.'
                  ],
                  tipsCn: [
                    '如果整个行程里已经排了很多寺庙，建议把时间和体力集中在主殿本身，外面花园的一圈可看可不看。',
                    '主殿足够值回票价，一定要留出充足时间来回多走几遍，从不同角度慢慢看这些佛像。',
                    '可以考虑租借语音讲解或认真看说明牌，尤其是关于二十八部众、风神雷神以及“三十三间”名称由来的部分，会更有代入感。',
                    '把三十三间堂作为京都旅程的第一座寺庙很合适，但也会抬高之后所有寺庙的心理预期，需要适当管理期待值。'
                  ],

                  // 🆕 忆照
                  memoryPhotoEn: 'The dim hall with rows of golden Kannon stretching into the distance, a slightly tilted perspective because you are walking slowly along the railing, trying to look each statue in the eye.',
                  memoryPhotoCn: '昏暗大殿里，一整排金色的观音像向远处延伸，镜头有一点点倾斜，是沿着栏杆缓慢走动时的视角——总觉得每一尊的眼睛都在盯着你看。',
                  memoryPhotoUrl: '../../../../../picture/rating_sightseeing/Asia/Japan/Kyoto/33.jpg'
                },
                {
                  id: 'kiyomizu-dera',
                  type: 'spot',
                  score: 4.5,
                  titleEn: 'Kiyomizu-dera',
                  titleCn: '清水寺',
                  visitTimeEn: 'Visited on March 5, 2025 (early spring)',
                  visitTimeCn: '参观时间：2025年3月5日（早春）',
                
                  // ⚠️ 中文正文保持完全一致
                  descriptionCn:
                    '分不高，不是特别有特点，寺庙样式在京都比比皆是，但是人巨多，对于不在乎（就算有所了解）的人而言并没有这么高的性价比。当然他是京都最古老的寺庙，有丰富的历史背景，是国宝级建筑，是世界遗产，但是对于我们普通的游客（哪怕已经看过一些相关背景），如果不是学艺术的很难看出比其他的寺庙好的那部分在哪。\n\n' +
                    '清水寺的布局还是很气派的，规格毋庸置疑，建在还算有点海拔的小山上，二三年坂非常陡峭，爬到山顶的时候还是非常豁然开朗的。鸟居和三重塔都不需要门票，再往里走去主殿就要门票了，门票包含主殿包括内院走一圈一直到子安塔。我们来的时候樱花没看，雪已经消融，枫叶季更是遥遥无期，并未看到什么绝景；然而只要站在清水寺的东山上，便能俯瞰整个京都府，光是这一点也足以让此行不虚了。',
                
                  // 🆕 英文版本（自由发挥，但忠实内容）
                  descriptionEn:
                    'A famous Kyoto landmark that, while grand in scale and historically significant, may feel less unique to casual visitors who have already seen multiple temples in the city. The crowds are enormous, and without a deep interest in art or architectural history, it can be difficult to distinguish what makes Kiyomizu-dera superior to other temples—despite being one of Kyoto’s oldest, a National Treasure, and a UNESCO World Heritage site.\n\n' +
                    'What Kiyomizu-dera unquestionably offers is presence: the complex sits dramatically on the slope of a hill, reached through the steep Ninen-zaka and Sannen-zaka approaches. Even before entering the paid area, the vermilion gate and three-storied pagoda create an impressive introduction. The admission circuit covers the main hall and inner areas all the way to Koyasu Pagoda. During this visit, cherry blossoms had not yet appeared, snow had melted, and autumn foliage was far off, so none of the iconic seasonal scenery was visible. Still, the panoramic view of Kyoto from the temple’s eastern hillside alone is enough to justify the effort of climbing up.',
                
                  tipsEn: [
                    'Arrive early in the morning or later in the evening to avoid the densest crowds along Ninen-zaka and Sannen-zaka.',
                    'The free areas (gate, pagoda, approach streets) are already highly photogenic; the paid inner route is worthwhile mainly for the viewpoint and atmosphere.',
                    'If possible, try to visit during sakura or autumn foliage season—Kiyomizu-dera transforms dramatically with seasonal color.',
                    'Wear comfortable shoes; the slopes are steep and the stone steps can be slippery in wet weather.'
                  ],
                
                  tipsCn: [
                    '建议尽量挑早上或傍晚来，二三年坂的人潮在白天会非常“恐怖”。',
                    '免费的鸟居和三重塔区域已经很好看，付费区域的亮点主要是视野和氛围。',
                    '如果能赶上樱花季或枫叶季，清水寺的观感会提升一大截，季节性非常强。',
                    '坡道很陡，建议穿好走的鞋，下雨天石板也会有点打滑。'
                  ],
                
                  memoryPhotoEn:
                    'Standing at the edge of the veranda, Kyoto spreading out in muted spring colors below—no cherry blossoms yet, no dramatic foliage, just a calm cityscape under a pale sky after climbing the steep stone paths.',
                  memoryPhotoCn:
                    '站在清水寺东山的边缘向下望，京都府在早春的颜色里静静铺开，没有樱花、没有红叶，只是被登上二三年坂后的那一眼豁然开朗。',
                  
                  // 可留空，未来加照片路径
                  // memoryPhotoUrl: ''
                }
                 
              ]
            }
          ]
        }
      ]
    }
  ];
  