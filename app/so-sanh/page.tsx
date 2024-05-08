import { data } from "@/utils/exampleCompare";

export default async function ComparePage() {
  const uniqueGroupNames: any = {};

  // Populate uniqueGroupNames object
  data.forEach((item) => {
    item.attributes.forEach((attributeGroup) => {
      const { group_name, items } = attributeGroup;
      items.forEach((attribute) => {
        if (!uniqueGroupNames[group_name]) {
          uniqueGroupNames[group_name] = {};
        }
        if (!uniqueGroupNames[group_name][attribute.label]) {
          uniqueGroupNames[group_name][attribute.label] = [];
        }
        uniqueGroupNames[group_name][attribute.label].push(attribute.value);
      });
    });
  });

  // Hiển thị uniqueGroupNames
  console.log(uniqueGroupNames);

  return (
<div className="container">
  {Object.keys(uniqueGroupNames).map((groupName) => (
    <div key={groupName}>
      <span>{groupName}</span>
      <table>
        <tbody>
          {Object.keys(uniqueGroupNames[groupName]).map((label) => (
            <tr key={`${groupName}-${label}`}>
              <td>{label}</td>
              <td>{uniqueGroupNames[groupName][label][0]}</td>
              <td>{uniqueGroupNames[groupName][label][1] || ""}</td>
              <td>{uniqueGroupNames[groupName][label][2] || ""}</td>
              <td>{uniqueGroupNames[groupName][label][3] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ))}
</div>

  );
}
