import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Popupbody from './Popupbody';

export interface PopupProps {
  name: string;
  hero?: string;
  department: string;
  subcategory?: string;
  building_type?: string;
  link?: string;
  description?: string;
}

function Popup({
  name,
  hero,
  department,
  subcategory,
  building_type,
  link,
  description,
}: PopupProps) {
  return (
    <ChakraProvider>
      <Popupbody
        name={name}
        hero={hero}
        department={department}
        subcategory={subcategory}
        building_type={building_type}
        link={link}
        description={description}
      />
    </ChakraProvider>
  );
}

export default Popup;
