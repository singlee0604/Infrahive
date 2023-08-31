import React, { memo } from "react";
import WindowButton from "components/ui-component/extended/WindowButton";
import { FaFilePdf } from "react-icons/fa";
// import type { Message } from "../../types/agentTypes";
// import { MESSAGE_TYPE_GOAL, MESSAGE_TYPE_TASK } from "../../types/agentTypes";



const PDFButton = ({ name }: { name: string }) => {
  const downloadPDF = async () => {
    // const MyDocument = (await import("./MyDocument")).default as React.FC<{
    //   textSections: string[];
    // }>;

    // const blob = await pdf(<MyDocument textSections={textSections} />).toBlob();
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "my-document.pdf";
    // link.click();
    // URL.revokeObjectURL(url);
  };

  return (
    <>
      <WindowButton
        onClick={() => {
          downloadPDF().catch(console.error);
        }}
        icon={<FaFilePdf size={12} />}
        name={name}
      />
    </>
  );
};

export default memo(PDFButton);
