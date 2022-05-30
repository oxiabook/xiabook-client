<template>
  <div class="content" style="padding: 30px 45px">
    <router-link :to="{ name: 'home' }"> 首页 </router-link>
    <p slot="title">
      <Icon type="ios-film-outline" @click="reQueryBook"></Icon>
      {{ bookName }}
    </p>
    <p v-if="chapters.length == 0">章节爬取中</p>
    <ul>
      <li v-for="item in chapters" :key="item.indexId">
        <router-link
          :to="{
            name: 'read',
            query: {
              indexId: item.indexId,
              bookName: item.bookName,
            },
          }"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// import axios from "axios";
import ServerApi from "@/api/serverApi";
@Component
export default class BookHomeView extends Vue {
  // 初始数据可以直接声明为实例的 property
  bookName = "Hello!";
  searchType = "搜书";
  searchBookName = "";
  chapters = [
    {
      bookName: "大奉打更人",
      chapterURL: "",
      created: "2022-04-11T17:54:48.000Z",
      description: "",
      id: 13,
      indexId: 13,
      isFetched: 0,
      isValid: 0,
      siteKey: "QD",
      title: "第十三章 审问",
      updated: "2022-04-11T17:54:48.000Z",
    },
  ];
  bookEntity = {};

  async mounted() {
    console.log("bookhome mounted");
    const bookName = this.$route.query.name as string;
    this.bookName = bookName;
    if (bookName) {
      const res = await ServerApi.initBookHome(bookName);
      this.chapters = res.bookChapters;
      this.bookEntity = res.bookEntity;
      console.log(`${JSON.stringify(res)}`);
    }
    // this.bookList = bookList;
  }
  /**
   * 重新查徇源
   */
  async reQueryBook() {
    await ServerApi.reQueryBook(this.bookName);
  }
}
</script>
