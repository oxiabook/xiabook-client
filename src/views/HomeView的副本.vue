<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 1px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(215, 214, 214, 0.1);
}
</style>
<template>
  <div class="layout">
    <Sider
      :style="{
        position: 'fixed',
        height: '100vh',
        left: 0,
        overflow: 'auto',
        background: '#fff',
      }"
    >
      <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            Item 1
          </template>
          <MenuItem name="1-1">Option 1</MenuItem>
          <MenuItem name="1-2">Option 2</MenuItem>
          <MenuItem name="1-3">Option 3</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            Item 2
          </template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Item 3
          </template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout
      :style="{
        marginLeft: '200px',
        border: '0px',
      }"
    >
      <Content :style="{ padding: '0 0px 0px', border: '0px' }">
        <Breadcrumb :style="{ margin: '16px 0' }">
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem
            ><Input
              v-model="value"
              placeholder="请输入..."
              style="width: 300px"
            ></Input
          ></BreadcrumbItem>
          <!-- <Input v-model="value" placeholder="请输入..." style="width: 300px"></Input> -->
        </Breadcrumb>

        <Card>
          <div style="height: 600px">home content</div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {};
</script>
