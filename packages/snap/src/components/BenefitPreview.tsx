import { Box, Card, Section, Button, Row, Link } from '@metamask/snaps-sdk/jsx';
import { Benefit } from '../interfaces/component_interfaces';
import { benefitSubCategoryMap } from './icons/benefit_sub_data';
import GasIcon from '../../images/gas.svg';
import GamingItems from './icons/icons-benefit-sub-cat/GamingItems.svg';
import ArtDeals from './icons/icons-benefit-sub-cat/ArtDeals.svg';
import DigitalEvents from './icons/icons-benefit-sub-cat/DigitalEvents.svg';
import CharityAndFundraising from './icons/icons-benefit-sub-cat/CharityAndFundraising.svg';
import Experience from './icons/icons-benefit-sub-cat/Experience.svg';
// import Licensing from './icons/icons-benefit-sub-cat/Licensing.svg';
import Lifestyle from './icons/icons-benefit-sub-cat/Lifestyle.svg';
import IRLEvents from './icons/icons-benefit-sub-cat/IRLEvents.svg';
import Collectibles from './icons/icons-benefit-sub-cat/Collectibles.svg';
import Networking from './icons/icons-benefit-sub-cat/NetworkingOpportunities.svg';
import Metaverse from './icons/icons-benefit-sub-cat/Metaverse.svg';

export default function BenefitPreview({ benefit }: { benefit: Benefit }) {
    const getIconForBenefit = (benefitName: string) => {
        return benefitSubCategoryMap[benefitName as keyof typeof benefitSubCategoryMap];
    };

    const maxLength = 18;
    const formatDate = (date: string | null) => {
        if (!date) return 'N/A';
        const d = new Date(date);
        return d.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit', 
            year: 'numeric'
        });
    };
    const title = benefit.longTitle.length > maxLength ? benefit.longTitle.substring(0, maxLength) + '...' : benefit.longTitle;
    const description = benefit.longDescription.length > maxLength ? benefit.longDescription.substring(0, maxLength) + '...' : benefit.longDescription;
    const link = benefit.url && (benefit.url.startsWith('https:') || benefit.url.startsWith('mailto:') || benefit.url.startsWith('metamask:')) ? benefit.url : 'https://degenz.finance';
    return (
        <Box alignment='start'>
            <Section alignment='start'>
                <Card
                    image={getIconForBenefit(benefit.categories?.[0]?.name ?? GasIcon)}
                    title={title}
                    description={description}
                    value={formatDate(benefit.validFrom)}
                    extra={formatDate(benefit.validTo)}
                />
            </Section>
            <Link href={link}> Learn more! </Link>
        </Box>
    );
}