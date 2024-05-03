import BagItem from "../components/BagItem.jsx";
import { useSelector } from "react-redux";
import EmptyBag from "../components/emptyBag.jsx";
import Footer from "../components/Footer.jsx";
import BagHeader from "../components/bagHEADER.jsx";
import BagContent from "../components/BagContent.jsx";
import { useState } from "react";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  const showBagContent = bagItems.length > 0;

  return (
    <main>
      <BagHeader></BagHeader>

      {showBagContent ? <BagContent /> : <EmptyBag></EmptyBag>}
      <div>
        <>
          {finalItems.map((item) => (
            <BagItem item={item} />
          ))}
        </>
      </div>
    </main>
  );
};

export default Bag;
