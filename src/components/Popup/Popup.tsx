import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Image,
  ChakraProvider,
} from '@chakra-ui/react';

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
      <Box bg='white' width={'250px'}>
        <Flex direction={'column'} padding='6px'>
          {hero ? (
            <Box marginBottom={'10px'}>
              <Image
                boxSize={'100%'}
                src={`${hero}`}
                alt={name ? name : 'Akseizer Design Group'}
              />
            </Box>
          ) : (
            ''
          )}
          <Flex>
            <Text color={'gray.500'} fontSize={'xs'} fontStyle={'italic'}>
              {department ? department : ''}
              {subcategory ? ', ' + subcategory : ''}
              {building_type ? ', ' + building_type : ''}
            </Text>
          </Flex>
          <Box>
            <Heading as='h4' size={'md'}>
              {name}
            </Heading>
          </Box>
          <Box marginBottom={'20px'}>
            <Text noOfLines={3} lineHeight='short'>
              {description ? description : ''}
            </Text>
          </Box>
          <Box>
            {link ? (
              <HStack spacing={'4'}>
                <Tag
                  size={'md'}
                  key={'md'}
                  variant='solid'
                  color={'white'}
                  bg={'blackAlpha.800'}
                  py={'6px'}
                  px={'12px'}
                  borderRadius='4px'
                  css={{ cursor: 'pointer' }}
                >
                  <TagLabel fontSize={'sm'}>
                    <a href={`${link}`} target='_blank' rel='noreferrer'>
                      View Project
                    </a>
                  </TagLabel>
                </Tag>
              </HStack>
            ) : (
              ''
            )}
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Popup;
