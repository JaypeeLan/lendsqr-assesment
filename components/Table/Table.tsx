"use client";
import { Data } from "@/types/data";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [visiblePopupRow, setVisiblePopupRow] = useState<string | null>(null);

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

  const handleViewDetails = (item: Data) => {
    localStorage.setItem("selectedUser", JSON.stringify(item));
    router.push(`/dashboard/users/${item._id}`);
  };

  return (
    <>
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
                        src="/icons/filter.svg"
                        alt="filter"
                        width={16}
                        height={35}
                      />
                    )}
                  </div>
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
                      <div className="options-popup">
                        <button onClick={() => handleViewDetails(item)}>
                          <img
                            src="/icons/view-details.svg"
                            alt="activate user"
                            width={14}
                            height={14}
                          />
                          <span>View details</span>
                        </button>
                        <button>
                          <img
                            src="/icons/blacklist-user.svg"
                            alt="activate user"
                            width={14}
                            height={14}
                          />
                          <span>Blacklist User</span>
                        </button>
                        <button>
                          <img
                            src="/icons/activate-icon.svg"
                            alt="activate user"
                            width={14}
                            height={14}
                          />
                          <span>Activate User</span>
                        </button>
                      </div>
                    </Popup>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* -------------- */}
      </div>

      <>
        <div className="table-footer">
          <div className="table-footer__view">
            <span>Showing</span>
            <button>
              <span>100</span>
              <img src="/icons/down.svg" alt="down" />
            </button>
            <span>out of 100</span>
          </div>
          {/* pagination */}
          <div className="table-footer__pagination">
            <div>
              <img src="/icons/prev.svg" alt="back" width={14} height={14} />
            </div>
            {/* hard coding this for now because the end point is not configured for pagination */}
            <p>1,2,3</p>

            <div>
              <img src="/icons/next.svg" alt="forward" width={14} height={14} />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Table;
