<template>
    <div>
        <v-header v-bind:system_menus='system_menus' v-bind:user_menus='user_menus'></v-header>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer></v-footer>
        <v-loading></v-loading>
    </div>
</template>
<script>
    /*
        time : 2017-3-7
        author:zhengdifei
        desc:框架结构页面
        components : {
            'v-header' : 头部组件,
            'v-content' : 内容组件,
            'v-footer' : 尾部组件,
            'v-loading' : 加载组件
        }
        data : {
            system_menus : 系统菜单项
            user_menus : 用户菜单项
        }
    */
    import header from 'components/header/index.vue'
    import content from 'components/content.vue'
    import footer from 'components/footer.vue'
    import loading from 'components/loading.vue'

    export default{
        components : {
            'v-header' : header,
            'v-content' : content,
            'v-footer' : footer,
            'v-loading' : loading
        },
        data(){
            return{
                system_menus : [{title:'首页',url:'/'},{title:'能源供应',url:'/building'},{title:'设备管理',url:'/home1'},{title:'用能管理',url:'/home1'},{title:'耗能分析',url:'/home1'}],
                user_menus : [{title:'系统管理',url:'/'},{title:'报警信息',url:'/'},{title:'用户信息',url:'/'}]
            }
        }
    }
</script>
