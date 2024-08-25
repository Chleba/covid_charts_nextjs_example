import { Flex, Card, Spin } from 'antd';
import { useState, useEffect } from 'react';
import { Line, Column } from '@ant-design/plots';
import CardFooter from '@/app/ui/cardFooter';

const prepareData = (data: any[]) => {
  const newData = [];
  for(let i=0; i<data.length; i++) {
    newData.push({ 
      date: new Date(data[i].date).toLocaleDateString(), 
      value: data[i].value 
    }); 
  }
  return newData;
};

const ChartsContent = () => {

  const [gData, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/sql/get-data')
      .then((res) => res.json())
      .then((data) => {
        setData(prepareData(data.data));
        setLoading(false);
      })
  }, []);

  const chartConfig = {
    axis: {
      x: { title: 'Date' },
      y: { title: 'Deaths' }
    }
  };

  return (
    <Flex className='chartsContent' align='center' justify='center' gap='middle'>
      <Card title='Chart title'>
        { loading ? <Spin tip='Loading...' /> : undefined }
        { gData !== null ? (
          <Line
            {...chartConfig}
            height={340}
            data={gData}
            xField='date'
            yField='value'
          />
        ) : undefined }
        <CardFooter />
      </Card>

      <Card title='Chart title'>
        { loading ? <Spin tip='Loading...' /> : undefined }
        { gData !== null ? (
          <Column
            {...chartConfig}
            height={340}
            data={gData}
            xField='date'
            yField='value'
          />
        ) : undefined }
        <CardFooter />
      </Card>
    </Flex>
  );
}

export default ChartsContent;

