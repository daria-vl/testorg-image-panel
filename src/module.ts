import { Field, FieldType, PanelPlugin } from '@grafana/data';
import { PanelOptions } from './types';
import { ImagePanel } from './components';

/**
 * Panel Plugin
 */
export const plugin = new PanelPlugin<PanelOptions>(ImagePanel).setPanelOptions((builder) => {
  builder.addFieldNamePicker({
    path: 'name',
    name: 'Field name',
    description:
      'Name of the field with URL. If not specified, first field will be taken.',
    settings: {
      filter: (f: Field) => f.type === FieldType.string,
      noFieldsMessage: 'No strings fields found',
    },
  });

  return builder;
});
