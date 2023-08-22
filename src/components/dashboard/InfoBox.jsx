import React from "react";
import { Tags , FolderDown , ThumbsUp, Users} from 'lucide-react';


function InfoBox({ text, price, bg , MyIcon }) {
  return (
    <div className={`h-36 ${bg}  w-1/5 rounded-2xl pt-14 pl-10  relative`}>
      <span className="absolute right-6 top-4">
        {MyIcon}
      </span>
      <h6 className="text-xs font-medium">{text}</h6>
      <p className="font-medium text-2xl mt-1">${price}</p>
    </div>
  );
}

export default InfoBox;
