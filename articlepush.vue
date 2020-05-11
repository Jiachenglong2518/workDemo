<template>
  <section class="match-recommend-wrapper">
    <div class='match-recommend-porle clearfix'>
      <div class='left-container fl'>
        <div class='porlet'>
          <jhh-tab tab = 'free'></jhh-tab> 
          <div class='bd'>
           <jhh-article-push
              :articledata = 'top_return_data'
              :setting     = 'setting'
              @loadMore    = 'loadMore'
            ></jhh-article-push>
          </div>
        </div>
      </div>
      <div class="right-container fr ">
        <div class='porlet'>
          <jhh-author-push
          :order_setting = 'order_setting'
          :order_arr = 'order_arr'
          @get_order_data = 'get_order_data'
          ></jhh-author-push>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import axios from 'axios'
  import _ from 'underscore'
  import $ from 'jquery'
  import util from '../../assets/js/util'
  import urlconfig from '../../assets/js/urlconfig'
  import JhhTab from '~/components/common/jhhtab'
  import JhhArticlePush from '~/components/common/jhharticlepush'
  import JhhAuthorPush from '~/components/common/jhhauthorpush'
  export default {
    async asyncData ({app, store, params, query, res, req}) {
      let options = {
        "headers":{
          "cookie":req.headers.cookie + ';',
        }
      }
      let srcId = query.src || "";
      let setting = {};
      setting.noTag = false;
      let scrollFlag = true;
      let page = 1;
      let order_setting = {};
      order_setting.betKind = 'all';
      order_setting.type = '10'; //
      order_setting.category ='return_rate' ;//分类
      order_setting.scene = 'last_ten';
      order_setting.show_follow_flag = false;
      let  top_return_data = await axios.get(urlconfig.pc + `/api/jhh/free`);
      let  order_data = await axios.get(urlconfig.news + `/common/index/series-list?type=`+ order_setting.type + `&category=` + order_setting.category + `&scene=` + order_setting.scene + `&betKind=` + order_setting.betKind,options);
      let _top_return_data = top_return_data.data.data;
      let _article_arr = top_return_data.data.data.items;
      let _order_arr = order_data.data.data || [];
      
      //文章列表
      if(_top_return_data.items.length > 0){
        if(_top_return_data.items.length >= _top_return_data._meta.totalCount){
          setting.loadText = '没有更多了'
          scrollFlag = false;
        } else {
          setting.loadText = ''
          scrollFlag = true;
        }
        _top_return_data.items.forEach(function(item, index){
          if (srcId) {
           item.jump_info.url = item.jump_info.url + "?src=" + srcId;
          }
        });
      }
      return {
        scrollFlag:scrollFlag,
        top_return_data:_top_return_data,
        setting:setting,
        order_setting:order_setting,
        order_arr:_order_arr,
        article_arr:_article_arr,
        page:page,
      }
    },
    components: {
      JhhArticlePush,
      JhhAuthorPush,
      JhhTab,
    },
    head () {
      var self = this;
      return {
        title: "免费即时比分_即时比分直播_【即嗨专家推荐】",
        meta: [
          { 
            hid: 'description', 
            name: 'description', 
            content: "即嗨体育提供免费足球即时比分推荐,是足球比分直播,足球赛事的综合体育平台。比分直播与比赛快速同步,是权威,专业的体育资讯数据平台" 
          },
          { 
            hid: 'keyword', 
            name: 'keyword', 
            content: "足球即时比分" 
          }
        ]
      }
    },
    data () {
      return {
        setting:{
          isLoadMore : true,
          noTag:false,//true隐藏篮球足球tag
        }
      }
    },
    mounted () {
      this.get_order_data(this.order_setting);
      window.addEventListener('scroll', this.menu);
    },
    destroyed () {
      window.removeEventListener('scroll', this.menu);
    }, 
    methods : {
      get_article_data () {
        var vm = this;
        var srcId = util.urlQuery("src") || "";
        axios.get(urlconfig.pc + `/api/jhh/free?page=` + vm.page)
        .then(res => {
          if(res.data.errno == 0){
            var _top_return_data = res.data.data;
            var _top_return_arr = _top_return_data.items;
            
            vm.article_arr = vm.article_arr.concat(_top_return_arr)  

            if(vm.article_arr.length >= _top_return_data._meta.totalCount){
              vm.setting.loadText = '没有更多了'
              vm.scrollFlag = false;
            } else {
              vm.setting.loadText = ''
              vm.scrollFlag = true;
            }
            vm.article_arr.forEach(function(item,index){
              if (srcId) {
                item.jump_info.url = item.jump_info.url + "?src=" + srcId;
              }
            });
            _top_return_data.items = vm.article_arr;
            vm.top_return_data = _top_return_data;
          }
        })
        .catch(error =>{
        })
      },
      get_order_data(order_setting){
        var vm = this;
        axios.defaults.withCredentials = true; //配置为true
        // axios.get(urlconfig.news + `/common/index/series-list?type=`+ order_setting.type + `&category=` + order_setting.category + `&scene=` + order_setting.scene + `&betKind=` + order_setting.betKind)
        axios.get(urlconfig.news + `/common/index/series-list`,{
          params:{
            type :     order_setting.type,     //排行榜所属模块 10 全部， 1足球， 2篮球
            category : order_setting.category, //分类   hit_max:最高连红， hit:近期连红
            scene :    order_setting.scene,    //seven：回报率7天， last_ten:回报率近10场
            betKind :  order_setting.betKind,  //战绩近20场：several_win_20, 战绩近50场：several_win_50；
          }
        })
        .then(res => {
          if(res.data.errno == 0){
            order_setting.show_follow_flag = true;
            vm.order_arr = res.data.data || [];
          }
        })
        .catch(error =>{

        })
      },
      loadMore(){
        this.page++;
        this.get_article_data();
      },
      menu () {
        let scroll = $(document).height() - $(document).scrollTop() - $(window).height();
        if(scroll < 105 && this.scrollFlag){
          this.scrollFlag = false;
          this.setting.loadText = '加载中...'
          this.loadMore();
        }
      },
    }
  }
</script>  
<style lang="scss">
  @import '~assets/css/jhh/matchRecommend';
</style>