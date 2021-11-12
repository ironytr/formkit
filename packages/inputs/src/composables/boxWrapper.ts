import { FormKitSchemaNode, FormKitSchemaComposable } from '@formkit/core'
import { extend } from '@formkit/utils'

const wrapper: FormKitSchemaComposable = (schema = {}, children = []) => ({
  if: '$slots.wrapper',
  then: '$slots.wrapper',
  else: extend(
    {
      $el: 'label',
      attrs: {
        class: '$classes.wrapper',
        'data-disabled': {
          if: '$options.length',
          then: undefined,
          else: '$attrs.disabled',
        },
      },
      children,
    },
    schema
  ) as FormKitSchemaNode,
})

export default wrapper