var REFRESH_TIME = 1000; //milisec.
var MAP_ZOOM = 12;
var PATH_COLOR = '#FF0000';
var PATH_OPACITY = 1.0;
var PATH_WEIGHT = 3;

var data = {
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : -32.9503288,
               "lng" : -58.37958150000001
            },
            "southwest" : {
               "lat" : -34.603653,
               "lng" : -60.66655739999999
            }
         },
         "copyrights" : "Datos de mapa ©2014 Google, Inav/Geosistemas SRL",
         "legs" : [
            {
               "distance" : {
                  "text" : "298 km",
                  "value" : 297788
               },
               "duration" : {
                  "text" : "3h 8 min",
                  "value" : 11282
               },
               "end_address" : "Rosario, Santa Fe, Argentina",
               "end_location" : {
                  "lat" : -32.9507312,
                  "lng" : -60.66655739999999
               },
               "start_address" : "Buenos Aires, Argentina",
               "start_location" : {
                  "lat" : -34.603623,
                  "lng" : -58.38160560000001
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "59 m",
                        "value" : 59
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : -34.603693,
                        "lng" : -58.38097379999999
                     },
                     "html_instructions" : "Dirígete hacia el \u003cb\u003eeste\u003c/b\u003e en \u003cb\u003eAv Corrientes\u003c/b\u003e hacia \u003cb\u003eAcceso A Pellegrini\u003c/b\u003e",
                     "polyline" : {
                        "points" : "roerE`ticJ?K@_@@U@KDI@g@"
                     },
                     "start_location" : {
                        "lat" : -34.603623,
                        "lng" : -58.38160560000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0,1 km",
                        "value" : 128
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : -34.6025471,
                        "lng" : -58.3810268
                     },
                     "html_instructions" : "Gira a la \u003cb\u003eizquierda\u003c/b\u003e hacia \u003cb\u003eCarlos Pellegrini\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "`perE`picJyBDiBD"
                     },
                     "start_location" : {
                        "lat" : -34.603693,
                        "lng" : -58.38097379999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "63 m",
                        "value" : 63
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : -34.6025543,
                        "lng" : -58.3817101
                     },
                     "html_instructions" : "Gira a la \u003cb\u003eizquierda\u003c/b\u003e hacia \u003cb\u003eLavalle\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "|herElpicJ?fC"
                     },
                     "start_location" : {
                        "lat" : -34.6025471,
                        "lng" : -58.3810268
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1,2 km",
                        "value" : 1222
                     },
                     "duration" : {
                        "text" : "2 min",
                        "value" : 125
                     },
                     "end_location" : {
                        "lat" : -34.5915871,
                        "lng" : -58.38198849999999
                     },
                     "html_instructions" : "Toma la 1.ª a la \u003cb\u003ederecha\u003c/b\u003e hacia \u003cb\u003eAv 9 de Julio\u003c/b\u003e",
                     "polyline" : {
                        "points" : "|herEtticJiFJSBiEDaA?qDIgFPeFNiG`@kFCwGDwFY"
                     },
                     "start_location" : {
                        "lat" : -34.6025543,
                        "lng" : -58.3817101
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3,4 km",
                        "value" : 3369
                     },
                     "duration" : {
                        "text" : "3 min",
                        "value" : 198
                     },
                     "end_location" : {
                        "lat" : -34.5699272,
                        "lng" : -58.3992272
                     },
                     "html_instructions" : "Continúa por \u003cb\u003ePres. Arturo Illia\u003c/b\u003e.\u003cdiv style=\"font-size:0.9em\"\u003eCarretera con peajes\u003c/div\u003e",
                     "polyline" : {
                        "points" : "ldcrElvicJcDa@mASgBWwCy@{NqFaAg@_Aa@m@S{@UoAEw@Fs@Hw@@_Bp@eBfBgAxAeC|FuCrG}A~DeB~EuBzFgB|Ds@nAw@tAu@~@oBfCcBtCk@t@iCpBwAz@qA~@aAz@_BnBk@fA_@jAa@lC]hBGvA]|B{@jCuAlDaAlB[r@s@n@cAx@gAd@kA\\uAD]@k@Ds@H]F[F]N"
                     },
                     "start_location" : {
                        "lat" : -34.5915871,
                        "lng" : -58.38198849999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3,6 km",
                        "value" : 3594
                     },
                     "duration" : {
                        "text" : "5 min",
                        "value" : 283
                     },
                     "end_location" : {
                        "lat" : -34.5508461,
                        "lng" : -58.4292183
                     },
                     "html_instructions" : "Gira ligeramente a la \u003cb\u003eizquierda\u003c/b\u003e hacia \u003cb\u003eAv Rafael Obligado Costanera\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "`}~qEdbmcJsBrDiAzB{DvEi@n@iAz@_DjBoA~@aJzGsBzA_BhAaBjA_BnA}BtBsBhBm@h@_EfDwBnB_BjB{AnBy@dAaCjDq@hAk@fAk@bAcAlBkBfEqAzCg@~Aq@xBe@dBc@lBSjA]nBuCtQ_ArGcA~GYzAs@tCuArFeAtDcAjD}@bCYn@_AfB"
                     },
                     "start_location" : {
                        "lat" : -34.5699272,
                        "lng" : -58.3992272
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0,2 km",
                        "value" : 154
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : -34.5510674,
                        "lng" : -58.43088150000001
                     },
                     "html_instructions" : "Gira ligeramente a la \u003cb\u003eizquierda\u003c/b\u003e hacia \u003cb\u003eLa Pampa\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "xe{qEr}rcJJ|BTlCH~@"
                     },
                     "start_location" : {
                        "lat" : -34.5508461,
                        "lng" : -58.4292183
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3,7 km",
                        "value" : 3747
                     },
                     "duration" : {
                        "text" : "3 min",
                        "value" : 184
                     },
                     "end_location" : {
                        "lat" : -34.5346069,
                        "lng" : -58.4653206
                     },
                     "html_instructions" : "Continúa por \u003cb\u003eInt. Cantilo\u003c/b\u003e.",
                     "polyline" : {
                        "points" : "dg{qE~gscJK|@Cd@Ch@ARARARCRCRCLcAbIkAjCWf@oArCq@vAM\\sBpE_ChF}GdOmC`GuDzHaD|G}AlDi@hAuCtFqCvFIP{DxI}ApDeAhDi@dCa@~Bu@vDOd@sA`EcBrEoA|C{AjCq@dAo@t@mA~AeBnBeC|BoAhAo@p@i@v@k@pA_@dAQbAMx@Ep@CtBDzA\\hC`@rA"
                     },
                     "start_location" : {
                        "lat" : -34.5510674,
                        "lng" : -58.43088150000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2,7 km",
                        "value" : 2670
                     },
                     "duration" : {
                        "text" : "2 min",
                        "value" : 127
                     },
                     "end_location" : {
                        "lat" : -34.5457611,
                        "lng" : -58.4911118
                     },
                     "html_instructions" : "Continúa por \u003cb\u003eGral Paz\u003c/b\u003e.\u003cdiv style=\"font-size:0.9em\"\u003eCarretera con peajes\u003c/div\u003e",
                     "polyline" : {
                        "points" : "h`xqEf_zcJr@pCl@fCVhAj@pBh@jBPl@j@~AzAbEJ\\bDdK|@zC`BtF\\lAlBhGZ`AdA|CrEtKhBjF|C|ItBnG`FvO\\bAtCzIvDhKlBpF"
                     },
                     "start_location" : {
                        "lat" : -34.5346069,
                        "lng" : -58.4653206
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0,5 km",
                        "value" : 466
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : -34.5445938,
                        "lng" : -58.4952584
                     },
                     "html_instructions" : "Mantente a la \u003cb\u003ederecha\u003c/b\u003e para continuar por \u003cb\u003eAcceso A Panamericana\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "~ezqEl`_dJ|@fEHp@H`ABb@?v@S`Bk@tA_BlB_D~B"
                     },
                     "start_location" : {
                        "lat" : -34.5457611,
                        "lng" : -58.4911118
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "19,3 km",
                        "value" : 19337
                     },
                     "duration" : {
                        "text" : "12 min",
                        "value" : 747
                     },
                     "end_location" : {
                        "lat" : -34.4718857,
                        "lng" : -58.6753731
                     },
                     "html_instructions" : "Continúa por \u003cb\u003eAu. Pascual Palazzo\u003c/b\u003e.",
                     "polyline" : {
                        "points" : "t~yqEjz_dJwBlA_DhB{BjAu@`@_EnDoNdMA@yf@lZgG~DyOdKyDdCsGbEgNxIgJ`H}E`E_LxKEDiIhIiHnIuEtGaC`DiEjFW^qG~KmD|GIPeI|SkV~n@e@lA{GxPgHtQ}F`PyAfEcIxUs@xBg@dAc@dAq@lAmCnEoApBcBhCQVaC|DqAfCs@fBUr@_@fAMf@eBxFg@rBmChKuApFg@`BgEfOoFdTcDfS]dEw@nJWjDaBrd@_AjWE~@_AjTOzCMfD[~H}@|UUjISnG_@~HQlSK~BCb@IpDQfDm@rKq@bKiB~UgBzVkA~OqAhQcBbUsFxh@qCrUoDfZsAnKg@~CuCpReArGaHhc@gAzG}AlJsEjWcAnFaCfMiCfNkD~QiFzX"
                     },
                     "start_location" : {
                        "lat" : -34.5445938,
                        "lng" : -58.4952584
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "255 km",
                        "value" : 255329
                     },
                     "duration" : {
                        "text" : "2h 27 min",
                        "value" : 8797
                     },
                     "end_location" : {
                        "lat" : -33.0096054,
                        "lng" : -60.66454699999999
                     },
                     "html_instructions" : "Continúa por \u003cb\u003eAu. RN 9\u003c/b\u003e.\u003cdiv style=\"font-size:0.9em\"\u003eCarretera parcialmente con peajes\u003c/div\u003e",
                     "polyline" : {
                        "points" : "hxkqE``ceJu@fEsBbHkA~D}DxJkArB}@|AqIhL{LvL_DtBwB~A{ErD{CvB{CvBi@Z]Pc@Lo@Rc@Ra@Ra@TaAn@s@b@w@r@STUZSZi@j@a@h@QTUVg@^wBxA_D|BqDhCiDbCwF`EiCjBmBvAoDfCwCtB_CbBqEbDyEjDUP}DrCyDnC}@l@gAz@{AbAsF|DgEzCoA|@iAx@wCrByErD_CnB}BtB}B`CyAbBsCfDeDbE}CvDeApAq@v@iAnAg@h@ONi@d@a@Zm@\\a@Pe@Tm@Ts@RmAXwARcBN_CT{APm@Jy@Pq@NgAXu@Vk@RkAh@w@b@gAj@q@b@cCdB_C`BuCrBsEdDuDhCaBlA{@l@wCtBaAr@mBtAoFxDoAz@wCtBmDfC}ElDiGlEkBrAiBtAiGtEkIzGq@l@oFhEsFfEcGjEaFjDe@\\oD`CcEjCaG~DeFrDkGpE_FtDmEdDyB`BkCdByDjCcDzBmDlCs@d@oA|@qE~CoClB{DfCyFtDiErC{CrBsFxDkGpE{EjDoFxDq@d@{B`BqE`DcD`CaEtCsIjGm@h@g@b@q@t@}@dAk@t@s@jAcB~C}@bCoAfEkA~DyAdFcBdGkA|D_AdDsAhFo@fDcA~Fs@xEaAtG_@bCeAzGiAxHi@`DOt@Kl@Qx@}@xDW|@Wz@i@~AkAjDmAvCuBlFyAtD{DpJ{BxFyCpHs@nBa@~@Yp@{AxD}EdLqBfFg@hAoCtGcCfG]|@e@jAYt@]r@i@lAc@z@e@r@c@|@g@t@i@v@k@x@o@z@gBtB{AzA]^cAjAc@`@kB`BqDrCi@h@e@b@c@f@s@v@sBhCwC|DoE~FcCxCuAhBaDxDqDnEyBdC{A`ByDfEoClCSRoFbFeE|DyEpEoAjAeChCuCbCeAbAaA`A{@|@s@v@q@z@g@n@e@j@e@t@a@j@sAzBa@r@g@bAo@rA_AtBiAfC{CnH_DlIeC`H_D|IoCbI}AvE}CjI{D~KaFtNuAxE}@fDuAtFyAfF{C~K}DbNqCfJmC|JiDrMsDpNaCfJ{CjL_BlGmChKqCxKsB~Hc@tAk@|Ae@lAu@dBc@|@m@lA_@j@k@`A_BxBs@~@aAfAoAlAoAfAwB|A}KzHmHdFgGfE{HnFqFtD{F`EoFpDeFnDaEpC{B|AgCfB}AhAqBrAaBhAgBlAk@`@}A~@gB`AqFrCoCfBmBjAsBlA_EhCoAz@mAv@w@d@}@l@uAz@y@f@iAt@eDvBeElCoErCqD`C}CpBuD`C{@h@y@b@cAj@_A`@MFwAl@{DvA}Bx@{Bz@gEzAeBn@{DtAqFlByEbBi@RiFjBiE|AkC~@}ChA}DrAsFrByEbBeHhCqFnBsFlBsI~CcJbDkLbEiGxBqJhDuFpBoHjCeExAcDlAw@XkHhCgEzA_@JmAZcB\\kANgBRuAL{@FiBFiGFkGBeMPcAFw@JsBLiBZgD|@_E`ByBrAyD`CmBnAq@b@aEjCuDdCyCnBeC~AkCdBoD~BmDzBqE`DeGzDyGtE}ErDuInF_}AvaAgN|IaN|I{MvImMnI{KfH_PhKiNbJ_@VmKxGq@b@eJbGs@d@sJlGaHvEeCxBwBjCeClEgBpEcBzHc@|FCjBGfD[nMQzJG|BKx@OfAeAhEeB|EYt@_D~HuFnN}@hCe@nAy@zCu@nEMlAIz@W`FSjHSbCYrC{@dEaAnDsAjDyCbIcE~KaEpK_CjGeAjCkGtP{JhXaDjImDzIaC|GmChHgBzEiCzGaCpGeCvG}CjIkB`F{BbGgDdJcCpG_DlIkElLwBvFQd@Yl@kBhDkExGsAxB}BjD}F~Io@dAiHjLmJ~NkJbOiClFwAhDs@zBoD`LmJxZcGbTGReGnS[dAoBnGa@rAcElMoA|Dm@lBqBlGwEhOoAzDqD~KcGxQgHpU}Jd[s]vgAmI|WmXj{@_f@|nBuJt`@ixAd_GuJr`@eUt~@_ZdlAy^zyAiGxVwCxLwG|WyG~WkIt\\gPlm@{In_@eIp\\qCtLyAtHyFzc@yHfk@yD`[}Kt{@qLh~@ge@xqDm@zCkCtK_D|JuDbHgEdGuIhJuOtPeJxJeQbR_`@`b@ce@ng@mc@re@iRjSwEfFwG~FmG`EaJxE{OnIa\\`Q{o@d]qFbDA?iMtJ{WrS_pAfdAqX~T{FhEeFvDoh@d^cFhDoSjN_XxQo]xUoS`NmSzMuJnG}BxB}AxAm@n@sAzAyD`F_a@|h@gTxYwLlOmDnEmBdCgCxD{e@pn@mB`D{AnC}Uli@qf@zhAIPqEjKaJdPuAhCeHtMy\\nk@kcAzeByUdc@gN`XgYfj@uDjHyQ|]oi@~dAcXbh@wY`k@g`@tu@qDvG{GhMqHjNqOnU}Zde@kW|^{Vj^sCbE}e@zp@o{@blAqEhGuYxb@iM~RyH|N_z@vgBuQv\\}RrZqx@~dAkLlOyGtIyBrCmHhJoHlJsS|W}DvFkAxB{AtDyAlE}@lDkAdGo@lGg@lIk@lMOdKc@fZk@t_@SrLK|HYbFeAvI}CpSeKhq@_Lzs@eRznAKj@kCjQ[xBgCxSgAjIgAlIc@nCoBzLMv@cK|o@kGt`@_B~I_D|NgA~FkApHaCfOcHfd@aGj_@y@lE}@xDyJj]_Pnk@{Ip[m@zBiDzKg@nAc@dAeEbIwCtFmXfg@}ArCe[hf@y[ng@_i@ny@_PxVwEnHqApByDbG_D~Ewi@vz@}CjFkB~DA@iAxCg@dBi@lCcEbZyCbTsE~\\_BrLeDvTwAtOkEhf@aCr\\q@xGi@hE}Nlv@}BpLyCxOiBlJqA~GaEnTsRp~@oRrt@}]`sAsDhN_CvFkDdI}GxJkkFlxHa`@xj@gMzQeMjQqOjTgVrYwHbJmsBbdCeE`FaYx\\id@ti@s^dc@cXr[a]fa@mW`[gUjXaIxJgMvOiInKwMhQ_QfUakAr|AmA~AuIlKiBzBuKzMyGfI{MrQqZha@}BzCeF|FwGrHqEhFyK~KwChDa`@nf@oSpWCBaRzU}Xz]i^vd@mYl^uL|NoAzAkEzDuB|AcAp@eE`CkGpCuBn@oA^mKdCeDn@}b@jIez@fP_iA`Q{q@zJ{JvA}n@jKyCr@eBd@qDtAaBv@cElCuNtJkAz@o]lV}IzGoOvLkXfS}DfBcFjBaRvFsGnBkF~A_OpEkJvCeBp@gAh@iBbA_C`B_CfB_ChCiBtBwD~FgW`b@{M~TqGnKiGjKwkA|nBwSf]sDdGsN`U{DfGwW|b@}`@dn@oWt_@kUv\\gJhN}FdImGjJetBlzCaX`a@eDhGob@x|@iJ|QaPvYoGlL_NvUmKdRg\\fg@kSfZadAd{AoF|LukAj~DwA~DmD`ImNvTqAlBwPxVaj@tx@{V|^aPzUqH|Kic@no@mg@du@cOxTyj@ly@up@jaAgNfTgLpQ{w@brAqUz_@ab@fr@mXpc@gHjLuDfGwDfFwMdNuXlY{FbGuF~FgAjAki@pj@gjAnlAmQrR_Y~]{\\`c@yD~EmJ|L[\\_I|JotAhfBo|AbpBo~AjrBuRxVi^~d@qJxLuD|EcPtSKLsKdN{RzVkG~HmT~XeKxMcLzN_W~[kHlJcBtB}JhMeC|CgOvRGHcBvBaAlAsAbBqDtDoAhAwAnAqAbA_C`BsKrHiFpDEB{IhGeIrF{DpC}GxEkOpK_QrLmAx@qh@r^mQ|Ly@l@wKrHi@^yDlCuBvAiH~Eo@ZsAt@oB|@SHyCdA_Dx@eCf@_C\\qBTS@sBNsELcHJqLR_UZ{MRwGHkLPcBDgEFyBBaY`@oT\\uA@eCFwCLaHv@iADoADaDDsE@}EBmFD_BH}AB"
                     },
                     "start_location" : {
                        "lat" : -34.4718857,
                        "lng" : -58.6753731
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6,2 km",
                        "value" : 6228
                     },
                     "duration" : {
                        "text" : "10 min",
                        "value" : 585
                     },
                     "end_location" : {
                        "lat" : -32.9546356,
                        "lng" : -60.6561127
                     },
                     "html_instructions" : "En la rotonda, toma la \u003cb\u003eprimera\u003c/b\u003e salida en dirección \u003cb\u003eBv. Oroño\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePasa una rotonda\u003c/div\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "`enhElpgqJGKMCW@SFGD{ENuDDeEFeEHwDDgEHwEJmDN}DFmCBqB@aBFoBD_ABkAAmBG}BA{DByDH_FJsEFi@@i@Cm@S[Ik@?O@M?qAGwAKYAQEgF}@_BU_@GeBYwEs@gC_@oAQSEgF{@QCsAScBYWEcFy@SEaAOoASaAOeFw@{Eu@uB]iBYgCa@aBWaFy@eF{@sB]{AU}@OgAQoB[kB[sB[yB]wB]kDk@s@KcFy@uASoC_@oF_ASIsAU{AYyAU{AWoBc@qBa@u@Ma@G{Dc@gDc@}AQsCk@{@QoCc@aBU{AY{AYAMGQKIMEMAODMHEP_Da@"
                     },
                     "start_location" : {
                        "lat" : -33.0096054,
                        "lng" : -60.66454699999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1,0 km",
                        "value" : 993
                     },
                     "duration" : {
                        "text" : "2 min",
                        "value" : 99
                     },
                     "end_location" : {
                        "lat" : -32.9527779,
                        "lng" : -60.6656189
                     },
                     "html_instructions" : "En la rotonda, toma la \u003cb\u003etercera\u003c/b\u003e salida en dirección \u003cb\u003eAv Pellegrini\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "nmchEt{eqJEYQY_@@U^L`@ZNi@bFs@zGo@jGWlCW~Bo@pGc@lEKz@q@vG"
                     },
                     "start_location" : {
                        "lat" : -32.9546356,
                        "lng" : -60.6561127
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0,2 km",
                        "value" : 250
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : -32.9505806,
                        "lng" : -60.66507339999999
                     },
                     "html_instructions" : "Gira a la \u003cb\u003ederecha\u003c/b\u003e hacia \u003cb\u003eRicchieri\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "zachEbwgqJaDg@}@OwEu@"
                     },
                     "start_location" : {
                        "lat" : -32.9527779,
                        "lng" : -60.6656189
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0,1 km",
                        "value" : 133
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : -32.9503288,
                        "lng" : -60.6664619
                     },
                     "html_instructions" : "Gira a la \u003cb\u003eizquierda\u003c/b\u003e en la 2.ª bocacalle hacia \u003cb\u003eE. Zeballos\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "btbhEtsgqJq@tG"
                     },
                     "start_location" : {
                        "lat" : -32.9505806,
                        "lng" : -60.66507339999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "46 m",
                        "value" : 46
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : -32.9507312,
                        "lng" : -60.66655739999999
                     },
                     "html_instructions" : "Toma la 1.ª a la \u003cb\u003eizquierda\u003c/b\u003e hacia \u003cb\u003eSuipacha\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEl destino está a la izquierda.\u003c/div\u003e",
                     "polyline" : {
                        "points" : "prbhEj|gqJnAR"
                     },
                     "start_location" : {
                        "lat" : -32.9503288,
                        "lng" : -60.6664619
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "roerE`ticJDmA{Ee@?fCiFJ}EHaUVe_@HqNgCkToIwFIwCr@mD`E_Np\\iI~QuHrKuJhHmEpK_CjMgF~JmHbC{CXwFfIoMnLy`@|ZeMlLiIjLyM|[}Ldt@}GxUyAvC`@jGIlEInAwCpNgDpH_c@t_AmNxYoF`R}FrRmGdLoPxSi@dHxBjM`I~WdWdv@x`@lkAtA~I_D|IsPbKgVxSueAxp@ai@`_@y_@x`@yPbUoWlj@ui@|uAoU|p@kGhLcO|X_Z`hAqGhj@gFjtAsEj{A}IpvAuNfbB}LjbA}`@|aCuQjaAiMp]oKfO{QlPkSbOeI|DgGpGifAzv@q^nWoRlOqOpQcNlOaNlD_PzCkZ~RupAp_AeuDtkCqa@n[aGdLyIrZiNhr@}Hlc@am@t{A}Mz[{LfPwOxN}`@lg@yy@vy@cJdOy]v_AqSzl@iKd`@yd@pdBcRho@oNrQkdB~kAit@|c@ua@pWi[pL_nBfr@o~@f\\o]|Iqj@nAkQnG{O`Kwk@t_@asDt`C_hAts@s[jVmF~KgCxPy@~a@iBhMuOba@sEdQcAvSkDlSam@x_BofAntCcZbf@mc@|s@iT`q@s]|jAcp@rsBah@t`BmXj{@_f@|nB_dBz`H{`@h`B{fAtlEel@`}Bm[ltAkc@zhDyr@bqFyDpPuI`T}OnRanAtrAscBviBeP`M}ZhPqtAjt@wpCpzBu~@po@ofC`eBwvAhjBmp@|}@kdAf`Cws@toAezA`jCoh@hcAc{AlvCmiAxxBcYzd@is@beA}~BncDg`@bk@cW|b@ulAneColAr`Bmb@`j@me@|n@_IvXsCnl@oBnrAcSvwAqm@|dEyb@thCsVl~Aq_@bvA{Qxn@od@f{@aeC|zDaw@boA}CnKqSzzA}Fle@mI|cAwUbsAwOvy@cf@dtBqc@jbBkH|PitFfdIamAleBszC|pD}mExkFytCvuDkyAxjBcfAjqAmkArzA_p@bw@kSbLyVdGc~ArZ{{B|\\ybA|Pm]pSi{@|n@i^nVeYbJkj@xPwK`GaPfR_w@|pAwuBlkDaxA`{B_q@raAgmCn|Dug@beA{r@zpAuh@lz@mxAlvBesAhlEeG`OymAtiBknCf_E_yBrcD}jCxjE}MrToSlUoj@|k@stB`xBmk@rq@_o@|x@w_JhiLkpD`uEwKpL}ThPwlAdz@yvAraA}OnJsMpDc~@nCw`B`Ced@bBkUPgiAvBib@TwIq@er@{Km~@{Nuy@eN{YoEmM}Cq@^wEsAiDjb@qCrX_Fw@wEu@q@tGnAR"
         },
         "summary" : "Au. RN 9",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}