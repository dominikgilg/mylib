import { default as NostoComponent } from "@nosto/nosto-react/src/components/Session/index.client";
import { useShopQuery, gql, useSession, useShop } from "@shopify/hydrogen";
// import { createHash } from "crypto";

export default function NostoServerTest(props) {
  console.log("NOSTO SESSION!!! :)");

  const { storeDomain } = useShop();
  const { customerAccessToken } = useSession();
  const QUERY = gql`
            query {
            customer(customerAccessToken: "${customerAccessToken}") {
              firstName
              lastName
              email
              acceptsMarketing
              id
            }
          }
          `;
  const {
    data: { customer: customerData },
  } = useShopQuery({
    query: QUERY,
  });

  console.log(customerData?.id);

  // if (customerData?.id && storeDomain) {
  //   customerData.customerReference = createHash("sha256")
  //     .update(customerData.id + storeDomain)
  //     .digest("hex");
  // }
  //   return <div>NOSTO SERVER TEST</div>;
  return <NostoComponent customerData={customerData} type="NostoSession" />;
}
