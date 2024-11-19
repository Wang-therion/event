import Vue from "vue"
import {Button, Form, FormItem, Alert, Input, Card, Message} from "element-ui"

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Alert)
Vue.use(Input)
Vue.use(Card)
// MARK:Message使用的是prototype进行使用
Vue.prototype.$message = Message