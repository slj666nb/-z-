/*
快手极速版-周周赚十五万金币
环境变量添加 ksjsb_zz 设置指定助力码
抓包教程地址：http://cxgc.top/archives/ksjsb
欢迎填我邀请码：791642607
交流群：212796668、681030097、743744614
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#快手极速版-周周赚十五万金币
2 0 0,10,16,22 * * * https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zz.js, tag=快手极速版-周周赚十五万金币, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "2 0 0,10,16,22 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zz.js,tag=快手极速版-周周赚十五万金币
===================================Surge================================
快手极速版-周周赚十五万金币 = type=cron,cronexp="2 0 0,10,16,22 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zz.js
====================================小火箭=============================
快手极速版-周周赚十五万金币 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_zz.js, cronexpr="2 0 0,10,16,22 * * *", timeout=3600, enable=true
 */
const $ = new Env('快手极速版-周周赚十五万金币');
let ksjsb_zzz = $.isNode() ? (process.env.ksjsb_zzz ? process.env.ksjsb_zzz : "") : ($.getdata('ksjsb_zzz') ? $.getdata('ksjsb_zzz') : "")
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxdff08=["","\x6B\x73\x6A\x73\x62\x43\x6F\x6F\x6B\x69\x65","\x65\x6E\x76","\x40","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x70\x6C\x69\x74","\x26","\x0A","\x66\x69\x6C\x74\x65\x72","\x5C\x6E\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\u5171","\x6C\x65\x6E\x67\x74\x68","\u4E2A\u5FEB\u624B\u8D26\u53F7\x43\x6F\x6F\x6B\x69\x65\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x5C\x6E","\x6C\x6F\x67","\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\u811A\u672C\u6267\u884C\x2D\x20\u5317\u4EAC\u65F6\u95F4\x28\x55\x54\x43\x2B\x38\x29\uFF1A","\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x53\x74\x72\x69\x6E\x67","\x67\x65\x74\x54\x69\x6D\x65","\x67\x65\x74\x54\x69\x6D\x65\x7A\x6F\x6E\x65\x4F\x66\x66\x73\x65\x74","\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x5C\x6E","\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x64\x77\x78\x78\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x6A\x64\x5F\x6A\x6F\x62\x2F\x6B\x73\x6A\x73\x62\x2E\x6A\x73\x6F\x6E","\x70\x61\x72\x73\x65","\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x49\x64","\x6C\x6F\x67\x45\x72\x72","\x67\x65\x74","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u5FEB\u624B\u8D26\u53F7\x20\x6B\x73\x6A\x73\x62\x43\x6F\x6F\x6B\x69\x65\x20\x0A\u76F4\u63A5\u4F7F\u7528\u6293\u5305\u5DE5\u5177\u6293\u5305","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x78\x67\x63\x2E\x74\x6F\x70\x2F\x61\x72\x63\x68\x69\x76\x65\x73\x2F\x6B\x73\x6A\x73\x62","\x6D\x73\x67","\u5FEB\u624B\u6293\u53D6\x63\x6B\u6559\u7A0B\uFF1A\x68\x74\x74\x70\x3A\x2F\x2F\x63\x78\x67\x63\x2E\x74\x6F\x70\x2F\x61\x72\x63\x68\x69\x76\x65\x73\x2F\x6B\x73\x6A\x73\x62","\u4E0D\u5077\x63\x6B\uFF0C\u53EA\u62FF\u7B2C\u4E00\u4E2A\u53F7\u52A9\u529B","\u672A\u8BFB\u53D6\u5230\u52A9\u529B\u7801\uFF0C\u5C06\u81EA\u52A8\u52A9\u529B\u7B2C\u4E00\u4E2A\u8D26\u53F7","\u73AF\u5883\u53D8\u91CF\u6DFB\u52A0\x20\x6B\x73\x6A\x73\x62\x5F\x7A\x7A\x7A\x20\u8BBE\u7F6E\u6307\u5B9A\u52A9\u529B\u7801","\x0A\u5F02\u5E38\u9519\u8BEF\x2C\u8BF7\u7A0D\u5019\u91CD\u8BD5\x0A","\x7A\x6C\x6D","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u5FEB\u624B\u8D26\u53F7","\u3011\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A","\x3B","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x72\x65\x70\x6C\x61\x63\x65","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x41\x4E\x44\x52\x4F\x49\x44\x5F\x66\x66\x36\x30\x61\x33\x38\x37\x66\x36\x62\x61\x38\x39\x30\x34","\x6B\x70\x6E\x3D\x4E\x45\x42\x55\x4C\x41\x3B\x20\x6B\x70\x66\x3D\x41\x4E\x44\x52\x4F\x49\x44\x5F\x50\x48\x4F\x4E\x45\x3B\x20","\x64\x69\x64\x3D","\x3B\x20\x63\x3D\x58\x49\x41\x4F\x4D\x49\x3B\x20\x76\x65\x72\x3D\x31\x30\x2E\x32\x3B\x20\x61\x70\x70\x76\x65\x72\x3D\x31\x30\x2E\x32\x2E\x34\x31\x2E\x33\x30\x37\x35\x3B\x20\x6C\x61\x6E\x67\x75\x61\x67\x65\x3D\x7A\x68\x2D\x63\x6E\x3B\x20","\x63\x6C\x69\x65\x6E\x74\x5F\x6B\x65\x79\x3D\x32\x61\x63\x32\x61\x37\x36\x64\x3B\x20","\u53BB\u52A9\u529B\u4F5C\u8005\x20\x2D\x3E\x20","\u53BB\u52A9\u529B\x20\x2D\x3E\x20","\u52A9\u529B\u7ED3\u679C\x3A","\x74\x68\x65\x6E","\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x7A\x74\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x2F\x66\x72\x69\x65\x6E\x64\x41\x73\x73\x69\x73\x74","\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x69\x73\x4E\x6F\x64\x65","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x67\x65\x74\x64\x61\x74\x61","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x2A\x2F\x2A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x63\x6F\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x6E\x65\x62\x75\x6C\x61","\x73\x61\x6D\x65\x2D\x6F\x72\x69\x67\x69\x6E","\x63\x6F\x72\x73","\x65\x6D\x70\x74\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x6E\x65\x62\x75\x6C\x61\x2F\x64\x61\x69\x6C\x79\x2D\x69\x6E\x76\x69\x74\x65\x3F\x66\x69\x64\x3D\x32\x36\x37\x39\x35\x31\x36\x38\x37\x38\x26\x63\x63\x3D\x70\x61\x6E\x65\x6C\x50\x6F\x73\x74\x65\x72\x26\x73\x68\x61\x72\x65\x4D\x6F\x64\x65\x3D\x41\x50\x50\x26\x66\x6F\x6C\x6C\x6F\x77\x52\x65\x66\x65\x72\x3D\x31\x35\x31\x26\x6F\x72\x69\x67\x69\x6E\x53\x68\x61\x72\x65\x49\x64\x3D\x31\x36\x38\x37\x38\x31\x31\x30\x35\x36\x39\x35\x34\x30\x26\x73\x68\x61\x72\x65\x4D\x65\x74\x68\x6F\x64\x3D\x50\x49\x43\x54\x55\x52\x45\x26\x6B\x70\x6E\x3D\x4E\x45\x42\x55\x4C\x41\x26\x73\x75\x62\x42\x69\x7A\x3D\x57\x45\x45\x4B\x26\x73\x68\x61\x72\x65\x49\x64\x3D\x31\x36\x38\x37\x38\x31\x31\x30\x35\x36\x39\x35\x34\x30\x26\x73\x68\x61\x72\x65\x4F\x62\x6A\x65\x63\x74\x49\x64\x3D","\x26\x73\x68\x61\x72\x65\x55\x72\x6C\x4F\x70\x65\x6E\x65\x64\x3D\x30\x26\x74\x69\x6D\x65\x73\x74\x61\x6D\x70\x3D\x31\x36\x34\x39\x35\x38\x35\x36\x38\x36\x33\x32\x36\x26\x6C\x61\x79\x6F\x75\x74\x54\x79\x70\x65\x3D\x34\x26\x73\x6F\x75\x72\x63\x65\x3D\x52\x45\x54\x55\x52\x4E\x5F\x50\x4F\x50\x55\x50\x26\x6C\x6F\x67\x69\x6E\x5F\x65\x78\x74\x72\x61\x3D\x45\x4E\x4C\x49\x56\x45\x4E\x5F\x50\x4F\x50\x55\x4C\x41\x52\x49\x54\x59\x5F\x44\x49\x41\x4C\x4F\x47","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37","\x7B\x22\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x49\x64\x22\x3A","\x7D","\x50\x4F\x53\x54","\x77\x61\x69\x74","\u5FEB\u624B\u8D26\u53F7\x3A","\x63\x72\x65\x61\x74\x65\x4E\x69\x63\x6B\x4E\x61\x6D\x65","\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x49\x6E\x66\x6F","\u9080\u8BF7\u4EBA\u6570\x3A","\x61\x73\x73\x69\x73\x74\x65\x64\x43\x6F\x75\x6E\x74","\u7D2F\u8BA1\u91D1\u989D\x3A","\x61\x63\x63\x75\x6D\x75\x6C\x61\x74\x65\x64\x41\x6D\x6F\x75\x6E\x74","\u7D2F\u8BA1\u53D6\u6B3E\x3A","\x61\x63\x63\x75\x6D\x75\x6C\x61\x74\x65\x64\x57\x69\x74\x68\x64\x72\x61\x77","\u5F53\u524D\u8D26\u53F7\u52A9\u529B\u7801\x3A","\u540E\u9762\u7684\u53F7\u90FD\u4F1A\u52A9\u529B\x3A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x7A\x74\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x2F\x64\x65\x74\x61\x69\x6C\x3F\x61\x73\x73\x69\x73\x74\x61\x6E\x63\x65\x4D\x65\x74\x61\x49\x64\x3D\x32","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x6E\x65\x62\x75\x6C\x61\x2F\x64\x61\x69\x6C\x79\x2D\x63\x61\x73\x68\x2F\x68\x6F\x6D\x65\x3F\x6C\x61\x79\x6F\x75\x74\x54\x79\x70\x65\x3D\x34\x26\x73\x6F\x75\x72\x63\x65\x3D\x43\x41\x53\x48\x5F\x50\x41\x47\x45\x5F\x54\x41\x53\x4B","\x47\x45\x54","\u7B2C\u4E00\u4E2A\u8D26\u53F7\u672A\u83B7\u53D6\u5230\u52A9\u529B\u7801\x2C\u8BF7\u68C0\u67E5\x20\x6B\x73\x6A\x73\x62\x43\x6F\x6F\x6B\x69\x65\x20\x20\u53C2\u6570\u683C\u5F0F\uFF0C\u4E3A\u9632\u6B62\u540E\u9762\u8D26\u53F7\u52A9\u529B\u5230\u6211\uFF0C\u7ED3\u675F\u8FD0\u884C","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let CookieJDs=[__Oxdff08[0x0],__Oxdff08[0x0]];if(process[__Oxdff08[0x2]][__Oxdff08[0x1]]){if(process[__Oxdff08[0x2]][__Oxdff08[0x1]][__Oxdff08[0x4]](__Oxdff08[0x3])>  -1){CookieJDs= process[__Oxdff08[0x2]][__Oxdff08[0x1]][__Oxdff08[0x5]](__Oxdff08[0x3])}else {if(process[__Oxdff08[0x2]][__Oxdff08[0x1]][__Oxdff08[0x4]](__Oxdff08[0x6])>  -1){CookieJDs= process[__Oxdff08[0x2]][__Oxdff08[0x1]][__Oxdff08[0x5]](__Oxdff08[0x6])}else {if(process[__Oxdff08[0x2]][__Oxdff08[0x1]][__Oxdff08[0x4]](__Oxdff08[0x7])>  -1){CookieJDs= process[__Oxdff08[0x2]][__Oxdff08[0x1]][__Oxdff08[0x5]](__Oxdff08[0x7])}else {CookieJDs= [process[__Oxdff08[0x2]][__Oxdff08[0x1]]]}}}};CookieJDs= [... new Set(CookieJDs[__Oxdff08[0x8]]((_0x1266x2)=>{return !!_0x1266x2}))];console[__Oxdff08[0xc]](`${__Oxdff08[0x9]}${CookieJDs[__Oxdff08[0xa]]}${__Oxdff08[0xb]}`);console[__Oxdff08[0xc]](`${__Oxdff08[0xd]}${ new Date( new Date()[__Oxdff08[0xf]]()+  new Date()[__Oxdff08[0x10]]()* 60* 1000+ 8* 60* 60* 1000)[__Oxdff08[0xe]]()}${__Oxdff08[0x11]}`);let cookiesArr=CookieJDs,cookie=__Oxdff08[0x0],message;const fetch=require(__Oxdff08[0x12]);let assistanceId=__Oxdff08[0x0];let github=true;function gettext(){return {url:`${__Oxdff08[0x13]}`,timeout:10000}}async function getHub(){return  new Promise((_0x1266xb)=>{setTimeout(()=>{$[__Oxdff08[0x17]](gettext(),(_0x1266xc,_0x1266xd,_0x1266xe)=>{try{if(_0x1266xe){_0x1266xe= JSON[__Oxdff08[0x14]](_0x1266xe);assistanceId= _0x1266xe[__Oxdff08[0x15]]}}catch(e){github= false;$[__Oxdff08[0x16]](e,_0x1266xd)}finally{_0x1266xb(_0x1266xe)}})})})}!(async ()=>{if(!cookiesArr[0x0]){$[__Oxdff08[0x21]]($[__Oxdff08[0x1b]],__Oxdff08[0x1f],__Oxdff08[0x20],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxdff08[0x20]});return};console[__Oxdff08[0xc]](__Oxdff08[0x22]);console[__Oxdff08[0xc]](__Oxdff08[0x23]);if(ksjsb_zzz== __Oxdff08[0x0]){console[__Oxdff08[0xc]](__Oxdff08[0x24]);console[__Oxdff08[0xc]](__Oxdff08[0x25]);console[__Oxdff08[0xc]](__Oxdff08[0x0])}; await getHub();if(!github){console[__Oxdff08[0xc]](__Oxdff08[0x26]);return};$[__Oxdff08[0x27]]= __Oxdff08[0x0];for(let _0x1266x10=0;_0x1266x10< cookiesArr[__Oxdff08[0xa]];_0x1266x10++){if(cookiesArr[_0x1266x10]){$[__Oxdff08[0x28]]= _0x1266x10+ 1;$[__Oxdff08[0x29]]= true;$[__Oxdff08[0x2a]]= __Oxdff08[0x0];message= __Oxdff08[0x0];console[__Oxdff08[0xc]](`${__Oxdff08[0x2b]}${$[__Oxdff08[0x28]]}${__Oxdff08[0x2c]}`);let _0x1266x11=cookiesArr[_0x1266x10];if(__Oxdff08[0x2d]!= _0x1266x11[__Oxdff08[0x2e]](_0x1266x11[__Oxdff08[0xa]]- 1,_0x1266x11[__Oxdff08[0xa]])){_0x1266x11= _0x1266x11+ __Oxdff08[0x2d]};_0x1266x11= _0x1266x11[__Oxdff08[0x2f]](__Oxdff08[0x7],__Oxdff08[0x0]);let _0x1266x12=Math[__Oxdff08[0x31]](Math[__Oxdff08[0x30]]()* (999999)+ 1)+ __Oxdff08[0x32];let _0x1266x13=__Oxdff08[0x33]+ __Oxdff08[0x34]+ _0x1266x12+ __Oxdff08[0x35]+ __Oxdff08[0x36]+ _0x1266x11;try{if($[__Oxdff08[0x28]]== 1){console[__Oxdff08[0xc]](__Oxdff08[0x37]+ assistanceId)}else {console[__Oxdff08[0xc]](__Oxdff08[0x38]+ assistanceId)}; await fetch(__Oxdff08[0x3c],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdff08[0x3d],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdff08[0x3e],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x4C\x65\x6E\x67\x74\x68":35,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdff08[0x3f]]()?(process[__Oxdff08[0x2]][__Oxdff08[0x40]]?process[__Oxdff08[0x2]][__Oxdff08[0x40]]:(require(__Oxdff08[0x42])[__Oxdff08[0x41]])):($[__Oxdff08[0x44]](__Oxdff08[0x43])?$[__Oxdff08[0x44]](__Oxdff08[0x43]):__Oxdff08[0x45]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdff08[0x46],"\x41\x63\x63\x65\x70\x74":__Oxdff08[0x47],"\x4F\x72\x69\x67\x69\x6E":__Oxdff08[0x48],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdff08[0x49],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdff08[0x4a],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdff08[0x4b],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdff08[0x4c],"\x52\x65\x66\x65\x72\x65\x72":__Oxdff08[0x4d]+ assistanceId+ __Oxdff08[0x4e],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdff08[0x4f],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdff08[0x50],"\x43\x6F\x6F\x6B\x69\x65":_0x1266x13},"\x62\x6F\x64\x79":__Oxdff08[0x51]+ assistanceId+ __Oxdff08[0x52],"\x6D\x65\x74\x68\x6F\x64":__Oxdff08[0x53]})[__Oxdff08[0x3a]]((_0x1266x15)=>{return _0x1266x15[__Oxdff08[0x3b]]()})[__Oxdff08[0x3a]]((_0x1266x14)=>{console[__Oxdff08[0xc]](__Oxdff08[0x39]+ _0x1266x14[__Oxdff08[0x21]]);console[__Oxdff08[0xc]]()}); await $[__Oxdff08[0x54]](1000); await fetch(__Oxdff08[0x60],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdff08[0x3d],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdff08[0x3e],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdff08[0x3f]]()?(process[__Oxdff08[0x2]][__Oxdff08[0x40]]?process[__Oxdff08[0x2]][__Oxdff08[0x40]]:(require(__Oxdff08[0x42])[__Oxdff08[0x41]])):($[__Oxdff08[0x44]](__Oxdff08[0x43])?$[__Oxdff08[0x44]](__Oxdff08[0x43]):__Oxdff08[0x45]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdff08[0x46],"\x41\x63\x63\x65\x70\x74":__Oxdff08[0x47],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdff08[0x49],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdff08[0x4a],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdff08[0x4b],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdff08[0x4c],"\x52\x65\x66\x65\x72\x65\x72":__Oxdff08[0x61],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdff08[0x4f],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdff08[0x50],"\x43\x6F\x6F\x6B\x69\x65":_0x1266x13},"\x6D\x65\x74\x68\x6F\x64":__Oxdff08[0x62]})[__Oxdff08[0x3a]]((_0x1266x15)=>{return _0x1266x15[__Oxdff08[0x3b]]()})[__Oxdff08[0x3a]]((_0x1266x14)=>{console[__Oxdff08[0xc]](__Oxdff08[0x55]+ _0x1266x14[__Oxdff08[0x57]][__Oxdff08[0x56]]);console[__Oxdff08[0xc]](__Oxdff08[0x58]+ _0x1266x14[__Oxdff08[0x57]][__Oxdff08[0x59]]);console[__Oxdff08[0xc]](__Oxdff08[0x5a]+ _0x1266x14[__Oxdff08[0x57]][__Oxdff08[0x5b]]);console[__Oxdff08[0xc]](__Oxdff08[0x5c]+ _0x1266x14[__Oxdff08[0x57]][__Oxdff08[0x5d]]);console[__Oxdff08[0xc]](__Oxdff08[0x5e]+ _0x1266x14[__Oxdff08[0x57]][__Oxdff08[0x15]]);if(ksjsb_zzz!= __Oxdff08[0x0]){$[__Oxdff08[0x27]]= ksjsb_zzz;assistanceId= ksjsb_zzz};if(ksjsb_zzz== __Oxdff08[0x0]&& $[__Oxdff08[0x28]]== 1&& _0x1266x14[__Oxdff08[0x57]]&& _0x1266x14[__Oxdff08[0x57]][__Oxdff08[0x15]]){$[__Oxdff08[0x27]]= _0x1266x14[__Oxdff08[0x57]][__Oxdff08[0x15]];assistanceId= $[__Oxdff08[0x27]];console[__Oxdff08[0xc]](__Oxdff08[0x5f]+ $[__Oxdff08[0x27]])}})}catch(e){};if($[__Oxdff08[0x27]]== __Oxdff08[0x0]){console[__Oxdff08[0xc]](__Oxdff08[0x63]);break}; await $[__Oxdff08[0x54]](1000)}}})()[__Oxdff08[0x1e]]((_0x1266xf)=>{$[__Oxdff08[0xc]](__Oxdff08[0x0],`${__Oxdff08[0x1a]}${$[__Oxdff08[0x1b]]}${__Oxdff08[0x1c]}${_0x1266xf}${__Oxdff08[0x1d]}`,__Oxdff08[0x0])})[__Oxdff08[0x19]](()=>{$[__Oxdff08[0x18]]()});(function(_0x1266x16,_0x1266x17,_0x1266x18,_0x1266x19,_0x1266x1a,_0x1266x1b){_0x1266x1b= __Oxdff08[0x64];_0x1266x19= function(_0x1266x1c){if( typeof alert!== _0x1266x1b){alert(_0x1266x1c)};if( typeof console!== _0x1266x1b){console[__Oxdff08[0xc]](_0x1266x1c)}};_0x1266x18= function(_0x1266x1d,_0x1266x16){return _0x1266x1d+ _0x1266x16};_0x1266x1a= _0x1266x18(__Oxdff08[0x65],_0x1266x18(_0x1266x18(__Oxdff08[0x66],__Oxdff08[0x67]),__Oxdff08[0x68]));try{_0x1266x16= __encode;if(!( typeof _0x1266x16!== _0x1266x1b&& _0x1266x16=== _0x1266x18(__Oxdff08[0x69],__Oxdff08[0x6a]))){_0x1266x19(_0x1266x1a)}}catch(e){_0x1266x19(_0x1266x1a)}})({})
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
