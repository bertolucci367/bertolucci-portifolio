/* eslint-disable */

import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';

export default function StatCards({ title, stat, isClient = true, children }) {
  return (
    <Stat px={{ base: 4, md: 'full' }} py={'12'} shadow={'xl'} rounded={'lg'}>
      {isClient ? (
        children
      ) : (
        <>
          <StatLabel textAlign="center" fontSize={'5xl'} fontWeight={'medium'}>
            {stat}
          </StatLabel>
          <StatNumber fontWeight={'medium'} textAlign="center" isTruncated>
            {title}
          </StatNumber>
        </>
      )}
    </Stat>
  );
}
