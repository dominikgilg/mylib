import { NostoSession as NostoComponent } from "@nosto/nosto-react";
import { useShopQuery, gql, useSession, useShop } from "@shopify/hydrogen";
// import { createHash } from "crypto";

export default function NostoSession(props) {
  console.log("NOSTO SESSION!!!");

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

  // if (customerData?.id && storeDomain) {
  //   customerData.customerReference = createHash("sha256")
  //     .update(customerData.id + storeDomain)
  //     .digest("hex");
  // }

  return <NostoComponent customerData={customerData} type="NostoSession" />;
}
