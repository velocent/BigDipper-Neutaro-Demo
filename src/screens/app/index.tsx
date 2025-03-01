import React from 'react';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@src/graphql/client';
import { chainConfig } from '@configs';
import { useWindowOrigin } from '@hooks';
import { Main } from './components';
import {
  useApp,
} from './hooks';
import {
  OPEN_GRAPH_SEO,
  TWITTER_SEO,
  ADDITIONAL_LINK_TAGS_SEO,
  ADDITIONAL_META_TAGS,
} from './utils';

function App(props: AppProps) {
  useApp();
  const { pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { t } = useTranslation();
  const { location } = useWindowOrigin();

  return (
    <>
      <DefaultSeo
        titleTemplate={`${chainConfig.title}`}
        title={"Neutaro Block Explorer"}
        description={"Neutaro Block Explorer"}
        openGraph={{
          title: `${chainConfig.title}`,
          description: "Neutaro Block Explorer",
          url: location,
          ...OPEN_GRAPH_SEO,
        }}
        twitter={TWITTER_SEO}
        additionalLinkTags={ADDITIONAL_LINK_TAGS_SEO}
        additionalMetaTags={ADDITIONAL_META_TAGS}
      />
      <ApolloProvider
        client={apolloClient}
      >
        <RecoilRoot>
          <Main {...props} />
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}

export default App;
