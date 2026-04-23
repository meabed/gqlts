import { Heading, Stack, Text } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';
import React from 'react';

export function Hero({
  bullet,
  heading = 'Gqlts',
  subheading,
  ...props
}: StackProps & {
  bullet?: React.ReactNode;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
}) {
  return (
    <Stack align='center' gap='3' px='6' textAlign='center' {...props}>
      {bullet && (
        <Text color='green.400' fontWeight='semibold'>
          {bullet}
        </Text>
      )}
      <Heading as='h1' size='3xl'>
        {heading}
      </Heading>
      {subheading && (
        <Text color='gray.500' maxW='720px'>
          {subheading}
        </Text>
      )}
    </Stack>
  );
}

export function PageContainer({ children, ...props }: StackProps) {
  return (
    <Stack gap='5' mx='auto' px='6' width='100%' maxW='960px' {...props}>
      {children}
    </Stack>
  );
}

export function SectionTitle({ heading }: { heading: React.ReactNode }) {
  return (
    <Heading as='h2' size='xl'>
      {heading}
    </Heading>
  );
}
