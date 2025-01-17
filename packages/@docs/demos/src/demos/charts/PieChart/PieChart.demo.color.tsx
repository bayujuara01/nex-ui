import { PieChart } from '@nex-ui/charts';
import { MantineDemo } from '@nex-uix/demo';

const code = (props: any) => `
import { PieChart } from '@nex-ui/charts';

function Demo() {
  return (
    <PieChart
      data={[
        { name: 'USA', value: 400, color: '${props.color}' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <PieChart
      {...props}
      data={[
        { name: 'USA', value: 400, color: props.color },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}

export const color: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: 'color', prop: 'color', initialValue: 'blue', libraryValue: '__' }],
};
