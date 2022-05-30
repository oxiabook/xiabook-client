<style scoped>
.home-header-bar {
  line-height: 1.42857143;
  box-sizing: border-box;
  position: relative;
  padding: 30px 15px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  padding-top: 60px;
  padding-bottom: 60px;
  font-size: 24px;
  text-align: left;
  background: linear-gradient(90deg, #1d976c 10%, #93f9b9 90%);
  filter: none;
  color: #e9e9e9;
}

.home-header-bar h1 {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  box-sizing: border-box;
  margin: 0.67em 0;
  font-family: inherit;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 60px;
  line-height: 1;
  color: #ffffff;
}

.home-header-bar p {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  font-size: 24px;
  text-align: left;
  box-sizing: border-box;
  margin: 0 0 10px;
  margin-bottom: 0;
  line-height: 1.4;
  font-weight: lighter;
  color: #ffffff;
}

/* .home-header-bar .search {
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  font-size: 24px;
  text-align: left;
  box-sizing: border-box;
  margin: 0 0 10px;
  margin-bottom: 0;
  line-height: 1.4;
  font-weight: lighter;
  color: #ffffff;
} */
</style>
<template>
  <div>
    <div class="home-header-bar">
      <div class="container">
        <h1>XIA看书</h1>
        <p>在这里搜索想看的书</p>
        <p class="search">
          <Input v-model="searchBookName" style="width: 450px">
            <Select
              v-model="searchType"
              slot="prepend"
              style="width: 80px"
              disabled
            >
              <Option value="book">想看</Option>
            </Select>
            <Button
              slot="append"
              icon="ios-search"
              @click="onSearchClick"
            ></Button>
          </Input>
        </p>
      </div>
    </div>
    <div class="content" style="padding: 10px 15px">
      <Row>
        <Col span="24">
          <Card style="width: 98%">
            <p slot="title">想看的小说</p>
            <ul>
              <li v-for="item in bookList" :key="item.name">
                <router-link
                  :to="{ name: 'book', query: { name: item.name } }"
                  >{{ item.name }}</router-link
                >
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// import axios from "axios";
import ServerApi from "@/api/serverApi";
@Component
export default class HomeView extends Vue {
  // 初始数据可以直接声明为实例的 property
  message = "Hello!";
  searchType = "搜书";
  searchBookName = "";
  bookList = [
    {
      name: "肖申克的救赎",
      id: 1,
      author: "",
      description: "",
    },
  ];
  // 组件方法也可以直接声明为实例的方法
  async onSearchClick(): Promise<void> {
    const bookVO = await ServerApi.wantbook(this.searchBookName);
    this.bookList.push(bookVO);
    return;
  }
  // async onMounted() {
  //   console.log("mounted");
  //   const bookList = await ServerApi.initInsideBooks();
  //   console.log(bookList);
  // }
  async mounted() {
    console.log("xxxxxx mounted");
    const bookList = await ServerApi.initInsideBooks();
    this.bookList = bookList;
  }
}
</script>
