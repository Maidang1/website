import Cards from './components/card'
import { Button, useColorMode } from "@chakra-ui/react"

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
    <Cards />
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </>
  )
}
