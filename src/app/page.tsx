'use client'

import Title from '@/app/ui/title';
import ChartsContent from '@/app/ui/contentCharts';
import Panel from '@/app/ui/panel';

import { Flex } from 'antd';
import { Header, Content } from 'antd/es/layout/layout';

export default function Home() {
  return (
    <Flex className='main' gap='none' vertical wrap>
      <Header className='header'>
        <Title />
      </Header>
      <Content className='content'>
        <Panel />
        <ChartsContent />
      </Content>
    </Flex>
  );
}

