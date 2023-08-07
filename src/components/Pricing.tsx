import {
	Box,
	Flex,
	Text,
	Heading,
	Button,
	ChakraProvider,
	HStack,
	Icon,
	StackProps,
	Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";
import { MdCall } from "react-icons/md";
import "/src/App.css";

export const ListItem = (props: StackProps) => {
	const { children, ...rest } = props;
	return (
		<HStack as="li" spacing="20px" {...rest}>
			<Icon as={CheckIcon} w="22px" h="22px" />
			<Text>{children}</Text>
		</HStack>
	);
};

export function Pricing() {
	return (
		<ChakraProvider>
			<Box mx="6">
				<Box
					maxW="900px"
					margin="auto"
					bg="white"
					mt="-256px"
					borderRadius="12px"
					overflow="hidden"
					boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
				>
					<Flex direction={["column", "column", "row"]}>
						<Box bg="#0000ff80" p="60px">
							<Text fontSize="large" fontWeight="800">
								Premium PRO
							</Text>
							<Heading as="h1" size="xl" fontSize="80px" mt="16px">
								$0.99
							</Heading>
							<Text color="#171923" fontSize="18px" fontWeight="800" mt="8px">
								per month
							</Text>
							<Button
								colorScheme="blue"
								leftIcon={<MdCall />}
								size="lg"
								w="282px"
								mt="24px"
							>
								Get Started
							</Button>
						</Box>
						<Box p="60px" fontSize="18px" bg="hsl(32,61%,80%);">
							<Text textAlign="left">
								Access new features when you upgrade to Premium PRO.
							</Text>
							<Stack as="ul" spacing="20px" pt="24px">
								<ListItem>Unlimited Queries!</ListItem>
								<ListItem>Unlimited Foods!</ListItem>
								<ListItem>Unlimited Hippos!</ListItem>
								<ListItem>Unlimited Fun!</ListItem>
							</Stack>
						</Box>
					</Flex>
				</Box>
			</Box>
		</ChakraProvider>
	);
}
