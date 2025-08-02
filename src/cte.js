let i = 0, j = 0;

export const actors = [
    {
        id: ++i,
        name: {
            en: 'Raymondo Peinbar',
            ar: 'رايموندو بينبار',
        },
        sex: 'ذكر',
        role: 'بطل القصة',
        img: '/Raymondo',
        path: '/Raymondo',
        age: 25,
        eps: [1, 2, 3, 4, 5, 6, 7],
        mins: [37],
        personality: ['هادئ', 'بارد المشاعر'],
        voice: 'باهت',
        class: 1,
        taken: true
    },
    {
        id: ++i,
        name: {
            en: 'Jordan Smorpy',
            ar: 'يوردان سموربي',
        },
        sex: 'أنثى',
        role: 'بطلة القصة',
        img: '/Jordan',
        path: '/Jordan',
        age: 23,
        eps: [2, 3, 4, 5, 6, 7],
        mins: [16],
        personality: ['ذكية', 'جريئة'],
        voice: 'ناعم و حساس',
        class: 1,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Rodrygo Grimes',
            ar: 'رودريغو غريمز',
        },
        sex: 'ذكر',
        role: 'جندي و شريك رايموندو في السكن',
        img: '/Rodrygo',
        path: '/Rodrygo',
        age: 25,
        eps: [2, 3, 4, 5, 6, 7],
        mins: [20],
        personality: ['عاطفي', 'لطيف', 'متفاعل'],
        voice: 'عادي',
        class: 1,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Noro Aphinha',
            ar: 'نورو أفينيا',
        },
        sex: 'ذكر',
        role: 'من نفس مجموعة رايموندو',
        img: '/Noro',
        path: '/Noro',
        age: 26,
        eps: [2, 3, 4, 5, 6, 7],
        mins: [15],
        personality: ['غير مهتم', 'هادئ', 'بارد المشاعر'],
        voice: 'خشن',
        class: 1,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Necklen Tenshi',
            ar: 'نيكلين تينشي',
        },
        sex: 'ذكر',
        role: 'من نفس مجموعة رايموندو',
        img: '/Necklen',
        path: '/Necklen',
        age: 24,
        eps: [2, 3, 4, 5],
        mins: [14],
        personality: ['جاد'],
        voice: 'خشن',
        class: 1,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Roony Tenshi',
            ar: 'روني تينشي',
        },
        sex: 'ذكر',
        role: 'من نفس مجموعة رايموندو',
        img: '/Roony',
        path: '/Roony',
        age: 24,
        eps: [2, 3, 4, 5],
        mins: [12],
        personality: ['متفاعل'],
        voice: 'عادي',
        class: 1,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Elwy Tenshi',
            ar: 'الفي تينشي',
        },
        sex: 'أنثى',
        role: 'من نفس مجموعة رايموندو',
        img: '/Elwy',
        path: '/Elwy',
        age: 24,
        eps: [2, 3, 4, 5],
        mins: [12],
        personality: ['مرحة', 'متفاعلة'],
        voice: 'مرح',
        class: 1,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Rekardo Fubbuke',
            ar: 'ريكاردو فوبوكي',
        },
        sex: 'ذكر',
        role: 'من نفس مجموعة رايموندو',
        img: '/Rekardo',
        path: '/Rekardo',
        age: 22,
        eps: [4, 5],
        mins: [2],
        personality: ['هادئ', 'بارد المشاعر'],
        voice: 'خشن',
        class: 2,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Wither',
            ar: 'ويذر',
        },
        sex: 'ذكر',
        role: 'ضحية التارديغرايد',
        img: '/Wither',
        path: '/Wither',
        age: '--',
        eps: [5, 6, 7],
        mins: [6],
        personality: ['مرعب', 'غامض'],
        voice: 'غامض ومرعب',
        class: 1,
        taken: true
    },
    {
        id: ++i,
        name: {
            en: 'Keith Rock',
            ar: 'كيث روك',
        },
        sex: 'ذكر',
        role: 'مدرب دفعة المستجدين',
        img: '/Keith',
        path: '/Keith',
        age: 35,
        eps: [2, 3, 4, 5, 7],
        mins: [15],
        personality: ['جاد', 'غاضب'],
        voice: 'خشن جدا و صارخ دائما',
        class: 1,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Raven Nopha',
            ar: 'رايفن نوفا',
        },
        sex: 'ذكر',
        role: 'محقق عسكري و عدو رايموندو',
        img: '/Raven',
        path: '/Raven',
        age: 32,
        eps: [3, 4],
        mins: [12],
        personality: ['متوتر', 'ماكر'],
        voice: 'حاد',
        class: 1,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Szhady MCnakles',
            ar: 'شادي ميكناكلز',
        },
        sex: 'ذكر',
        role: 'مساعد رايفن',
        img: '/Szhady',
        path: '/Szhady',
        age: 31,
        eps: [3, 4],
        mins: [5],
        personality: ['عادي'],
        voice: 'عادي',
        class: 3,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Catherine Peinbar',
            ar: 'كاثرين بينبار',
        },
        sex: 'أنثى',
        role: 'أم رايموندو',
        img: '/Catherine',
        path: '/Catherine',
        age: 44,
        eps: [1],
        mins: [3],
        personality: ['هادئة'],
        voice: 'كبيرة السن',
        class: 2,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Haydi Peinbar',
            ar: 'هايدي بينبار',
        },
        sex: 'أنثى',
        role: 'أخت رايموندو',
        img: '/Haydi',
        path: '/Haydi',
        age: 16,
        eps: [1],
        mins: [2],
        personality: ['مرحة'],
        voice: 'لين',
        class: 2,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Ren Bea',
            ar: 'رين بيي',
        },
        sex: 'أنثى',
        role: 'زوجة رايموندو',
        img: '/Ren',
        path: '/Ren',
        age: 18,
        eps: [1],
        mins: [4],
        personality: ['حزينة'],
        voice: 'باهتة',
        class: 2,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Claire Peinbar',
            ar: 'كلير بينبار',
        },
        sex: 'أنثى',
        role: 'ابنة رايموندو',
        img: '/Claire',
        path: '/Claire',
        age: 4,
        eps: [1],
        mins: [1],
        personality: ['مرحة'],
        voice: 'صغيرة السن',
        class: 2,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Rob Peinbar',
            ar: 'روب بينبار',
        },
        sex: 'ذكر',
        role: 'أخ رايموندو',
        img: '/Rob',
        path: '/Rob',
        age: 28,
        eps: [1, 6],
        mins: [6],
        personality: ['متوتر', 'جاد'],
        voice: 'غامض',
        class: 1,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Griletc Palmer',
            ar: 'غريلتش بالمر',
        },
        sex: 'ذكر',
        role: 'قائد عسكري انجليزي',
        img: '/Griletc',
        path: '/Griletc',
        age: 54,
        eps: [1],
        mins: [1],
        personality: ['جاد'],
        voice: 'كبير السن',
        class: 4,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Hawk Wanof',
            ar: 'هاوك وانوف',
        },
        sex: 'ذكر',
        role: 'قائد عسكري انجليزي',
        img: '/Hawk',
        path: '/Hawk',
        age: 56,
        eps: [1],
        mins: [1],
        personality: ['جاد'],
        voice: 'كبير السن',
        class: 4,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Jonathan Hap',
            ar: 'جوناثان خاب',
        },
        sex: 'ذكر',
        role: 'مهندس دولي انجليزي',
        img: '/Jonathan',
        path: '/Jonathan',
        age: 29,
        eps: [1],
        mins: [1],
        personality: ['جاد'],
        voice: 'عادي',
        class: 4,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Alex Aphinha',
            ar: 'أليكس أفينيا',
        },
        sex: 'ذكر',
        role: 'أخ نورو',
        img: '/Alex',
        path: '/Alex',
        age: 27,
        eps: [4, 6],
        mins: [1],
        personality: ['عادي'],
        voice: 'عادي',
        class: 3,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Soreimy Noe',
            ar: 'سوريمي نوي',
        },
        sex: 'أنثى',
        role: 'خطيبة أليكس',
        img: '/Soreimy',
        path: '/Soreimy',
        age: 24,
        eps: [4, 6],
        mins: [1],
        personality: ['عادي'],
        voice: 'عادي',
        class: 3,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Suaru Maie',
            ar: 'سوارو ماي',
        },
        sex: 'أنثى',
        role: 'أم نورو و أليكس',
        img: '/Suaru',
        path: '/Suaru',
        age: 44,
        eps: [4, 6],
        mins: [2],
        personality: ['عادي'],
        voice: 'عادي',
        class: 3,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Rath Aphinha',
            ar: 'راف أفينيا',
        },
        sex: 'ذكر',
        role: 'أب نورو و أليكس',
        img: '/Rath',
        path: '/Rath',
        age: 50,
        eps: [4, 6],
        mins: [2],
        personality: ['عادي'],
        voice: 'عادي',
        class: 3,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Mary Croose',
            ar: 'ماري كروز',
        },
        sex: 'أنثى',
        role: 'حبيبة رودريغو',
        img: '/Mary',
        path: '/Mary',
        age: 22,
        eps: [7],
        mins: [2],
        personality: ['عادي'],
        voice: 'عادي',
        class: 3,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Aian Mauver',
            ar: 'ايان ماوفر',
        },
        sex: 'ذكر',
        role: 'خطيب ماري',
        img: '/Aian',
        path: '/Aian',
        age: 22,
        eps: [7],
        mins: [2],
        personality: ['عادي'],
        voice: 'عادي',
        class: 4,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Sebastiano Bea',
            ar: 'سيباستيانو بيي',
        },
        sex: 'ذكر',
        role: 'أخ رين',
        img: '/Sebastiano',
        path: '/Sebastiano',
        age: 13,
        eps: [1],
        mins: [1],
        personality: ['عصبي'],
        voice: 'صارخ و حاد',
        class: 4,
        taken: false
    },
    {
        id: ++i,
        name: {
            en: 'Federiko Nuaro',
            ar: 'فيديريكو نوارو',
        },
        sex: 'ذكر',
        role: 'سجين',
        img: '/Federiko',
        path: '/Federiko',
        age: 33,
        eps: [3],
        mins: [1],
        personality: ['ودود'],
        voice: 'عادي',
        class: 4,
        taken: false
    },
]

export const clips = [
    {
        id: ++j,
        actor: 2, // Jordan
        text: {
            jap: 'ついに... この戦争が終わった... 我々の敗北で...！レイモンド... あなたがすべての原因なのよ、この馬鹿。なぜ？なぜすべてが突然崩壊したの？計画はうまくいかなかったの？列車を止められなかったの？戦術に従わなかったの？私たちはすべてをやった... なのに、なぜ？',
            rom: 'Tsuini... kono sensō ga owatta... wareware no haiboku de...! Reimondo... anata ga subete no gen\'in nano yo, kono baka. Naze? Naze subete ga totsuzen hōkai shita no? Keikaku wa umaku ikanakatta no? Ressha o tomerarenakatta no? Senjutsu ni shitagawanakatta no? Watashitachi wa subete o yatta... noni, naze?',
            arb: 'أخيرا... انتهت هذه الحرب... التي دامت ثلاث سنوات... بهزيمتنا ! رايموندو... لقد كنت أنت السبب في كل ما حصل أيها الغبي. لماذا ؟ لماذا انهار كل شيء فجأة ؟ ألم تسر الخطة كما يجب ؟! ألم نوقف القطار ؟ ألم نتبع التكتيك ؟ لقد فعلنا كل ما يجب... إذن، لماذا ؟!',
        },
        theme: 'بصوت محطم و باكي'
    },
    {
        id: ++j,
        actor: 3, // Rodrygo
        text: {
            jap: '彼女は大丈夫だ！きっと大丈夫だ！三年間の苦難、私は十分に耐えた... メアリー・クルーズに会いに行き、彼女は無事に違いない。私をからかうな、老人。何が起こるんだ？人生はきっと私に報いてくれるさ！',
            rom: 'Kanojo wa daijōbu da! Kitto daijōbu da! San-nenkan no kunan, watashi wa jūbun ni taeta... Mearii Kurūzu ni ai ni iki, kanojo wa buji ni chigainai. Watashi o karakau na, rōjin. Nani ga okoru nda? Jinsei wa kitto watashi ni mukuite kureru sa!',
            arb: 'إنها بخير ! إنها حتما بخير ! ثلاث سنوات من العذاب، لقد تحملت أكثر من اللازم... سوف أرى ماري كروز و ستكون سالمة بدون شك. لا تمزح معي أيها العجوز ما الذي قد يحصل ؟ سوف تكافئني الحياة حتما !',
        },
        theme: 'بمزيج من الغضب و الحزن و التوتر'
    },
    {
        id: ++j,
        actor: 4, // Noro
        text: {
            jap: 'いずれにせよ、簡単なことではないだろう。彼らは間違いなく我々の反撃を予想し、大きな歓迎を準備しているに違いない。しかし、最前線の兵士たちが一番気の毒だ... 彼らは残念ながら死地に向かっている。',
            rom: 'Izure ni seyo, kantan na koto de wa nai darō. Karera wa machigainaku wareware no hangeki o yosō shi, ōkina kangei o junbi shite iru ni chigainai. Shikashi, saizensen no heishitachi ga ichiban ki no doku da... Karera wa zannen nagara shichi ni mukatte iru.',
            arb: 'في جميع الأحوال لن يكون الأمر سهلا، إنهم حتما يضربون حسابا لهجومنا المضاد، و لا شك أنهم يحضرون لنا ترحيبا كبيرا. لكن أشفق أكثر على خط الطليعة... إنهم موجهون لحتفهم مع الأسف.',
        },
        theme: 'بصوت بارد جدا و هادئ مع نبرة من الحزن'
    },
    {
        id: ++j,
        actor: 5, // Necklen
        text: {
            jap: 'おい、エルフィ！正気に戻れ！状況は大きく変わったんだ、我々は軍事訓練を受けた。両親とは違って、訓練も受けずに戦争に駆り出されたんじゃない。今の我々は戦場を読み、状況を分析し、解決策を見つけることができる。一緒なら... きっと生き延びられるさ！',
            rom: 'Oi, Erufi! Shōki ni modore! Jōkyō wa ōkiku kawatta nda, wareware wa gunji kunren o uketa. Ryōshin to wa chigatte, kunren mo ukezu ni sensō ni karidashareta n janai. Ima no wareware wa senjō o yomi, jōkyō o bunseki shi, kaiketsusaku o mitsukeru koto ga dekiru. Issho nara... kitto iki nobireru sa!',
            arb: 'أوي إلفي عودي إلى رشدك ! لقد تغيرت الأمور كثيرا عما كانت عليه، لقد تلقينا تكوينا عسكريا ممتازا على عكس والدينا اللذان أرغما على المشاركة في الحرب بدون تدريب! نحن نجيد قراءة الميدان الآن، نجيد تحليل الوضع والخروج بحل، طالما نحن معا... سننجو بالتأكيد!',
        },
        theme: 'بصوت صارخ محاولا تهدئة خوف أخته'
    },
    {
        id: ++j,
        actor: 6, // Roony
        text: {
            jap: 'よし、どうやら我々は同じユニットのようだ。中央の主力部隊、ヘンリー少佐の指揮の下、我々の目標は防衛軍の中心を打ち、彼らのラインを突破することだ。これは... おそらく最も難しいユニットだろう... しかし大丈夫、我々は兵力の50パーセントを占めている。',
            rom: 'Yoshi, yaradake wareware wa onaji yunitto no yō da. Chūō no shuryoku butai, Henrī shōsa no shiki no moto, wareware no mokuhyō wa bōeigun no chūshin o uchi, karera no rain o toppa suru koto da. Kore wa... osoraku motto muzukashii yunitto darō... Shikashi daijōbu, wareware wa heiryoku no 50 pāsento o shime te iru.',
            arb: 'جيد يبدو بأننا في نفس الوحدة، القوة الرئيسية الوسط، بقيادة الرائد هنري، هدفنا ضرب مركز القوات الدفاعية وكسر خطوطهم، قد تكون هذه أصعب وحدة في الواقع... لكن لا بأس نحن نشكل 50 في المئة من القوات',
        },
        theme: 'بصوت سريع و متوتر'
    },
    {
        id: ++j,
        actor: 7, // Elwy
        text: {
            jap: '早く、早く、早く... 弾薬はどこ？ちくしょう、何が起こっているんだ？集中力を失っている... 落ち着け... 落ち着け... 大丈夫、すべてうまくいくさ。ロドリゴとノロが戻れば、この地域は安全になる... ほんの数分だ。',
            rom: 'Hayaku, hayaku, hayaku... Dan\'yaku wa doko? Chikushō, nani ga okotte iru nda? Shūchūryoku o ushinatte iru... Ochitsuke... ochitsuke... Daijōbu, subete umaku iku sa. Rodorigo to Noro ga modoreba, kono chiiki wa anzen ni naru... Hon no sūfun da.',
            arb: 'بسرعة بسرعة بسرعة... أين الدخيرة! تبا ما الذي يحصل أنا أفقد تركيزي! اهدئي... اهدئي... سيكون كل شيء على ما يرام. فور عودة رودريغو و نورو ستكون المنطقة آمنة... ما هي إلا دقائق.',
        },
        theme: 'بصوت متوتر و مخنوق من الخوف'
    },
    {
        id: ++j,
        actor: 10, // Keith
        text: {
            jap: '注意！キャンプ内で連続殺人事件が発生しています！キャンプの別の地区でいくつかの死体が発見され、我々は犯人を特定しようとしています！',
            rom: 'Chūi! Kyampu nai de renzoku satsujin jiken ga hassei shite imasu! Kyampu no betsu no chiku de ikutsu ka no shitai ga hakken sare, wareware wa hannin o tokutei shiyō to shite imasu!',
            arb: 'انتباه! لقد تم الإعلان عن سلسلة جرائم قتل متكررة تحدث في المعسكر! تم العثور على عدد من الجثث في الضاحية الأخرى من المعسكر ونحن في صدد إيجاد الجاني !',
        },
        theme: 'بصوت صارخ جدا و غاضب'
    },
    {
        id: ++j,
        actor: 11, // Raven
        text: {
            jap: '分かった... 今、すべて理解した。この野郎... 第一のメモをわざと犯罪現場に置き、第二のメモを裏門にわざと導くために電話をかけてきた。水曜日に何も犯罪を犯さなかった... これはすべて彼の仕組んだことだ！大変だ、大変だ、大変だ！これは本当に大変なことだ... 彼は私をやった。',
            rom: 'Wakatta... ima, subete rikai shita. Kono yarō... daiichi no memo o waza to hanzai genba ni oki, daini no memo o uramon ni waza to michibiku tame ni denwa o kakete kita. Suiyōbi ni nanimo hanzai o okasanakatta... Kore wa subete kare no shikunda koto da! Taihen da, taihen da, taihen da! Kore wa hontō ni taihen na koto da... Kare wa watashi o yatta.',
            arb: 'فهمت... فهمت كل شيء الآن، الوغد... قام بإيقاع المذكرة الأولى عمدا في مسرح الجريمة حتى أجدها، وقام بإرسالي عبر الهاتف عمدا إلى البوابة الخلفية حيث وضع المذكرة الثانية، حتى أنه لم يقم بأي جريمة أساسا يوم الأربعاء... كل هذا من تدبيره! ورطة ورطة ورطة ورطة ورطة ! إنها ورطة حقيقية... لقد نال مني.',
        },
        theme: 'بصوت متوتر جدا و واقع في ورطة'
    },
    {
        id: ++j,
        actor: 17, // Rob
        text: {
            jap: '私はメモをあなたに残した... あなたの兄が何をしたか知られたくなかったから。私が原因だったんだ、レイ... 本当に... 心から申し訳ない！私は取るに足らない人間だ、あなたが私を許さないのは当然だ... 許しを請うつもりはない、あなたが私を憎む権利があるからね！',
            rom: 'Watashi wa memo o anata ni nokoshita... anata no ani ga nani o shita ka shiraretakunakatta kara. Watashi ga gen\'in datta nda, Rei... hontō ni... kokoro kara mōshiwake nai! Watashi wa toru ni tarinai ningen da, anata ga watashi o yurusanai no wa tōzen da... yurushi o kou tsukuri wa nai, anata ga watashi o nikumu kenri ga aru kara ne!',
            arb: 'لقد تركت المذكرة معك... لأنني لم أردك أن تعرف ما فعله أخوك، لقد كنت أنا السبب يا راي... أن فعلا... من كل قلبي آسف ! ما أنا إلا شخص نكرة، أعلم أنك الآن تكرهني حق الكره يا أخي... لا أطلب منك مسامحتي أبدا لأنه من حقك أن اكرهني !',
        },
        theme: 'بصوت حزين'
    },
    {
        id: ++j,
        actor: 13, // Catherine
        text: {
            jap: '大丈夫よ、レン。あなたは私たちと一緒にいて、小さな家族の一部になるわ。私たちと一緒に幸せになってほしいわ！',
            rom: 'Daijōbu yo, Ren. Anata wa watashitachi to issho ni ite, chiisana kazoku no ichibu ni naru wa. Watashitachi to issho ni shiawase ni natte hoshii wa!',
            arb: 'لا بأس يا رين، سوف تبقين معنا و تكونين جزءا من أسرتنا الصغيرة. أتمنى أن تكوني سعيدة معنا !',
        },
        theme: 'بصوت سعيد'
    },
    {
        id: ++j,
        actor: 14, // Haydi
        text: {
            jap: 'はあああ！お母さん、レイモンドが妻を家に連れてきたよ！はははは',
            rom: 'Hāāā! Okāsan, Reimondo ga tsuma o ie ni tsurete kita yo! Hahaha',
            arb: 'هاااه ! أمي، رايموندو أحضر معه زوجة إلى المنزل !هههههه',
        },
        theme: 'بصوت ساخر'
    },
    {
        id: ++j,
        actor: 16, // Claire
        text: {
            jap: '走って、お父さん、お母さんが近づいてきた！早く早く早く！',
            rom: 'Hashitte, otōsan, okāsan ga chikazuite kita! Hayaku hayaku hayaku!',
            arb: 'اجري يا أبي أمي اقتربت منا ! بسرعة بسرعة بسرعة !',
        },
        theme: 'بصوت طفولي سعيد'
    },
    {
        id: ++j,
        actor: 15, // Ren
        text: {
            jap: '待って、レイモンド！一日中逃げ回ることはできないわ。娘の健康を心配しないの？まったく、レイモンド、捕まえてやるわ！',
            rom: 'Matte, Reimondo! Ichinichijū nigemawaru koto wa dekinai wa. Musume no kenkō o shinpai shinai no? Mattaku, Reimondo, tsukaemaete yaru wa!',
            arb: 'انتظر يا رايموندو ! لا يمكنك الهرب طوال اليوم ألا تخاف على صحة ابنتك ؟ سحقا رايموندو سأمسك بك !',
        },
        theme: 'بصوت قلق و جاد'
    },
    {
        id: ++j,
        actor: 28, // Federiko
        text: {
            jap: 'こんにちは皆さん！第六グループに加わりました。よろしくお願いします。',
            rom: 'Konnichiwa minasan! Dai roku gurūpu ni kuwawarimashita. Yoroshiku onegaishimasu.',
            arb: 'مرحبا جميعا ! لقد تم ضمي للمجموعة السادسة، أتمنى أن أكون عند حسن ظنكم.',
        },
        theme: 'بصوت ودود'
    },
    {
        id: ++j,
        actor: 8, // Rekardo
        text: {
            jap: 'レイモンドの裁判は彼らの思うままに進むだろう... 彼は弁護士を雇う権利すら与えられないと思う。残念ながら... これは避けられない運命のようだ。',
            rom: 'Reimondo no saiban wa karera no omoamama ni susumu darō... Kare wa bengoshi o yatou kenri sura ataerarenai to omou. Zannen nagara... Kore wa sakerarenai unmei no yō da.',
            arb: 'أعتقد أن الأمر ليس بيدنا... ستتم محاكمة رايموندو على هواهم و لا أظنه سيحصل على الحق بتوكيل محام حتى، أظن الأمر... لا مخلص منه للأسف.',
        },
        theme: 'بصوت قلق و حزين'
    },
    {
        id: ++j,
        actor: 20, // Jonathan
        text: {
            jap: '科学者たちはこの生物をターディグレードと名付けた。地球上で最も強い生物で、殺すことは不可能だ。窒息でも... 放射線でも... 飢餓でも... 爆発でも... 放射能でも... 文字通り何も彼を殺すことはできない。',
            rom: 'Kagakushatachi wa kono seibutsu o tādigurēdo to nazuketa. Chikyūjō de mottomo tsuyoi seibutsu de, korosu koto wa fukanō da. Chissoku demo... hōshasen demo... kiga demo... bakuhatsu demo... hōshanō demo... mojiburi nanimo kare o korosu koto wa dekinai.',
            arb: 'أطلق العلماء على هذا المخلوق اسم التارديغريد، و هو أقوى مخلوق مكتشف على وجه الأرض إذ يستحيل قتله، لا الخنق... ولا الأشعة... ولا الجوع... ولا التفجير... ولا الإشعاع، لا شيء قادر على قتله حرفيا.',
        },
        theme: 'بطريقة شرحية'
    },
    {
        id: ++j,
        actor: 19, // Hawk
        text: {
            jap: 'よし、皆さん、集まってください... では始めましょう。工兵隊の長を紹介します。彼は新しい兵器について説明します。これは前の兵器とは違います。今回は大量破壊兵器で、我が国を世界最強にします... フランスとの関係が緊張する中、破滅的な戦争がいつ起こってもおかしくありません。工兵隊長、どうぞ。',
            rom: 'Yoshi, minasan, atsumatte kudasai... dewa hajimemashō. Kōheitai no chō o shōkai shimasu. Kare wa atarashii heiki ni tsuite setsumei shimasu. Kore wa mae no heiki to wa chigaimasu. Konkai wa tairyō hakai heiki de, wagakuni o sekai saikyō ni shimasu... Furansu to no kankei ga kinchō suru naka, hametsuteki na sensō ga itsu okotte mo okashiku arimasen. Kōheitai chō, dōzo.',
            arb: 'حسنا الجميع هنا... لنبدأ، أقدم لكم رئيس فيلق المهندسين، سيطلعنا على السلاح الجديد الذي يعمل عليه الفيلق، إنه ليس كسابقه من الأسلحة، هذه المرة هذا سلاح إبادة جماعية، سيجعل دولتنا الأقوى عالميا... مع ازدياد توتر العلاقات مع فرنسا هناك خطر وقوع حرب مدمرة في أيّة لحظة، تفضل يا رئيس المهندسين',
        },
        theme: 'بصوت عسكري'
    },
    {
        id: ++j,
        actor: 18, // Griletc
        text: {
            jap: '火の実験は大成功を収めた！あの連中は炎から逃れる術がなかった。我々は彼らを完全に破壊した。',
            rom: 'Hi no jikken wa daiseikō o osameta! Ano renchu wa honō kara nogareru sube ga nakatta. Wareware wa karera o kanzen ni hakai shita.',
            arb: 'لقد أدت تجربة النار لنجاح باهر! اولائك الحثالة لم يجدوا مهربا من ألسنة اللهب، لقد دمرناهم شر تدمير.',
        },
        theme: 'بصوت غامض'
    },{
        id: ++j,
        actor: 12, // Szhady
        text: {
            jap: '長官、任務は順調に進んでいます。しかし、敵の動きが活発化しています。注意が必要です。',
            rom: 'Chōkan, ninmu wa junchō ni susunde imasu. Shikashi, teki no ugoki ga kappatsu shite imasu. Chūi ga hitsuyō desu.',
            arb: 'قائد، المهمة تسير بشكل جيد. لكن حركة العدو أصبحت أكثر نشاطا. يجب أن نكون حذرين.',
        },
        theme: 'بصوت جاد و مهني'
    },
    {
        id: ++j,
        actor: 21, // Alex
        text: {
            jap: '兄さん、心配しないで。僕たちは必ずこの状況を乗り越えるから。',
            rom: 'Nīsan, shinpai shinaide. Bokutachi wa kanarazu kono jōkyō o norikoeru kara.',
            arb: 'لا تقلق يا أخي. سنتغلب على هذا الموقف بالتأكيد.',
        },
        theme: 'بصوت مطمئن و هادئ'
    },
    {
        id: ++j,
        actor: 25, // Mary
        text: {
            jap: 'ロドリゴ、あなたが無事で本当に良かった。私たちは一緒に未来を築いていきましょう。',
            rom: 'Rodorigo, anata ga buji de hontō ni yokatta. Watashitachi wa issho ni mirai o kizuite ikimashō.',
            arb: 'رودريغو، أنا سعيد جدا لأنك بخير. سنبني المستقبل معا.',
        },
        theme: 'بصوت حنون و سعيد'
    },
    {
        id: ++j,
        actor: 22, // Soreimy
        text: {
            jap: 'アレックス、私たちの結婚式は夢のようね。一緒に幸せな家庭を作りましょう。',
            rom: 'Arekkusu, watashitachi no kekkonshiki wa yume no yō ne. Issho ni shiawase na katei o tsukurimashō.',
            arb: 'أليكس، زفافنا كان مثل الحلم. لنبني أسرة سعيدة معا.',
        },
        theme: 'بصوت حالم و سعيد'
    },
    {
        id: ++j,
        actor: 23, // Suaro
        text: {
            jap: '子供たち、食事の準備ができたわよ。みんなで楽しく食べましょう。',
            rom: 'Kodomotachi, shokujī no junbi ga deki ta wa yo. Minna de tanoshiku tabemashō.',
            arb: 'أطفال، العشاء جاهز. لنأكل معا بسعادة.',
        },
        theme: 'بصوت حنون و دافئ'
    },
    {
        id: ++j,
        actor: 24, // Rath
        text: {
            jap: '家族みんな、今日も一日無事に過ごせて良かった。',
            rom: 'Kazoku minna, kyō mo ichinichi buji ni sugose te yokatta.',
            arb: 'أسرتي، أنا سعيد لأننا قضينا يوما آخر بسلام.',
        },
        theme: 'بصوت هادئ و مطمئن'
    },
    {
        id: ++j,
        actor: 26, // Aian
        text: {
            jap: 'メアリー、僕たちの関係はこれからもずっと続くよ。君を愛している。',
            rom: 'Mearii, bokutachi no kankei wa kore kara mo zutto tsuzuku yo. Kimi o aishite iru.',
            arb: 'ماري، علاقتنا ستستمر إلى الأبد. أنا أحبك.',
        },
        theme: 'بصوت حنون و عاطفي'
    },
    {
        id: ++j,
        actor: 27, // Sebastiano
        text: {
            jap: 'お姉さん、僕も大きくなったら強い兵士になる！',
            rom: 'Onēsan, boku mo ōkiku nattara tsuyoi heishi ni naru!',
            arb: 'أختاه، عندما أكبر سأصبح جنديا قويا!',
        },
        theme: 'بصوت متحمس و طفولي'
    }
];

export function calculateSimilarity(str1, str2) {
    const normalize = str => str
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, ' ').trim();

    const a = normalize(str1);
    const b = normalize(str2);

    if (a === b || a.includes(b) || b.includes(a)) return true;

    function jaroWinklerDistance(s1, s2) {
        const matchDistance = Math.floor(Math.max(s1.length, s2.length) / 2) - 1;

        const matches1 = Array(s1.length).fill(false);
        const matches2 = Array(s2.length).fill(false);

        let matchingCharacters = 0;

        for (let i = 0; i < s1.length; i++) {
            const start = Math.max(0, i - matchDistance);
            const end = Math.min(i + matchDistance + 1, s2.length);

            for (let j = start; j < end; j++) {
                if (!matches2[j] && s1[i] === s2[j]) {
                    matches1[i] = true;
                    matches2[j] = true;
                    matchingCharacters++;
                    break;
                }
            }
        }

        if (matchingCharacters === 0) return 0;

        let transpositions = 0;
        let k = 0;

        for (let i = 0; i < s1.length; i++) {
            if (matches1[i]) {
                while (!matches2[k]) k++;

                if (s1[i] !== s2[k]) transpositions++;
                k++;
            }
        }

        const jaroSimilarity = (
            (matchingCharacters / s1.length) +
            (matchingCharacters / s2.length) +
            ((matchingCharacters - transpositions / 2) / matchingCharacters)
        ) / 3;

        const prefixLength = Math.min(4, [...s1].reduce((count, char, i) =>
            (i < s2.length && char === s2[i]) ? count + 1 : count, 0));

        const scalingFactor = 0.1;

        return jaroSimilarity + (prefixLength * scalingFactor * (1 - jaroSimilarity));
    }

    function nGramSimilarity(s1, s2, n = 2) {
        if (s1.length < n || s2.length < n) return 0;

        const createNGrams = str => {
            const ngrams = new Set();
            for (let i = 0; i <= str.length - n; i++) {
                ngrams.add(str.substring(i, i + n));
            }
            return ngrams;
        };

        const ngrams1 = createNGrams(s1);
        const ngrams2 = createNGrams(s2);

        const intersection = [...ngrams1].filter(gram => ngrams2.has(gram));
        const union = new Set([...ngrams1, ...ngrams2]);

        return (2 * intersection.length) / (ngrams1.size + ngrams2.size);
    }

    const wordsA = a.split(/\s+/);
    const wordsB = b.split(/\s+/);

    function findBestWordMatches(wordsSource, wordsTarget) {
        return wordsSource.map(word => {
            const matches = wordsTarget.map(targetWord => {
                const editSimilarity = jaroWinklerDistance(word, targetWord);
                const ngramSim = nGramSimilarity(word, targetWord, 2);
                return Math.max(editSimilarity, ngramSim);
            });

            return Math.max(...matches, 0);
        });
    }

    const wordMatchesA = findBestWordMatches(wordsA, wordsB);
    const wordMatchesB = findBestWordMatches(wordsB, wordsA);

    const avgWordMatchScore =
        [...wordMatchesA, ...wordMatchesB].reduce((sum, score) => sum + score, 0) /
        (wordMatchesA.length + wordMatchesB.length);

    function getWordRoot(word) {
        return word.length > 4 ? word.substring(0, 4) : word;
    }

    const rootsA = wordsA.map(getWordRoot);
    const rootsB = wordsB.map(getWordRoot);

    const commonRoots = rootsA.filter(root => rootsB.includes(root));
    const rootSimilarity = commonRoots.length / Math.max(rootsA.length, rootsB.length);

    const lengthRatio = Math.min(a.length, b.length) / Math.max(a.length, b.length);

    const globalJaroWinkler = jaroWinklerDistance(a, b);
    const globalNGram = nGramSimilarity(a, b, 3);

    const weights = {
        jaroWinkler: 0.25,
        nGram: 0.20,
        wordMatch: 0.30,
        rootSimilarity: 0.15,
        lengthRatio: 0.10
    };

    const finalScore =
        globalJaroWinkler * weights.jaroWinkler +
        globalNGram * weights.nGram +
        avgWordMatchScore * weights.wordMatch +
        rootSimilarity * weights.rootSimilarity +
        lengthRatio * weights.lengthRatio;

    const dynamicThreshold = 0.55 - (0.05 * Math.min(1, Math.max(a.length, b.length) / 20));

    return finalScore >= dynamicThreshold;
}

function format(id) {
    const keys = 'azertyioopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN1234567890'

    function code(val) {
        return keys.charAt((id * val / (1 + id * val)) * (keys.length - 1))
    }

    let hash = ""
    for (let i = 0; i < 7; i++)
        hash += code(i)
    return hash
}

function getNotYet() {
    let T = []
    for(let a=0; a<actors.length; a++) {
        if(clips.some(clip => clip.actor == actors[a].id) || actors[a].name.en.includes('Raymondo') || actors[a].name.en.includes('Wither'))
            continue
        else
            T.push(actors[a])
    }
    return T
}