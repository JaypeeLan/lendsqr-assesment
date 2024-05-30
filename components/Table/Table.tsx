"use client";
import { Data } from "@/types/data";
import Link from "next/link";
import { useState } from "react";
import { Popup } from "..";

interface TableProps {
  data: Data[];
  headers: Array<{
    label: string;
    icon?: string;
  }>;
  onIconClick: (headerLabel: string) => void;
  onActionClick: (item: Data) => void;
}

const Table = ({ data, headers, onIconClick, onActionClick }: TableProps) => {
  const [visiblePopupRow, setVisiblePopupRow] = useState<string | null>(null);
  const [visibleFilterHeader, setVisibleFilterHeader] = useState<string | null>(
    null
  );

  const getHeaderValue = (item: Data, headerLabel: string) => {
    const propertyName = headerLabel.replace(/\s+/g, "_").toLowerCase();

    const normalizeObject = (obj: any) =>
      Object.keys(obj).reduce((acc, key) => {
        acc[key.toLowerCase()] = obj[key];
        return acc;
      }, {} as Record<string, any>);

    const normalizedPersonalInfo = normalizeObject(item.Personal_information);
    const normalizedEducationAndEmployment = normalizeObject(
      item.Education_and_Employment
    );
    const normalizedSocials = normalizeObject(item.Socials);
    const normalizedGuarantor = normalizeObject(item.Guarantor[0]);

    const searchNormalizedObject = (obj: Record<string, any>, key: string) => {
      // First check for exact match
      if (obj.hasOwnProperty(key)) {
        return obj[key];
      }
      // If no exact match found, check for partial matches
      const foundKey = Object.keys(obj).find((k) => k.includes(key));
      return foundKey ? obj[foundKey] : "";
    };

    return (
      searchNormalizedObject(normalizedPersonalInfo, propertyName) ||
      searchNormalizedObject(normalizedEducationAndEmployment, propertyName) ||
      searchNormalizedObject(normalizedSocials, propertyName) ||
      searchNormalizedObject(normalizedGuarantor, propertyName) ||
      ""
    );
  };

  const showActionMenu = (item: Data) => {
    setVisiblePopupRow(item._id);
    onActionClick(item);
  };

  const showFilterPopup = (headerLabel: string) => {
    setVisibleFilterHeader(headerLabel);
    onIconClick(headerLabel);
  };

  const handleViewDetails = (item: Data) => {
    localStorage.setItem("selectedUser", JSON.stringify(item));
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className=" action-btn">
                <div className="custom-table__header">
                  <p> {header.label}</p>

                  {header.icon && (
                    <img
                      className="action-btn__icon"
                      onClick={() => showFilterPopup(header.label)}
                      src="/icons/filter.svg"
                      alt="filter"
                      width={16}
                      height={35}
                    />
                  )}
                </div>
                {visibleFilterHeader === header.label && (
                  <Popup
                    className="filter-popup"
                    closeOnClickOutside={true}
                    isVisible={true}
                    setIsVisible={setVisibleFilterHeader}
                  >
                    <div className="popup-content">
                      <h2>Filter Options</h2>
                      <p>Options for filtering {header.label}</p>
                      <button onClick={() => setVisibleFilterHeader(null)}>
                        Close
                      </button>
                    </div>
                  </Popup>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {headers.map((header, index) => (
                <td key={index}>{getHeaderValue(item, header.label)}</td>
              ))}
              <td className="action-btn">
                <button onClick={() => showActionMenu(item)}>
                  <img src="/icons/options.svg" alt="options" />
                </button>
                {visiblePopupRow === item._id && (
                  <Popup
                    className="actionIcon-popup"
                    closeOnClickOutside={true}
                    isVisible={true}
                    setIsVisible={setVisiblePopupRow}
                  >
                    <div className="popup-content">
                      <Link
                        href={`/dashboard/users/${item._id}`}
                        onClick={() => handleViewDetails(item)}
                      >
                        View details
                      </Link>
                      <h2>Hello, I'm a Popup!</h2>
                      <p>This is some content inside the popup.</p>
                      <button onClick={() => setVisiblePopupRow(null)}>
                        Close
                      </button>
                    </div>
                  </Popup>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
