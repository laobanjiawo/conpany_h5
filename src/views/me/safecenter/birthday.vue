<template lang="pug">
f7-page
  f7-navbar(:innerClass=" 'navbar_of_' + $options.name " :title=" v.n + v.txt " back-link)
  .t_c.pd_20
    f7-icon._icon.v_t(:class=" '_safeicon' + v._icon + '_big' " f7="home" size="60")
  f7-list.mg_0(inline-labels no-hairlines-md ref="_form")
    template(v-if=" !v.t ")
      f7-list-input(label='生日', required validate type='datepicker', :placeholder=" user.birthday ",  placeholder="点击选择您的出生日期" :calendar-params="{openIn: 'customModal', header: true, footer: true, dateFormat: 'yyyy-mm-dd'}" @calendar:change=" form.d = $event[0] ")
  .h_40
  f7-button.mg_10(fill large @click=" __validateform(changNickName) ") 确认


</template>

<script>
import config from '@/config'
import api from '@/api'
export default {
  mixins: [config],
  components: {
  },
  name: 'safecenter_birthday',
  props: ['v'],
  data () {
    return {
      form: {
        d: '',
      },
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    changNickName () {
      this.$f7.input.validateInputs(this.$refs['_form'])
      this.$.get(api.setBirthday, {date: this.form.d._toDayString()}).then(this.__back)
    }
  }
}
</script>

<style lang="stylus">
@import '~src/css/var.stylus'
// 建议不添加scoped， 所有样式最多嵌套2层
</style>
