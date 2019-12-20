<template>
  <section class="recommend-wrapper">
    <navigation-match 
      :matchinfo="matchinfo"
      tab="专家推荐"
    />
    <analysis-match
      :matchinfo="matchinfo"
      @start="startMatchTimer"
    />
    <tab-match
      :matchinfo="matchinfo"
      tab="recommend"
    />
    <div class="recommend-porle clearfix">
      <div class="left-porlet fl">
        <div class='main-push-porlet porlet' v-if='main_push_arr.length > 0'>
          <div class="hd">
            <h3>主流免费推荐</h3>
          </div>
          <div class="bd push-body">
            <template v-for='item in main_push_arr'>
            <div class='push-item clearfix'>
              <span class='push-name fl'>{{getTitle(item.betKind)}}</span>
              <div  class='push-pannel three-piece' >
                <template v-for='child in item.items'>
                  <template v-if="item.betKind == 'SPF' || item.betKind == 'JCSPF' || item.betKind == 'JCRQSF' || item.betKind == 'LQSF' || item.betKind == 'LQRFSF' || item.betKind == 'JCLQSF' || item.betKind == 'JCLQRFSF'  ">
                    <span :class="{'bg1':child.k == 3,'bg2':child.k == 1,'bg3':child.k == 0,'min_max': child.v == 100}" :style="{'width':child.v+'%'}">{{child.name}}</span>
                  </template>
                  <template v-if="item.betKind == 'DXQ' || item.betKind == 'LQDXF' || item.betKind == 'JCLQDXF' || item.betKind == 'RQSF'">
                    <span :class="{'bg1':child.k == 2,'bg3':child.k == 1,'min_max': child.v == 100}" :style="{'width':child.v+'%'}">{{child.name}}</span>
                  </template>
                </template>
              </div>
              <span class='push-num fr'>{{item.news_num}}条</span>
            </div>
            </template>
          </div>
        </div>
        <div class='good-push-porlet porlet'>
          <div class='hd'>
            <h3 class="fl">优质推荐</h3>
            <span :class="{'active':sort_order == 'time'}"        @click='choseOrderBy("sort_order","time")'>按时间</span>
            <span :class="{'active':sort_order == 'return_rate'}" @click='choseOrderBy("sort_order","return_rate")'>按回报</span>
            <em   class="line fr"></em>
            <span :class="{'active':free == 1}" @click='choseOrderBy("free",1)'>免费</span>
            <span :class="{'active':free == 2}" @click='choseOrderBy("free",2)'>付费</span>
            <span :class="{'active':free == 0}" @click='choseOrderBy("free",0)'>全部({{all_num}})</span>
          </div>
          <div class="bd good-push-body">
            <ArticlePush
              :articledata = 'good_push_data'
              :good_push_arr = 'good_push_arr'
              :setting     = 'setting'
              @loadMore    = 'loadMore'
              :getTitle    = 'getTitle'
            ></ArticlePush>
          </div>
        </div>
        
      </div>
      <div class='right-porlet fr bd'>
        <div class='btn-box'>
          <!-- 未登陆 -->
          <a v-if='!isLogoinFlag && isShow'  href="#" @click='applyJh'><em class="recommend-icon icon-apply"></em>申请即嗨号，与我共竞猜</a>
          <!-- 登陆并且是作者 -->
          <a v-if='isLogoinFlag && isAuthor && isShow' href="#"  @click='showPublish'><em class="recommend-icon icon-write"></em>发布文章</a>
          <!-- 已登陆 非作者 -->
          <a v-if='isLogoinFlag && !isAuthor && isShow' href="//mp.jihai8.com/apply_article" ><em class="recommend-icon icon-apply"></em>申请即嗨号，与我共竞猜</a>
        </div>
        <div class="hot-title" v-if='hot_author_arr.length > 0'>当红作者</div>
        <ul class="hot-author-ul">
          <template v-for='(item,index) in hot_author_arr' v-if='hot_author_arr.length > 0'>
            <li class='clearfix'>
              <div class='head-img-box clearfix'>
                <div class='head-img'>
                  <img :src="item.user_info.avatar" alt="">
                </div>
                <em v-if='item.user_info.mp_rank == 1' class='recommend-icon icon-level1'></em>
                <em v-if='item.user_info.mp_rank == 2' class='recommend-icon icon-level2'></em>
                <em v-if='item.user_info.mp_rank == 3' class='recommend-icon icon-level3'></em>
                <em class='onsell-num' v-if='item.for_sale > 0'>{{item.for_sale}}</em>
              </div> 
              <div class='info-box fl'>
                <div class='clearfix'>
                  <span class="name">{{item.user_info.nickname}}</span>
                  <em class="recommend-icon icon-v fl" v-if='item.user_info.level == 1'></em>
                  <em class="recommend-icon icon-red fl" v-if='item.hit > 2'><b>{{item.hit}}</b></em>
                </div>
                <div class='fans-num'>
                  <span>粉丝：{{item.followNum}}</span>
                </div>
              </div>
              <div v-if='item.isFollowed == 0 && show_follow_flag' :class="{'follow-btn':true,}" @click='followAuthor(item.isFollowed,item.authorid,index)'> 
                <span v-if='show_follow_flag'>+</span>
                <em v-if='show_follow_flag'>关注</em> 
              </div>
              <div v-if='item.isFollowed == 1 && show_follow_flag' :class="{'follow-btn':true, 'follow-btn-already':item.isFollowed == 1}" @click='followAuthor(item.isFollowed,item.authorid,index)'> 
                <em v-if='show_follow_flag'>已关注</em> 
              </div>
            </li>
          </template>
        </ul>
        <ArticlePushShort
          :shortsetting = 'shortsetting'
          :data_arr = 'other_push_arr'
        ></ArticlePushShort>
      </div>
    </div>
    <div class="select-article-mod" v-if='publish_article_flag'>
      <div class="mark"></div>
      <div class="select-articl-box">
        <div class="close">
          <i @click='closePublish'></i>
        </div>
        <h5>选择发布文章类型</h5>
        <a :href="'//mp.jihai8.com/article?plateid=3&maatchId='+ matchId" class="">足球推荐</a>
        <a :href="'//mp.jihai8.com/article?plateid=52&maatchId='+ matchId" class="">竟足分析</a>
      </div>
    </div> 
  </section>  
</template>
<script>
  import axios from 'axios'
  import _ from 'underscore'
  import $ from 'jquery'
  import util from '../../../assets/js/util'
  import AnalysisMatch from '~/components/common/analysismatch'
  import urlconfig from '../../../assets/js/urlconfig'
  import index from "../../index";
  import Highcharts from 'highcharts/highstock';
  import TabMatch from '~/components/common/tabmatch'
  import NavigationMatch from '~/components/common/navigation'
  import ArticlePush from '~/components/common/ArticlePush'
  import ArticlePushShort from '~/components/common/ArticlePushShort'
  import qs from 'qs'
  export default {
    fetch({ store , params, error}) {
       let matchId = params.id.split(".")[0];
       return Promise.all([
         store.dispatch('fetchMatch', {matchId: matchId}).catch(err => {
           error({
             statusCode: 404,
             message: '众里寻他 我已不再'
           });
         })
       ])
    },
    async asyncData ({app,store,params,res}) {
      let  betType = 'zq'
      let  matchId = params.id.split(".")[0];
      let  leagueId = 40;
      let  per_page = 10; //每页条数
      let  page = 1;
      let  free = 0;
      let  setting = {
          tabtitle:'',
          isloadmore:true,
          loadText:'',
      };
      let show_follow_flag = false;
      let scrollFlag = true;
      let  sort_order = 'return_rate';
      let  main_push_data = await axios.get(urlconfig.news + `/pc/article/match-news-support?matchId=` + matchId + `&betType=` + betType);
      let  good_push_data = await axios.get(urlconfig.news + `/pc/article/match-news?matchId=` + matchId + `&betType=` + betType + '&free=' + free + '&sort_order=' + sort_order + '&per-page=' + per_page + '&page=' + page);
      let  other_push_data = await axios.get(urlconfig.apinews + `/pc/article/league-recommend?matchId=` + matchId + `&betType=` + betType + '&leagueId=' + leagueId );
      
      let  data = await axios.post(urlconfig.passport + `/user/info`);
      
      let _main_push_arr = main_push_data.data.data;
      let _good_push_data = good_push_data.data.data;
      let _good_push_arr = good_push_data.data.data.items;
      let all_num = _good_push_data._meta.totalCount;
      //优质推荐
      if(_good_push_data.items.length > 0){
        if(_good_push_arr.length >= _good_push_data._meta.totalCount){
          setting.loadText = '没有更多了'
          scrollFlag = false;
        } else {
          setting.loadText = ''
          scrollFlag = true;
        }
      }
      //主流免费推进
      if(_main_push_arr.length > 0){
        _main_push_arr.forEach(function(item,index){
          _main_push_arr[index].items.reverse();
        })
      }
      console.log(_good_push_data.items)
      return {
        matchId:matchId,
        betType:betType,
        all_num:all_num,
        main_push_arr:_main_push_arr,
        good_push_data:_good_push_data,
        good_push_arr:_good_push_arr,
        other_push_arr:other_push_data.data.data,
        per_page :per_page,//每页条数
        page:page,
        free : free,
        sort_order : 'return_rate',
        setting:setting,
      }
    },
    components: {
      AnalysisMatch,
      TabMatch,
      NavigationMatch,
      ArticlePush,
      ArticlePushShort,
    },
    data () {
      return {
        articleinfo:{},
        shortsetting:{
          tabtitle:'其他热门推荐',
          isbuyinfo:false
        },
        publish_article_flag:false,
        show:false,
        first_is_login:null,
        isLogoinFlag:false,
        isAuthor:false,
        isShow:false,
        hot_author_arr:[],
      }
    },
    mounted () {
      this.getMainPush();
      this.isLogoin();
      this.getHotAuthor();

      window.addEventListener('scroll', this.menu);

    },
    destroyed () {
      window.removeEventListener('scroll', this.menu);
    },
    computed: {
      matchinfo() {
        return this.$store.state.matchinfo
      },
    },
  
    methods : {
      //更新赛事信息
      startMatchTimer () {
        var self = this;
        var matchId = self.matchinfo.scheduleId;
        self.$store.dispatch("fetchMatch", {matchId: matchId}).catch(err => {})
      },
      //进入页面判断用户是否登陆，如登陆获取用户信息
      isLogoin () {
        if(util.isLogin()){
          this.isLogoinFlag = true;
          this.getUserInfo();
        } else {
          this.isLogoinFlag = false;
          this.getUserInfo();
        }
      },
      //获取用户信息
      getUserInfo (type) {
        var vm = this;
        $.ajax({
          url: urlconfig.passport + '/user/info',
          type: 'post',
          dataType: "json",
          xhrFields: { 
            withCredentials: true 
          },
          success: function(data) {
            vm.isShow = true;
            if(data.errno == '0') {
              if(data.data.mp ==1){
                vm.isAuthor = true;
              }         
            }  
          },
          error : function(){
            
          }
        });
      },
      choseOrderBy (name,val) {
        var vm = this;
        if(name == 'free' && val != vm.free){
          vm.page = 1;
          vm.per_page = 10;
        } 
        vm[name] = val;
        vm.getGoodPush();
      },
      loadMore () {
        if(this.setting.loadText == '加载中...'){
          this.per_page = this.per_page + 10;
          this.getGoodPush()
        }
      },
      showPublish () {
        this.publish_article_flag = true;
      },
      closePublish () {
        this.publish_article_flag = false;
      },
      getTitle (type) {
        var title = ''
        switch (type) {
        case 'JCSPF': 
          title ='竟彩胜平负';
          break;
        case 'JCRQSF': 
          title ='竟彩让球胜平负';
          break;
        case 'RQSF': 
          title ='赛事让球胜负';
          break;
        case 'DXQ': 
          title ='赛事大小球';
          break;
        case 'LQSF': 
          title ='篮球胜负';
          break;
        case 'LQDXF': 
          title ='赛事大小分';
          break;
        case 'LQRFSF': 
          title ='赛事让分胜负';
          break;
        case 'JCLQSF': 
          title ='竟彩胜负';
          break;
        case 'JCLQDXF': 
          title ='竟彩大小分';
          break;
        case 'JCLQRFSF': 
          title ='竞猜让分胜负';
          break;
        default: 
          title ='';
          break;
        }
        return title
      },
      getMainPush () {
        var vm = this;
        axios.get(urlconfig.news + '/pc/article/match-news-support?matchId=' + vm.matchId + `&betType=` + vm.betType)
        .then(res => {
          var _main_push_arr = res.data.data;
          //主流免费推进
          if(_main_push_arr.length > 0){
            _main_push_arr.forEach(function(item,index){
              _main_push_arr[index].items.reverse();
              console.log(_main_push_arr[index])
            })
          }
          vm.main_push_arr = _main_push_arr;
        })
        .catch(error =>{

        })
      },
      getHotAuthor () {
        var vm = this;
        //axios.defaults.withCredentials = true; //配置为true
        axios.get(urlconfig.news + '/pc/article/best-writer')
        .then(res => {
          if(res.data.errno == 0){
            vm.hot_author_arr = res.data.data;
            vm.show_follow_flag = true;
          }
        })
        .catch(error =>{

        })
      },
      //优质推荐
      getGoodPush () {
        var vm = this;
        axios.get(urlconfig.news + '/pc/article/match-news?matchId=' + vm.matchId + `&betType=` + vm.betType + '&free=' + vm.free + '&sort_order=' + vm.sort_order  + '&per-page=' + vm.per_page + '&page=' + vm.page)
        .then(res => {
          var _good_push_data = res.data.data;
          var _good_push_arr = _good_push_data.items;
          if(_good_push_arr.length >= _good_push_data._meta.totalCount){
            vm.setting.loadText = '没有更多了'
            vm.scrollFlag = false;
          } else {
            vm.setting.loadText = ''
            vm.scrollFlag = true;
          }
          vm.good_push_data = _good_push_data;
          vm.good_push_arr = _good_push_data.items;
          console.log(vm.good_push_arr)
        })
        .catch(error =>{

        })
      },
      //关注作者
      followAuthor (flag,authorid,index) {
        var vm = this;
        var src   = '';
        var data  = {};
        data.src  = 'pc';
        data.fuid = authorid;
        if (flag == 1) {
          src = urlconfig.passport + '/user/unfollow';
        } else if (flag == 0) {
          src = urlconfig.passport + '/user/follow';
        }
        axios.defaults.withCredentials = true; //配置为true
        axios.post(src,qs.stringify(data))
        .then(res => {
          if(res.data.errno == 0){
            vm.hot_author_arr[index].isFollowed = vm.hot_author_arr[index].isFollowed == 1 ? 0 : 1;
            if(flag == 0){
              vm.hot_author_arr[index].followNum ++;
            } else if (flag == 1) {
               vm.hot_author_arr[index].followNum--;
            }
          }else if (res.data.errno == -1){
            this.showLogin(vm.getHotAuthor);
          }
        })
        .catch(error =>{

        })
      },
      showLogin (fn) {
        if (!util.isLogin()) {
          Jihai8_SSOManager.login(function () {
            fn()
          })
          return ;
        }
      },
      applyJh(){
        if (!(util.isLogin())) {
          Jihai8_SSOManager.login(function () {
            window.location.href='//mp.jihai8.com/apply_article'
          })
          return ;
        }
      },
      getScrollTop() {
        var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;
        if (document.body) {
          bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
          documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
        return scrollTop;
      },
      //文档的总高度
      getScrollHeight() {

        var scrollHeight = 0, bodyScrollHeight = 0,documentScrollHeight = 0;
        if (document.body) {
          bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
          documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight =bodyScrollHeight - documentScrollHeight > 0 ?bodyScrollHeight :documentScrollHeight;
        return scrollHeight;
      },
      //浏览器视口的高度
      getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
          windowHeight = document.documentElement.clientHeight;
        } else {
          windowHeight = document.body.clientHeight;
        }
        return windowHeight;
      },
      menu () {
        let scroll = this.getScrollHeight() - this.getScrollTop() - this.getWindowHeight()
        if(scroll < 105 && this.scrollFlag){
          console.log(1)
          this.scrollFlag = false;
          this.setting.loadText = '加载中...'
          this.loadMore()
        }
      },
    }
    
  }   
</script>
<style lang="scss">
  @import '~assets/css/zq/recommend';
</style>




