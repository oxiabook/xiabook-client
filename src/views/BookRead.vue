<style scoped>
.btn-container {
  width: 100%;
  margin-top: 50px;
  text-align: center;
}
.pre-page-btn {
  position: absolute;
  left: 10%;
}
.index-page-btn {
  position: absolute;
  margin: 0 auto;
}
.next-page-btn {
  position: absolute;
  right: 10%;
}
.readContent {
  padding: 30px 30px 100px 30px;
}
</style>
<template>
  <div class="readContent">
    <markdown-it-vue class="md-body" :content="content" :options="options" />
    <Button-group class="btn-container">
      <Button
        type="dashed"
        size="large"
        class="pre-page-btn"
        @click="goPrePage"
      >
        <Icon type="chevron-left"></Icon>
        上一页
      </Button>
      <Button
        type="dashed"
        size="large"
        class="index-page-btn"
        @click="goToIndexPage"
      >
        目录
      </Button>
      <Button
        type="dashed"
        size="large"
        class="next-page-btn"
        @click="goNextPage"
      >
        下一页
        <Icon type="chevron-right"></Icon>
      </Button>
    </Button-group>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// import axios from "axios";
import ServerApi from "@/api/serverApi";
import MarkdownItVue from "markdown-it-vue";
import "markdown-it-vue/dist/markdown-it-vue.css";
import { Watch } from "vue-property-decorator/lib/decorators/Watch";
import { Dictionary, Route } from "vue-router/types/router";
export const sleep = async (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime));
@Component({
  components: {
    MarkdownItVue,
  },
})
export default class ReadView extends Vue {
  // 初始数据可以直接声明为实例的 property
  bookName = "";
  indexId = 0;
  content = "";
  options = {
    markdownIt: {
      linkify: true,
    },
    linkAttributes: {
      attrs: {
        target: "_blank",
        rel: "noopener",
      },
    },
  };
  // 组件方法也可以直接声明为实例的方法
  async onSearchClick(): Promise<void> {
    await ServerApi.wantbook("大奉打更人");
    return;
  }

  async goToIndexPage(): Promise<void> {
    this.$router.push({ path: "/book", query: { name: this.bookName } });
  }

  async goNextPage(): Promise<void> {
    // this.indexId += 1;
    const indexId = this.indexId + 1 + "";
    const bookName = this.bookName;
    // await this.freshChapterContent();
    this.$router.push({ path: "/read", query: { bookName, indexId } });

    return;
  }

  async goPrePage(): Promise<void> {
    const indexId = this.indexId - 1 + "";
    const bookName = this.bookName;
    this.$router.push({ path: "/read", query: { bookName, indexId } });
    return;
  }

  async freshChapterContent() {
    console.log(`freshChapterContent`);
    let chatperContent = await ServerApi.getBookChapterDetail(
      this.bookName,
      this.indexId
    );
    // console.log(`xxxx2:${chatperContent.length}`);
    let isWaitFresh = false;
    if (chatperContent.length == 0) {
      isWaitFresh = true;
      chatperContent = "正在爬取章节,3秒后将自动重试!";
    }
    this.content = chatperContent;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // console.log(`${chatperContent.length}`);
    if (isWaitFresh) {
      // await sleep(10000);
      // await this.freshChapterContent();
    }
  }
  // async onMounted() {
  //   console.log("mounted");
  //   const bookList = await ServerApi.initInsideBooks();
  //   console.log(bookList);
  // }
  async mounted() {
    console.log("xxxxxx mounted");
  }

  @Watch("$route", { immediate: true })
  private async onRouteChange(route: Route) {
    const query = route.query as Dictionary<string>;
    this.bookName = query.bookName;
    this.indexId = parseInt(query.indexId);
    await this.freshChapterContent();
    // console.log(`query:${query.indexId}${query.bookName}`);
  }

  async created() {
    console.log(`xxx create`);
  }
}
</script>
