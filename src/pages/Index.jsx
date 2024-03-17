import React from "react";
import { Box, Heading, Text, Flex, Spacer, Input, Button, Select, Table, Thead, Tbody, Tr, Th, Td, Image } from "@chakra-ui/react";
import { FaChartLine, FaWallet, FaCog } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Flex align="center" mb={8}>
        <Image src="https://images.unsplash.com/photo-1659177137555-2f1ba453f70c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3JleCUyMHRyYWRpbmclMjBsb2dvfGVufDB8fHx8MTcxMDcxMjk4OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" w={12} h={12} mr={4} />
        <Heading size="xl">MT5外汇交易平台</Heading>
        <Spacer />
        <Flex>
          <Box mr={4}>
            <FaWallet />
            <Text>$10,000</Text>
          </Box>
          <FaCog />
        </Flex>
      </Flex>

      <Flex mb={8}>
        <Input placeholder="搜索货币对..." mr={4} />
        <Select placeholder="选择市场" w={48}>
          <option>外汇</option>
          <option>加密货币</option>
          <option>股票</option>
        </Select>
        <Spacer />
        <Button colorScheme="blue" leftIcon={<FaChartLine />}>
          技术分析
        </Button>
      </Flex>

      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>货币对</Th>
              <Th>买入价</Th>
              <Th>卖出价</Th>
              <Th>涨跌幅</Th>
              <Th>操作</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>EUR/USD</Td>
              <Td>1.22045</Td>
              <Td>1.22047</Td>
              <Td>+0.02%</Td>
              <Td>
                <Button size="sm" colorScheme="green" mr={2}>
                  买入
                </Button>
                <Button size="sm" colorScheme="red">
                  卖出
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>GBP/USD</Td>
              <Td>1.41192</Td>
              <Td>1.41195</Td>
              <Td>-0.01%</Td>
              <Td>
                <Button size="sm" colorScheme="green" mr={2}>
                  买入
                </Button>
                <Button size="sm" colorScheme="red">
                  卖出
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>USD/JPY</Td>
              <Td>109.521</Td>
              <Td>109.524</Td>
              <Td>+0.05%</Td>
              <Td>
                <Button size="sm" colorScheme="green" mr={2}>
                  买入
                </Button>
                <Button size="sm" colorScheme="red">
                  卖出
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Index;
