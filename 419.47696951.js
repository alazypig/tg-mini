"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[419,717],{26014:function(E,r,t){t.r(r);var n=t(26068),C=t.n(n),a=t(48305),F=t.n(a),f=t(81190),L=t(21120),u=t(57255),m=t(9622),h=t(719),O=t(34144),s=t(75271),e=t(52676),_=function(c){var o=c.user,b=c.dispatch;(0,s.useEffect)(function(){b({type:"user/fetchData",payload:{}})},[]);var l=(0,s.useContext)(f.TabBarContext),A=(0,s.useState)(0),x=F()(A,2),d=x[0],j=x[1],M=(0,s.useCallback)(function(){l.callback&&l.callback(C()(C()({},l.items),{},{todoBadge:Math.floor(Math.random()*100+1)}))},[l]),g=(0,s.useCallback)(function(){l.callback&&l.callback(C()(C()({},l.items),{},{messageBadge:u.Ct.dot}))},[l]),k=(0,s.useCallback)(function(){l.callback&&l.callback({messageBadge:null,todoBadge:null})},[l]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{children:[" 123123123====",JSON.stringify(o.data.users)]}),(0,e.jsxs)(u.aV,{header:"TabBar Badge \u663E\u793A\u63A7\u5236",children:[(0,e.jsx)(u.aV.Item,{onClick:function(){return M()},extra:"\u968F\u673A\u663E\u793A\u4E00\u4E2A0\uFF5E100\u4EE5\u5185\u7684\u6570\u5B57",children:"\u589E\u52A0\u6211\u7684\u4EE3\u529E"}),(0,e.jsx)(u.aV.Item,{onClick:function(){j(d+1),l.callback&&l.callback(C()(C()({},l.items),{},{messageBadge:d+1>=20?"20+":d+1}))},extra:"\u6D88\u606Ftab\u663E\u793A\u5177\u4F53\u6761\u6570\uFF0C\u6700\u592720+",children:"\u589E\u52A0\u6D88\u606F"}),(0,e.jsx)(u.aV.Item,{onClick:function(){return g()},extra:"\u6D88\u606Ftab\u663E\u793A\u7EA2\u70B9",children:"\u589E\u52A0\u6D88\u606F"}),(0,e.jsx)(u.aV.Item,{onClick:function(){return k()},extra:"\u6E05\u7A7A\u5168\u90E8\u7684 Badge \u663E\u793A",children:"\u6E05\u695A\u5168\u90E8"}),(0,e.jsx)(u.aV.Item,{onClick:function(){return L.history.push("/detail")},extra:"\u8DF3\u8F6C\u5230\u8BE6\u60C5\u9875",children:"\u5728\u5176\u4ED6\u9875\u9762\u5C55\u793A\u6570\u636E"})]}),(0,e.jsxs)(u.aV,{header:"\u53EF\u70B9\u51FB\u7684\u529F\u80FD\u5217\u8868",children:[(0,e.jsx)(u.aV.Item,{prefix:(0,e.jsx)(m.Z,{}),onClick:function(){},children:"\u8D26\u5355"}),(0,e.jsx)(u.aV.Item,{prefix:(0,e.jsx)(h.Z,{}),onClick:function(){},children:"\u603B\u8D44\u4EA7"}),(0,e.jsx)(u.aV.Item,{prefix:(0,e.jsx)(O.Z,{}),onClick:function(){},children:"\u8BBE\u7F6E"})]}),(0,e.jsxs)(u.aV,{header:"\u590D\u6742\u5E03\u5C40",children:[(0,e.jsx)(u.aV.Item,{extra:(0,e.jsx)(u.rs,{defaultChecked:!0}),children:"\u65B0\u6D88\u606F\u901A\u77E5"}),(0,e.jsx)(u.aV.Item,{extra:"\u672A\u5F00\u542F",clickable:!0,children:"\u5927\u5B57\u53F7\u6A21\u5F0F"}),(0,e.jsx)(u.aV.Item,{description:"\u7BA1\u7406\u5DF2\u6388\u6743\u7684\u4EA7\u54C1\u548C\u8BBE\u5907",clickable:!0,children:"\u6388\u6743\u7BA1\u7406"}),(0,e.jsx)(u.aV.Item,{title:"\u8FD9\u91CC\u662F\u6807\u9898",children:"\u8FD9\u91CC\u662F\u4E3B\u4FE1\u606F"})]}),(0,e.jsxs)(u.aV,{header:"\u5217\u8868\u9879\u7981\u7528",children:[(0,e.jsx)(u.aV.Item,{disabled:!0,clickable:!0,prefix:(0,e.jsx)(m.Z,{}),children:"\u8D26\u5355"}),(0,e.jsx)(u.aV.Item,{disabled:!0,prefix:(0,e.jsx)(h.Z,{}),children:"\u603B\u8D44\u4EA7"})]})]})};_.title="TOTO",_.icon="toto-icon",_.badge="5";var B=function(c){var o=c.user;return{user:o}};r.default=(0,L.connect)(B)(_)},719:function(E,r,t){var n=t(75271);function C(a){return n.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a,{style:Object.assign({verticalAlign:"-0.125em"},a.style),className:["antd-mobile-icon",a.className].filter(Boolean).join(" ")}),n.createElement("g",{id:"PayCircleOutline-PayCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"PayCircleOutline-\u7F16\u7EC4"},n.createElement("rect",{id:"PayCircleOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),n.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M29.481684,12.6536905 L29.5554769,12.6868007 L31.4514212,13.7775476 C31.4517209,13.77772 31.4520203,13.7778928 31.4523195,13.778066 L31.5180198,13.8254803 C31.6372256,13.9314105 31.682089,14.0995545 31.6314989,14.2507889 L31.5981516,14.3246307 L26.5546134,23.0374511 L31.1,23.0381798 C31.3209139,23.0381798 31.5,23.2172659 31.5,23.4381798 L31.5,25.6305439 C31.5,25.8514578 31.3209139,26.0305439 31.1,26.0305439 L25.4996134,26.0304511 L25.4996134,28.0254511 L31.1,28.0254532 C31.3209139,28.0254532 31.5,28.2045393 31.5,28.4254532 L31.5,30.6178173 C31.5,30.8387312 31.3209139,31.0178173 31.1,31.0178173 L25.4996134,31.0174511 L25.5,35.6 C25.5,35.8209139 25.3209139,36 25.1,36 L22.9,36 C22.6790861,36 22.5,35.8209139 22.5,35.6 L22.4996134,31.0174511 L16.9,31.0178173 C16.6790861,31.0178173 16.5,30.8387312 16.5,30.6178173 L16.5,28.4254532 C16.5,28.2045393 16.6790861,28.0254532 16.9,28.0254532 L22.4996134,28.0254511 L22.4996134,26.0304511 L16.9,26.0305439 C16.6790861,26.0305439 16.5,25.8514578 16.5,25.6305439 L16.5,23.4381798 C16.5,23.2172659 16.6790861,23.0381798 16.9,23.0381798 L21.3286134,23.0374511 L16.2864814,14.3246307 C16.1758221,14.1334306 16.2411134,13.8887252 16.4323135,13.778066 L16.4327625,13.7778065 L18.329156,12.6868007 C18.5202914,12.5768395 18.764366,12.6423015 18.8748225,12.8331512 L23.9416134,21.5884511 L29.0098105,12.8331512 C29.1064599,12.6661577 29.3054107,12.5951642 29.481684,12.6536905 Z",id:"PayCircleOutline-\u5F62\u72B6\u7ED3\u5408",fill:"currentColor",fillRule:"nonzero"}))))}r.Z=C},34144:function(E,r,t){var n=t(75271);function C(a){return n.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a,{style:Object.assign({verticalAlign:"-0.125em"},a.style),className:["antd-mobile-icon",a.className].filter(Boolean).join(" ")}),n.createElement("g",{id:"SetOutline-SetOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},n.createElement("g",{id:"SetOutline-\u7F16\u7EC4"},n.createElement("rect",{id:"SetOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),n.createElement("path",{d:"M29.6635785,4.09347573 C29.6943765,4.10280636 29.7218319,4.11121584 29.7459445,4.11870417 C32.9286193,5.10710452 35.7780984,6.89542969 38.0773907,9.25862405 C38.1048534,9.28685006 38.137705,9.32098069 38.1759455,9.36101594 L38.1758731,9.36108506 C38.2958121,9.4866534 38.3210097,9.67527399 38.2382375,9.82792234 C38.2019091,9.89491908 38.1723405,9.95145741 38.1495317,9.99753731 C37.2499501,11.8149357 37.2312381,14.0542329 38.2894192,15.9551742 C39.3113653,17.7910221 41.0990205,18.8824923 42.9924218,19.046176 C43.0308388,19.0494971 43.0769297,19.0526108 43.1306946,19.055517 L43.1306891,19.0556186 C43.3097688,19.0652987 43.4605039,19.1930174 43.4994562,19.3680772 C43.5181604,19.4521376 43.5334344,19.5224186 43.5452782,19.5789201 C43.8434094,21.0011724 44,22.4782234 44,23.9932074 C44,25.9110818 43.7490484,27.768165 43.2793445,29.5310609 C43.2673008,29.5762635 43.2521361,29.6318295 43.2338504,29.6977589 L43.2339096,29.6977753 C43.1896789,29.8572501 43.0518211,29.9730289 42.8871024,29.9890386 C42.8573588,29.9919295 42.8310363,29.994728 42.8081347,29.9974341 C40.9832456,30.2130642 39.2780401,31.2924244 38.2894192,33.0684062 C37.3690455,34.721787 37.2633405,36.6311336 37.8431283,38.2964388 C37.8645836,38.3580642 37.894274,38.4365116 37.9321995,38.531781 L37.9323132,38.5317357 C37.9914458,38.6802779 37.956476,38.8497628 37.843378,38.9627686 C37.7865957,39.0195046 37.7392204,39.0664065 37.7012522,39.1034741 C35.4293099,41.3215235 32.6557522,42.9941892 29.5759974,43.9196324 C29.4537483,43.9563673 29.2860191,44.0037796 29.0728098,44.0618692 L29.0728273,44.0619334 C28.91719,44.1043373 28.751312,44.0491222 28.6521374,43.9219001 C28.5788324,43.8278638 28.5179309,43.752778 28.4694329,43.6966426 C27.3705613,42.4247239 25.7753243,41.6250222 24,41.6250222 C22.2788787,41.6250222 20.727016,42.3766374 19.6328956,43.5806625 C19.5591199,43.661849 19.4643813,43.7758944 19.34868,43.9227986 L19.3486175,43.9227494 C19.2493155,44.0488316 19.0842591,44.1033371 18.9294019,44.0611842 C18.7099668,44.0014529 18.5375942,43.9527361 18.4122839,43.9150337 C15.3282444,42.9871326 12.5518465,41.3090762 10.2781268,39.0843168 C10.2449964,39.0518999 10.2042406,39.0115257 10.1558594,38.9631942 L10.1558261,38.9632275 C10.04253,38.8500478 10.0076468,38.680209 10.0671608,38.5315358 C10.0959923,38.4595114 10.1191005,38.3992875 10.1364852,38.3508643 C10.7388765,36.6729735 10.6410312,34.7398891 9.71058084,33.0684062 C8.77900775,31.3949064 7.21116421,30.3399516 5.50695414,30.0424689 C5.40889863,30.0253526 5.27714893,30.0081907 5.11170504,29.9909832 L5.11171738,29.9908645 C4.94823645,29.9738612 4.81180998,29.8585556 4.76780345,29.7001935 C4.74656016,29.6237473 4.7291408,29.5599484 4.71554538,29.508797 C4.24893773,27.7532311 4,25.903371 4,23.9932074 C4,22.4054758 4.17199022,20.8594077 4.49770159,19.3739511 C4.49806505,19.3722935 4.49843334,19.3706159 4.49880646,19.3689185 L4.49883435,19.3689247 C4.5374295,19.1933462 4.68842311,19.0650888 4.86793244,19.0554044 C4.90654419,19.0533214 4.94037279,19.0511226 4.96941824,19.0488081 C6.87752944,18.896758 8.68194132,17.8030464 9.71058084,15.9551742 C10.7160785,14.1488746 10.7492438,12.0370719 9.97851139,10.271735 C9.92961058,10.1597293 9.85632321,10.0117916 9.75864928,9.82792177 L9.75863681,9.8279284 C9.67757981,9.67533972 9.70365562,9.48795295 9.8232933,9.36329195 C9.95974282,9.22111323 10.0692945,9.10887896 10.1519482,9.02658914 C12.326484,6.86162837 14.9722368,5.2013723 17.9137138,4.22786185 C18.0198088,4.19274868 18.1613328,4.14821666 18.3382858,4.09426578 L18.3382697,4.0942132 C18.5189812,4.03911642 18.7136034,4.11794967 18.8050299,4.28327804 C18.8832892,4.42479596 18.9491374,4.53716566 19.0025746,4.62038717 C20.0780793,6.29534615 21.9148218,7.39855818 24,7.39855818 C26.1773809,7.39855818 28.0838696,6.19562513 29.1353621,4.39557165 C29.1469048,4.37581178 29.1669487,4.3394508 29.1954939,4.28648874 L29.1955161,4.28650073 C29.2857772,4.11903248 29.4815071,4.0383151 29.6635785,4.09347573 Z M30.291723,7.85114089 L30.291723,7.85114089 L30.291723,7.85114089 C28.6437806,9.52218192 26.4047627,10.5100549 24,10.5100549 C21.6223815,10.5100549 19.4098701,9.54440347 17.7697895,7.91280929 L17.7132092,7.85462809 C17.6100913,7.74859263 17.4522642,7.71712891 17.3163679,7.77551557 L17.3163679,7.77551557 L17.3163679,7.77551557 C15.9322776,8.39005242 14.633762,9.19368235 13.4541246,10.1628476 L13.3867297,10.2196976 C13.2694828,10.3185994 13.2191193,10.475839 13.2570868,10.6244556 L13.2575903,10.6264267 L13.2575903,10.6264267 C13.7725685,12.8102642 13.5205613,15.1562719 12.464932,17.2183236 L12.3086571,17.5109225 C11.1920953,19.5167402 9.43480152,20.9698965 7.40855181,21.6828434 C7.40091095,21.6855318 7.38973993,21.6893285 7.37503876,21.6942335 L7.37504204,21.6942433 C7.22714595,21.7435875 7.12139963,21.8743708 7.1041119,22.0293199 C7.10248639,22.0438892 7.10118391,22.055854 7.10020446,22.0652143 C7.05194441,22.526416 7.02100448,22.9912373 7.00762775,23.4589912 L7,23.9932074 C7,24.9613003 7.07495263,25.917621 7.22258691,26.855785 L7.25959287,27.0722616 C7.28391536,27.2139796 7.3823706,27.3317948 7.51754776,27.380812 C7.59686483,27.4095736 7.65871065,27.4326633 7.70308522,27.4500811 C9.51548077,28.1614794 11.0888905,29.4725697 12.1509777,31.2401084 L12.3086571,31.5126578 C13.3435133,33.371698 13.7095027,35.4923797 13.4194465,37.5343141 C13.4191519,37.5363877 13.4187954,37.5388325 13.418377,37.5416483 L13.4183868,37.5416498 C13.3977083,37.6808038 13.4516529,37.8205903 13.5604504,37.9097785 C13.5795524,37.9254377 13.5927649,37.936209 13.6000877,37.9420922 C14.9359782,39.0153738 16.4186528,39.8773318 18.0012021,40.4960686 C18.0180019,40.5026369 18.0499461,40.5147385 18.0970346,40.5323735 L18.0970476,40.5323389 C18.2301703,40.5821942 18.3797517,40.5576453 18.4899563,40.4678557 C18.5407032,40.4265096 18.5745502,40.3992232 18.5914976,40.3859965 C20.0437878,39.2525436 21.8148223,38.5847722 23.692736,38.5189087 L24,38.5135255 C26.0546357,38.5135255 27.9962679,39.2344251 29.5525918,40.5011394 L29.5625019,40.5094288 C29.6390288,40.5734408 29.7436987,40.5922165 29.8377034,40.5587945 L29.8377034,40.5587945 L29.8377034,40.5587945 C31.4665237,39.9410888 32.9918221,39.0671383 34.3628695,37.9713833 C34.3758544,37.9610056 34.4017031,37.9399379 34.4404158,37.9081801 L34.4404118,37.9081753 C34.5491233,37.818994 34.6030242,37.679281 34.582378,37.5401939 C34.5701682,37.4579399 34.562495,37.4043003 34.5593585,37.379275 C34.3224766,35.4892434 34.6454399,33.5395462 35.5385639,31.7984312 L35.691343,31.5126578 C36.7621637,29.5890102 38.4237823,28.1708936 40.3512816,27.4294657 L40.4811388,27.3826779 C40.6164373,27.3339296 40.7151527,27.2163026 40.7396867,27.0745981 L40.7775003,26.8561932 L40.7775003,26.8561932 C40.8955662,26.1052033 40.9671265,25.3429213 40.9910279,24.5725001 L41,23.9932074 C41,23.3339341 40.9652437,22.6802401 40.8963936,22.0340808 C40.8962979,22.0331827 40.8961981,22.0322526 40.8960941,22.0312906 L40.8960534,22.031295 C40.879315,21.876429 40.7741874,21.7453695 40.6266425,21.6954283 C40.6235192,21.6943711 40.6208408,21.6934535 40.6186073,21.6926756 C38.6753505,21.0158623 36.9771921,19.6590351 35.8512449,17.7871679 L35.691343,17.5109225 C34.5050786,15.3798894 34.2028644,12.9138423 34.7426714,10.6260269 L34.7435697,10.6224291 C34.7805548,10.4742946 34.7299853,10.3180262 34.6132258,10.2196445 L34.5460544,10.1630459 L34.5460544,10.1630459 C33.3663284,9.19377043 32.0677839,8.39009518 30.6836701,7.77553631 L30.6752045,7.77193094 C30.5433665,7.71578291 30.3905255,7.74735294 30.291723,7.85114089 Z M24,16.7330484 C27.8659932,16.7330484 31,19.9835323 31,23.9932074 C31,28.0028825 27.8659932,31.2533664 24,31.2533664 C20.1340068,31.2533664 17,28.0028825 17,23.9932074 C17,19.9835323 20.1340068,16.7330484 24,16.7330484 Z M24,19.8445451 C21.790861,19.8445451 20,21.7019645 20,23.9932074 C20,26.2844503 21.790861,28.1418697 24,28.1418697 C26.209139,28.1418697 28,26.2844503 28,23.9932074 C28,21.7019645 26.209139,19.8445451 24,19.8445451 Z",id:"SetOutline-\u5F62\u72B6",fill:"currentColor",fillRule:"nonzero"}))))}r.Z=C}}]);