import { acep } from "../lib";
import { getListPodResultReponseSchemaValidate } from "./schema/acep";

test("edit:listPodEditResult", async () => {
  const response = await acep.GetListPod({
    product_id: '1426095758716702720'
  });
  const validateResult = getListPodResultReponseSchemaValidate(response);
  expect(validateResult).toBe(true);
});
