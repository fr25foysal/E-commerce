import{_ as v,r as c,o as w,h as $,w as C,d as p,f as g,t as f,a as R,c as S,b as D}from"./js/_plugin-vue_export-helper.2d9794a3.js";import{l as E}from"./js/index.c8cd2612.js";import{l as A}from"./js/index.fd0fcee8.js";import{l as L}from"./js/index.0b123ab1.js";import{a as b}from"./js/vuex.esm-bundler.8589b2dd.js";import{C as M}from"./js/Caret.42a820e0.js";import{C as V}from"./js/Index.1fd8fc42.js";import{S as B}from"./js/Information.a08d0ef0.js";import{s as h}from"./js/index.02a5ed9a.js";import{_ as P,s as F}from"./js/dynamic-import-helper.a6ecde63.js";import{_ as r}from"./js/preload-helper.b149fa8b.js";import{_ as o}from"./js/default-i18n.ab92175e.js";import"./js/client.e7a26247.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/helpers.de7566d0.js";import"./js/constants.e9426d11.js";import"./js/isArrayLikeObject.c492f682.js";import"./js/vue-router.4a2076a0.js";function I({app:e,next:_,router:d,to:n}){const i="Lite".toLowerCase()!=="pro"||!window.aioseo.license.isActive,m=n.meta.licenseFeature||n.meta.middlewareData.licenseFeature||"";return i||!e.$license.hasCoreFeature(e.$aioseo,m[0],m[1])?(_(),d.push({name:n.meta.middlewareData.routeName}).catch(()=>{})):_()}const O={components:{CoreLoader:M,CoreModal:V,SvgCircleInformation:B},data(){return{strings:{title:this.$t.__("Refreshing data",this.$td),description:this.$t.__("Loading new report data...",this.$td)}}},computed:{...b("search-statistics",["fetching"])}},x={class:"aioseo-fetching-data-title"},N={class:"aioseo-fetching-data-description"};function T(e,_,d,n,i,m){const u=c("svg-circle-information"),l=c("core-loader"),k=c("core-modal");return e.fetching?(w(),$(k,{key:0,classes:["aioseo-fetching-data"],noHeader:""},{body:C(()=>[p(u,{width:"90",height:"90"}),g("div",x,f(i.strings.title),1),g("div",N,f(i.strings.description),1),p(l,{dark:""})]),_:1})):R("",!0)}const U=v(O,[["render",T]]),H={components:{Fetching:U}},K={class:"aioseo-app"};function j(e,_,d,n,i,m){const u=c("router-view"),l=c("fetching");return w(),S("div",K,[p(u),p(l)])}const q=v(H,[["render",j]]),s="all-in-one-seo-pack",a=e=>()=>P(Object.assign({"../views/ContentRankings.vue":()=>r(()=>import("./js/ContentRankings.7587cd3f.js"),[window.__aioseoDynamicImportPreload__("js/ContentRankings.7587cd3f.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm-bundler.8589b2dd.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.ab92175e.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.2d9794a3.js"),window.__aioseoDynamicImportPreload__("js/index.fd0fcee8.js"),window.__aioseoDynamicImportPreload__("js/Caret.42a820e0.js"),window.__aioseoDynamicImportPreload__("css/Caret.82e4ef18.css"),window.__aioseoDynamicImportPreload__("css/index.2c326c41.css"),window.__aioseoDynamicImportPreload__("js/Blur.a27209d0.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Row.5e452de4.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/PostsTable.0b7bdd43.js"),window.__aioseoDynamicImportPreload__("js/WpTable.8adff4c1.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/RequiresUpdate.52f5acf2.js"),window.__aioseoDynamicImportPreload__("js/postContent.741ce73c.js"),window.__aioseoDynamicImportPreload__("js/index.02a5ed9a.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.c492f682.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.1898a430.js"),window.__aioseoDynamicImportPreload__("js/constants.e9426d11.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.1fd8fc42.js"),window.__aioseoDynamicImportPreload__("css/Index.518f837a.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.bc66cd69.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/Statistic.ed0d2590.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getAllKeys.b9d35dab.js"),window.__aioseoDynamicImportPreload__("js/_getTag.af0e2981.js"),window.__aioseoDynamicImportPreload__("js/vue.runtime.esm-bundler.4b666f07.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.ae0bcccb.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("css/Statistic.c5013059.css"),window.__aioseoDynamicImportPreload__("js/ScoreButton.e74a21e9.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.1a0736e7.js"),window.__aioseoDynamicImportPreload__("js/Slide.cd756e61.js"),window.__aioseoDynamicImportPreload__("css/Table.f1478965.css"),window.__aioseoDynamicImportPreload__("js/Index.a5b2ee90.js"),window.__aioseoDynamicImportPreload__("css/Index.05ebc121.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.52726d0b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.661fcd2c.js"),window.__aioseoDynamicImportPreload__("css/ContentRankings.f71f7fed.css")],import.meta.url),"../views/Dashboard.vue":()=>r(()=>import("./js/Dashboard.9f9bcb7b.js"),[window.__aioseoDynamicImportPreload__("js/Dashboard.9f9bcb7b.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm-bundler.8589b2dd.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.ab92175e.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.2d9794a3.js"),window.__aioseoDynamicImportPreload__("js/Blur.a27209d0.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Card.24f1a534.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.ae0bcccb.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.42a820e0.js"),window.__aioseoDynamicImportPreload__("css/Caret.82e4ef18.css"),window.__aioseoDynamicImportPreload__("js/index.fd0fcee8.js"),window.__aioseoDynamicImportPreload__("css/index.2c326c41.css"),window.__aioseoDynamicImportPreload__("js/Slide.cd756e61.js"),window.__aioseoDynamicImportPreload__("css/Card.4406a3d8.css"),window.__aioseoDynamicImportPreload__("js/Tabs.47b44ac0.js"),window.__aioseoDynamicImportPreload__("js/SaveChanges.bc66cd69.js"),window.__aioseoDynamicImportPreload__("js/TruSeoScore.76897846.js"),window.__aioseoDynamicImportPreload__("js/Information.a08d0ef0.js"),window.__aioseoDynamicImportPreload__("css/Tabs.c4ef2c33.css"),window.__aioseoDynamicImportPreload__("js/Overview.3825d08e.js"),window.__aioseoDynamicImportPreload__("js/DonutChartWithLegend.04bf1a74.js"),window.__aioseoDynamicImportPreload__("js/AnimatedNumber.1ae76b8e.js"),window.__aioseoDynamicImportPreload__("css/DonutChartWithLegend.86f54c65.css"),window.__aioseoDynamicImportPreload__("css/Overview.f1ef313f.css"),window.__aioseoDynamicImportPreload__("js/Row.5e452de4.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.78f431e3.js"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.30fdfc27.js"),window.__aioseoDynamicImportPreload__("js/Statistic.ed0d2590.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.c492f682.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getAllKeys.b9d35dab.js"),window.__aioseoDynamicImportPreload__("js/_getTag.af0e2981.js"),window.__aioseoDynamicImportPreload__("js/index.02a5ed9a.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/vue.runtime.esm-bundler.4b666f07.js"),window.__aioseoDynamicImportPreload__("css/Statistic.c5013059.css"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.2aef2744.css"),window.__aioseoDynamicImportPreload__("js/Index.a5b2ee90.js"),window.__aioseoDynamicImportPreload__("css/Index.05ebc121.css"),window.__aioseoDynamicImportPreload__("js/WpTable.8adff4c1.js"),window.__aioseoDynamicImportPreload__("js/RequiresUpdate.52f5acf2.js"),window.__aioseoDynamicImportPreload__("js/postContent.741ce73c.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.1898a430.js"),window.__aioseoDynamicImportPreload__("js/constants.e9426d11.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.1fd8fc42.js"),window.__aioseoDynamicImportPreload__("css/Index.518f837a.css"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/List.13565ae7.js"),window.__aioseoDynamicImportPreload__("js/Statistics.5c81b0a5.js"),window.__aioseoDynamicImportPreload__("js/PostsTable.0b7bdd43.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.e74a21e9.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.1a0736e7.js"),window.__aioseoDynamicImportPreload__("css/Table.f1478965.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.52726d0b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.661fcd2c.js"),window.__aioseoDynamicImportPreload__("css/Dashboard.0cdcf012.css")],import.meta.url),"../views/KeywordRankings.vue":()=>r(()=>import("./js/KeywordRankings.9bb1ca3e.js"),[window.__aioseoDynamicImportPreload__("js/KeywordRankings.9bb1ca3e.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm-bundler.8589b2dd.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.ab92175e.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.2d9794a3.js"),window.__aioseoDynamicImportPreload__("js/Blur.a27209d0.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Card.24f1a534.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.ae0bcccb.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.42a820e0.js"),window.__aioseoDynamicImportPreload__("css/Caret.82e4ef18.css"),window.__aioseoDynamicImportPreload__("js/index.fd0fcee8.js"),window.__aioseoDynamicImportPreload__("css/index.2c326c41.css"),window.__aioseoDynamicImportPreload__("js/Slide.cd756e61.js"),window.__aioseoDynamicImportPreload__("css/Card.4406a3d8.css"),window.__aioseoDynamicImportPreload__("js/Row.5e452de4.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.30fdfc27.js"),window.__aioseoDynamicImportPreload__("js/Statistic.ed0d2590.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.c492f682.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getAllKeys.b9d35dab.js"),window.__aioseoDynamicImportPreload__("js/_getTag.af0e2981.js"),window.__aioseoDynamicImportPreload__("js/index.02a5ed9a.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/vue.runtime.esm-bundler.4b666f07.js"),window.__aioseoDynamicImportPreload__("css/Statistic.c5013059.css"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.2aef2744.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.78f431e3.js"),window.__aioseoDynamicImportPreload__("js/Index.a5b2ee90.js"),window.__aioseoDynamicImportPreload__("css/Index.05ebc121.css"),window.__aioseoDynamicImportPreload__("js/WpTable.8adff4c1.js"),window.__aioseoDynamicImportPreload__("js/RequiresUpdate.52f5acf2.js"),window.__aioseoDynamicImportPreload__("js/postContent.741ce73c.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.1898a430.js"),window.__aioseoDynamicImportPreload__("js/constants.e9426d11.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.1fd8fc42.js"),window.__aioseoDynamicImportPreload__("css/Index.518f837a.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.bc66cd69.js"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/Table.1a0736e7.js"),window.__aioseoDynamicImportPreload__("css/Table.f1478965.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.661fcd2c.js"),window.__aioseoDynamicImportPreload__("css/KeywordRankings.a6ce6045.css")],import.meta.url),"../views/Main.vue":()=>r(()=>import("./js/Main.f812a42c.js"),[window.__aioseoDynamicImportPreload__("js/Main.f812a42c.js"),window.__aioseoDynamicImportPreload__("js/index.02a5ed9a.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm-bundler.8589b2dd.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.ab92175e.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.2d9794a3.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.c492f682.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/index.fd0fcee8.js"),window.__aioseoDynamicImportPreload__("js/Caret.42a820e0.js"),window.__aioseoDynamicImportPreload__("css/Caret.82e4ef18.css"),window.__aioseoDynamicImportPreload__("css/index.2c326c41.css"),window.__aioseoDynamicImportPreload__("js/DatePicker.cbb22b68.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.1898a430.js"),window.__aioseoDynamicImportPreload__("js/constants.e9426d11.js"),window.__aioseoDynamicImportPreload__("js/isUndefined.79142820.js"),window.__aioseoDynamicImportPreload__("js/_getAllKeys.b9d35dab.js"),window.__aioseoDynamicImportPreload__("js/_getTag.af0e2981.js"),window.__aioseoDynamicImportPreload__("js/debounce.14a1e55c.js"),window.__aioseoDynamicImportPreload__("js/toNumber.676c51ff.js"),window.__aioseoDynamicImportPreload__("js/isEqual.5aecc864.js"),window.__aioseoDynamicImportPreload__("js/_baseIsEqual.4bbe60b2.js"),window.__aioseoDynamicImportPreload__("css/DatePicker.acfc7346.css"),window.__aioseoDynamicImportPreload__("js/Blur.a27209d0.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Index.2ee3c273.js"),window.__aioseoDynamicImportPreload__("js/params.597cd0f5.js"),window.__aioseoDynamicImportPreload__("js/WpTable.8adff4c1.js"),window.__aioseoDynamicImportPreload__("js/RequiresUpdate.52f5acf2.js"),window.__aioseoDynamicImportPreload__("js/postContent.741ce73c.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.1fd8fc42.js"),window.__aioseoDynamicImportPreload__("css/Index.518f837a.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.bc66cd69.js"),window.__aioseoDynamicImportPreload__("js/Header.6d888e7b.js"),window.__aioseoDynamicImportPreload__("js/LicenseKeyBar.bbba4d59.js"),window.__aioseoDynamicImportPreload__("js/LogoGear.55b490aa.js"),window.__aioseoDynamicImportPreload__("css/LicenseKeyBar.9dee709b.css"),window.__aioseoDynamicImportPreload__("js/AnimatedNumber.1ae76b8e.js"),window.__aioseoDynamicImportPreload__("js/Logo.81e1a7f3.js"),window.__aioseoDynamicImportPreload__("css/Header.d0427dca.css"),window.__aioseoDynamicImportPreload__("js/Support.7b58db1c.js"),window.__aioseoDynamicImportPreload__("js/Tabs.47b44ac0.js"),window.__aioseoDynamicImportPreload__("js/TruSeoScore.76897846.js"),window.__aioseoDynamicImportPreload__("js/Information.a08d0ef0.js"),window.__aioseoDynamicImportPreload__("js/Slide.cd756e61.js"),window.__aioseoDynamicImportPreload__("css/Tabs.c4ef2c33.css"),window.__aioseoDynamicImportPreload__("js/Date.d5bb79a2.js"),window.__aioseoDynamicImportPreload__("js/Exclamation.9b2c9d16.js"),window.__aioseoDynamicImportPreload__("js/Url.c71d5763.js"),window.__aioseoDynamicImportPreload__("js/Gear.b05c5b07.js"),window.__aioseoDynamicImportPreload__("css/Index.65ce8649.css"),window.__aioseoDynamicImportPreload__("css/main.8b7a648e.css"),window.__aioseoDynamicImportPreload__("js/ContentRankings.7587cd3f.js"),window.__aioseoDynamicImportPreload__("js/Row.5e452de4.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/PostsTable.0b7bdd43.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/Statistic.ed0d2590.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/vue.runtime.esm-bundler.4b666f07.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.ae0bcccb.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("css/Statistic.c5013059.css"),window.__aioseoDynamicImportPreload__("js/ScoreButton.e74a21e9.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.1a0736e7.js"),window.__aioseoDynamicImportPreload__("css/Table.f1478965.css"),window.__aioseoDynamicImportPreload__("js/Index.a5b2ee90.js"),window.__aioseoDynamicImportPreload__("css/Index.05ebc121.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.52726d0b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.661fcd2c.js"),window.__aioseoDynamicImportPreload__("css/ContentRankings.f71f7fed.css"),window.__aioseoDynamicImportPreload__("js/Dashboard.9f9bcb7b.js"),window.__aioseoDynamicImportPreload__("js/Card.24f1a534.js"),window.__aioseoDynamicImportPreload__("css/Card.4406a3d8.css"),window.__aioseoDynamicImportPreload__("js/Overview.3825d08e.js"),window.__aioseoDynamicImportPreload__("js/DonutChartWithLegend.04bf1a74.js"),window.__aioseoDynamicImportPreload__("css/DonutChartWithLegend.86f54c65.css"),window.__aioseoDynamicImportPreload__("css/Overview.f1ef313f.css"),window.__aioseoDynamicImportPreload__("js/KeywordsGraph.78f431e3.js"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.30fdfc27.js"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.2aef2744.css"),window.__aioseoDynamicImportPreload__("css/KeywordsGraph.6b9db545.css"),window.__aioseoDynamicImportPreload__("js/List.13565ae7.js"),window.__aioseoDynamicImportPreload__("js/Statistics.5c81b0a5.js"),window.__aioseoDynamicImportPreload__("css/Dashboard.0cdcf012.css"),window.__aioseoDynamicImportPreload__("js/KeywordRankings.9bb1ca3e.js"),window.__aioseoDynamicImportPreload__("css/KeywordRankings.a6ce6045.css"),window.__aioseoDynamicImportPreload__("js/SeoStatistics.2816040d.js"),window.__aioseoDynamicImportPreload__("css/SeoStatistics.71c5ea25.css"),window.__aioseoDynamicImportPreload__("css/Main.53a894ea.css")],import.meta.url),"../views/SeoStatistics.vue":()=>r(()=>import("./js/SeoStatistics.2816040d.js"),[window.__aioseoDynamicImportPreload__("js/SeoStatistics.2816040d.js"),window.__aioseoDynamicImportPreload__("js/vuex.esm-bundler.8589b2dd.js"),window.__aioseoDynamicImportPreload__("js/default-i18n.ab92175e.js"),window.__aioseoDynamicImportPreload__("js/_commonjsHelpers.f84db168.js"),window.__aioseoDynamicImportPreload__("js/_plugin-vue_export-helper.2d9794a3.js"),window.__aioseoDynamicImportPreload__("js/Blur.a27209d0.js"),window.__aioseoDynamicImportPreload__("css/Blur.6e77dae4.css"),window.__aioseoDynamicImportPreload__("js/Card.24f1a534.js"),window.__aioseoDynamicImportPreload__("js/Tooltip.ae0bcccb.js"),window.__aioseoDynamicImportPreload__("css/Tooltip.c2302985.css"),window.__aioseoDynamicImportPreload__("js/Caret.42a820e0.js"),window.__aioseoDynamicImportPreload__("css/Caret.82e4ef18.css"),window.__aioseoDynamicImportPreload__("js/index.fd0fcee8.js"),window.__aioseoDynamicImportPreload__("css/index.2c326c41.css"),window.__aioseoDynamicImportPreload__("js/Slide.cd756e61.js"),window.__aioseoDynamicImportPreload__("css/Card.4406a3d8.css"),window.__aioseoDynamicImportPreload__("js/SeoStatisticsOverview.30fdfc27.js"),window.__aioseoDynamicImportPreload__("js/Statistic.ed0d2590.js"),window.__aioseoDynamicImportPreload__("js/isArrayLikeObject.c492f682.js"),window.__aioseoDynamicImportPreload__("js/_arrayEach.56a9f647.js"),window.__aioseoDynamicImportPreload__("js/_getAllKeys.b9d35dab.js"),window.__aioseoDynamicImportPreload__("js/_getTag.af0e2981.js"),window.__aioseoDynamicImportPreload__("js/index.02a5ed9a.js"),window.__aioseoDynamicImportPreload__("js/helpers.de7566d0.js"),window.__aioseoDynamicImportPreload__("js/vue.runtime.esm-bundler.4b666f07.js"),window.__aioseoDynamicImportPreload__("css/Statistic.c5013059.css"),window.__aioseoDynamicImportPreload__("css/SeoStatisticsOverview.2aef2744.css"),window.__aioseoDynamicImportPreload__("js/Row.5e452de4.js"),window.__aioseoDynamicImportPreload__("css/Row.d88b2bb9.css"),window.__aioseoDynamicImportPreload__("js/PostsTable.0b7bdd43.js"),window.__aioseoDynamicImportPreload__("js/WpTable.8adff4c1.js"),window.__aioseoDynamicImportPreload__("js/RequiresUpdate.52f5acf2.js"),window.__aioseoDynamicImportPreload__("js/postContent.741ce73c.js"),window.__aioseoDynamicImportPreload__("js/cleanForSlug.1898a430.js"),window.__aioseoDynamicImportPreload__("js/constants.e9426d11.js"),window.__aioseoDynamicImportPreload__("js/html.14f2a8b9.js"),window.__aioseoDynamicImportPreload__("js/Index.1fd8fc42.js"),window.__aioseoDynamicImportPreload__("css/Index.518f837a.css"),window.__aioseoDynamicImportPreload__("js/SaveChanges.bc66cd69.js"),window.__aioseoDynamicImportPreload__("js/PostTypes.9ab32454.js"),window.__aioseoDynamicImportPreload__("js/ScoreButton.e74a21e9.js"),window.__aioseoDynamicImportPreload__("css/ScoreButton.30a33f11.css"),window.__aioseoDynamicImportPreload__("js/Table.1a0736e7.js"),window.__aioseoDynamicImportPreload__("css/Table.f1478965.css"),window.__aioseoDynamicImportPreload__("js/Index.a5b2ee90.js"),window.__aioseoDynamicImportPreload__("css/Index.05ebc121.css"),window.__aioseoDynamicImportPreload__("css/PostsTable.52726d0b.css"),window.__aioseoDynamicImportPreload__("js/RequiredPlans.661fcd2c.js"),window.__aioseoDynamicImportPreload__("css/SeoStatistics.71c5ea25.css")],import.meta.url)}),`../views/${e}.vue`),z=[{path:"/:pathMatch(.*)*",redirect:"/dashboard"},{path:"/dashboard",name:"dashboard",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("Dashboard",s),hideSaveButton:!0}},{path:"/seo-statistics",name:"seo-statistics",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("SEO Statistics",s),hideSaveButton:!0}},{path:"/keyword-rankings",name:"keyword-rankings",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("Keyword Rankings",s),hideSaveButton:!0}},{path:"/content-rankings",name:"content-rankings",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("Content Rankings",s),hideSaveButton:!0}},{path:"/settings",name:"settings",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("Settings",s)}},{path:"/post-detail",name:"post-detail",component:a("Main"),meta:{access:"aioseo_search_statistics_settings",name:o("Post Detail",s),hideSaveButton:!0,licenseFeature:["search-statistics","post-detail"],middleware:[I],middlewareData:{routeName:"dashboard"}}}];let t=D(q);t=E(t);t=A(t);t=L(t);const y=F(z,t,h);h._vm=t;y.app=t;t.use(h);t.use(y);t.mount("#aioseo-app");
