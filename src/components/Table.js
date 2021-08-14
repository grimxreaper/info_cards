import React from "react";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    const fakeData = [];
    const tenants = ["Astrid", "Finn", "Abdollah", "Gael"];

    for (let i = 0; i < 4; i++) {
      fakeData.push({
        tenant: tenants[i],
        startDate: `Month ${i}`,
        endDate: "",
        leaseStatus: "",
        primaryContact: "",
      });
    }

    this.state = {
      itemData: fakeData,
    };
  }

  render() {
    const { itemData } = this.state;

    if (itemData.length === 0) {
      return null;
    }

    return (
      <div className="table-container">
        <div className="horizontal-scroll" id="horizontal-scroll">
          <table id="headertable" className="competitors-list">
            <thead>
              <tr>
                <th className="tenant">Tenant</th>
                <th className="startDate">Start Date</th>
                <th className="endDate">End Date</th>
                <th className="leaseStatus">Lease Status</th>
                <th className="primaryContact">Primary Contact</th>
              </tr>
            </thead>
          </table>

          <div className="vertical-scroll" id="vertical-scroll">
            <table>
              <tbody id="body">
                {itemData.map((item, index) => {
                  return <ItemListLine itemData={item} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

class ItemListLine extends React.Component {
  render() {
    const { itemData } = this.props;

    return (
      <tr>
        <td className="tenant">{itemData.tenant}</td>
        <td className="startDate">{itemData.startDate}</td>
        <td className="endDate">{itemData.endDate}</td>
        <td className="leaseStatus">{itemData.leaseStatus}</td>
        <td className="primaryContact">{itemData.primaryContact}</td>
      </tr>
    );
  }
}
export default ItemList;
