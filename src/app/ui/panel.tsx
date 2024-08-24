import { Flex, Button } from 'antd';
import { DownloadOutlined, AlignLeftOutlined, WifiOutlined } from '@ant-design/icons';

const Panel = () => {
  return (
    <Flex align='center' flex={1} className='panel'>
      <Flex>
        <h2>Page title</h2>
      </Flex>
      <Flex className='panelRight' flex={1} gap='small'>
        <Button size='middle' icon={<DownloadOutlined />}>Export to PDF</Button>
        <Button size='middle' icon={<AlignLeftOutlined />}>Notes<span>(3)</span></Button>
        <Button size='middle' icon={<WifiOutlined />}>Filter</Button>
      </Flex>
    </Flex>
  );
};

export default Panel;

