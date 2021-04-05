import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Stack direction="row" spacing="4" justify="space-between" align="center">
        <Box>
          <Text>Sandro Almeida</Text>
          <Text color="gray.300" fontSize="small">
            sandro.almeida.silva17@gmail.com
          </Text>
        </Box>

        <Avatar
          size="md"
          name="Sandro Almeida"
          src="https://avatars.githubusercontent.com/u/58606794?v=4"
        />
      </Stack>
    </Flex>
  )
}