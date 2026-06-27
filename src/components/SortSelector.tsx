import { Button, Menu } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
     <Menu.Root>
            <Menu.Trigger asChild>
                <Button size={"md"} variant={"outline"}>
                    Order By : Relevance <BsChevronDown/>
                </Button>
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content>
                    <Menu.ItemGroup>
                       <Menu.Item value='Relevance'>Relevance</Menu.Item>
                       <Menu.Item value='Date Added'>Date Added</Menu.Item>
                       <Menu.Item value='Name'>Name</Menu.Item>
                       <Menu.Item value='Release Date'>Release Date</Menu.Item>
                       <Menu.Item value='Popularity'>Popularity</Menu.Item>
                       <Menu.Item value='Average Rating'>Average Rating</Menu.Item>
                    </Menu.ItemGroup>
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
  )
}

export default SortSelector