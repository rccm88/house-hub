import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import defaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" maxWidth="420px" p={{ base: "1", sm: "5" }} paddingTop="0px" justifyContent="flex-start" cursor="pointer">
            <Flex width={{ base: '100%', sm: '400px' }} height={260}>
                <Image src={coverPhoto ? coverPhoto.url : defaultImage} width={400} height={260} style={{ width: "100%", height: "100%" }} alt="house" />
            </Flex>
            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
                        <Text fontWeight="bold" fontSize="lg">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms} <FaBed />| {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
            </Box>
        </Flex>
    </Link>
);

export default Property;