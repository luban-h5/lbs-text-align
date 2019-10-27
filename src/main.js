/**
 * #!zh: 鲁班支持组件：文字对齐组件
 * #!en: Component that support Luban: for text align
 */
import Vue from 'vue'

Vue.config.productionTip = true

const Component = {
  name: 'lbp-text-align',
  render (h) {
    return (
      <div class="wrap">
        <a-radio-group value={this.value} onChange={value => {
          this.$emit('change', value)
          this.$emit('input', value)
        }} size="small">
          {
            this.textAlignTabs.map(item => (
              <a-tooltip effect="dark" placement="top" key={item.value} title={item.label}>
                <a-radio-button value={item.value}>
                  <i class={['fa', 'fa-align-' + item.value]} aria-hidden="true"></i>
                </a-radio-button>
              </a-tooltip>
            ))
          }
        </a-radio-group>
      </div>
    )
  },
  props: {
    value: {
      type: [String, Number]
    }
  },
  data: () => ({
    textAlignTabs: [{
      label: '左对齐',
      value: 'left'
    },
    {
      label: '居中对齐',
      value: 'center'
    },
    {
      label: '右对齐',
      value: 'right'
    }]
  })
}

const install = function (Vue) {
  Vue.component(Component.name, Component)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Component
}
