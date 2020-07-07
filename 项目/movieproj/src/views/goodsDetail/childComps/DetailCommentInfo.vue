<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment">
      <div class="user">
        <div class="portrait">
          <img :src="commentInfo.user.avatar" alt="">
        </div>
        <p class="name">{{commentInfo.user.uname}}</p>
      </div>
      <div class="descri">
        <p>{{commentInfo.content}}</p>
      </div>
      <div class="params">
        <span>{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="photos">
        <img v-for="item in commentInfo.images" :key="item" :src="item" alt="" >
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '@/common/utils.js'

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    filters: {
      showDate(value) {
        // 1. 将时间戳转换成日期对象
        const date = new Date(value * 1000);
        // 2. 将date对象进行格式化
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    }
  };
</script>

<style lang="scss" scoped>
 .comment-info {
   font-size: 14px;
   border-bottom: 3px solid #f2f5f8;
   margin-bottom: 5px;
   .title {
     height: 50px;
     padding: 0 15px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     border-bottom: 2px solid #f2f5f8;
   }
   .comment {
     padding: 10px 10px 5px;
     .user {
        font-size: 16px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .portrait img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 10px;
        }
     }
     .descri {
       margin-bottom: 10px;
       font-size: 14px;
     }
     .params {
       margin-bottom: 10px;
       span {
         margin-right: 10px;
       }
     }
     .photos {
       img {
         width: 60px;
         height: 60px;
         margin-right: 5px;
       }
     }
   }
 }
</style>
