<template>
  <div class="container">
    <!-- 发现-广场  -->
    <div class="findSquares">
      <!-- 发布动态 -->
      <div class="issued"></div>
      <!-- 导航组件 -->
      <div id="nav" class="findSquareContent">
        <navs :list="navlist"></navs>
      </div>
      <!-- 人气点点圈 -->
      <div id="popularity" class="findSquareContent">
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>人气点点圈</template>
          </menuTitle>
        </a>
        <!-- Content -->
        <el-row :gutter="8">
          <el-col
            :span="6"
            class="popularity-tag"
            v-for="i in popularityTags"
            :key="i.id"
          >
            <div
              :style="{
                'background-image': 'url(' + i.src + ')',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-position': 'center',
              }"
            >
              <div class="blackOp">
                <p class="popularity-tag-title">{{ i.name }}</p>
                <div class="popularity-tag-num">
                  <span>
                    <i class="iconfont icon-wodedangxuan"></i>{{ i.nums }}
                  </span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 书单 -->
      <div id="book-list" class="findSquareContent">
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>书单</template>
          </menuTitle>
        </a>
        <!-- Content -->
        <el-row :gutter="1">
          <el-col :span="12" v-for="i in bookListContents" :key="i.id">
            <el-row :gutter="3">
              <el-col :span="8" v-for="ii in i.content" :key="ii.id">
                <img :src="ii.src" alt="" />
              </el-col>
            </el-row>
            <p>{{ i.title }}</p>
          </el-col>
        </el-row>
      </div>
      <!-- 滚动公示 -->
      <div id="roll"></div>
      <!-- 游戏、活动、神创作、专栏精选、对话小说推荐 -->
      <div
        :id="i.id"
        class="findSquareContent findSquareContentTwo"
        v-for="i in contents"
        :key="i.id"
      >
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>{{ i.title }}</template>
          </menuTitle>
        </a>
        <!-- Content -->
        <el-row :gutter="20">
          <el-col :span="12" v-for="ii in i.content" :key="ii.id">
            <img :src="ii.src" alt="" />
            <p>{{ ii.msg }}</p>
          </el-col>
        </el-row>
      </div>
      <!-- 热门讨论 -->
      <div id="hot-discuss">
        <h1>阿巴阿巴</h1>
      </div>
    </div>
  </div>
</template>

<script>
let num1 = parseInt(Math.random() * 550000) + 50000
let num2 = parseInt(Math.random() * 550000) + 50000
let num3 = parseInt(Math.random() * 550000) + 50000
let num4 = parseInt(Math.random() * 550000) + 50000
import menuTitle from './FindMenuTitle'
import navs from '../../components/navs'
import './iconfont/iconfont.css'
export default {
  data() {
    return {
      // 人气点点圈 数字
      num1,
      num2,
      num3,
      num4,
      //人气点点圈
      popularityTags: [
        {
          name: '新手',
          nums: num1,
          src:
            'https://iconfont.alicdn.com/t/464b3cfa-b623-43bb-aea3-9e7fc55da6e0.png',
        },
        {
          name: '创作',
          nums: num2,
          src:
            'https://iconfont.alicdn.com/t/443f8a0f-ce81-4c27-acf6-88cbaea06435.png',
        },
        {
          name: '催更',
          nums: num3,
          src:
            'https://iconfont.alicdn.com/t/432cea0f-1938-40c3-b309-b040a32feda2.png',
        },
        {
          name: '历史',
          nums: num4,
          src:
            'https://iconfont.alicdn.com/t/684e9c2d-0be4-45e8-8e6f-222854679490.png',
        },
      ],
      bookListContents: [
        {
          title: '有空推荐点好书',
          content: [
            {
              src:
                'https://iconfont.alicdn.com/t/05986446-abea-4944-aa10-3c13b9ff3b00.png',
            },
            {
              src:
                'https://iconfont.alicdn.com/t/e248b580-c4ac-4b36-97bd-a065c023c9f8.png',
            },
            {
              src:
                'https://iconfont.alicdn.com/t/be17c42c-1d78-4f15-96c0-3574398e9770.png',
            },
          ],
        },
        {
          title: '有好文会分享',
          content: [
            {
              src:
                'https://iconfont.alicdn.com/t/be7badaf-2e3c-4bff-b05f-d3515f8a80c3.png',
            },
            {
              src:
                'https://iconfont.alicdn.com/t/1fe1ef86-3e27-4efc-b5b4-413657f1e848.png',
            },
            {
              src:
                'https://iconfont.alicdn.com/t/181c6cda-94a7-40a6-9c7b-f4dff688aef9.png',
            },
          ],
        },
      ],
      // 游戏、活动、神创作、专栏精选、对话小说推荐
      contents: [
        {
          id: 'games',
          title: '游戏',
          content: [
            {
              src:
                'https://iconfont.alicdn.com/t/83493971-fe29-4329-82c6-c7c3d913c375.png',
              msg: '天天十连，福利爆仓',
            },
            {
              src:
                'https://iconfont.alicdn.com/t/95918ecf-d93a-436e-8331-035f8c55c857.png',
              msg: '超强红侠，登录即领',
            },
          ],
        },
        {
          id: 'activity',
          title: '活动',
          content: [
            {
              src:
                'https://iconfont.alicdn.com/t/70d99ead-6672-4c6e-b94c-ce04183b45d5.png',
              msg: '10月优秀作品运营',
            },
            {
              src:
                'https://iconfont.alicdn.com/t/2f24dc68-1af1-4e6a-8bc7-067de7404261.png',
              msg: '同人创作赛来袭',
            },
          ],
        },
        {
          id: 'created',
          title: '神创作',
          content: [
            {
              src:
                'https://iconfont.alicdn.com/t/3fda5a6d-dacc-4691-b09c-8771c2203bdd.png',
              msg: '实力不允许我低调',
            },
            {
              src:
                'https://iconfont.alicdn.com/t/b9c7753f-b071-438c-b217-5d72c5d6e0b6.png',
              msg: '每周神章说',
            },
          ],
        },
        {
          id: 'choiceness',
          title: '神创作',
          content: [
            {
              src:
                'https://iconfont.alicdn.com/t/b9c7753f-b071-438c-b217-5d72c5d6e0b6.png',
              msg: '挖掘错过的小众作品',
            },
            {
              src:
                'https://iconfont.alicdn.com/t/b9c7753f-b071-438c-b217-5d72c5d6e0b6.png',
              msg: '掌握第一手热点资讯',
            },
          ],
        },
        {
          id: 'recommend',
          title: '对话小说推荐',
          content: [
            {
              src:
                'https://iconfont.alicdn.com/t/6fc99621-845e-460e-b142-27be003fd9c5.png',
              msg: '我死去多年的兄弟穿越了',
            },
            {
              src:
                'https://iconfont.alicdn.com/t/7d4ffd23-7738-46b2-aa64-2b6abc64a23a.png',
              msg: '故事从美食开始...',
            },
          ],
        },
      ],
      navlist: [
        { name: '专栏', src: require('./img/zs_icon_bbjcj.png') },
        { name: '新书投资', src: require('./img/没有积分@3x.png') },
        { name: '点点圈', src: require('./img/海王星.png') },
        { name: '对话小说', src: require('./img/蓝紫色星空.png') },
        { name: '红包', src: require('./img/红包.png') },
      ],
    }
  },
  methods: {},
  components: {
    menuTitle,
    navs,
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.el-row {
  padding: 0 0.2rem;
}
#nav {
  padding: 0.3em 0 0.6rem;
}
.container {
  padding-top: 1rem;
}
.findSquares {
  padding: 0 0.15rem 0.5rem;
  margin-bottom: 0.7rem;
}
.findSquareContent {
  border-bottom: 0.02rem solid #ccc;
  padding-bottom: 0.3rem;
}
.findSquareContent p {
  font-size: 0.25rem;
}
.findSquareContentTwo > .el-row {
  padding: 0;
}
.findSquareContentTwo .el-col-12 > p:last-of-type {
  padding-left: 0;
}
.findSquareContentTwo .el-col-12:first-of-type .el-row {
  padding-left: 0;
}
.findSquareContentTwo .el-col-12:last-of-type .el-row {
  padding-right: 0;
}
.findSquareContentTwo img {
  object-fit: cover;
  height: 1.5rem;
  width: 100%;
}
</style>

// 人气点点圈
<style scoped>
.popularity-tag > div {
  background-size: cover;
  border-radius: 0.1rem;
  height: 1.6rem;
}
.blackOp {
  padding: 0.05rem 0.1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.1rem;
}

.popularity-tag-title {
  font-weight: bold;
  color: #fff;
}
.popularity-tag-num {
  position: relative;
  bottom: 0.1rem;
  height: 1.1rem;
}
.popularity-tag-num > span {
  background-color: #f00;
  border-radius: 0.1rem;
  padding: 0.03rem 0.06rem;
  font-size: 0.2rem;
  color: #fff;
}
.popularity-tag-num i {
  font-size: 0.2rem;
}
</style>

// 书单
<style scpoed>
#book-list img {
  object-fit: cover;
  width: 100%;
  height: 1.7rem;
}
#book-list > .el-row {
  padding: 0;
}
#book-list .el-col-12 > p {
  padding-left: 0.1rem;
}
#book-list .el-col-12:first-of-type .el-row {
  padding-left: 0;
}
#book-list .el-col-12:last-of-type .el-row {
  padding-right: 0;
}
</style>
