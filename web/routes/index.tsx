import { AutoTable } from "@gadgetinc/react/auto/polaris";
import {
  Banner,
  BlockStack,
  Box,
  Card,
  InlineStack,
  Layout,
  Link,
  Page,
  Text,
} from "@shopify/polaris";
import { api } from "../api";

export const IndexPage = () => {
  return (
    <Page
      title="Promotional Banner Dashboard"
      subtitle="Manage and monitor your promotional banner settings"
    >
      <Layout>
        <Layout.Section>
          <Banner tone="success">
            <Text variant="bodyMd" as="p">
              🎉 Your promotional banner app is successfully installed and running!
            </Text>
          </Banner>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h2">
                Banner Configuration
              </Text>
              <BlockStack gap="200">
                <InlineStack gap="200" align="space-between">
                  <Text variant="bodyMd" as="p" fontWeight="medium">
                    Banner Status:
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Active
                  </Text>
                </InlineStack>
                <InlineStack gap="200" align="space-between">
                  <Text variant="bodyMd" as="p" fontWeight="medium">
                    Banner Message:
                  </Text>
                  <Text variant="bodyMd" as="p">
                    🎉 Free Shipping on All Orders! 🎉
                  </Text>
                </InlineStack>
                <InlineStack gap="200" align="space-between">
                  <Text variant="bodyMd" as="p" fontWeight="medium">
                    Placement:
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Top of all pages
                  </Text>
                </InlineStack>
                <InlineStack gap="200" align="space-between">
                  <Text variant="bodyMd" as="p" fontWeight="medium">
                    Style:
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Eye-catching promotional style
                  </Text>
                </InlineStack>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card padding="0">
            <Box padding="400">
              <Text variant="headingMd" as="h2">
                Shop Information
              </Text>
            </Box>
            <AutoTable
              //@ts-ignore
              model={api.shopifyShop}
              columns={["name", "countryName", "currency", "customerEmail"]}
            />
            <Box padding="400">
              <Text variant="bodyMd" as="p">
                Shop records fetched from:{" "}
                <Link
                  url={`/edit/model/DataModel-Shopify-Shop/data`}
                  target="_blank"
                  removeUnderline
                >
                  api/models/shopifyShop/data
                </Link>
              </Text>
            </Box>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h2">
                App Information
              </Text>
              <BlockStack gap="200">
                <InlineStack gap="200" align="space-between">
                  <Text variant="bodyMd" as="p" fontWeight="medium">
                    App Name:
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Promotional Banner
                  </Text>
                </InlineStack>
                <InlineStack gap="200" align="space-between">
                  <Text variant="bodyMd" as="p" fontWeight="medium">
                    Version:
                  </Text>
                  <Text variant="bodyMd" as="p">
                    1.0.0
                  </Text>
                </InlineStack>
                <InlineStack gap="200" align="space-between">
                  <Text variant="bodyMd" as="p" fontWeight="medium">
                    Status:
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Active
                  </Text>
                </InlineStack>
                <InlineStack gap="200" align="space-between">
                  <Text variant="bodyMd" as="p" fontWeight="medium">
                    Theme Extension:
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Enabled
                  </Text>
                </InlineStack>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};
