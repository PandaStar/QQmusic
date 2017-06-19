;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM512 960c-247.424 0-448-200.576-448-448s200.576-448 448-448 448 200.576 448 448S759.424 960 512 960z"  ></path>' +
    '' +
    '<path d="M384 256 768 512 384 768Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang1" viewBox="0 0 1064 1024">' +
    '' +
    '<path d="M-48.606208 883.816448"  ></path>' +
    '' +
    '<path d="M1041.337344 883.816448"  ></path>' +
    '' +
    '<path d="M85.164032 853.49376"  ></path>' +
    '' +
    '<path d="M439.277568 253.131776 736.444416 512.809984 439.277568 772.02432Z"  ></path>' +
    '' +
    '<path d="M85.164032 512.346112c0 124.5184 42.580992 228.202496 130.994176 316.613632 87.49056 87.486464 193.494016 131.693568 317.07648 131.462144 123.60192-0.232448 228.6592-43.97568 316.146688-131.462144 87.494656-87.486464 131.692544-193.021952 131.472384-316.613632-0.242688-124.055552-43.976704-229.588992-131.472384-317.07648C761.892864 107.782144 656.836608 64.270336 533.234688 64.270336c-124.045312 0-229.817344 43.281408-317.07648 130.999296C128.436224 283.450368 85.164032 387.828736 85.164032 512.346112z"  ></path>' +
    '' +
    '<path d="M980.380672 853.49376"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiayishou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M631.200768 493.799424c-0.039936-0.04096-0.075776-0.083968-0.115712-0.123904-1.426432-1.439744-2.973696-2.675712-4.608-3.72224L375.805952 285.83424c-4.942848-6.662144-12.848128-11.010048-21.740544-11.058176-0.637952-0.003072-1.26976 0.022528-1.898496 0.06144-6.401024 0.252928-12.729344 2.840576-17.6128 7.774208-0.423936 0.429056-0.82432 0.872448-1.21344 1.323008-3.830784 4.3264-6.23616 9.899008-6.465536 16.09728-0.037888 0.728064-0.043008 1.458176-0.022528 2.187264l0.224256 422.310912c0.079872 14.876672 12.63104 27.001856 27.505664 27.080704 9.152512 0.049152 17.21344-4.475904 22.04672-11.429888L625.718272 536.369152c2.134016-1.184768 4.14208-2.683904 5.950464-4.509696 10.292224-10.411008 10.292224-27.27936 0-37.679104L631.200768 493.799424zM381.35296 666.996736l-0.164864-308.722688 189.197312 154.051584L381.35296 666.996736zM511.02208 4.277248c-281.655296 0-509.999104 228.330496-509.999104 509.997056 0 281.654272 228.343808 509.99808 509.999104 509.99808 281.667584 0 509.996032-228.343808 509.996032-509.99808C1021.018112 232.607744 792.690688 4.277248 511.02208 4.277248zM510.742528 968.51968c-251.493376 0-455.359488-203.879424-455.359488-455.3728 0-251.47904 203.866112-455.359488 455.359488-455.359488 251.4944 0 455.360512 203.880448 455.360512 455.359488C966.102016 764.640256 762.236928 968.51968 510.742528 968.51968zM666.862592 301.975552c-14.8736-0.078848-27.291648 11.501568-27.211776 26.376192l0.226304 368.978944c0.077824 14.874624 12.630016 27.001856 27.503616 27.07968 14.875648 0.079872 26.882048-11.912192 26.802176-26.801152l-0.226304-368.553984C693.876736 314.181632 681.750528 302.055424 666.862592 301.975552z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianzan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.844176 909.34775c-23.913643 0-46.429449-9.340739-63.399959-26.299993-75.068719-75.268264-200.671369-201.346751-272.727475-273.827529-44.760436-45.081755-71.27123-94.443999-81.054037-150.913105-8.863878-51.247174-1.892093-103.220896 20.157085-150.306284 22.063505-47.111994 57.55995-85.773526 102.655008-111.805412 38.950104-22.491247 82.912361-34.382065 127.132492-34.382065 60.891835 0 119.499651 22.146393 166.217672 62.581314 3.25309-2.226714 6.471388-4.459568 9.641591-6.658653 15.0733-10.457166 30.658254-21.269419 47.5162-29.756721 34.631752-17.417695 71.709205-26.245757 110.210078-26.245757 59.470463 0 117.736495 21.343097 164.083056 60.096726 47.929616 40.077787 79.033008 95.92984 87.586824 157.267836 5.802146 41.580001 2.5071 81.408101-9.792017 118.376061-12.140505 36.497239-33.05586 70.204945-62.163805 100.186793-90.76112 93.476975-251.451916 254.185166-282.743596 285.450241C557.234739 900.029524 534.746562 909.34775 510.844176 909.34775zM343.608314 198.710714c-37.751812 0-75.333756 10.178827-108.684328 29.438473-78.107939 45.088918-120.266108 135.052882-104.905258 223.86665 8.446369 48.75747 31.630395 91.674932 70.873164 131.200134 72.034617 72.460312 197.617823 198.518333 272.65482 273.755898 9.981329 9.974166 23.236214 15.481599 37.297464 15.481599 14.051017 0 27.276227-5.482875 37.239136-15.440667 31.258934-31.232328 191.776791-191.764512 282.352693-285.051151 51.101865-52.638871 71.924099-115.813702 61.885466-187.767478-14.750959-105.789395-107.228163-185.564299-215.111243-185.564299-32.707936 0-64.208371 7.505951-93.641727 22.309098-14.537088 7.319709-28.396747 16.933671-43.068911 27.113521-7.144724 4.955872-14.531971 10.080589-22.204721 15.07637l-11.029194 7.179516-10.378371-8.091282c-0.363274-0.283456-2.270716-1.786693-4.170996-3.573385C451.628516 219.99446 398.674467 198.710714 343.608314 198.710714z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024C229.285566 1024 0.106644 794.767757 0.106644 512 0.106644 229.232243 229.285566 0 512 0 794.714434 0 1023.893356 229.232243 1023.893356 512 1023.893356 794.767757 794.714434 1024 512 1024ZM512 32.003999C246.956551 32.003999 32.099979 246.913893 32.099979 512 32.099979 777.096772 246.956551 991.996001 512 991.996001 777.043449 991.996001 991.900021 777.096772 991.900021 512 991.900021 246.913893 777.043449 32.003999 512 32.003999ZM639.973339 714.677775 618.644449 714.677775C595.08669 714.677775 575.986669 695.577755 575.986669 672.019996L575.986669 352.086649C575.986669 328.52889 595.08669 309.428869 618.644449 309.428869L639.973339 309.428869C663.531098 309.428869 682.631119 328.52889 682.631119 352.086649L682.631119 672.019996C682.631119 695.577755 663.531098 714.677775 639.973339 714.677775ZM405.355551 714.677775 384.026661 714.677775C360.468902 714.677775 341.368881 695.577755 341.368881 672.019996L341.368881 352.086649C341.368881 328.52889 360.468902 309.428869 384.026661 309.428869L405.355551 309.428869C428.91331 309.428869 448.013331 328.52889 448.013331 352.086649L448.013331 672.019996C448.013331 695.577755 428.91331 714.677775 405.355551 714.677775Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang3" viewBox="0 0 1030 1024">' +
    '' +
    '<path d="M511.999996 0C229.260123 0-4.0e-06 229.238701-4.0e-06 512c0 282.782725 229.238701 512 512 512 282.782725 0 512-229.217275 512-512C1024.021422 229.238701 794.804147 0 511.999996 0zM511.999996 958.842986c-246.786743 0-446.82156-200.056244-446.82156-446.842986 0-246.786743 200.056244-446.82156 446.82156-446.82156 246.829595 0 446.842986 200.034818 446.842986 446.82156C958.864408 758.786743 758.829591 958.842986 511.999996 958.842986z"  ></path>' +
    '' +
    '<path d="M365.102105 328.52762l85.70472 0 0 385.671242-85.70472 0 0-385.671242Z"  ></path>' +
    '' +
    '<path d="M536.511546 328.52762l107.130901 0 0 385.671242-107.130901 0 0-385.671242Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhuanfa" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M860.545766 442.937065c-13.630439 0-24.684192 11.407817-24.729218 25.497721l-0.002047 0 0 216.940914c0 33.909297-27.489074 61.398372-61.398372 61.398372l-542.352285 0c-33.909297 0-61.398372-27.489074-61.398372-61.398372l0-433.881828c0-33.909297 27.489074-61.398372 61.398372-61.398372l265.539772 0c0.171915 0.004093 0.342808 0.013303 0.515746 0.013303 12.836353 0 23.243377-10.765181 23.243377-24.044626 0-13.278421-10.407024-24.044626-23.243377-24.044626-0.00307 0-0.00614 0-0.00921 0l0-0.020466L199.720206 141.999085c-45.212738 0-81.864496 36.651758-81.864496 81.864496l0 489.140363c0 45.212738 36.651758 81.864496 81.864496 81.864496l603.750657 0c45.212738 0 81.864496-36.651758 81.864496-81.864496l0-244.570181-0.061398 0C885.228935 454.345905 874.176205 442.937065 860.545766 442.937065z"  ></path>' +
    '' +
    '<path d="M917.57769 272.146237l0-0.278339L738.752886 92.502787l-5.649674-5.494131-0.715291 0.741897c-3.960195-2.220574-8.43409-3.399423-13.05841-3.399423-14.897292 0-27.012214 12.138458-27.012214 27.059286 0 4.653997 1.173732 9.124821 3.402493 13.085016l-0.797156 0.818645 124.499525 124.833123-127.768989 0.047072C483.616044 276.136108 432.534646 404.848585 417.483858 604.680842c0 14.922874 12.110829 27.059286 27.00812 27.059286 12.168134 0 22.491247-8.100492 25.864064-19.212574l1.226944-7.18361c15.818267-188.993398 53.073776-282.241152 221.042325-301.000402l126.796848 0-118.979812 119.314433-4.825912 6.7968c-1.715061 3.604084-2.610454 7.996115-2.610454 11.981892 0 14.926968 12.115945 27.064402 27.012214 27.064402 4.239558 0 8.919137-1.02433 12.673647-2.964518l184.126554-183.368284c1.633197-1.149173 3.634784-3.972475 3.634784-6.119371S919.209864 273.290293 917.57769 272.146237z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M171.52 512m-99.328 0a19.4 19.4 0 1 0 198.656 0 19.4 19.4 0 1 0-198.656 0Z"  ></path>' +
    '' +
    '<path d="M506.88 512m-99.328 0a19.4 19.4 0 1 0 198.656 0 19.4 19.4 0 1 0-198.656 0Z"  ></path>' +
    '' +
    '<path d="M842.24 512m-99.328 0a19.4 19.4 0 1 0 198.656 0 19.4 19.4 0 1 0-198.656 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhuanfa1" viewBox="0 0 1084 1024">' +
    '' +
    '<path d="M818.493587 8.809902l-0.12414 0.112126C813.075497 3.470301 805.819341 0 797.711027 0c-15.845811 0-28.7363 12.922525-28.7363 28.824399 0 8.174788 3.459889 15.457374 8.889992 20.695261l-0.116131 0.14256 198.390191 198.97725L757.64199 248.639471c-296.83284 37.00159-377.435437 210.331613-400.80971 519.838699 0 15.897869 12.902502 28.81639 28.748313 28.81639 15.789748 0 28.756322-12.91852 28.756322-28.81639l0.140158 0c23.282169-277.747388 78.428153-432.63348 343.172926-462.098599l218.488781 0L777.748589 505.342405l0.176198 0.176198c-4.849451 5.185829-7.940926 12.03753-7.940926 19.674114 0 15.909883 12.878475 28.828403 28.744309 28.828403 7.596539 0 14.472267-3.107493 19.586015-7.984975l0.168189 0.148167 264.740769-265.484004 0-6.395188L818.493587 8.809902 818.493587 8.809902zM1009.560346 604.077383c-15.020883 0-27.218594 12.189701-27.282666 27.218594l0 0.092104 0 0.072081 0 283.109415c0 30.233983-24.39542 54.713498-54.553318 54.713498L405.927462 969.283074l-0.060068 0L109.118649 969.283074c-30.129866 0-54.549313-24.479515-54.549313-54.713498L54.569336 385.056003l0-0.104117L54.569336 209.268818c0-30.235585 24.419447-54.719104 54.549313-54.719104l383.253977 0c15.028892-0.030434 27.230607-12.223339 27.230607-27.354747 0-15.122598-12.201715-27.34834-27.230607-27.34834L103.684541 99.846628C46.420176 99.845827 0 146.374125 0 203.786656l0 181.161225 0 0.076086 0 535.015758c0 57.420541 46.420176 103.956847 103.684541 103.956847l829.473929 0c57.288392 0 103.680537-46.536307 103.680537-103.956847L1036.839007 631.30799C1036.77894 616.267084 1024.581229 604.077383 1009.560346 604.077383L1009.560346 604.077383z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-menu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M164.571 219.429c-20.198 0-36.571 16.374-36.571 36.573 0 20.197 16.373 36.571 36.571 36.571 20.198 0 36.571-16.374 36.571-36.571 0-20.198-16.373-36.573-36.571-36.573zM274.287 292.572h585.142c20.197 0 36.571-16.374 36.571-36.571 0-20.198-16.374-36.573-36.571-36.573h-585.143c-20.198 0-36.571 16.374-36.571 36.573-0.002 20.197 16.373 36.571 36.571 36.571zM164.571 475.43c-20.198 0-36.571 16.372-36.571 36.57s16.373 36.573 36.571 36.573c20.198 0 36.571-16.374 36.571-36.573 0-20.197-16.373-36.57-36.571-36.57zM859.429 475.43h-585.143c-20.198 0-36.571 16.372-36.571 36.57s16.373 36.573 36.571 36.573h585.143c20.197 0 36.571-16.374 36.571-36.573 0-20.197-16.374-36.57-36.571-36.57zM164.571 731.43c-20.198 0-36.571 16.373-36.571 36.571s16.373 36.57 36.571 36.57c20.198 0 36.571-16.372 36.571-36.57 0-20.198-16.373-36.571-36.571-36.571zM859.429 731.43h-585.143c-20.198 0-36.571 16.373-36.571 36.571s16.373 36.57 36.571 36.57h585.143c20.197 0 36.571-16.372 36.571-36.57s-16.374-36.571-36.571-36.571z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pcduanbizhixiazaicishutubiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M363.312397 722.378742c0.111604-0.230374 0.147439-0.019454 0.259043-0.383957-0.199658-0.704433-0.320476-0.614331-0.462796-0.844706l0.203753 1.228663M512.680884 3.612267c-280.875294 0-508.585342 227.711072-508.585343 508.591486 0 280.878366 227.711072 508.589438 508.585343 508.589438 280.880413 0 508.596605-227.711072 508.596605-508.589438 0-280.880413-227.716192-508.591486-508.596605-508.591486m0.004095 966.323516c-252.798311 0-457.729982-204.923481-457.729982-457.73203 0-252.802406 204.931672-457.73203 457.729982-457.73203 252.800358 0 457.73203 204.929624 457.73203 457.73203 0 252.807526-204.929624 457.73203-457.73203 457.73203m-88.335706-301.232182" fill="" ></path>' +
    '' +
    '<path d="M357.708673 252.220839h62.712976v522.604381h-62.712976V252.220839zM608.558529 252.220839h62.712977v522.604381h-62.712977V252.220839z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinledianzan" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M 751.884 56.832 c -174.08 0 -238.435 162.736 -238.435 162.736 S 440.18 56.832 275.014 56.832 C 94.6807 56.832 0.004093 216.098 0.004093 375.131 c 0 264.131 513.447 592.038 513.447 592.038 s 510.551 -324.665 510.551 -592.038 C 1024 212.858 926.198 56.832 751.884 56.832 Z" fill="#d81e06" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinledianzan1" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M664.685 222.284c-110.802 0-151.763 103.582-151.763 103.582s-46.637-103.582-151.763-103.582c-114.783 0-175.043 101.373-175.043 202.598 0 168.121 326.809 376.833 326.809 376.833s324.967-206.649 324.967-376.833c-0.002-103.286-62.251-202.597-173.203-202.597z" fill="#d81e06" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinlebofang-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M889.498624 352.503808c-20.617216-48.744448-50.127872-92.517376-87.712768-130.102272s-81.357824-67.095552-130.102272-87.713792c-50.477056-21.3504-104.085504-32.175104-159.3344-32.175104s-108.857344 10.824704-159.333376 32.175104c-48.745472 20.617216-92.517376 50.128896-130.102272 87.713792s-67.095552 81.357824-87.713792 130.102272c-21.3504 50.476032-32.175104 104.08448-32.175104 159.3344 0 55.248896 10.824704 108.857344 32.175104 159.3344 20.617216 48.744448 50.128896 92.517376 87.713792 130.102272s81.357824 67.095552 130.102272 87.712768c50.476032 21.3504 104.08448 32.175104 159.333376 32.175104s108.857344-10.824704 159.3344-32.175104c48.744448-20.617216 92.517376-50.127872 130.102272-87.712768s67.095552-81.357824 87.712768-130.102272c21.3504-50.477056 32.175104-104.085504 32.175104-159.3344 0-55.24992-10.824704-108.857344-32.175104-159.3344zM772.82304 772.31104c-69.574656 69.574656-162.079744 107.890688-260.473856 107.890688S321.451008 841.885696 251.876352 772.31104 143.98464 610.23232 143.98464 511.838208s38.316032-190.898176 107.891712-260.473856S413.956096 143.47264 512.349184 143.47264s190.898176 38.316032 260.473856 107.891712 107.890688 162.079744 107.890688 260.473856S842.397696 702.736384 772.82304 772.31104z" fill="#CBAD4B" ></path>' +
    '' +
    '<path d="M667.55072 465.176576l-27.30496-18.212864-148.409344-92.62592-32.45056-18.376704-0.091136 0.0512a47.908864 47.908864 0 0 0-14.24384-2.16576c-26.417152 0-47.908864 21.491712-47.908864 47.908864 0 1.303552 0.054272 2.619392 0.159744 3.922944V618.01472l-0.11776 10.978304v0.661504c5.428224 20.586496 25.808896 35.448832 48.090112 35.448832 9.732096 0 19.088384-2.904064 27.092992-8.402944L667.638784 533.16608c8.846336-8.869888 13.910016-20.901888 13.910016-33.765376 0-12.909568-5.098496-24.977408-13.99808-33.855488v-0.36864z m-27.475968 44.427264l-8.382464 5.313536v0.094208L453.019648 626.527232l-0.826368 0.54784a11.969536 11.969536 0 0 1-6.919168 2.187264 11.99616 11.99616 0 0 1-12.054528-11.712512l-0.078848-2.141184V383.940608l-0.095232-0.917504a12.44672 12.44672 0 0 1-0.064512-1.266688c0-6.654976 5.413888-12.068864 12.068864-12.068864 2.19648 0 4.260864 0.564224 6.136832 1.677312l4.851712 2.879488 175.67232 109.641728 8.347648 5.2992c3.53792 2.235392 5.650432 6.053888 5.650432 10.215424 0 4.15232-2.105344 7.96672-5.634048 10.203136z" fill="#CBAD4B" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangyishou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.715 4.489C230.546 4.489 2.62 232.415 2.62 513.585c0 281.156 227.926 509.094 509.095 509.094 281.162 0 509.095-227.938 509.095-509.094 0-281.17-227.933-509.096-509.095-509.096z m-0.284 962.535c-251.048 0-454.56-203.519-454.56-454.566 0-251.036 203.512-454.554 454.56-454.554S965.99 261.423 965.99 512.458c0 251.047-203.511 454.566-454.559 454.566z m155.544-692.583c-9.142-0.049-17.19 4.477-22.013 11.423l-248.703 204.24a26.27 26.27 0 0 0-5.878 4.469c-10.281 10.393-10.281 27.231 0 37.611l0.464 0.377c0.041 0.041 0.078 0.085 0.119 0.126a26.8 26.8 0 0 0 4.697 3.778L645.809 739.3c4.934 6.635 12.816 10.96 21.677 10.999 0.539 0.003 1.073-0.014 1.604-0.041a26.082 26.082 0 0 0 17.872-7.769c0.429-0.433 0.832-0.882 1.225-1.337 3.832-4.329 6.232-9.908 6.448-16.115 0.033-0.657 0.036-1.315 0.022-1.973l-0.226-421.591c-0.078-14.847-12.606-26.953-27.456-27.032zM451.557 513.995l188.697-154.957 0.17 308.093-188.867-153.136z m-96.826-211.872c-14.854-0.08-26.833 11.906-26.754 26.754l0.232 367.439c0.073 14.861 12.178 26.966 27.032 27.031 14.849 0.08 27.251-11.468 27.179-26.316l-0.108-171.444-0.124-196.431c-0.079-14.848-12.608-26.954-27.457-27.033z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianzandian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M935.441067 312.6784c-22.545067-110.6432-119.176533-190.941867-229.717333-190.941867-13.943467 0-28.023467 1.297067-41.847467 3.874133-62.2592 11.6224-111.5136 39.850667-150.050133 86.0672-56.814933-67.140267-131.9936-96.648533-222.3616-87.1424C201.472 133.956267 119.227733 207.035733 95.914667 298.325333c-15.735467 61.576533-9.0112 125.064533 20.548267 194.0992 27.972267 65.297067 70.109867 123.2384 128.853333 177.152 45.755733 42.001067 93.661867 82.568533 139.997867 121.8048l27.409067 23.227733c20.0192 17.015467 40.8576 33.518933 61.013333 49.476267l2.679467 2.116267c8.3968 6.656 16.810667 13.312 25.224533 20.0704l12.373333 9.9328 32.546133-26.026667c14.336-11.434667 28.501333-22.749867 42.581333-34.167467l25.856-20.923733c62.378667-50.3808 126.8736-102.5024 184.644267-161.774933 53.7088-55.108267 89.890133-107.588267 113.851733-165.205333C939.537067 425.472 946.7392 368.093867 935.441067 312.6784z" fill="#bdbdbd" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianzandian1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M935.441067 312.6784c-22.545067-110.6432-119.176533-190.941867-229.717333-190.941867-13.943467 0-28.023467 1.297067-41.847467 3.874133-62.2592 11.6224-111.5136 39.850667-150.050133 86.0672-56.814933-67.140267-131.9936-96.648533-222.3616-87.1424C201.472 133.956267 119.227733 207.035733 95.914667 298.325333c-15.735467 61.576533-9.0112 125.064533 20.548267 194.0992 27.972267 65.297067 70.109867 123.2384 128.853333 177.152 45.755733 42.001067 93.661867 82.568533 139.997867 121.8048l27.409067 23.227733c20.0192 17.015467 40.8576 33.518933 61.013333 49.476267l2.679467 2.116267c8.3968 6.656 16.810667 13.312 25.224533 20.0704l12.373333 9.9328 32.546133-26.026667c14.336-11.434667 28.501333-22.749867 42.581333-34.167467l25.856-20.923733c62.378667-50.3808 126.8736-102.5024 184.644267-161.774933 53.7088-55.108267 89.890133-107.588267 113.851733-165.205333C939.537067 425.472 946.7392 368.093867 935.441067 312.6784z" fill="#bdbdbd" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M877.567 159.566c-94.206-94.206-219.344-145.994-352.434-145.994s-258.228 51.787-352.434 145.994c-94.206 94.206-145.994 219.344-145.994 352.434s51.787 258.228 145.994 352.434 219.344 145.994 352.434 145.994c133.091 0 258.228-51.787 352.434-145.994s145.994-219.344 145.994-352.434-51.787-258.228-145.994-352.434zM525.132 992.754c-265.121 0-480.754-215.633-480.754-480.754s215.633-480.754 480.754-480.754 480.754 215.633 480.754 480.754-215.633 480.754-480.754 480.754z"  ></path>' +
    '' +
    '<path d="M525.132 62.178c-248.508 0-449.822 201.315-449.822 449.822s201.315 449.822 449.822 449.822 449.822-201.315 449.822-449.822-201.315-449.822-449.822-449.822zM453.55 664.356c0 14.493-11.843 26.511-26.511 26.511-14.493 0-26.511-11.843-26.511-26.511v-304.711c0-14.493 11.843-26.511 26.511-26.511 14.493 0 26.511 11.843 26.511 26.511v304.711zM649.74 664.356c0 14.493-11.843 26.511-26.511 26.511-14.493 0-26.511-11.843-26.511-26.511v-304.711c0-14.493 11.843-26.511 26.511-26.511 14.493 0 26.511 11.843 26.511 26.511v304.711z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang1-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M547.211 137.101c6.213 0 14.499 6.213 14.499 14.499l10.356 80.779 2.071 18.641 16.57 6.213 53.852 22.784 16.57 6.213 14.499-10.356 64.209-49.711c2.071-2.071 6.213-2.071 10.356-2.071s8.285 2.071 10.356 4.143l41.425 41.425c4.143 4.143 6.213 14.499 2.071 20.714l-47.638 64.209-10.356 12.428 6.213 16.57 22.784 53.852 6.213 16.57 18.641 2.071 78.708 10.356c8.285 0 14.499 8.285 14.499 14.499v57.996c0 6.213-6.213 14.499-14.499 14.499l-78.708 10.356-18.641 2.071-6.213 16.57-22.784 53.852-6.213 16.57 10.356 14.499 47.638 64.209c4.143 6.213 4.143 14.499-2.071 20.714l-41.425 41.425c-2.071 2.071-6.213 4.143-10.356 4.143s-6.213-2.071-10.356-2.071l-62.138-43.497-14.499-10.356-16.57 6.213-53.852 22.784-16.57 6.213-2.071 18.641-10.356 78.708c0 8.285-8.285 14.499-14.499 14.499h-57.996c-6.213 0-14.499-6.213-14.499-14.499l-10.356-78.708-2.071-18.641-16.57-6.213-76.637-28.997-14.499 10.356-64.209 49.711c-2.071 2.071-6.213 2.071-10.356 2.071s-8.285-2.071-10.356-4.143l-41.425-41.425c-4.143-4.143-6.213-14.499-2.071-20.714l47.638-64.209 10.356-14.499-6.213-16.57-22.784-53.852-6.213-16.57-18.641-2.071-78.708-10.356c-8.285 0-14.499-8.285-14.499-14.499v-57.996c0-6.213 6.213-14.499 14.499-14.499l80.779-10.356 18.641-2.071 6.213-16.57 22.784-53.852 6.213-16.57-10.356-14.499-49.711-64.209c-4.143-6.213-4.143-14.499 2.071-20.714l41.425-41.425c2.071-2.071 6.213-4.143 10.356-4.143s6.213 2.071 10.356 2.071l64.209 47.638 14.499 10.356 16.57-6.213 53.852-22.784 16.57-6.213 2.071-18.641 10.356-80.779c0-8.285 8.285-14.499 14.499-14.499h62.138M547.211 103.963h-57.996c-22.784 0-43.497 18.641-47.638 41.425l-12.428 80.779-53.852 22.784-64.209-47.638c-8.285-6.213-18.641-10.356-28.997-10.356-12.428 0-24.854 4.143-33.14 14.499l-41.425 41.425c-16.57 16.57-18.641 43.497-4.143 64.209l49.711 64.209-22.784 53.852-80.779 10.356c-22.784 4.143-41.425 24.854-41.425 47.638v57.996c0 22.784 18.641 43.497 41.425 47.638l78.708 10.356 22.784 53.852-47.638 62.138c-14.499 18.641-12.428 47.638 4.143 64.209l41.425 41.425c8.285 8.285 20.714 14.499 33.14 14.499 10.356 0 20.714-4.143 28.997-10.356l64.209-47.638 53.852 20.714 10.356 78.708c4.143 22.784 24.854 41.425 47.638 41.425h57.996c22.784 0 43.497-18.641 47.638-41.425l10.356-78.708 53.852-22.784 64.209 47.638c8.285 6.213 18.641 10.356 28.997 10.356 12.428 0 24.854-4.143 33.14-14.499l41.425-41.425c16.57-16.57 18.641-43.497 4.143-64.209l-47.638-64.209 22.784-53.852 78.708-10.356c22.784-4.143 41.425-24.854 41.425-47.638v-57.996c0-22.784-18.641-43.497-41.425-47.638l-78.708-10.356-22.784-53.852 47.638-64.209c14.499-18.641 12.428-47.638-4.143-64.209l-41.425-41.425c-8.285-8.285-20.714-14.499-33.14-14.499-10.356 0-20.714 4.143-28.997 10.356l-64.209 49.711-53.852-22.784-8.285-76.637c-4.143-24.854-24.854-43.497-47.638-43.497z" fill="#333333" ></path>' +
    '' +
    '<path d="M381.51 514.071c0 0 0 0 0 0 0 75.499 61.204 136.703 136.703 136.703 75.499 0 136.703-61.204 136.703-136.703 0 0 0 0 0 0 0 0 0 0 0 0 0-75.499-61.204-136.703-136.703-136.703-75.499 0-136.703 61.204-136.703 136.703s0 0 0 0z" fill="#59B6D7" ></path>' +
    '' +
    '<path d="M518.213 391.867c66.281 0 120.133 53.852 120.133 120.133s-53.852 120.133-120.133 120.133-120.133-53.852-120.133-120.133 51.781-120.133 120.133-120.133M518.213 360.797c-84.922 0-153.274 68.352-153.274 153.274s68.352 153.274 153.274 153.274 153.274-68.352 153.274-153.274-70.422-153.274-153.274-153.274z" fill="#333333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)