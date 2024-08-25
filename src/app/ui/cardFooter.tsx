
import Image from 'next/image';
import { Avatar, Flex } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const CardFooter = () => {
  return (
    <Flex className='cardFooter'>
      <Flex align='center' flex={1}>
        <Avatar src={<Image alt='user' src="/chleba.jpg" width={120} height={100} />} />
      </Flex>

      <Flex className="panelRight" flex={1} align='center'>
        <span>3<MessageOutlined /></span>
      </Flex>
    </Flex>
  );
};

export default CardFooter;

