// ===== MA'LUMOTLAR (topshiriq matnlari shu yerda) =====

// Kutubxona katalogi (sayt mavzusi: onlayn kutubxona)
export const books = [
  { id: 1, title: 'Yevgeniy Onegin', author: 'A. S. Pushkin', genre: 'She\'riyat', year: 1833, color: '#7a2e3a', desc: 'She\'rda yozilgan roman: Peterburg zodagoni Onegin va Tatyana taqdiri haqida.' },
  { id: 2, title: 'Urush va tinchlik', author: 'L. N. Tolstoy', genre: 'Roman', year: 1869, color: '#2f4a6b', desc: '1812-yilgi urush davrida bir necha oila hayotini tasvirlovchi epopeya.' },
  { id: 3, title: 'Jinoyat va jazo', author: 'F. M. Dostoyevskiy', genre: 'Roman', year: 1866, color: '#3d3d4f', desc: 'Talaba Raskolnikovning jinoyati va vijdon azobi haqidagi psixologik roman.' },
  { id: 4, title: 'Gilos bog\'i', author: 'A. P. Chexov', genre: 'Drama', year: 1904, color: '#8a4b5f', desc: 'Zodagon oilaning sevimli bog\'ini yo\'qotishi haqidagi pyesa.' },
  { id: 5, title: 'Otalar va bolalar', author: 'I. S. Turgenev', genre: 'Roman', year: 1862, color: '#3f6b4f', desc: 'Ikki avlod o\'rtasidagi qarama-qarshilik va nigilist Bazarov obrazi.' },
  { id: 6, title: 'O\'lik jonlar', author: 'N. V. Gogol', genre: 'Doston', year: 1842, color: '#6b5a2f', desc: 'Chichikov o\'lgan dehqonlarni sotib olib yurgan sarguzashtlari haqida.' },
  { id: 7, title: 'Zamonamiz qahramoni', author: 'M. Yu. Lermontov', genre: 'Roman', year: 1840, color: '#2e5a6b', desc: 'Pechorin obrazi orqali o\'z davrining ortiqcha odami tasviri.' },
  { id: 8, title: 'Usta va Margarita', author: 'M. A. Bulgakov', genre: 'Roman', year: 1967, color: '#5a2e6b', desc: 'Moskvaga shayton tashrifi va muhabbat haqidagi fantastik roman.' },
  { id: 9, title: 'Qorong\'i xiyobonlar', author: 'I. A. Bunin', genre: 'Hikoyalar', year: 1943, color: '#4a4a2e', desc: 'Muhabbat mavzusidagi hikoyalar to\'plami.' },
  { id: 10, title: 'Kashtanka', author: 'A. P. Chexov', genre: 'Hikoyalar', year: 1887, color: '#8a5a2e', desc: 'Yo\'qolib qolgan itning sirk artistlari orasidagi hayoti haqida hikoya.' },
  { id: 11, title: 'Tubida', author: 'M. Gorkiy', genre: 'Drama', year: 1902, color: '#444', desc: 'Kambag\'allar yotoqxonasi aholisining hayoti va orzulari haqida pyesa.' },
  { id: 12, title: 'Aqldan fojia', author: 'A. S. Griboyedov', genre: 'Drama', year: 1825, color: '#6b2e2e', desc: 'Chatskiy va Moskva jamiyati to\'qnashuvi haqidagi hajviy komediya.' },
];

// Belgilash: {so'z|kelishik, rod, son (qaysi so'zga tegishli)}
// Faqat sifatlar belgilangan.

// 1-TOPSHIRIQ — 14-variant (matn)
export const task1Text =
  'Biz {baland|Tushum k., m.r., birl.s. (tog\'ni)} tog\'ga {erta|Vosita k., m.r., birl.s. (tongda)} tongda ko\'tarildik. ' +
  'Cho\'qqidan vodiyga {chiroyli|Bosh k., m.r., birl.s. (manzara)} manzara ochilar edi. ' +
  '{Musaffo|Predlogli k., m.r., birl.s. (havoda)} havoda nafas olish oson edi. ' +
  'Men {keng|Tushum k., j.r., birl.s. (tekislikka)} tekislikka va {yashil|Vosita k., ko\'p.s. (dalalar)} dalalarga qaradim. ' +
  'Uzoqda {kichik|Bosh k., ko\'p.s. (qishloqlar)} qishloqlar ko\'rinib turardi. ' +
  'Bu joyda {shovqinli|Qaratqich k., ko\'p.s. (yo\'llar)} yo\'llar yo\'q edi. ' +
  'Hamma narsa {tinch|Vosita k., sr.r., birl.s. (hamma narsa)} va {ulug\'vor|Vosita k., sr.r., birl.s. (hamma narsa)} ko\'rinardi. ' +
  'Biz {oddiy|Predlogli k., ko\'p.s. (narsalar)} narsalar haqida {katta|Vosita k., j.r., birl.s. (quvonch)} quvonch bilan gaplashdik. ' +
  'Bu lahza {samimiy|Vosita k., sr.r., birl.s. (baxt)} baxtga to\'la edi. ' +
  'U xotiramda {eng yorqin|Qaratqich k., ko\'p.s. (kunlar)} kunlardan biri bo\'lib qoldi.';

// 2-TOPSHIRIQ — «baland» sifatini kelishiklar bo'yicha tuslash
export const declension = [
  { abbr: 'Bosh k.', name: 'Bosh kelishik', q: 'qanday?', form: 'baland' },
  { abbr: 'Qaratqich k.', name: 'Qaratqich kelishigi', q: 'qandayning?', form: 'balandning' },
  { abbr: 'Tushum k.', name: 'Tushum kelishigi', q: 'qandayni?', form: 'balandni' },
  { abbr: 'Jo\'nalish k.', name: 'Jo\'nalish kelishigi', q: 'qandayga?', form: 'balandga' },
  { abbr: 'O\'rin-payt k.', name: 'O\'rin-payt kelishigi', q: 'qandayda?', form: 'balandda' },
  { abbr: 'Chiqish k.', name: 'Chiqish kelishigi', q: 'qandaydan?', form: 'balanddan' },
];

// 3-TOPSHIRIQ — fe'lning shaxsi va soni
// p: shaxs (1/2/3), n: son ('birl' | 'ko\'p')
export const verbs = [
  { text: 'Men xato qilishdan {qo\'rqaman} va ishni {tekshiraman}.', p: 1, n: 'birl' },
  { text: 'Ukam {shubhalanadi} va javobni {qayta tekshiradi}.', p: 3, n: 'birl' },
  { text: 'Biz xato qilmaslikka {harakat qilamiz} va {ishlaymiz} tartibli.', p: 1, n: 'ko\'p' },
  { text: 'U {hayajonlanadi} va uzoq {tayyorlanadi}.', p: 3, n: 'birl' },
  { text: 'Siz {xavotirlanasizmi} yoki ishonch {sezasanmi}?', p: 2, n: 'ko\'p' },
  { text: 'Ular xatolarni {to\'g\'rilaydilar} va ulardan {o\'rganadilar}.', p: 3, n: 'ko\'p' },
];

// 4-TOPSHIRIQ — matn
export const task4Text =
  '{O\'tgan|Vosita k., m.r., birl.s. (yozda)} yozda men {unutilmas|Tushum k., sr.r., birl.s. (sayohat)} sayohatni {tog\'li|Tushum k., m.r., birl.s. (o\'lka)} o\'lkaga amalga oshirdim. ' +
  'Biz {tor|Jo\'nalish k., j.r., birl.s. (yo\'lda)} yo\'ldan {tez|Predlogli k., m.r., birl.s. (avtomobilda)} avtomobilda ketayotgan edik. ' +
  'Atrofimizda {yashil|Bosh k., ko\'p.s. (o\'tloqlar)} o\'tloqlar va {qalin|Bosh k., ko\'p.s. (o\'rmonlar)} o\'rmonlar yastanib yotardi. ' +
  'To\'satdan deraza ortida {tiniq|Vosita k., j.r., birl.s. (suv)} suvli {chuqur|Bosh k., sr.r., birl.s. (ko\'l)} ko\'l ko\'rindi. ' +
  'Biz {chiroyli|Predlogli k., m.r., birl.s. (sohilda)} sohilda to\'xtadik, {go\'zal|Tushum k., ko\'p.s. (fotosuratlar)} fotosuratlar olish uchun.';