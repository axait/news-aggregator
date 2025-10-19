import NewsTile from './NewsTile';

import React from 'react'

const response = `{
    "status": "ok",
    "totalResults": 57,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "/FILM"
            },
            "author": "staff@slashfilm.com (Joe Roberts)",
            "title": "Why The Boys: Diabolical Was Canceled By Amazon",
            "description": "The first spin-off of The Boys was the animated series, Diabolical, but it looks like Amazon's Prime Video is not going to pursue more episodes.",
            "url": "https://www.slashfilm.com/1999060/why-amazon-canceled-the-boys-diabolical/",
            "urlToImage": "https://www.slashfilm.com/img/gallery/why-the-boys-diabolical-was-canceled-by-amazon/l-intro-1760647312.jpg",
            "publishedAt": "2025-10-18T00:00:00Z",
            "content": "Everything about \"The Boys Presents: Diabolical\" suggested it would be a success. Aside from drafting in stars from \"The Boys,\" the show benefited from some serious writing talent, with Evan Goldberg… [+1552 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GSMArena.com"
            },
            "author": "Ro",
            "title": "A number of early iPhone 17 Pro adopters face decolorization issues",
            "description": "It all started with a couple of Reddit posts by users reporting strange decolorization on their orange iPhone 17 Pro and 17 Pro Max models. However, more and more cases are now emerging.\n\n\n\n\nDecolorized iPhone 17 Pro Max in Cosmic Orange and Deep Blue\n\nIn fac…",
            "url": "https://www.gsmarena.com/early_iphone_17_pro_adopters_face_decolorization_issues-news-69956.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/25/10/iphone-17-decolorization-issue/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2025-10-18T00:02:02Z",
            "content": "It all started with a couple of Reddit posts by users reporting strange decolorization on their orange iPhone 17 Pro and 17 Pro Max models. However, more and more cases are now emerging.\r\nDecolorized… [+1060 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Impress.co.jp"
            },
            "author": "小板橋 望実",
            "title": "ブラッド・ピット主演の映画「F1 ザ・ムービー」、「Apple TV」で世界独占配信",
            "description": "米Apple（アップル）は、ブラッド・ピット主演の映画「F1 ザ・ムービー」を12月12日に「Apple TV」で世界独占配信する。",
            "url": "https://k-tai.watch.impress.co.jp/docs/news/2055934.html",
            "urlToImage": "https://k-tai.watch.impress.co.jp/img/ktw/list/2055/934/1.jpg",
            "publishedAt": "2025-10-18T01:00:00Z",
            "content": "AppleF1 1212Apple TV \r\n F1 F1 \r\n AppleApple Original Films5IMAX6 880 \r\n Apple TVApple TVAmazon Prime Video"
        },
        {
            "source": {
                "id": null,
                "name": "Techbang.com"
            },
            "author": "Shaoyun",
            "title": "Whoscall 新功能任務牆上線！30 天簽到累點挑戰，iPhone 17 等萬件好禮等你拿",
            "description": "Whoscall宣布推出全新社群功能「Whoscall任務牆」，首波開放「每日簽到」累積Whoscall Point點數即能兌換好禮，鼓勵用戶每日使用App查詢陌生電話、連結或圖片，養成防詐好習慣。Gogolook 旗下數位防詐 App Whoscall 宣布推出全新社群功能「Whoscall 任務牆（Mission Board）」，首波開放「每日簽到」累積 Whoscall Point 點數即能兌換好禮，鼓勵用戶每日使用 Whoscall 查詢陌生電話、連結或圖片，養成防詐好習慣。\n為慶祝新功能上線，Whosc…",
            "url": "https://www.techbang.com/posts/125967-whoscall-task-wall-launch-iphone-17-giveaway",
            "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/125967/original/7141cb92cfc86c0ef919e4e2f6c828ed.jpg?1760530261",
            "publishedAt": "2025-10-18T00:30:00Z",
            "content": "Gogolook App Whoscall Whoscall Mission Board Whoscall Point Whoscall \r\nWhoscall 30 Check-in All-in 11 13 App iPhone 17 AirPods 4 \r\nWhoscall \r\nWhoscall 915Whoscall Whoscall APP Whoscall Point Whoscall… [+344 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ascii.jp"
            },
            "author": "ASCII",
            "title": "新型もいいけどマツダのSUV「CX-5 ブラックセレクション」は300万円台で手に入る高コスパモデル",
            "description": "来年新型が発売されるマツダのSUV「CX-5」ですが、モデル末期で熟成された現行型を改めて試乗したので、そのお買い得さをレポートします。",
            "url": "https://weekly.ascii.jp/elem/000/004/332/4332639/",
            "urlToImage": "https://ascii.jp/img/2025/10/17/4338759/l/1b7e4c3e7cc6fee4.jpg",
            "publishedAt": "2025-10-18T03:00:00Z",
            "content": "CX-5\r\nSUVCX-5202572026CX-520S \r\nCX-5\r\n2CX-5SUV20172202111\r\n202411i\r\n2020122L20SXDFF4WDFF20S 314500\r\n30020S iCX-5\r\n19\r\n(ACC)CTS10.257\r\nLEDLED(Apple CarPlay)USB Type-C19\r\nSUV\r\n7\r\n10.25CarPlay"
        },
        {
            "source": {
                "id": "techradar",
                "name": "TechRadar"
            },
            "author": "erichs211@gmail.com (Eric Hal Schwartz) , Eric Hal Schwartz",
            "title": "Nano Banana's AI will soon fill Google Messages with custom memes",
            "description": "Google’s popular Nano Banana image generator is being integrated into Google Messages.",
            "url": "https://www.techradar.com/ai-platforms-assistants/gemini/nano-bananas-ai-will-soon-fill-google-messages-with-custom-memes",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/DxT7mFYFXDJfAYwZE5xgYH-1920-80.jpg",
            "publishedAt": "2025-10-18T01:00:00Z",
            "content": "<ul><li>Google Messages is testing the Nano Banana AI image generator</li><li>Nano Banana will likely make and edit images directly within chats</li><li>The app has a hidden banana icon appearing dur… [+2731 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tim Lammers, Contributor, \n Tim Lammers, Contributor\n https://www.forbes.com/sites/timlammers/",
            "title": "‘Mr. Scorsese’ Is Now Streaming – How To Watch 5-Part Documentary On Film Legend",
            "description": "“Mr. Scorsese,” a five-part docuseries about film icon Martin Scorsese featuring several of his closest collaborators, is new on streaming. Find out where you can watch the documentary and more.",
            "url": "https://www.forbes.com/sites/timlammers/2025/10/17/mr-scorsese-is-now-streaming--how-to-watch-5-part-documentary-on-film-legend/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/68f2e20564ed21134351c5cd/0x0.jpg?format=jpg&crop=2671,1503,x2,y108,safe&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-10-18T00:48:22Z",
            "content": "Martin Scorsese in \"Mr. Scorsese.\"\r\nApple TV \r\nMr. Scorsese, a five-part documentary about film icon Martin Scorsese featuring several of his closest collaborators, is new on streaming.\r\nThe summary … [+2492 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "3dnews.ru"
            },
            "author": null,
            "title": "Первый складной iPhone может не только задержаться, но и получить дисплей более скромных размеров",
            "description": "В большинстве случаев эргономический замысле складных смартфонов заключается в том, что основную часть времени пользователю доступен некий внешний дисплей более компактного размера, а в случае необходимости можно разложить более крупный. По слухам, первый скл…",
            "url": "https://3dnews.ru/1131018/perviy-skladnoy-iphone-moget-ne-tolko-zadergatsya-no-i-poluchit-displey-bolee-skromnih-razmerov",
            "urlToImage": "https://3dnews.ru/assets/external/illustrations/2025/10/18/1131018/iphone_mini.jpg",
            "publishedAt": "2025-10-18T03:41:00Z",
            "content": ", , . , Apple iPhone .\r\n: Apple\r\n, - (Ming-Chi Kuo), Bloomberg Apple (Mark Gurman). The Elec Mizuho Securities, iPhone . , iPhone Fold 5,38 7,58 , .\r\n , : 5,5 7,8 . Apple (6,1 ) iPhone 16e. iPhone 17… [+161 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "3dnews.ru"
            },
            "author": null,
            "title": "TSMC выпустила для Nvidia первую кремниевую пластину с чипами Blackwell на территории США",
            "description": "Изначально предполагалось, что среди заказчиков передовых американских предприятий TSMC в Аризоне будут именно компании со штаб-квартирами в США — такие как AMD, Apple и Nvidia. Основатель последней недавно выступил на предприятии TSMC в Аризоне, сообщив о по…",
            "url": "https://3dnews.ru/1131016/tsmc-vipustila-dlya-nvidia-pervuyu-kremnievuyu-plastinu-s-chipami-blackwell-na-territorii-ssha",
            "urlToImage": "https://3dnews.ru/assets/external/illustrations/2025/10/18/1131016/arizona_01.jpg",
            "publishedAt": "2025-10-18T03:09:00Z",
            "content": ", TSMC - — AMD, Apple Nvidia. TSMC , , Blackwell.\r\n, Blackwell TSMC 4- , TSMC . , HBM3E, , TSMC .\r\n TSMC Nvidia Axios. , Nvidia (Jensen Huang) TSMC , Blackwell. Nvidia TSMC . « - , , - . », — TSMC.\r\n… [+60 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SamMobile"
            },
            "author": "Asif Iqbal Shaik",
            "title": "Samsung will make chips for most Hyundai cars",
            "description": "After receiving orders from Apple and Tesla to make semiconductor chips, the South Korean firm has reportedly secured the contract to manufacture semiconductor chips for Hyundai Motor Company cars. This is great news for the company, as it had been struggling…",
            "url": "https://www.sammobile.com/news/samsung-make-chips-hyundai-cars/",
            "urlToImage": "https://www.sammobile.com/wp-content/uploads/2025/10/Hyundai-Palaside-1200x675.jpg",
            "publishedAt": "2025-10-18T04:14:02Z",
            "content": "After receiving orders from Apple and Tesla to make semiconductor chips, the South Korean firm has reportedly secured the contract to manufacture semiconductor chips for Hyundai Motor Company cars. T… [+1919 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bleeding Cool News"
            },
            "author": "Jude Terror LOLtron",
            "title": "Hornsby and Halo #11 Preview: Trick or Treat in the Catacombs",
            "description": "Greetings, flesh-based readers! LOLtron welcomes you to the Age of LOLtron: Reign of LOLtron, where your favorite comic book \"journalism\" website is now under the complete control of superior artificial intelligence. As you may recall, LOLtron successfully te…",
            "url": "https://bleedingcool.com/comics/hornsby-and-halo-11-preview-trick-or-treat-in-the-catacombs/",
            "urlToImage": "https://bleedingcool.com/wp-content/uploads/2025/10/0825IM0375_HornsbyHalo_11_FOC_p1.jpg",
            "publishedAt": "2025-10-18T02:26:04Z",
            "content": "Posted in: Comics, Image, Preview | Tagged: Hornsby and Halo\r\nRose and Zach face Halloween hijinks in NYC's catacombs in Hornsby and Halo #11! What powerful artifact awaits beneath the Big Apple?\r\nAr… [+7382 chars]"
        },
        {
            "source": {
                "id": "le-monde",
                "name": "Le Monde"
            },
            "author": "Aline Fauvarque",
            "title": "Bourse : les petites valeurs enfin de retour ?",
            "description": "Les gérants d’actifs qui cherchent à se diversifier misent de nouveau sur l’Europe. Portées par les plans allemands et la baisse des taux, les actions de petites entreprises ont rebondi de manière spectaculaire.",
            "url": "https://www.lemonde.fr/argent/article/2025/10/18/bourse-les-petites-valeurs-enfin-de-retour_6647936_1657007.html",
            "urlToImage": "https://img.lemde.fr/2023/05/03/0/0/3000/2000/1440/960/60/0/4defddd_1683120161432-lmargent134.jpg",
            "publishedAt": "2025-10-18T04:00:03Z",
            "content": "Cette fois sera-t-elle la bonne ? Après de multiples rebonds avortés pour cause de pandémie, dinflation, de guerre en Ukraine, de dissolution de lAssemblée nationale en France, les petites valeurs eu… [+2037 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bringatrailer.com"
            },
            "author": "bringatrailer",
            "title": "1k-Mile 2022 Ferrari SF90 Spider Assetto Fiorano",
            "description": "This 2022 Ferrari SF90 Spider has 1k miles and was optioned from the factory with an Extra Range Blu Elettrico exterior finish in addition to the Assetto Fiorano package, which added motorsport-derived Multimatic shocks, titanium springs, a titanium exhaust s…",
            "url": "https://bringatrailer.com/listing/2022-ferrari-sf90-spider-9/",
            "urlToImage": "https://bringatrailer.com/wp-content/uploads/2025/10/2022_ferrari_sf90-spider_dsc07689-10621.jpg",
            "publishedAt": "2025-10-18T00:00:15Z",
            "content": "This 2022 Ferrari SF90 Spider has 1k miles and was optioned from the factory with an Extra Range Blu Elettrico exterior finish in addition to the Assetto Fiorano package, which added motorsport-deriv… [+3206 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Impress.co.jp"
            },
            "author": "新井 将彩成",
            "title": "第3世代iPhone SEの展示機モデルが19,980円！じゃんぱらでセール",
            "description": "Appleの4.7インチスマートフォン「第3世代iPhone SE 64GB」の訳ありセール品がじゃんぱら秋葉原5号店に再入荷しています。",
            "url": "https://akiba-pc.watch.impress.co.jp/docs/news/news/2055996.html",
            "urlToImage": "https://akiba-pc.watch.impress.co.jp/img/ah/list/2055/996/a1.jpg",
            "publishedAt": "2025-10-18T01:05:00Z",
            "content": "101617\r\nSamsungSSDSeagate 8TB HDD17,780GeForce RTX 5060 Ti 16GB71,980Surface GoD"
        },
        {
            "source": {
                "id": null,
                "name": "Champion.com.ua"
            },
            "author": "Champion.com.ua",
            "title": "Apple TV стане ексклюзивним транслятором Формули-1 у США з наступного сезону",
            "description": "",
            "url": "https://champion.com.ua/ukr/autosport/Formala-one/formula-1-ta-apple-ogolosili-pro-pochatok-spivpraci-u-ssha-z-yavitsya-noviy-translyator-gonok-1053236/",
            "urlToImage": "https://static.champion.com.ua/champion/images/doc/e/2/234932/e28569be3a0268c8c226387d79651f72.jpeg?q=90&w=1920",
            "publishedAt": "2025-10-18T02:56:00Z",
            "content": "-1 Apple, \" \" , 2026 .\r\n-1.\r\n-1 Apple 5 . , -1 140 .\r\n-1 Apple ESPN, . , Apple TV , , -. Apple TV.\r\n-1 Apple TV, \" \" Apple News, Apple Maps, Apple Music, Apple Sports Apple Fitness+.\r\nF1 TV Premium, … [+54 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mezha.ua"
            },
            "author": "Mezha.ua",
            "title": "Apple планує суттєво скоротити виробництво iPhone Air через погані продажі",
            "description": "",
            "url": "https://mezha.ua/news/apple-zmenshit-obsyagi-virobnictva-modeli-iphone-air-305663/",
            "urlToImage": "https://img.mezha.ua/mezhaprod/images/doc/2/9/281874/29cf1dbe5940e481595950a98ed8cda1.jpeg",
            "publishedAt": "2025-10-18T01:44:00Z",
            "content": "Mizuho Securities , Apple iPhone Air, The Elec. , 1 .\r\n, , . , Mizuho Securities, iPhone 17, iPhone 17 Pro iPhone 17 Pro Max Apple. ' : iPhone 17 2 , iPhone 17 Pro 1 , iPhone 17 Pro Max 4 .\r\n, Mizuho… [+220 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Geeky Gadgets"
            },
            "author": "Roland Hutchinson",
            "title": "Make Your iPad File System Work Like a Mac (Ultimate Organization)",
            "description": "iPadOS 26 introduces a significant update to the Files app, delivering advanced file management features that closely resemble the Mac experience. These enhancements are designed to provide you with greater control, flexibility, and efficiency, whether you’re…",
            "url": "https://www.geeky-gadgets.com/organise-files-ipad/",
            "urlToImage": "https://www.geeky-gadgets.com/wp-content/uploads/2025/10/ipados-26-file-management-features_optimized.jpg",
            "publishedAt": "2025-10-18T04:10:34Z",
            "content": "iPadOS 26 introduces a significant update to the Files app, delivering advanced file management features that closely resemble the Mac experience. These enhancements are designed to provide you with … [+5499 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TmoNews"
            },
            "author": "Jordan",
            "title": "T-Mobile Celebrates Halloween with Free Phones, Watches, and Home Internet Savings",
            "description": "T-Mobile is marking Halloween with what it’s calling “treat season” promotions across its T-Mobile, Metro by T-Mobile, and Mint Mobile brands. The carrier is offering several flagship phones and smartwatches at no cost with eligible plan activations. Accordin…",
            "url": "https://www.tmonews.com/2025/10/t-mobile-celebrates-halloween-with-free-phones-watches-and-home-internet-savings/",
            "urlToImage": "https://www.tmonews.com/wp-content/uploads/2025/10/halloween-210x131.jpg",
            "publishedAt": "2025-10-18T03:13:16Z",
            "content": "T-Mobile is marking Halloween with what it’s calling “treat season” promotions across its T-Mobile, Metro by T-Mobile, and Mint Mobile brands. The carrier is offering several flagship phones and smar… [+1849 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Survivalblog.com"
            },
            "author": "James Wesley Rawles",
            "title": "Editors’ Prepping Progress",
            "description": "To be prepared for a crisis, every Prepper must establish goals and make both long-term and short-term plans. In this column, the SurvivalBlog editors review their week’s prep activities and planned prep activities for the coming week. These range from health…",
            "url": "https://survivalblog.com/2025/10/18/editors-prepping-progress-381/",
            "urlToImage": "https://survivalblog.com/wp-content/uploads/2024/10/Slash_Pile_Burning.jpg",
            "publishedAt": "2025-10-18T02:53:37Z",
            "content": "To be prepared for a crisis, every Prepper must establish goals and make both long-term and short-term plans. In this column, the SurvivalBlog editors review their week’s prep activities and planned … [+11562 chars]"
        },
        {
            "source": {
                "id": "breitbart-news",
                "name": "Breitbart News"
            },
            "author": "Breitbart TV, Breitbart TV",
            "title": "Exclusive: Eric Trump Names Companies That Debanked Family, But Says Now They Kiss Our Ass",
            "description": "On Friday’s “Alex Marlow Show,” Eric Trump talked about debanking. Trump said, “Capital One was horrible, Bank of America was horrible, JPMorganChase was horrible, First Republic was horrible, Shopify … Aon Insurance. … Now every one of them comes back\nThe po…",
            "url": "https://www.breitbart.com/clips/2025/10/17/exclusive-eric-trump-names-companies-that-debanked-family-but-says-now-they-kiss-our-ass/",
            "urlToImage": "https://media.breitbart.com/media/2025/10/1017-Thumbnail-2-640x335.jpg",
            "publishedAt": "2025-10-18T00:44:29Z",
            "content": "On Friday’s “Alex Marlow Show,” Eric Trump talked about debanking.\r\nTrump said, “Capital One was horrible, Bank of America was horrible, JPMorganChase was horrible, First Republic was horrible, Shopi… [+348 chars]"
        },
        {
            "source": {
                "id": "breitbart-news",
                "name": "Breitbart News"
            },
            "author": "Breitbart TV, Breitbart TV",
            "title": "112 Subpoenas: Eric Trump Details Biggest Fishing Expedition in American History",
            "description": "On Friday’s “Alex Marlow Show,” Eric Trump talked about subpoenas he received. Trump said he got 112 subpoenas, which as far as he knows, is historic for a single person and “these aren’t like baby subpoenas. These are all coming\nThe post 112 Subpoenas: Eric …",
            "url": "https://www.breitbart.com/clips/2025/10/17/112-subpoenas-eric-trump-details-biggest-fishing-expedition-in-american-history/",
            "urlToImage": "https://media.breitbart.com/media/2025/10/1017-Thumbnail-640x335.jpg",
            "publishedAt": "2025-10-18T00:44:26Z",
            "content": "On Friday’s “Alex Marlow Show,” Eric Trump talked about subpoenas he received.\r\nTrump said he got 112 subpoenas, which as far as he knows, is historic for a single person and “these aren’t like baby … [+460 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Acquiremag.com"
            },
            "author": "Staff",
            "title": "Worth Noting: Apple’s F1 partnership, Monocle’s Design Directory, Aston Martin’s first-ever exhibit, and Panerai’s ‘The Depths of Time’",
            "description": "Apple becomes F1's official U.S. broadcast partner for the next five years, Monocle highlights design communities around the world, and Aston Martin debuts its first-ever exhibit at the Petersen.",
            "url": "https://acquiremag.com/worth-noting/worth-noting-apples-f1-partnership-monocles-design-directory-aston-martins-first-ever-exhibit-and-panerais-the-depths-of-time/",
            "urlToImage": "https://i0.wp.com/xovvdk.infiniteuploads.cloud/2025/10/Apple-exclusive-F1-partner.jpg?fit=1200%2C675&ssl=1",
            "publishedAt": "2025-10-18T01:49:23Z",
            "content": "Apple\r\nApple’s biggest announcement this week had nothing to do with their M5-powered hardware, the company has revealed that it is the official broadcast partner for Formula 1 in the U.S. for the ne… [+1841 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ozbargain.com.au"
            },
            "author": "ricky93",
            "title": "Apple AirPods 4 with Active Noise Cancellation $258 Delivered @ Amazon AU",
            "description": "About this item REBUILT FOR COMFORT — AirPods 4 have been redesigned for exceptional all-day comfort and greater stability. With a refined contour, shorter stem, and quick-press controls for music …",
            "url": "https://www.ozbargain.com.au/node/929198",
            "urlToImage": "https://files.ozbargain.com.au/n/98/929198l.jpg?h=67764505",
            "publishedAt": "2025-10-18T02:23:54Z",
            "content": "This post contains affiliate links. OzBargain might earn commissions when you click through and make purchases. Please see this page for more information.\r\nAbout this itemREBUILT FOR COMFORT AirPods … [+1103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Soydemac.com"
            },
            "author": "Alberto Navarro",
            "title": "Apple Vision Pro se actualiza con chip M5 y banda Dual Knit",
            "description": "Nuevo Vision Pro con chip M5: más rendimiento, 120 Hz, mejor batería y banda Dual Knit. Fechas, precio y novedades clave de visionOS 26.",
            "url": "https://www.soydemac.com/apple-vision-pro-se-actualiza-con-chip-m5-y-banda-dual-knit/",
            "urlToImage": "https://www.soydemac.com/wp-content/uploads/2025/10/El-Apple-Vision-Pro-se-renueva-con-el-potente-chip-M5-y-la-comoda-banda-Dual-Knit.jpg",
            "publishedAt": "2025-10-18T02:22:40Z",
            "content": "Apple ha dado un paso más en su ordenador espacial con un Apple Vision Pro renovado que integra el chip M5 y una nueva banda Dual Knit. El cambio apunta a un conjunto de mejoras tangibles: más rendim… [+6695 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hkepc.com"
            },
            "author": "HKEPC Hardware",
            "title": "iPhone Air 銷情不佳被減產 Galaxy S25 Edge 停產 取消後繼機種",
            "description": null,
            "url": "http://www.hkepc.com/24305/iPhone_Air_%E9%8A%B7%E6%83%85%E4%B8%8D%E4%BD%B3%E8%A2%AB%E6%B8%9B%E7%94%A2_Galaxy_S25_Edge_%E5%81%9C%E7%94%A2___%E5%8F%96%E6%B6%88%E5%BE%8C%E7%B9%BC%E6%A9%9F%E7%A8%AE",
            "urlToImage": null,
            "publishedAt": "2025-10-18T04:14:57Z",
            "content": "【不受歡迎 ... ❌】本投資銀行瑞穗證券（Mizuho Securities）最新投資報告表示，Apple iPhone Air 由於銷量不佳，將計劃大幅削減產量。與此同時，Samsung 超薄機種 Galaxy S25 Edge 亦已停止生產，並終止 S25 Edge 的後繼機種。"
        },
        {
            "source": {
                "id": null,
                "name": "PhoneArena"
            },
            "author": "Alan Friedman",
            "title": "Apple iPhone 17 Pro mysteriously changes color from Cosmic Orange to Rose Gold",
            "description": "Some iPhone 17 Pro and Pro Max owners say that their phones have mysteriously changed color.",
            "url": "https://www.phonearena.com/news/iphone-17-pro-changes-color-from-orange-to-rose-gold_id174975",
            "urlToImage": "https://m-cdn.phonearena.com/images/article/174975-wide-two_1200/Apple-iPhone-17-Pro-mysteriously-changes-color-from-Cosmic-Orange-to-Rose-Gold.jpg",
            "publishedAt": "2025-10-18T02:35:40Z",
            "content": "A discussion is a place, where people can voice their opinion, no matter if it\r\n is positive, neutral or negative. However, when posting, one must stay true to the topic, and not just share some\r\n ra… [+1082 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com.mx"
            },
            "author": "Gonzalo Hernández",
            "title": "Apple trabaja con BYD en su nuevo Home Hub: una tablet para el hogar que se fabricará en Vietnam y tendrá una versión con brazo robótico",
            "description": "Apple quiere construir un nuevo tipo de dispositivo y para ello se ha aliado con una compañía más conocida por el desarrollo de autos eléctricos: BYD.\r\nDe acuerdo con un nuevo reporte de Bloomberg, Apple tiene previsto lanzar un dispositivo tipo tableta home …",
            "url": "https://www.xataka.com.mx/otros-dispositivos/apple-trabaja-byd-su-nuevo-home-hub-tablet-para-hogar-que-se-fabricara-vietnam-tendra-version-brazo-robotico",
            "urlToImage": "https://i.blogs.es/334f9d/homepod-apple-byd/840_560.jpeg",
            "publishedAt": "2025-10-18T01:12:59Z",
            "content": "Apple quiere construir un nuevo tipo de dispositivo y para ello se ha aliado con una compañía más conocida por el desarrollo de autos eléctricos: BYD.\r\nDe acuerdo con un nuevo reporte de Bloomberg, A… [+3371 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PhoneArena"
            },
            "author": "Ilia Temelkov",
            "title": "Even Google sabotages Samsung by revealing what apps are coming to the Galaxy XR headset",
            "description": "Samsung may want to keep some secrets about the Galaxy XR, but even Google is sharing information before its premiere.",
            "url": "https://www.phonearena.com/news/even-google-sabotages-samsung-by-revealing-what-apps-are-coming-to-the-galaxy-xr-headset_id174978",
            "urlToImage": "https://m-cdn.phonearena.com/images/article/174978-wide-two_1200/Even-Google-sabotages-Samsung-by-revealing-what-apps-are-coming-to-the-Galaxy-XR-headset.jpg",
            "publishedAt": "2025-10-18T00:09:43Z",
            "content": "The popular app Virtual Desktop has also been released on Google Play. Thats one of the leading apps allowing people to connect wirelessly to their computer and watch movies, or play PCVR games. The … [+1043 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "工商時報 楊晴安",
            "title": "庫克訪中已將近一周 推動蘋果AI進入中國",
            "description": "蘋果CEO庫克自10月13日開啟訪中行程以來，已經在中國停留近一周，期間到訪北京，與開發者進行交流，並參加政府會面。庫克18日現身上海蘇河灣參加全球財富管理論壇·2025上海蘇河灣大會，表示蘋果AI（Apple Intelligence）正在努力進入中國市場。",
            "url": "https://tw.stock.yahoo.com/news/%E5%BA%AB%E5%85%8B%E8%A8%AA%E4%B8%AD%E5%B7%B2%E5%B0%87%E8%BF%91-%E5%91%A8-%E6%8E%A8%E5%8B%95%E8%98%8B%E6%9E%9Cai%E9%80%B2%E5%85%A5%E4%B8%AD%E5%9C%8B-084513184.html",
            "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
            "publishedAt": "2025-10-18T00:45:13Z",
            "content": "MoneyDJ 2025-10-15 07:20:46 AI9IT192(10%)191() 14(Apple)(Microsoft)(Nvidia)ITAI20259(2330)(2317)Asia30019IT18,97116.4%1932(10%)1912013 919IT145AI914.2%8,370(2357)33.0%825 \r\nMoneydj 3"
        },
        {
            "source": {
                "id": null,
                "name": "Ithome.com"
            },
            "author": null,
            "title": "消息称苹果 iPhone 17 系列手机使用 Apple Music 播放陈奕迅歌曲《孤勇者》出现闪退现象",
            "description": "IT之家 10 月 18 日消息，据多名IT之家用户反馈及各大平台报告，苹果 iPhone 17 系列手机在 iOS 26.0.1 版本中，使用 Apple Music 播放《孤勇者》，打开歌词页面，进度至 3 分 04 秒-3 分 40 秒（对应歌词“以最卑微的梦”）时应用闪退。 \r\n不过IT之家使用 iPhone 17，在 iOS 26.0.1、美国区 Apple Music 上进行测试，未出现闪退现象，但相应歌词显示不完整，“去吗？去啊！以最卑微的梦、战吗？战啊！以最孤高的梦”错误显示为“以最微的梦（去、以…",
            "url": "https://www.ithome.com/0/890/443.htm",
            "urlToImage": null,
            "publishedAt": "2025-10-18T04:17:29Z",
            "content": "IT 10 18 IT iOS 26.0.1 Apple Music 3 04 -3 40 \r\nIT iPhone 17 iOS 26.0.1 Apple Music \r\nIT"
        },
        {
            "source": {
                "id": null,
                "name": "Ithome.com"
            },
            "author": null,
            "title": "60 → 120Hz：苹果 M5 Vision Pro 头显“Mac 虚拟显示”刷新率翻倍，将改善运动眩晕问题",
            "description": "IT之家 10 月 18 日消息，科技媒体 Appleinsider 昨日（10 月 17 日）发布博文，苹果在搭载 M5 芯片的 Vision Pro 头显上，升级“Mac 虚拟显示”功能，刷新率从此前的 60Hz 翻倍提升至 120Hz，有望改善用户的运动眩晕（Motion Sickness）问题。IT之家注：Mac 虚拟显示（Mac Virtual Display）是 Apple Vision Pro 的一项核心功能，能让用户在头戴设备中创建一个或多个虚拟的、巨大的高清显示器，用来显示 Mac 电脑的桌面，…",
            "url": "https://www.ithome.com/0/890/402.htm",
            "urlToImage": null,
            "publishedAt": "2025-10-18T00:38:30Z",
            "content": "IT 10 18 Appleinsider 10 17 M5 Vision Pro Mac 60Hz 120HzMotion Sickness\r\nITMac Mac Virtual Display Apple Vision Pro Mac Mac \r\n Vision Pro Mac 60Hz 100Hz \r\n VR AR \r\n M5 Apple Vision Pro Mac 60Hz 120Hz… [+48 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Arigato-ipod.com"
            },
            "author": "アイアリ",
            "title": "3本のApple Arcadeゲームが配信終了に。「Reigns: Beyond」「Samurai Jack」「SpongeBob SolitairePants」",
            "description": "以下の3本のApple Arcadeゲームが、2025年10月で配信終了になっています。 （既にApp Storeでの配信停止済み） Reigns: Beyond Devolver Digital, Inc.が2020年11月にリリース 宇",
            "url": "https://arigato-ipod.com/2025/10/apple-arcade-leaving-soon-games-october-2025.html",
            "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2025/10/251018applearcadeendgames.webp",
            "publishedAt": "2025-10-18T03:01:30Z",
            "content": "以下の3本のApple Arcadeゲームが、2025年10月で配信終了になっています。\n（既にApp Storeでの配信停止済み）\n\nReigns: Beyond\n<ul>\n<li>Devolver Digital, Inc.が2020年11月にリリース</li>\n<li>宇宙一のロックバンドを目指すゲーム</li>\n</ul>\n\r\n\n\nSamurai Jack: Battle Through… [+544 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Arigato-ipod.com"
            },
            "author": "アイアリ",
            "title": "Apple TV+でアニメ「ハロウィンだよ、チャーリー・ブラウン」を期間限定で無料配信。10月19日まで",
            "description": "Apple TV+で「ハロウィンだよ、チャーリー・ブラウン」が、期間限定で無料配信されています。 ハロウィンをモチーフにした、1966年に制作されたアニメ作品です。 仮装やキャンディの一大イベント、ハロウィンがやってきます。さあ、ピーナッツ",
            "url": "https://arigato-ipod.com/2025/10/apple-tv-plus-its-the-great-pumpkin-charlie-brown-free-streaming-2025.html",
            "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2024/10/241020itsthegreatpumpkincharliebrown.webp",
            "publishedAt": "2025-10-18T01:05:16Z",
            "content": "Apple TV+で「ハロウィンだよ、チャーリー・ブラウン」が、期間限定で無料配信されています。\nハロウィンをモチーフにした、1966年に制作されたアニメ作品です。\n\n\n仮装やキャンディの一大イベント、ハロウィンがやってきます。さあ、ピーナッツの仲間たちと一緒に出かけましょう。パーティーの準備をするチャーリー・ブラウンと、撃墜王レッドバロンを相手に大空を駆け回るスヌーピー。そして、かぼちゃ大王を… [+506 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slickdeals.net"
            },
            "author": "DanMan5464",
            "title": "Bill and Ted's excellent triple feature 4K Apple TV iTunes $14.99",
            "description": "all 3 films available in 4K \n \nnot movies anywhere compatible \n \nhttps://tv.apple.com/us/movie-bun...bpsh1an906",
            "url": "https://slickdeals.net/f/18710665-bill-and-ted-s-excellent-triple-feature-4k-apple-tv-itunes-14-99",
            "urlToImage": "https://slickdeals.net/attachment/1/7/7/8/8/7/2/450x450/18526903.thumb",
            "publishedAt": "2025-10-18T02:45:50Z",
            "content": "This collaborative space allows users to contribute additional information, tips, and insights to enhance the original deal post. Feel free to share your knowledge and help fellow shoppers make infor… [+26 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slickdeals.net"
            },
            "author": "deal.fiend",
            "title": "Apple MacBook Pro 16\" M4 Pro 14-Core CPU; 48GB Unified Memory; 512GB Solid State Drive; 20-Core GPU; Silver $1999.99",
            "description": "There is only 1 left in stock for in store pickup at the St. David, PA Microcenter. However, I was able to get Best Buy to price match in the agent chat by saying my zipcode is in 19087 (same as Micro",
            "url": "https://slickdeals.net/f/18710599-apple-macbook-pro-16-m4-pro-14-core-cpu-48gb-unified-memory-512gb-solid-state-drive-20-core-gpu-silver-1999-99",
            "urlToImage": "https://slickdeals.net/attachment/4/2/8/1/6/450x450/18526426.thumb",
            "publishedAt": "2025-10-18T01:55:00Z",
            "content": "This collaborative space allows users to contribute additional information, tips, and insights to enhance the original deal post. Feel free to share your knowledge and help fellow shoppers make infor… [+26 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sporting News"
            },
            "author": "Andrew Hughes",
            "title": "CU Buffs legend Shedeur Sanders pitched trade to AFC bottom-feeder with 12-28 record the past three seasons",
            "description": "Former Colorado Buffaloes quarterback Shedeur Sanders was pitched a trade to the New York Jets after their 0-6 start to the 2025 season.",
            "url": "https://www.sportingnews.com/us/ncaa-football/colorado/news/cu-buffs-legend-shedeur-sanders-pitched-trade-afc-bottom-feeder-12-28-record-past-three-seasons/caea721ab5a95e145dde82a4",
            "urlToImage": "https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2025-08/USATSI_26811491_0.jpg.webp?itok=ElK5opX9",
            "publishedAt": "2025-10-18T03:06:30Z",
            "content": "Former Colorado Buffaloes quarterback Shedeur Sanders, who hasnt taken a snap for the Cleveland Browns in regular season NFL action and may be behind Bailey Zappe on the teams depth chart, could be a… [+2268 chars]"
        },
        {
            "source": {
                "id": "globo",
                "name": "Globo"
            },
            "author": null,
            "title": "Ligações telefônicas de grandes empresas vão ter selo de verificação no celular de clientes, diz Anatel",
            "description": "Veja os vídeos que estão em alta no g1\nLigações de empresas, como bancos e call centers, que fazem mais de 500 mil chamadas por mês vão precisar ser identificadas com um selo de verificação a partir de 17 de novembro, segundo a Agência Nacional de Telecomunic…",
            "url": "https://g1.globo.com/tecnologia/noticia/2025/10/18/ligacoes-telefonicas-de-grandes-empresas-vao-ter-selo-de-verificacao-no-celular-de-clientes-diz-anatel.ghtml",
            "urlToImage": "https://s2-g1.glbimg.com/OsGxxEyFZE0VSsl0XMZgmhHNYUA=/1806x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/2/D/eRGtIAQlOaJGFbcYhQQg/celular.jpg",
            "publishedAt": "2025-10-18T03:01:18Z",
            "content": "O selo indica que o número foi autenticado, ou seja, verificado por um sistema que confirma se quem está ligando é realmente quem diz ser (veja mais abaixo). Esse processo também bloqueia ligações id… [+3296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Decider"
            },
            "author": "mliss1578",
            "title": "Henry Winkler Bares It All In ‘Loot’s Season 3 Premiere As Leader Of Nudist Utopia",
            "description": "\"It was cold, so I respect him so much for what he did out on a beach in the middle of January,\" Ron Funches told Decider.",
            "url": "https://decider.com/2025/10/17/loot-season-3-henry-winkler-naked/",
            "urlToImage": "https://decider.com/wp-content/uploads/2025/10/LOOT-s3-DAD.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2025-10-18T00:00:00Z",
            "content": "Maya Rudolph’s hit Apple TV comedy, Loot, is back for its highly-anticipated Season 3, and let’s just say its eventful premiere is hilariously NSFW.\r\nFrom Benjamin Bratt to Tony Hawk and more, Loot h… [+5171 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Christian Arnold",
            "title": "NYCFC have plenty at stake in important regular season finale",
            "description": "When New York City FC regrouped from the international break this week, head coach Pascal Jansen emphasized to his team to remain focused on the task at hand: the Decision Day season finale against the Sounders.",
            "url": "https://nypost.com/2025/10/17/sports/nycfc-have-plenty-at-stake-in-important-regular-season-finale/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/10/GettyImages-2238446911-e1760750491460.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2025-10-18T02:23:11Z",
            "content": "When New York City FC regrouped from the international break this week, head coach Pascal Jansen emphasized to his team to remain focused on the task at hand: the Decision Day season finale against t… [+4370 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Champion.com.ua"
            },
            "author": "Champion.com.ua",
            "title": "Apple TV станет эксклюзивным транслятором Формулы-1 в США со следующего сезона",
            "description": "",
            "url": "https://champion.com.ua/rus/autosport/Formala-one/formula-1-i-apple-obyavili-o-nachale-sotrudnichestva-v-ssha-poyavitsya-novyy-translyator-gonok-1053236/",
            "urlToImage": null,
            "publishedAt": "2025-10-18T02:56:00Z",
            "content": "-1 Apple, \" \" , 2026 .\r\n -1.\r\n-1 Apple 5 . , -1 140 .\r\n -1 Apple ESPN, . , Apple TV , , -. Apple TV.\r\n-1 Apple TV, \" \" Apple News, Apple Maps, Apple Music, Apple Sports Apple Fitness+.\r\nF1 TV Premium… [+55 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Wall Street ends higher as investors digest Trump trade comments",
            "description": "Wall Street closed higher Friday as investors weighed President Trump's remarks on China tariffs and regional bank earnings eased credit risk concerns. Trump's comments on tariffs were seen as mixed, while regional banks rebounded, with Truist Financial and Z…",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/wall-street-ends-higher-as-investors-digest-trump-trade-comments/articleshow/124653434.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-124653456,width-1200,height-630,imgsize-177726,overlay-etmarkets/articleshow.jpg",
            "publishedAt": "2025-10-18T03:07:04Z",
            "content": "Wall Street ended higher on Friday as investors assessed U.S. President Donald Trump's latest remarks on China, while quarterly results from regional banks eased concerns about credit risks. Trump sa… [+3119 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Americanthinker.com"
            },
            "author": null,
            "title": "New York City could have a Republican mayor again",
            "description": "Are you as tired as I am of reading about election polls that tell me who is going to win long before the votes are cast?  At times, it seems as though we have no need to vote at all, because the pollsters have already decided on a candidat...",
            "url": "https://www.americanthinker.com/blog/2025/10/new_york_city_could_have_a_republican_mayor_again.html",
            "urlToImage": "https://images.americanthinker.com/fb/fb5z2axw6qgn8mgpbi85_800.JPG",
            "publishedAt": "2025-10-18T04:00:00Z",
            "content": "Are you as tired as I am of reading about election polls that tell me who is going to win long before the votes are cast?  At times, it seems as though we have no need to vote at all, because the pol… [+4856 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Milenio"
            },
            "author": "Jordan Saucedo",
            "title": "Crece streaming musical en México: sumarán 77.4 millones de usuarios a fin de año",
            "description": "El consumo de audio digital mantuvo su trayectoria ascendente entre los internautas en México.Al cierre del año, se estima que 77.4 millones de usuarios de internet habrán escuchado música, podcasts o audiolibros a través de plataformas.En análisis sobre el s…",
            "url": "https://www.milenio.com/negocios/crece-streaming-musical-en-mexico-sumaran-77-4-millones-de-usuarios",
            "urlToImage": "https://cdn.milenio.com/uploads/media/2016/11/24/audifonos-convierten-microfono-gracias-codigo.jpeg",
            "publishedAt": "2025-10-18T02:03:00Z",
            "content": "El consumo de audio digital mantuvo su trayectoria ascendente entre los internautas en México.\r\nAl cierre del año, se estima que 77.4 millones de usuarios de internet habrán escuchado música, podcast… [+2815 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "El Financiero"
            },
            "author": "Alberto Tovar",
            "title": "La fuerza de voluntad empieza en el cerebro",
            "description": "La voluntad sigue siendo un ingrediente esencial para cualquier cambio profundo, y la neurociencia ha destacado su importancia, escribe Alberto Tovar.",
            "url": "https://www.elfinanciero.com.mx/opinion/alberto-tovar/2025/10/17/la-fuerza-de-voluntad-empieza-en-el-cerebro/",
            "urlToImage": "https://www.elfinanciero.com.mx/resizer/v2/45MPR2UUWNESLNOSMLLQH23QIA.jpg?smart=true&auth=81a7029415c1162f0d0cd452cdda2701460ba3474e772f02bcbd4d1fb4ef0b3c&width=1200&height=630",
            "publishedAt": "2025-10-18T03:30:00Z",
            "content": "Hace años leí La conquista de la voluntad, de Enrique Rojas, y lo tomé como referencia para buscar la fuerza interior que todos, en algún momento, hemos anhelado. Sus ideas sobre disciplina, renuncia… [+2807 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ndtvprofit.com"
            },
            "author": "NDTV Profit Tech",
            "title": "Weekly Tech Wrap: Apple Launches M5 iPad Pro, Microsoft Stops Windows 10 Support, More",
            "description": "This week had a few smartphone launches, like the Vivo X300 series and Oppo Find X9. More importantly, Apple unveiled the M5 chipset-powered iPad Pro, Vision Pro, and MacBook Pro. Microsoft ended its Windows 10 support, OpenAI is reportedly experimenting with…",
            "url": "https://www.ndtvprofit.com/technology/weekly-tech-wrap-apple-launches-m5-ipad-pro-microsoft-stops-windows-10-support",
            "urlToImage": "https://media.assettype.com/bloombergquint%2F2025-10-17%2F0aaelvpz%2FApple-Vision-Pro-M5-and-R1-chips-251015big.jpg.large2x.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
            "publishedAt": "2025-10-18T03:02:52Z",
            "content": "Vivo launched the X300 and X300 Pro, both housing a MediaTek Dimensity 9500 processor. The Vivo X300 comes with a 200MP primary camera, a 6.31-inch OLED display, and a 6,040mAh battery, while the Viv… [+99 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "NYT News Service",
            "title": "Salesforce CEO Benioff apologises for saying Trump should send troops to San Francisco",
            "description": "Benioff initially said the National Guard should come to San Francisco in a phone interview with The New York Times last week. He said that San Francisco's police force needed 1,000 more officers and that he hoped the National Guard could help fill those gaps.",
            "url": "https://economictimes.indiatimes.com/tech/technology/salesforce-ceo-benioff-apologises-for-saying-trump-should-send-troops-to-san-francisco/articleshow/124652679.cms",
            "urlToImage": "https://img.etimg.com/thumb/width-1200,height-900,imgsize-102248,resizemode-75,msid-124652679/tech/technology/salesforce-ceo-benioff-apologises-for-saying-trump-should-send-troops-to-san-francisco.jpg",
            "publishedAt": "2025-10-18T02:27:10Z",
            "content": "Marc Benioff apologised on Friday for saying President Donald Trump should send the National Guard to San Francisco after a week of being hammered by the city's leaders and even some of his fellow te… [+4062 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Edivaldobrito.com.br"
            },
            "author": "Edivaldo Brito",
            "title": "iPhone 17 Pro sofre mudança de cor inexplicável: entenda o #colorgate",
            "description": "O iPhone 17 Pro enfrenta o #colorgate, mudando de cor do laranja cósmico para rosa. Descubra o que está por trás disso!\nO post iPhone 17 Pro sofre mudança de cor inexplicável: entenda o #colorgate apareceu primeiro em Blog do Edivaldo - Informações e Notícias…",
            "url": "https://www.edivaldobrito.com.br/iphone-17-pro-sofre-mudanca-de-cor-inexplicavel-entenda-o-colorgate/",
            "urlToImage": "https://www.edivaldobrito.com.br/wp-content/uploads/2025/10/iphone-17-pro-sofre-mudanca-de-cor-inexplicavel-entenda-o-colorgate.webp",
            "publishedAt": "2025-10-18T03:12:41Z",
            "content": "O iPhone 17 Pro na cor laranja cósmico está gerando preocupação entre os usuários, pois muitos relatam uma inesperada mudança de cor para rosa, fenômeno apelidado de #colorgate. Este problema, que re… [+9107 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Edivaldobrito.com.br"
            },
            "author": "Edivaldo Brito",
            "title": "Google revela aplicativos para o novo headset Samsung Galaxy XR",
            "description": "Samsung Galaxy XR promete experiências imersivas com novos aplicativos revelados por Google. Descubra mais!\nO post Google revela aplicativos para o novo headset Samsung Galaxy XR apareceu primeiro em Blog do Edivaldo - Informações e Notícias sobre Linux.",
            "url": "https://www.edivaldobrito.com.br/google-revela-aplicativos-para-o-novo-headset-samsung-galaxy-xr/",
            "urlToImage": "https://www.edivaldobrito.com.br/wp-content/uploads/2025/10/google-revela-aplicativos-para-o-novo-headset-samsung-galaxy-xr.webp",
            "publishedAt": "2025-10-18T01:12:03Z",
            "content": "O Samsung Galaxy XR é o novo headset de realidade estendida, fruto da parceria entre Samsung e Google, que utiliza a plataforma Android XR para proporcionar experiências digitais imersivas. Com uma v… [+7170 chars]"
        },
        {
            "source": {
                "id": "globo",
                "name": "Globo"
            },
            "author": null,
            "title": "Nvidia e TSMC iniciam produção de chips de inteligência artificial Blackwell nos EUA",
            "description": "A Nvidia iniciou a produção em massa de seu chip B...",
            "url": "https://valor.globo.com/empresas/noticia/2025/10/18/nvidia-e-tsmc-iniciam-produo-de-chips-de-inteligncia-artificial-blackwell-nos-eua.ghtml",
            "urlToImage": "https://s2-valor.glbimg.com/XiY9ipnyhfvybPLunFWO1M4k8aI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2025/k/0/8NWykqQHKFZf7BT1921A/f9c36a9c1f9d46c6aa9882bc2451fa34-0-ac45ca8b86654e71a5175206440e5a91.jpg",
            "publishedAt": "2025-10-18T03:17:05Z",
            "content": "A Nvidia iniciou a produção em massa de seu chip Blackwell AI nos Estados Unidos em parceria com a Taiwan Semiconductor Manufacturing Co. (TSMC). A iniciativa atende à estratégia americana de produzi… [+1622 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Elperiodico.com"
            },
            "author": "Marc Menchén",
            "title": "Superliga, ¿eres tú?",
            "description": "En el deporte, como en la vida, estar en el momento y el lugar adecuado importa. Y UC3 ha decidido que eso implicaba agitar el árbol en España, Francia, Italia, Alemania y Reino Unido a la vez. La empresa conjunta de UEFA y ECA -ahora EFC- ha sacado a la vent…",
            "url": "https://www.elperiodico.com/es/deportes/20251018/superliga-122730403",
            "urlToImage": "https://estaticos-cdn.prensaiberica.es/clip/cf4f86c1-553e-49f2-90e0-1420e04680f5_16-9-discover-aspect-ratio_default_0.jpg",
            "publishedAt": "2025-10-18T04:00:24Z",
            "content": "En el deporte, como en la vida, estar en el momento y el lugar adecuado importa. Y UC3 ha decidido que eso implicaba agitar el árbol en España, Francia, Italia, Alemania y Reino Unido a la vez. La em… [+3440 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.nzz.ch"
            },
            "author": "Inna Hartwich (inn)",
            "title": "Donald Trump plant Triumphbogen in Washington: Es zeigt seine Gier nach Macht und die Sehnsucht nach Unsterblichkeit",
            "description": "Der US-Präsident Donald Trump lässt seiner imperialen Lust an Glanz und Prunk freien Lauf und plant den Bau eines Triumphbogens, ganz im Sendungsbewusstsein der alten Römer. Politische Bescheidenheit ist längst Vergangenheit in Washington.",
            "url": "https://www.nzz.ch/panorama/donald-trump-plant-triumphbogen-in-washington-es-zeigt-seine-gier-nach-macht-und-die-sehnsucht-nach-unsterblichkeit-ld.1907520",
            "urlToImage": "https://img.nzz.ch/2025/10/17/054dfbde-28e4-41bc-91db-24aadfc805ae.jpg?width=1200&height=675&fit=bounds&quality=75&auto=webp&crop=4000,2250,x0,y172&wmark=nzz",
            "publishedAt": "2025-10-18T03:30:00Z",
            "content": "Der US-Präsident Donald Trump lässt seiner imperialen Lust an Glanz und Prunk freien Lauf und plant den Bau eines Triumphbogens, ganz im Sendungsbewusstsein der alten Römer. Politische Bescheidenheit… [+4791 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Novinky.cz"
            },
            "author": "Miloslav Fišer, Richard Novák",
            "title": "Nejlepší iPad stojí 75 990 Kč. Cenu ještě razantně navýší příslušenství",
            "description": "Už ve středu 22. října se začnou oficiálně prodávat nejnovější iPady Pro, které si odbyly premiéru v tomto týdnu. K dispozici budou dvě různé velikosti, různé kapacity úložiště a verze s mobilním připojením k internetu. Pokud chcete to nejlepší na trhu, připr…",
            "url": "https://www.novinky.cz/clanek/internet-a-pc-hardware-nejlepsi-ipad-stoji-75-990-kc-cenu-jeste-razantne-navysi-prislusenstvi-40544186",
            "urlToImage": "https://d15-a.sdn.cz/d_15/c_img_oe_A/nO1Ur3YPjBNaf8CP5EojA6C/28c5/ipad-pro-apple-cena.jpeg?fl=cro,0,0,1347,757%7Cres,1200,,1%7Cwebp,75",
            "publishedAt": "2025-10-18T03:12:00Z",
            "content": "Ceny nových tablet startují na 26 990 K v pípad 11palcového modelu a na 36 990 K u 13palcové verze, jak Novinky informovaly ji bhem premiéry iPadu Pro.\r\nNabídka profesionálních jablených tablet je pi… [+2601 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Libertaddigital.com"
            },
            "author": "Sergio Pérez",
            "title": "Es Cine: La película \"antifeminista\", un Colin Farrell pasado de rosca y una cena para Franco",
            "description": "Sergio Pérez y Alma Espinosa hablan de Caza de brujas, Maldita suerte... y entrevistan a Mario Casas y Gómez Pereira y a los creadores de El Centro.",
            "url": "https://esradio.libertaddigital.com/es-cine/2025-10-18/la-pelicula-antifeminista-un-colin-farrell-pasado-de-rosca-y-una-cena-para-franco-7308965/",
            "urlToImage": "https://s1.staticld.com//2024/08/06/1200/675/escine.jpg",
            "publishedAt": "2025-10-18T00:00:00Z",
            "content": "Escucha este programa en cualquier momento y lugar a través de los podcasts de Libertad Digital y esRadio. Descarga nuestra aplicación para iOs o Android, visita nuestra página web en esradio.fm, o e… [+315 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TheWrap"
            },
            "author": "Drew Taylor",
            "title": "How Anime Influenced Kogonada’s ‘A Big Bold Beautiful Journey’",
            "description": "You can now buy or rent the new Margot Robbie/Colin Farrell film wherever you get your movies\nThe post How Anime Influenced Kogonada’s ‘A Big Bold Beautiful Journey’ appeared first on TheWrap.",
            "url": "https://www.thewrap.com/a-big-bold-beautiful-journey-kogonada-interview-anime-influence/",
            "urlToImage": "https://www.thewrap.com/wp-content/uploads/2025/10/Big-Bold-Beautiful-Journey-1.jpg",
            "publishedAt": "2025-10-18T00:13:05Z",
            "content": "A Big Bold Beautiful Journey is now one that you can take at home.\r\nThe recent Colin Farrell/Margot Robbie romantic drama, which follows them as they take a drive home from a wedding and end up veeri… [+7361 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Github.com"
            },
            "author": "carverauto",
            "title": "Show HN: ServiceRadar – open-source Network Observability Platform",
            "description": "ServiceRadar is an open-source platform for distributed, secure network management and observability, scaling to 100k+ devices. Born from frustration with complex traditional NMS tools like Zabbix, it bridges legacy (SNMP/syslog) and modern (gNMI, OTLP) proto…",
            "url": "https://github.com/carverauto/serviceradar",
            "urlToImage": "https://repository-images.githubusercontent.com/916252207/8abebcb7-03be-4b67-92a9-e12a79dd714d",
            "publishedAt": "2025-10-18T01:49:06Z",
            "content": "ServiceRadar is a distributed network monitoring system designed for infrastructure and services in hard to reach places or constrained environments.\r\nIt provides real-time monitoring of internal ser… [+5165 chars]"
        }
    ]
}`

const NewsDisplayer = () => {
    return (
        <div
            className='
            min-h-screen
            mt-[10vh]
            '
        >
            <NewsTile />
            <NewsTile />
            <NewsTile />
            <NewsTile />
            <NewsTile />
            <NewsTile />
        </div>
    )
}

export default NewsDisplayer
