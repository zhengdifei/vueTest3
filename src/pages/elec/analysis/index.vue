<template>
    <div class="analysis_box">
        <div class="topStatis">
            <div class="buildStatis"><v-buildStatis></v-buildStatis></div>
            <div class="companyStatis"><v-companyStatis></v-companyStatis></div>
        </div>
        <div class="buildAnalysis"><v-buildAnalysis></v-buildAnalysis></div>
        <div class="elecTypeStatis"><v-elecTypeStatis></v-elecTypeStatis></div>
        <div class="elecTypeComparative"><v-elecTypeComparative></v-elecTypeComparative></div>
    </div>
</template>
<style lang="scss">
    .analysis_box{
        overflow: auto;
        width: 100%;
        height: 100%;
        margin: auto 0;
        .topStatis {
            width: 100%;
            height: 207px;
            .buildStatis {
                float: left;
                width: 50%;
                height: 200px;
            }
            .companyStatis {
                float: right;
                width: 49%;
                height: 200px;
            }
        }
        .buildAnalysis {
            width: 100%;
            height: 200px;
        }
        .elecTypeStatis {
            width: 100%;
            height: 200px;
        }
        .elecTypeComparative {
            width: 100%;
            height: 200px;
        }
    }
</style>
<script>
    import  buildStatis from './buildStatis'
    import  companyStatis from './companyStatis'
    import  buildAnalysis from './buildAnalysis'
    import  elecTypeStatis from './elecTypeStatis'
    import  elecTypeComparative from './elecTypeComparative'

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components : {
            'v-buildStatis' : buildStatis,
            'v-companyStatis' : companyStatis,
            'v-buildAnalysis' : buildAnalysis,
            'v-elecTypeStatis' : elecTypeStatis,
            'v-elecTypeComparative' : elecTypeComparative
        }
    }
</script>
