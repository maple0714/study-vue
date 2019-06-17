<template>
    <div>
        <el-button size="small" @click="getForm">高级查询</el-button>

        <div style="width: 578px; margin: 0 auto;">
            <ul class="yl-form">
                <li>
                    <em class="form-left">类型：</em>
                    <div class="form-right">
                        <el-button v-model="firstConsumeTimeStampShow" size="small" type="primary">首次购买时间</el-button>
                        <el-button v-model="lastConsumeTimeStampShow" size="small" type="primary">最后购买时间</el-button>
                        <el-button v-model="minConsumeAmountShow" size="small" type="primary">最小消费金额</el-button>
                        <el-button v-model="maxConsumeAmountShow" size="small" type="primary">最大消费金额</el-button>
                        <el-button v-model="totalBuyCountShow" size="small" type="primary">购买总数</el-button>
                    </div>
                </li>
            </ul>

            <vuedraggable class="wrapper" v-model="conditionQueries">
                <transition-group>
                    <div v-for="row in conditionQueries" :key="row.fieldName">
                        <div class="yl-form-one">
                            <div class="yl-form-one-title">{{row.fieldNameText}}</div>
                            <div class="yl-form-one-content">
                                <ul class="yl-form">
                                    <li>
                                        <em class="form-left">排序：</em>
                                        <div class="form-right">
                                            <el-checkbox-group v-model="row.formData.orderType" @change="firstConsumeTimeChange(row.formData.orderType)">
                                                <el-checkbox label="正序" value="ASC"></el-checkbox>
                                                <el-checkbox label="倒序" value="DESC"></el-checkbox>
                                            </el-checkbox-group>
                                        </div>
                                    </li>
                                    <li>
                                        <em class="form-left">范围：</em>
                                        <div class="form-right">
                                            <el-date-picker
                                                    v-model="row.formData.minValue"
                                                    :picker-options="startFirstConsumeTimeOptions"
                                                    type="date"
                                                    size="small"
                                                    style="width: 150px"
                                                    placeholder="选择开始时间">
                                            </el-date-picker>
                                            <span style="padding: 0 5px">至</span>
                                            <el-date-picker
                                                    v-model="row.formData.maxValue"
                                                    :picker-options="endFirstConsumeTimeOptions"
                                                    type="date"
                                                    size="small"
                                                    style="width: 150px"
                                                    placeholder="选择结束时间">
                                            </el-date-picker>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </vuedraggable>

            <!--首次购买时间-->
            <div class="yl-form-one">
                <div class="yl-form-one-title">首次购买时间</div>
                <div class="yl-form-one-content">
                    <ul class="yl-form">
                        <li>
                            <em class="form-left">排序：</em>
                            <div class="form-right">
                                <el-checkbox-group v-model="firstConsumeTimeStampForm.orderType" @change="firstConsumeTimeChange">
                                    <el-checkbox label="正序" value="ASC"></el-checkbox>
                                    <el-checkbox label="倒序" value="DESC"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </li>
                        <li>
                            <em class="form-left">范围：</em>
                            <div class="form-right">
                                <el-date-picker
                                        v-model="firstConsumeTimeStampForm.minValue"
                                        :picker-options="startFirstConsumeTimeOptions"
                                        type="date"
                                        size="small"
                                        style="width: 150px"
                                        placeholder="选择开始时间">
                                </el-date-picker>
                                <span style="padding: 0 5px">至</span>
                                <el-date-picker
                                        v-model="firstConsumeTimeStampForm.maxValue"
                                        :picker-options="endFirstConsumeTimeOptions"
                                        type="date"
                                        size="small"
                                        style="width: 150px"
                                        placeholder="选择结束时间">
                                </el-date-picker>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!--/首次购买时间-->

            <!--最后购买时间-->
            <div class="yl-form-one">
                <div class="yl-form-one-title">最后购买时间</div>
                <div class="yl-form-one-content">
                    <ul class="yl-form">
                        <li>
                            <em class="form-left">排序：</em>
                            <div class="form-right">
                                <el-checkbox-group v-model="lastConsumeTimeStampForm.orderType" @change="lastConsumeTimeChange">
                                    <el-checkbox label="正序" value="ASC"></el-checkbox>
                                    <el-checkbox label="倒序" value="DESC"></el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </li>
                        <li>
                            <em class="form-left">范围：</em>
                            <div class="form-right">
                                <el-date-picker
                                        v-model="lastConsumeTimeStampForm.minValue"
                                        :picker-options="startLastConsumeTimeOptions"
                                        type="date"
                                        size="small"
                                        style="width: 150px"
                                        placeholder="选择开始时间">
                                </el-date-picker>
                                <span style="padding: 0 5px">至</span>
                                <el-date-picker
                                        v-model="lastConsumeTimeStampForm.maxValue"
                                        :picker-options="endLastConsumeTimeOptions"
                                        type="date"
                                        size="small"
                                        style="width: 150px"
                                        placeholder="选择结束时间">
                                </el-date-picker>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!--/最后购买时间-->
        </div>
    </div>
</template>

<script>

    import vuedraggable from 'vuedraggable';

    export default {
        name: 'test',

        components: {
            vuedraggable
        },

        data() {
            return {
                conditionQueries: [{
                    fieldName: "firstConsumeTimeStamp",
                    fieldNameText: "首次购买时间",
                    formData: {
                        orderType: [],
                        minValue: '',
                        maxValue: ''
                    }
                }, {
                    fieldName: "lastConsumeTimeStamp",
                    fieldNameText: "最后购买时间",
                    formData: {
                        orderType: [],
                        minValue: '',
                        maxValue: ''
                    }
                }, {
                    fieldName: "minConsumeAmount",
                    fieldNameText: "最小消费金额",
                    formData: {
                        orderType: [],
                        minValue: '',
                        maxValue: ''
                    }
                }, {
                    fieldName: "maxConsumeAmount",
                    fieldNameText: "最大消费金额",
                    formData: {
                        orderType: [],
                        minValue: '',
                        maxValue: ''
                    }
                }, {
                    fieldName: "totalBuyCount",
                    fieldNameText: "购买总数",
                    formData: {
                        orderType: [],
                        minValue: '',
                        maxValue: ''
                    }
                }],

                firstConsumeTimeStampShow: false,
                firstConsumeTimeStampForm: {
                    orderType: [],
                    minValue: '',
                    maxValue: ''
                },
                startFirstConsumeTimeOptions: {
                    disabledDate: (time) => {
                        if(this.firstConsumeTimeStampForm.maxValue){
                            return new Date(this.firstConsumeTimeStampForm.maxValue).getTime() < time.getTime()
                        }else{
                            return time.getTime() > Date.now()
                        }
                    }
                },
                endFirstConsumeTimeOptions:{
                    disabledDate: (time) => {
                        if(this.firstConsumeTimeStampForm.minValue){
                            return new Date(this.firstConsumeTimeStampForm.minValue).getTime() > time.getTime()
                        }else{
                            return time.getTime() > Date.now()
                        }
                    }
                },

                lastConsumeTimeStampShow: false,
                lastConsumeTimeStampForm: {
                    orderType: [],
                    minValue: '',
                    maxValue: ''
                },
                startLastConsumeTimeOptions: {
                    disabledDate: (time) => {
                        if(this.lastConsumeTimeStampForm.maxValue){
                            return new Date(this.lastConsumeTimeStampForm.maxValue).getTime() < time.getTime()
                        }else{
                            return time.getTime() > Date.now()
                        }
                    }
                },
                endLastConsumeTimeOptions:{
                    disabledDate: (time) => {
                        if(this.lastConsumeTimeStampForm.minValue){
                            return new Date(this.lastConsumeTimeStampForm.minValue).getTime() > time.getTime()
                        }else{
                            return time.getTime() > Date.now()
                        }
                    }
                },

                minConsumeAmountShow: false,
                minConsumeAmountForm: {},

                maxConsumeAmountShow: false,
                maxConsumeAmountForm: {},

                totalBuyCountShow: false,
                totalBuyCountForm: {},
            }
        },

        methods: {
            getForm() {
                console.log(this.conditionQueries);
            },
            checkboxGroup(form, val){
                if(form.orderType === []){
                    form.orderType.push(val[1]);
                }else {
                    form.orderType = [];
                    form.orderType.push(val[1]);
                }
            },
            firstConsumeTimeChange(val) {   //首次购买时间
                this.checkboxGroup(this.firstConsumeTimeStampForm, val);
            },
            lastConsumeTimeChange(val) {    //最后购买时间
                this.checkboxGroup(this.lastConsumeTimeStampForm, val);
            },
            minConsumeAmountChange(val) {   //最小消费金额
                this.checkboxGroup(this.minConsumeAmountForm, val);
            },
            maxConsumeAmounChange(val) {    //最大消费金额
                this.checkboxGroup(this.maxConsumeAmountForm, val);
            },
            totalBuyCountChange(val) {   //购买总数
                this.checkboxGroup(this.maxConsumeAmountForm, val);
            }
        }
    }
</script>

<style lang="less" type="text/less">
    .yl-form {
        &-one {
            width: 100%;
            margin-top: 10px;
            border: 1px solid #e5e5e5;

            &-title {
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                height: 32px;
                line-height: 32px;
                padding: 0 10px;
                background-color: #f9f9f9;
                border-bottom: 1px solid #e5e5e5;
            }

            &-content {
                padding: 10px 10px;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
            }
        }

        & > li {
            clear: both;

            & .form-left {
                display: block;
                float: left;
                padding: 3px 0;
                line-height: 32px;
            }

            & .form-right {
                overflow: hidden;
                line-height: 32px;
                padding: 3px 0;
            }
        }
    }
</style>