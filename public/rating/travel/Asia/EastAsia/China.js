// 仅数据：地区-省-市-景点
const travelTree = [
  {
    id: 'dongbei',
    type: 'region',
    titleEn: 'Northeast China',
    titleCn: '东北地区',
    descriptionEn: 'A region with strong seasonal contrast, heavy history, and very “solid” everyday life vibes.',
    descriptionCn: '季节反差强烈、历史感沉重，又很有“烟火气”的地区。',
    notesEn: [
      'Good for winter trips (ice & snow) and history-oriented routes.',
      'Food is hearty and portions are generous.'
    ],
    notesCn: [
      '适合冬季看冰雪、顺带走一些历史路线。',
      '饭量普遍偏大，很有“下馆子”的满足感。'
    ],
    children: [
      {
        id: 'jilin-province',
        type: 'province',
        titleEn: 'Jilin Province',
        titleCn: '吉林省',
        descriptionEn: 'Known for rime scenery, ski resorts, and traces of modern history.',
        descriptionCn: '以雾凇、滑雪和近现代历史遗迹闻名。',
        notesEn: [
          'Winter roads can be icy – local transport conditions matter.',
          'City experiences tend to be calm and less touristy compared to coastal hotspots.'
        ],
        notesCn: [
          '冬天自驾要注意路面结冰情况，最好提前关注交通信息。',
          '城市本身不算“网红”，节奏比较日常，也比较接地气。'
        ],
        children: [
          {
            id: 'changchun-city',
            type: 'city',
            score: 4.0,
            titleEn: 'Changchun City',
            titleCn: '长春市',
            descriptionEn: 'Former capital of Manchukuo, industrial city with layered history and wide avenues.',
            descriptionCn: '曾是“伪满洲国”的首都，典型工业城市，马路宽、历史感复杂。',
            highlightsEn: [
              'Interesting if you care about modern East Asian history.',
              'Not a classic “tourist city”, more like entering someone else’s everyday life.'
            ],
            highlightsCn: [
              '如果对近现代东亚历史感兴趣，这里很有看头。',
              '不算典型旅游城市，更像是走进别人的日常生活。'
            ],
            children: [
              {
                id: 'puppet-palace',
                type: 'spot',
                score: 3.5,
                titleEn: 'Puppet Manchukuo Palace Museum',
                titleCn: '伪满皇宫博物院',
                visitTimeEn: 'Visited in February 2023 (winter)',
                visitTimeCn: '参观时间：2023年2月（冬季）',
                descriptionEn: 'The former “imperial palace” of the puppet state, now a museum. The building, layout, and exhibits all make the constructed nature of power very tangible.',
                descriptionCn: '曾经的伪满宫殿，如今的博物馆。从建筑、陈设到展览文字，都让“权力是被搭建出来的”这件事变得很具象。',
                tipsEn: [
                  'Set aside at least half a day if you like reading exhibition texts carefully.',
                  'Audio guides or guided tours can help a lot with context.',
                  'Be prepared for emotionally heavy content in some sections.'
                ],
                tipsCn: [
                  '如果习惯认真看展板，建议至少预留半天时间。',
                  '可以考虑租语音讲解或跟随讲解员，会更有脉络感。',
                  '部分展区内容比较沉重，心理上可以稍微有个预期。'
                ],

                // 🆕 忆照
                memoryPhotoEn: 'The dim hall with rows of golden Kannon stretching into the distance, a slightly tilted perspective because you are walking slowly along the railing, trying to look each statue in the eye.',
                memoryPhotoCn: '昏暗大殿里，一整排金色的观音像向远处延伸，镜头有一点点倾斜，是沿着栏杆缓慢走动时的视角——总觉得每一尊的眼睛都在盯着你看。',
                memoryPhotoUrl: '../../../../../picture/rating_sightseeing/Asia/Japan/Kyoto/33.jpg'
              },
              {
                id: 'bada-bu-complex',
                type: 'spot',
                score: 3.5,
                titleEn: 'Bada Department Complex (Former Manchukuo Ministries)',
                titleCn: '八大部',
                visitTimeEn: 'Seen on October 2, 2024 (drive-by only)',
                visitTimeCn: '参观时间：2024年10月2日（自驾路过远眺）',
                descriptionEn: 'A grand former government complex of the Manchukuo era. You only caught it while driving past on the way to Guilin Road, but the imposing architecture was striking enough to warrant a quick photo and later “retroactive” recognition.',
                descriptionCn: '八大部仅仅是在去桂林路的路上在车上瞟了一眼，还在寻思这医院怎么如此气派，随手拍了一张发到了群里。返程后复盘时发现我们没有专程去参观八大部，但是看到八大部的照片，发觉这治安部的照片好生眼熟，原来我已然参观过了。',
                tipsEn: [
                  'Best treated as a low-cost, low-effort drive-by sight when you are already in the area.',
                  'Good for self-driving visitors: circle around once to feel the scale without needing to get out.',
                  'Worth it if you are into historical architecture, but don’t expect a full “attraction experience”.'
                ],
                tipsCn: [
                  '很适合作为“顺路一看”的景点，自驾绕一圈几乎没有时间和经济成本。',
                  '推荐自驾游客路过时专门慢开一圈感受一下建筑尺度，无须特地停车下车。',
                  '适合对历史建筑感兴趣的人，但不要期待一个完整的景点体验，上限有限。'
                ]
              },
              {
                id: 'guilin-road-street',
                type: 'spot',
                score: 3.5,
                titleEn: 'Guilin Road Commercial & Food Street',
                titleCn: '桂林路',
                visitTimeEn: 'Visited on October 2, 2024',
                visitTimeCn: '参观时间：2024年10月2日',
                descriptionEn: 'A local commercial and food street with a clear “Northeast” flavor. The area near Xinmin Avenue crossing felt quiet at first, but the mid-section and the junction with Tongzhi Street were packed with people, snacks, and small experiences — more about lively atmosphere and affordable food than about iconic landmarks.',
                descriptionCn: [
                  '我们这一车停在了新民大道和桂林路的交叉口，那里有个汤泉时代可以偷偷免费停车。虽说也是桂林路，但是渺无人烟。正当寻思着这商业街有点非比寻常之际，另一车的同伴发来的照片确实一片繁华景象。（不过西段有一家零食超市还可以，不到一百的零食八个人吃了六天。）',
                  '走到中段方才热闹起来，到同志街十字路口已然人山人海。虽说脱不开小吃街的桎梏，但是还算是很有东北特色。同时热闹的氛围也能提升幸福感，分量很足，价格也不似一些小吃街一般有景点溢价，小巷里也有别具一格的体验项目（可以免费玩蛇）。',
                ],
                tipsEn: [
                  'Expect a very “local snack street” vibe rather than a visually iconic landmark like Chongqing’s Hongya Cave.',
                  'Food is plentiful, fairly priced, and mostly non-generic — good place to try distinct Northeast snacks.',
                  'Southern visitors may rate it even higher thanks to the novelty and value-for-money, but here it is settled at 3.5 for balance.'
                ],
                tipsCn: [
                  '定位更接近本地小吃街，而不是重庆洪崖洞那类“打卡地标”，不要期待太出片的景观线。',
                  '小吃选择丰富且价格友好，很少看到那种千篇一律的臭豆腐、竹筒冰淇淋之类，更偏东北特色。',
                  '南方游客可能会因为新鲜感和性价比给到更高分，这里在滤镜褪去之后综合打分为3.5。'
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'east-china',
    type: 'region',
    titleEn: 'East China',
    titleCn: '华东地区',
    descriptionEn: 'Coastal megacities, dense urban life, and a mix of modern skylines with older religious and cultural sites.',
    descriptionCn: '沿海大城市云集，城市生活密度极高，摩天大楼与老牌宗教、文化场所交织在一起。',
    notesEn: [
      'Convenient for first-time visitors to China who want big-city experiences.',
      'Public transport is usually very developed and easy to use.'
    ],
    notesCn: [
      '很适合作为初次来中国的落脚点，城市体验丰富。',
      '公共交通非常发达，出行便利。'
    ],
    children: [
      {
        id: 'shanghai-municipality',
        type: 'province',
        titleEn: 'Shanghai Municipality',
        titleCn: '上海市',
        descriptionEn: 'A hyper-modern metropolis with dense commercial areas, historical concessions, and scattered religious landmarks in the urban core.',
        descriptionCn: '极度现代化的大都会，商圈密集，有老牌租界与点状分布在市中心的宗教建筑。',
        notesEn: [
          'Great contrast between old temples/churches and glass-and-steel skylines.',
          'Crowds and commercialization can be intense in core districts.'
        ],
        notesCn: [
          '传统寺庙、教堂与玻璃幕墙高楼之间的反差非常鲜明。',
          '核心商圈人流量和商业化程度都很高，需做好心理准备。'
        ],
        children: [
          {
            id: 'shanghai-city',
            type: 'city',
            score: 4.0,
            titleEn: 'Shanghai City',
            titleCn: '上海市区',
            descriptionEn: 'The main urban area where luxury malls, historical concessions, and religious sites all sit within a dense modern city grid.',
            descriptionCn: '高档商场、历史风貌区与宗教场所一同挤在现代化城区网格里的大都市核心。',
            highlightsEn: [
              'Strong sense of “two worlds” between upscale malls and older religious spaces.',
              'Easy to chain multiple spots together in a single walking day.'
            ],
            highlightsCn: [
              '能强烈感受到静安大悦城一类商场与老寺庙之间的“两个世界”。',
              '很适合安排成多景点步行串联的一天行程。'
            ],
            children: [
              {
                id: 'jingan-temple',
                type: 'spot',
                score: 2.0,
                titleEn: 'Jing’an Temple',
                titleCn: '静安寺',
                visitTimeEn: 'Visited on October 1, 2024 (Golden Week, autumn)',
                visitTimeCn: '参观时间：2024年10月1日（国庆假期，秋季）',
                descriptionEn: 'A dazzling golden temple right in the middle of Shanghai’s urban core. From the outside, the contrast between the Vajrayana-style golden roofs and the surrounding skyscrapers is striking. However, once inside, the layout and deities have been heavily “Sinicized” into a more typical Han Chinese Buddhist temple, losing much of the distinctive esoteric flavor. Combined with commercialized incense offerings and crowds of visitors blindly drawing lots, the overall experience inside feels far less special than the exterior promises.',
                descriptionCn: [
                  '一座金碧辉煌却又被高楼大厦包围在市中心的寺庙。最早是在出租车上远眺的，我非常惊讶上海这么繁华的地方怎么会有一所这样的寺庙，金碧辉煌，前寺后塔，与汉传佛教的古刹大相径庭，竟是一座金刚乘佛教的寺庙。在地图上一看，原来这便是静安寺，大名鼎鼎的静安寺居然是一座密教古刹。讶异之余，对象还跟我说她自己一个人来这里的时候已经进去过了，还求过签。',
                  '自那以后，我便想找个机会来拜访一下这座在市中心的密教寺庙，正好在十一跟来访上海的cet见识过跟我们处于两个世界的静安大悦城后，提出一同来此参观的请求。',
                  '然而进寺参观后却是大失所望，里面的寺庙格局以及拜的神佛经历了严重的汉化，失去了密宗的特色，色调柔和而肃穆，敬的佛像也是四大天王，米勒韦驮，观音如来。',
                  '由此，虽说几尊木雕，玉制，铜制佛像尚且可圈可点，然扣去特色性只剩四分，而商业化与盲目求签的游客更是降低了其评分，再回想起50元的香火钱，只能打至2分。',
                ],
                tipsEn: [
                  'If you are short on time or budget, simply appreciating the exterior from nearby crossings or malls gives you most of the value for free.',
                  'The interior visit (around 50 RMB incense/entry) may feel underwhelming if you expect a strongly esoteric Vajrayana atmosphere — set expectations accordingly.',
                  'Better for those curious about the visual clash of golden temple vs. modern CBD than for serious religious or architectural exploration.'
                ],
                tipsCn: [
                  '若时间或预算有限，只在周边路口或商场平台远观外观，已经能收获主要观感，而且“物美价廉”。',
                  '入寺参观加上香火费用（约50元）性价比偏低，尤其是如果期待的是浓厚密宗氛围的话，要提前调低预期。',
                  '更适合想感受“金色寺庙 × 现代商圈”强烈反差的游客，而不是奔着宗教或建筑本体深度体验来的游客。'
                ]
              }
            ]
          }
        ]
      }
    ]
  },
];
