import { Button, Menu } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectSortOrders : (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({sortOrder ,onSelectSortOrders}: Props) => {
    const sortOrders = [
        {value : '' , label : 'Relevance'},
        {value : '-added' , label : 'Date Added'},
        {value : 'name' , label : 'Name'},
        {value : '-released' , label : 'Release Date'},
        {value : '-metacritic' , label : 'Popularity'},
        {value : '-rating' , label : 'Averate Rating'},
    ]
    const currentSortOrder = sortOrders.find(order => sortOrder===order.value);
  return (
     <Menu.Root>
            <Menu.Trigger asChild>
                <Button size={"md"} variant={"outline"}>
                    Order By : {currentSortOrder?.label || "Relevance"} <BsChevronDown/>
                </Button>
            </Menu.Trigger>
            <Menu.Positioner>
                <Menu.Content>
                    <Menu.ItemGroup>
                       {sortOrders.map(obj => <Menu.Item onClick={() => onSelectSortOrders(obj.value)} value={obj.value} key={obj.value}>{obj.label}</Menu.Item>)}
                    </Menu.ItemGroup>
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
  )
}

export default SortSelector