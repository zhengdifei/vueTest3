<template>
    <header>
        <div class="nav_box">
            <div class="nav_left">
                <span href="#" class="logo"></span>
                <ul class="menu_box">
                    <li :class="['menu_item',index == menuClickIndex ? 'menu_click':'']" v-for="(menu,index) in menus" @click="menuClick(index)">
                        <router-link :to="menu.url == null?'/' : menu.url" class="menu_btn">
                            <i :class="['icon','icon_menu'+ (index + 1)]"></i>
                            <span>{{menu.title}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="nav_right">
                <ul class="user_box">
                    <li :class="['user_item',index == userClickIndex ? 'user_click':'']" v-for="(user,index) in users" @click="userClick(index)">
                        <router-link :to="user.url == null?'/' : user.url" class="user_btn">
                            <i :class="['icon', 'icon_user'+ (index+1)]"></i>
                            <span>{{user.title}}</span>
                        </router-link>
                    </li>
                </ul>
                <div class="system_box">
                    <slot><h1 class="system_name"></h1><slot>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    @import 'header';
</style>

<script>
    import { mapState,mapMutations } from 'vuex'
    import { MENU_CLICK_INDEX ,USER_CLICK_INDEX} from 'store/types'

    export default{
        props : ['system_menus','user_menus'],
        data(){
            return{
               menus : this.system_menus || [],
               users : this.user_menus || []
            }
        },
        computed : mapState({
            menuClickIndex : state => state.header.menuClickIndex,
            userClickIndex : state => state.header.userClickIndex
        }),
        methods : {
            ...mapMutations({
               menuClick: MENU_CLICK_INDEX,
               userClick: USER_CLICK_INDEX
            })
        }
    }
</script>
