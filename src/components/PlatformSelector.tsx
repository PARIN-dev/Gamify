import usePlatform, { type Platform } from '@/assets/hooks/usePlatform'
import { Button, Menu } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectPlatform : (platform : Platform) => void;
    selectPlatform : Platform | null;
}

const PlatformSelector = ({selectPlatform,onSelectPlatform}: Props) => {
    const {data , error} = usePlatform();
    if(error) return null;
  return (
    <Menu.Root>
        <Menu.Trigger asChild>
            <Button size={"md"} variant={"outline"}>
                {selectPlatform?.name || "Platforms"} <BsChevronDown/>
            </Button>
        </Menu.Trigger>
        <Menu.Positioner>
            <Menu.Content>
                <Menu.ItemGroup>
                   {data.map(platform => <Menu.Item key={platform.id} onClick={() => onSelectPlatform(platform)}  value={platform.name}>{platform.name}</Menu.Item>)}
                </Menu.ItemGroup>
            </Menu.Content>
        </Menu.Positioner>
    </Menu.Root>
  )
}

export default PlatformSelector