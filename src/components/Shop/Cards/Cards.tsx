import React from "react";
//styles
import styles from "./Cards.module.scss";

interface CardsProps {
  data: any[];
  updateState(a: any): void;
  cartItems: any[];
}

export const Cards: React.FC<CardsProps> = (props) => {
  let arr: {
    name: string;
    id: number;
    description: string;
    pic: string;
    price: string;
    weight: string;
    quantaty: number;
  }[] = [];

  function addToCart(e: any) {
    let elId = e.target.getAttribute("data-el-id");
    let targetCI = props.cartItems.find((obj: any) => obj.id == elId);
    let targetD = props.data.find((el: { id: number }) => el.id == elId);

    if (JSON.stringify(targetCI) == undefined) {
      arr.push(targetD);
      arr.find((obj: any) => obj.id == elId)!.quantaty = 1;
      props.updateState([...arr, ...props.cartItems]);
    } else if (JSON.stringify(targetCI.name) === JSON.stringify(targetD.name)) {
      targetCI.quantaty = ++targetCI.quantaty;
      props.updateState([...arr, ...props.cartItems]);
    }
  }

  function increase(e: any) {
    let elId = e.target.getAttribute("data-el-id");
    let target = props.cartItems.find((obj: any) => obj.id == elId);
    target.quantaty = ++target.quantaty;
    props.updateState([...props.cartItems]);
  }

  function decrease(e: any) {
    let elId = e.target.getAttribute("data-el-id");
    let targetCI = props.cartItems.find((obj: any) => obj.id == elId);

    if (targetCI.quantaty > 1) {
      targetCI.quantaty = --targetCI.quantaty;
      props.updateState([...props.cartItems]);
    } else if (targetCI.quantaty <= 1) {
      let arr2: any[] = props.cartItems;
      let newArr = arr2.filter((f) => {
        return f !== props.data.find((el: { id: number }) => el.id == elId);
      });
      props.updateState(newArr);
    }
  }

  return (
    <div className={styles.block}>
      {props.data?.map((el: any, index) => (
        <div key={index} className={styles.wrapper}>
          <img alt="" src={el.pic} />
          <div className={styles.info}>
            <p className={styles.header}>{el.name}</p>
            <p>{el.description}</p>
            <div className={styles.priceNgramms}>
              <p>{el.price} €</p>
              <p>{el.weight} gr</p>
            </div>
            {props.cartItems.find((obj: any) => obj.id == el.id) ? (
              <div className={styles.handle}>
                <a data-el-id={el.id} onClick={(e) => increase(e)}>
                  +
                </a>
                <p>{el.quantaty}</p>
                <a data-el-id={el.id} onClick={(e) => decrease(e)}>
                  -
                </a>
              </div>
            ) : (
              <button data-el-id={el.id} onClick={(e) => addToCart(e)}>
                Add to cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
