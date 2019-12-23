import * as React from 'react'
import { Input } from 'antd'

import { getTargetValue } from '@Form/utils/common'
import { FieldComponentProps } from '@Form/index.d'

export default class extends React.PureComponent<FieldComponentProps> {
  onChange = (e: any) => {
    let value = getTargetValue(e)
    const { name } = this.props
    const { beforeChange, onChange } = this.props.props
    if (beforeChange) {
      value = beforeChange(name, value)
    }
    if (onChange) {
      onChange(name, value)
    }

    this.props.onChange(name, value)
  }

  render() {
    const {
      value, readOnly, type, props,
    } = this.props
    const autoComplete = props.autoComplete || 'off'
    return readOnly
      ? value
      : (
        <>
          <Input
            placeholder="请输入"
            {...props}
            type={type}
            value={value}
            onChange={this.onChange}
            autoComplete={autoComplete}
          />
        </>
      )
  }
}
