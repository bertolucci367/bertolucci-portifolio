import { Box, Flex } from '@chakra-ui/react'

const Topbar = () => {
  const bgColor = '#fff'
  const color = '#1A202C'
  const colorBorder = '#ddd'
  return (
    <Flex
      bgColor={bgColor}
      color={color}
      borderBottom={`1px solid ${colorBorder}`}
      w="full"
      position="fixed"
      zIndex={99999}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        margin="0 auto"
        w="full"
        h="60px"
        px={[4, 8]}
      >
        <Box>Teste</Box>
        <Box>Login</Box>
      </Flex>
    </Flex>
  )
}

export default Topbar
