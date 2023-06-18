import { HStack, Icon, Text, StackProps, Box } from "@chakra-ui/react";
import { MoneyBackGuaranteeIcon, OverOnceBillionFoodsIcon, ShareWithFacebookIcon } from "../icons/Icons";

interface FeatureProps extends StackProps {
    icon: ElementType;
}

function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing='24px'>
            <Icon as={icon} boxSize='48px'/>
            <Text textAlign='left' fontSize='18px' fontWeight='700'>
                {children}
            </Text>
        </HStack>
    );
}

export function Features() {
    return (
        <Box maxWidth='1024px' m='auto' pt='60px' pb='32x'>
        <HStack px='48px' spacing='20px'>
            <Feature icon={OverOnceBillionFoodsIcon}>
                Over 1 billion Foods!
            </Feature>
            <Feature icon={ShareWithFacebookIcon}>
                Share with Facebook!
            </Feature>
            <Feature icon={MoneyBackGuaranteeIcon}>
                30-day money-back guarantee!
            </Feature>
        </HStack>
        </Box>
    )
}