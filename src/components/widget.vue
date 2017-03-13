<template>
    <div class="widget_box">
        <div class="widget_title">
            <div class="widget_title_left"></div>
            <div class="widget_title_middle">
                <i class="icon icon_line"></i>
                <span><slot name="title">模块名称</slot></span>
                <i class="icon icon_stretch"></i>
            </div>
            <div class="widget_title_right"></div>
        </div>
        <div class="widget_content">
            <slot name="content">模块内容</slot>
        </div>
    </div>
</template>
<style lang="scss">
    .widget_box {
        .widget_title {
            width: 299px;
            height: 28px;
            .widget_title_left {
                float: left;
                width: 12px;
                height: 28px;
                background: url(images/left.png) no-repeat;
            }
            .widget_title_right {
                float: right;
                width: 12px;
                height: 28px;
                background: url(images/right.png) no-repeat;
            }
            .widget_title_middle {
                float: left;
                background: url(images/middle.png);
                i {
                    float: left;
                    height: 28px;
                    line-height: 28px;
                    font-size: 13px;
                    color: #12d6ff;
                }
                span {
                    float: left;
                    width: 250px;
                    height: 28px;
                    line-height: 26px;
                    font-size: 13px;
                    text-indent: 6px;
                    text-shadow: 0px 1px 1px #063262;
                    color: #a7daff;
                }
                .icon_stretch {
                    float : right;
                }
            }
        }
        .widget_content {
            $box_shader_color : #14315a;
            background:rgba(3,20,45,0.7);
            border:solid 1px #2d689b;
            border-radius: 4px;
            box-shadow: inset 0 0 30px 1px $box_shader_color;
            -moz-box-shadow: inset 0 0 30px 1px $box_shader_color;
            -webkit-box-shadow: inset 0 0 30px 1px $box_shader_color;
        }
    }
</style>
