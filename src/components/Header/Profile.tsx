import { Avatar, Box, Flex, Stack, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      <Stack direction="row" spacing="4" justify="space-between" align="center">
        {showProfileData && (
          <Box>
            <Text>Sandro Almeida</Text>
            <Text color="gray.300" fontSize="small">
              sandro.almeida.silva17@gmail.com
            </Text>
          </Box>
        )}

        <Avatar
          size="md"
          name="Sandro Almeida"
          src="https://avatars.githubusercontent.com/u/58606794?v=4"
        />
      </Stack>
    </Flex>
  )
}
