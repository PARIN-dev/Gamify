import usePlatform, { type Platform } from "@/hooks/usePlatform";
import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "motion/react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectPlatform: Platform | null;
}

const MenuItemMotion = motion.create(Menu.Item);

const PlatformSelector = ({ selectPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <motion.div initial={{y:-40}} animate={{y:0}} transition={{duration:0.8 , ease:"circInOut"}}>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button size={"md"} variant={"outline"}>
            {selectPlatform?.name || "Platforms"} <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.ItemGroup>
            {data?.results.map((platform) => (
              <MenuItemMotion
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.2 }}
                whileHover={{
                  backgroundColor: "white",
                  color: "black",
                  animationDuration: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                key={platform.id}
                onClick={() => onSelectPlatform(platform)}
                value={platform.name}
              >
                {platform.name}
              </MenuItemMotion>
            ))}
          </Menu.ItemGroup>
        </Menu.Positioner>
      </Menu.Root>
    </motion.div>
  );
};

export default PlatformSelector;
