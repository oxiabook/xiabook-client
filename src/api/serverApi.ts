// import request from "@/router/axios";  //引入封装的axios，也就是步骤一中的axios文件
import axios from "axios";
const BaseApiUrl = "http://127.0.0.1:3000/";
export default class ServerApi {
  public static async wantbook(bookName: string) {
    const res = await axios.post(`${BaseApiUrl}books/newbook/`, {
      bookName: bookName,
    });
    const bookVO = res.data;
    // console.log(res);
    return bookVO;
  }

  public static async initInsideBooks() {
    const res = await axios.get(`${BaseApiUrl}books/`);
    return res.data;
  }

  public static async initBookHome(name: string) {
    const res = await axios.get(`${BaseApiUrl}books/bookhome/${name}`);
    return res.data;
  }

  public static async reQueryBook(bookName: string) {
    const res = await axios.get(`${BaseApiUrl}books/reQueryBook/${bookName}`);
    return res.data;
  }

  /**
   * 请求章节内容
   * @param bookName string
   * @param indexId string
   * @returns
   */
  public static async getBookChapterDetail(bookName: string, indexId: number) {
    console.log(`getBookChapterDetail:${bookName} ${indexId}`);
    // const chapterURL = `http://127.0.0.1:3000/public/books/${bookName}/${indexId}.md`;
    const chapterURL = `${BaseApiUrl}books/readchapter/${bookName}/${indexId}`;
    const res = await axios.get(chapterURL);
    return res.data;
  }
}
