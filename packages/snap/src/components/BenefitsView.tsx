import { Benefit } from "../interfaces/component_interfaces";
import { Box, Text, Heading } from '@metamask/snaps-sdk/jsx';
import BenefitPreview from "./BenefitPreview";

export default function BenefitsView({benefits, accounts}: {
  benefits: Record<string, Benefit[]> | number, 
  accounts: string[]
}) {
      
      if (benefits === -1) {
        return (
              <Box>
                <Text>Error fetching benefits</Text>
              </Box>
            )
      }
      
      return (
            <Box>
              <Heading>{`Your Benefits - ${accounts.length} Wallets`}</Heading>
              {Object.entries(benefits).map(([collectionName, collectionBenefits]) => (
                <Box>
                  <Heading>{`${collectionName} - ${collectionBenefits.length} Benefits`}</Heading>
                  {collectionBenefits.map((benefit: Benefit) => (
                    <BenefitPreview benefit={benefit} />
                  ))}
                </Box>
              ))}
            </Box>
        )
}