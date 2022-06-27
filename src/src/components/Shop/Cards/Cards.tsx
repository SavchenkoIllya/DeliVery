//Types
import { Product, Props } from "../../../Types/types";
//styles
import styles from "./Cards.module.scss";

export const Cards: React.FC<Props> = ({ data, updateState, cartItems }) => {
  const addToCart = (id: number) => {
    let arr: Product = [];
    let targetCI = cartItems!.find((obj: any) => obj.id == id);
    let targetD = data?.find((el: { id: number }) => el.id == id);

    if (JSON.stringify(targetCI) == undefined) {
      arr.push(targetD!);
      arr.find((obj: any) => obj.id == id)!.quantaty = 1;
      updateState!([...arr, ...cartItems!]);
      localStorage.setItem("cart", JSON.stringify([...arr, ...cartItems!]));
    } else if (
      JSON.stringify(targetCI?.name) === JSON.stringify(targetD?.name)
    ) {
      targetCI!.quantaty = ++targetCI!.quantaty;
      updateState!([...arr, ...cartItems!]);
      localStorage.setItem("cart", JSON.stringify([...arr, ...cartItems!]));
    }
  };

  const increase = (id: number) => {
    let target = cartItems!.find((obj: any) => (obj.id = id));
    target!.quantaty = ++target!.quantaty;
    updateState!([...cartItems!]);
    localStorage.setItem("cart", JSON.stringify([...cartItems!]));
  };

  const decrease = (id: number) => {
    let targetCI = cartItems!.find((obj: any) => obj.id == id);
    if (targetCI!.quantaty > 1) {
      targetCI!.quantaty = --targetCI!.quantaty;
      updateState!([...cartItems!]);
      localStorage.setItem("cart", JSON.stringify([...cartItems!]));
    } else if (targetCI!.quantaty <= 1) {
      updateState!(cartItems!.filter((item) => item.id !== id));
      let oldCart = JSON.parse(localStorage.getItem("cart") || "[]");
      localStorage.setItem(
        "cart",
        JSON.stringify(oldCart.filter((item: { id: number }) => item.id !== id))
      );
    }
  };

  return (
    <div className={styles.block}>
      {data?.map((el: any, index) => {
        const { name, price, weight, id, pic, description } = el;
        return (
          <div key={index} className={styles.wrapper}>
            <img alt={name} src={pic} />
            <div className={styles.info}>
              <p className={styles.header}>{name}</p>
              <p>{description}</p>
              <div className={styles.priceNgramms}>
                <p>{price} €</p>
                <p>{weight} gr</p>
              </div>
              {cartItems!.find((obj: any) => obj.id == id) ? (
                <div className={styles.handle}>
                  <a onClick={() => increase(id)}>+</a>
                  <p>{cartItems!.find((obj: any) => obj.id == id)?.quantaty}</p>
                  <a onClick={() => decrease(id)}>-</a>
                </div>
              ) : (
                <button onClick={() => addToCart(id)}>Add to cart</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
