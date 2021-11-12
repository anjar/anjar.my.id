/* eslint-disable import/prefer-default-export */
import SiteConfig from 'site.config';
import type { MetaDataObject } from 'types';

export const getSiteMetaData = ():MetaDataObject => SiteConfig.siteMetadata;
export default getSiteMetaData;
